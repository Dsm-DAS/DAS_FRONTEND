import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackDeoco from "../../Assets/img/BackDeco.svg";
import Eye from "../../Assets/img/Eyes.svg";
import ClubMember from "../../components/PageCard/ClubMemberCard";
import { IClubMember } from "../../interfaces/Club";
import club from "../../Utils/api/Sign/Club";
import { ClubTypeFunc } from "../../Utils/Function/ClubType";

const ClubDetail = () => {
  const location = useLocation();
  let club_id = location.state.data;
  const { data } = useQuery(["club", club_id], () => club.getClubDetail(club_id));

  return (
    <Container>
      <Back>
        <img style={{ position: "absolute", right: "0" }} src={BackDeoco} alt="배경 이미지" />
      </Back>
      <ClubIcon>
        <img width={200} height={200} src={data?.data.club_image_url} alt=""></img>
      </ClubIcon>
      <div style={{ display: "flex", alignItems: "end", position: "absolute", top: "63vh", left: "13%" }}>
        <ClubName>{data?.data.club_name}</ClubName>
        <ClubType>{ClubTypeFunc(data?.data.club_type)}</ClubType>
      </div>
      <Wrapper>
        <Categories>
          <Category>#{data?.data.club_category}</Category>
          <Category>#{ClubTypeFunc(data?.data.club_type)}</Category>
        </Categories>
        <Views>
          <img src={Eye} alt="" />
          <View>{data?.data.club_views}</View>
        </Views>
        <div style={{ marginTop: 100 }}>
          <Title>소개</Title>
          <Introduce>{data?.data.club_introduce || "동아리 소개"}</Introduce>
        </div>
        <div style={{ marginTop: 30, marginBottom: 100 }}>
          <Title>부원</Title>
          <Members>
            {data?.data?.user_list?.map((res: IClubMember) => {
              const { name, user_id, profile_image_url } = res;
              return <ClubMember name={name} user_id={user_id} profile_image_url={profile_image_url}></ClubMember>;
            })}
          </Members>
        </div>
      </Wrapper>
    </Container>
  );
};

export default ClubDetail;

const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Back = styled.div`
  position: relative;
  width: 100vw;
  height: 45vh;
  background-color: ${(props) => props.theme.MainBlack};
  overflow: hidden;
`;

const ClubIcon = styled.div`
  position: absolute;
  left: 13%;
  top: 33vh;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

const ClubName = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const ClubType = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-left: 10px;
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 74vw;
  min-height: 60vh;
  margin-top: 25vh;
`;

const Categories = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  height: 40px;
  gap: 10px;
`;

const Category = styled.div`
  font-size: 20px;
  font-weight: 350;
`;

const Views = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 0;
`;

const View = styled.div`
  margin: 0px 7px;
  font-size: 18px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const Introduce = styled.div`
  width: 72vw;
  height: 80px;
  margin-left: 2vw;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
`;

const Members = styled.div`
  width: 70vw;
  margin-left: 4vw;
  margin-top: 20px;
  min-height: 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
`;
