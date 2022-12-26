import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ClubCard from "../components/MainPageCard/ClubCard";
import UserCard from "../components/MainPageCard/UserCard";
import Slider from "../components/Slider";
import { AllUser } from "../interfaces/User";
import user from "../Utils/api/Sign/User";
import club from "../Utils/api/Sign/Club";

const MainPage = () => {
  const { data: userData } = useQuery(["user"], user.getAllUser);
  const { data: clubData } = useQuery(["club"], club.getClubAll);

  return (
    <>
      <Slider></Slider>
      <Content>
        <Title>동아리</Title>
        <Link to="/club">
          <Allsee>모두 보기</Allsee>
        </Link>
      </Content>
      <Cards>
        {clubData?.data.club_list.map((res: any) => {
          const { club_id, club_name, club_image_url, club_introduce, club_type, club_category, like_counts } = res;
          return (
            <ClubCard
              club_id={club_id}
              club_name={club_name}
              club_image_url={club_image_url}
              club_introduce={club_introduce}
              club_type={club_type}
              club_category={club_category}
              like_counts={like_counts}
            />
          );
        })}
      </Cards>
      <Content>
        <Title>학생</Title>
        <Link to="/student">
          <Allsee>모두 보기</Allsee>
        </Link>
      </Content>
      <Cards>
        {userData?.data.user_list?.map((res: AllUser) => {
          const { class_num, grade, name, profile_image_url, user_id, view_counts, introduce } = res;
          return (
            <Link key={user_id} to={`/student/${user_id}`}>
              <UserCard
                class_num={class_num}
                grade={grade}
                name={name}
                profile_image_url={profile_image_url}
                user_id={user_id}
                view_counts={view_counts}
                introduce={introduce}
              />
            </Link>
          );
        })}
      </Cards>
    </>
  );
};

export default MainPage;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15%;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 27px;
  font-weight: 700;
`;

const Allsee = styled.div`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 700;
  color: #fd3078;
  cursor: pointer;
`;

const Cards = styled.div`
  display: flex;
  margin-left: 15%;
  margin-top: 10px;
  margin-bottom: 100px;
  width: 73vw;
  overflow: hidden;
`;
