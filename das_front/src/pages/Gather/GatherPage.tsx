import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackDeco from "../../Assets/img/BackDeco.svg";
import GatherCard from "../../components/PageCard/GatherCard";
import PageNation from "../../components/PageNation/PageNation";
import { AllFeed } from "../../interfaces/Feed";
import feed from "../../Utils/api/Club/Feed";

type FeedFilter = "ViewOrder" | "LatestOrder";

const GatherPage = () => {
  const [page, setPage] = useState(0);
  const [select, setSelect] = useState<FeedFilter>("LatestOrder");
  const { data } = useQuery(["allFeed"], feed.getFeedLatestAll);

  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeco} alt="배경이미지" />
        <Display>
          <Title>모집 공고</Title>
          <Title></Title>
        </Display>
        <Display>
          <Content>
            동아리에서 부원을 모집하고 있습니다!
            <br />
            동아리에 지원하고 합격하세요!
          </Content>
          <div style={{ width: 280 }}></div>
        </Display>
      </Wrapper>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", height: 60, width: 1000 }}>
        <div style={{ fontWeight: 400 }}>모집글</div>
        <Select>
          <option onClick={() => setSelect("LatestOrder")}>최신순</option>
          <option onClick={() => setSelect("ViewOrder")}>조회수순</option>
        </Select>
      </div>
      <CardWrapper>
        {data?.data.feed_list.slice(page * 4, page * 4 + 4).map((res: AllFeed) => {
          const { created_at, feed_id, title, views, writer, major, end_at } = res;
          return (
            <Link key={feed_id} to={`/gather/${feed_id}`} state={{ data: feed_id }}>
              <GatherCard
                major={major}
                created_at={created_at}
                feed_id={feed_id}
                title={title}
                views={views}
                writer={writer}
                end_at={end_at}
              />
            </Link>
          );
        })}
      </CardWrapper>
      <div style={{ display: "flex", justifyContent: "end", width: 1000 }}>
        <Link to="/gather/create" state={{ type: null }}>
          <WriteButton>글 작성하기</WriteButton>
        </Link>
      </div>
      <PageNation page={page} setPage={setPage} data={data?.data.feed_list} maxNumber={4} />
      <div style={{ marginBottom: 200 }}></div>
    </Container>
  );
};

export default GatherPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 40vh;
  background-color: ${(props) => props.theme.MainBlack};
  overflow: hidden;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.White};
  margin-top: 80px;
  width: 345px;
  text-align: left;
`;

const Content = styled.div`
  margin-top: 10px;
  font-size: 18px;
  width: 400px;
  color: ${(props) => props.theme.White};
  font-weight: 340;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 30px;
  min-height: 920px;
`;

const Select = styled.select`
  width: 130px;
  height: 35px;
  background: url("https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png") calc(100% - 5px)
    center no-repeat;
  background-size: 20px;
  padding: 5px 30px 5px 10px;
  border-radius: 4px;
  outline: 0 none;
  border: 1px solid #b8b8b8;
`;

const WriteButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 23px;
  width: 120px;
  height: 36px;
  background: #ff4385;
  box-shadow: 0px 0px 4px rgb(253, 48, 120);
  border-radius: 8px;
  color: white;
  font-weight: 500;
  margin: 40px 0;
  cursor: pointer;
`;
