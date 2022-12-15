import styled from "styled-components";
import BackDeoco from "../../Assets/img/BackDeco.svg";
import ExampleImg from "../../Assets/img/ExampleImg.png";
import ViewIcon from "../../Assets/img/ViewIcon.svg";
import MessageText from "../../Assets/img/messageText.svg";
import CommentInput from "../../components/Comment/CommentInput";
import Comments from "../../components/Comment/Comments";
import { useQuery } from "@tanstack/react-query";
import feed from "../../Utils/api/Sign/Feed";
import { useLocation } from "react-router-dom";
import { FeedDetail } from "../../interfaces/Feed";
import { Deadline } from "../../Utils/Function/Timer";

const GatherDetail = () => {
  const location = useLocation();
  const [, , url] = location.pathname.split("/");
  const { data } = useQuery(["feed", url], () => feed.getFeedDetail(parseInt(url)));

  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeoco} alt="배경 이미지" />
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
      <div style={{ width: "73vw", marginTop: 40 }}>
        <div style={{ display: "flex" }}>
          <Img src={ExampleImg} alt="" />
          <TitleWrapper>
            <SFont>
              작성자: <SFont style={{ color: "#FD3078" }}>{data?.data.writer.name}</SFont>
              <SFont style={{ marginLeft: 50 }}>작성일 : 20XX-XX-XX</SFont>
            </SFont>
            <GatherTitle>{data?.data.title}</GatherTitle>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={ViewIcon} alt="" />
              <SFont style={{ color: "#000000", margin: "0 5px" }}>{data?.data.views}</SFont>
              <SFont>viewed</SFont>
            </div>
            <div style={{ display: "flex", marginTop: 30, alignItems: "center" }}>
              <MajorFont>지원가능 분야 :</MajorFont>
              <MajorFont style={{ marginLeft: 5, color: "#000000" }}>{data?.data.major}</MajorFont>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <MajorFont>마감일 :</MajorFont>
              <MajorFont style={{ marginLeft: 5, color: "#000000" }}>D - {Deadline(data?.data.end_at)}</MajorFont>
            </div>
          </TitleWrapper>
        </div>
        <SFont>모집 내용 :</SFont>
        <TextArea>{data?.data.content}</TextArea>
        <SFont>URL :</SFont>
        <URL href={data?.data.das_url} target="_blank">
          {data?.data.das_url}
        </URL>
        <Line></Line>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
          <img src={MessageText} alt="" />
          <SFont style={{ color: "#000000", marginLeft: 6 }}>댓글</SFont>
        </div>
        <CommentInput />
        <Comments></Comments>
      </div>
    </Container>
  );
};

export default GatherDetail;

const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 40vh;
  background-color: ${(props) => props.theme.MainBlack};
  overflow: hidden;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.White};
  margin-top: 80px;
  width: 345px;
  text-align: left;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;

const Content = styled.div`
  margin-top: 10px;
  font-size: 18px;
  width: 400px;
  color: ${(props) => props.theme.White};
  font-weight: 340;
`;

const Img = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 10px;
`;

const TitleWrapper = styled.div`
  margin-left: 50px;
  margin-top: 10px;
  height: 200px;
`;

const SFont = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  color: #7f7f7f;
`;

const GatherTitle = styled.div`
  font-size: 38px;
  font-weight: 700;
  margin-top: 20px;
`;

const MajorFont = styled.div`
  color: #7f7f7f;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const URL = styled.a`
  color: #930aff;
  text-decoration-line: underline;
  font-weight: 320;
  font-size: 16px;
`;

const TextArea = styled.div`
  font-weight: 400;
  margin-bottom: 200;
  border: 0;
  outline: 0;
  resize: none;
  width: 73vw;
  min-height: 200px;
  margin-bottom: 40px;
  margin-top: 5px;
  font-size: 18px;
`;

const Line = styled.div`
  border: 1px solid #cccccc;
  margin: 20px 0px;
`;
