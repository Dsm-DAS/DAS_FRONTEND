import styled from "styled-components";
import ClubCard from "../../components/PageCard/PageCard";
import BackDeoco from "../../Assets/img/BackDeco.svg";
import club from "../../Utils/api/Club/Club";
import { useQuery } from "@tanstack/react-query";
import { AllClub, IClubMember } from "../../interfaces/Club";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IClubType } from "../../interfaces/Enums";
import { TypeChanger } from "../../Utils/Function/ClubTypeChanger";

const ClubPage = () => {
  const [currentType, setCurrentType] = useState("전공동아리");
  const club_type = ["전공동아리", "창체동아리", "자율동아리"];
  const { data } = useQuery(["user"], club.getClubAll);

  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeoco} alt="배경 이미지" />
        <Display>
          <Title>동아리</Title>
          <Title></Title>
        </Display>
        <Display>
          <Content>대마고의 모든 동아리들을 여기서 확인할 수 있습니다</Content>
          <div style={{ width: 280 }}></div>
        </Display>
        <ClubWrapper>
          {club_type.map((res, i) => {
            return (
              <ClubType onClick={() => setCurrentType(res)} current={res === currentType} key={i}>
                {res}
              </ClubType>
            );
          })}
        </ClubWrapper>
      </Wrapper>
      <Select>
        <option>인기순</option>
        <option>조회수순</option>
      </Select>
      <CardWrapper>
        {data?.data?.club_list
          ?.filter((res: AllClub) => res.club_type === TypeChanger(currentType))
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
      </CardWrapper>
    </Container>
  );
};

export default ClubPage;

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

const Content = styled.div`
  margin-top: 10px;
  font-size: 18px;
  width: 400px;
  color: ${(props) => props.theme.White};
  font-weight: 340;
`;

const ClubWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  display: grid;
  display: flex;
  grid-template-rows: repeat(3, 1fr);
  gap: 150px;
`;

const ClubType = styled.div<{ current: boolean }>`
  font-size: 30px;
  color: ${(props) => (props.current ? props.theme.Main : props.theme.White)};
  font-weight: 500;
  text-decoration: ${(props) => (props.current ? "underline" : "none")};
  &:hover {
    color: ${(props) => props.theme.Main};
    text-decoration: underline;
  }
  z-index: 99;
  cursor: pointer;
`;

const Select = styled.select`
  position: absolute;
  left: 0;
  margin-top: 15px;
`;

const CardWrapper = styled.div`
  width: 1200px;
  height: 50vh;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;
