import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import useInput from "../Hooks/useInput";
import { AllClub } from "../interfaces/Club";
import { SearchAtom } from "../Store/atoms";
import club from "../Utils/api/Club/Club";
import ClubCard from "../components/PageCard/PageCard";
import { IClubType } from "../interfaces/Enums";
import feed from "../Utils/api/Club/Feed";
import GatherCard from "../components/PageCard/GatherCard";
import { AllFeed } from "../interfaces/Feed";

interface IFilter {
  grade: number;
  classNum: number;
  clubType: IClubType;
  gatherType: string;
}

const SearchPage = () => {
  const [search, onChangeSearch, setSearch] = useInput();
  const [filter, setFilter] = useState<IFilter>({
    grade: 1,
    classNum: 1,
    clubType: "MAIN",
    gatherType: "",
  });
  const { grade, classNum, clubType, gatherType } = filter;
  const searchAtom = useRecoilValue(SearchAtom);
  useEffect(() => {
    setSearch(searchAtom);
  }, []);

  const onChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const { data: clubList } = useQuery(["user"], club.getClubAll);
  const { data: gatherList } = useQuery(["gather"], feed.getFeedLatestAll);

  console.log(gatherList);

  return (
    <Container>
      <Wrapper>
        <Input onChange={onChangeSearch} value={search} placeholder="검색어를 입력하세요." />
      </Wrapper>
      <div style={{ display: "flex", gap: "10px", width: "73vw", marginTop: 40 }}>
        <Select name="grade" onChange={onChangeFilter}>
          <option>전체</option>
          <option>1학년</option>
          <option>2학년</option>
          <option>3학년</option>
        </Select>
        <Select name="classNum" onChange={onChangeFilter}>
          <option>전체</option>
          <option>1반</option>
          <option>2반</option>
          <option>3반</option>
          <option>4반</option>
        </Select>
        <Select name="clubType" onChange={onChangeFilter}>
          <option>전체</option>
          <option>전공</option>
          <option>창체</option>
          <option>자율</option>
        </Select>
        <Select name="gatherType" onChange={onChangeFilter}>
          <option>전체</option>
          <option>동아리</option>
          <option>봉사활동</option>
          <option>기타</option>
        </Select>
      </div>
      <Cards>
        <Title>학생</Title>
      </Cards>
      <Title>동아리</Title>
      <Box>
        <Cards>
          {clubList?.data?.club_list
            ?.filter((res: AllClub) => res.club_name.includes(search))
            ?.slice(0, 8)
            .map((res: AllClub) => {
              const { club_id, club_name, club_image_url, club_introduce, club_type, club_category, like_counts } = res;
              return (
                <Link key={club_id} to={`/club/${club_id}`} state={{ data: club_id }}>
                  <ClubCard
                    key={club_id}
                    class_num={0}
                    grade={0}
                    name={club_name}
                    profile_image_url={club_image_url}
                    user_id={club_id}
                    view_counts={like_counts}
                    introduce={club_introduce}
                  ></ClubCard>
                </Link>
              );
            })}
        </Cards>
      </Box>
      <Box>
        <Title>모집글</Title>
        <div>
          {gatherList?.data?.feed_list
            ?.filter((res: AllFeed) => res.title?.includes(search))
            ?.slice(0, 4)
            .map((res: AllFeed) => {
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
        </div>
      </Box>
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 28vh;
  background-color: ${(props) => props.theme.MainBlack};
  overflow: hidden;
`;

const Input = styled.input`
  margin-top: 13vh;
  width: 73vw;
  height: 50px;
  background-color: #f5f5f5;
  outline: 0;
  border: 0;
  z-index: 90;
  padding: 40px;
  font-size: 20px;
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
  margin-bottom: 40px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 180px;
  overflow: hidden;
`;

const Cards = styled.div`
  display: flex;
  padding: 10px;
  gap: 30px;
`;

const Title = styled.div`
  width: 73vw;
  font-size: 30px;
  font-weight: 600;
`;
