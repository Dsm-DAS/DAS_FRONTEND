import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ClubCard from "../components/MainPageCard/ClubCard";
import UserCard from "../components/MainPageCard/UserCard";
import Slider from "../components/Slider";
import { AllUser } from "../interfaces/User";
import user from "../Utils/api/Sign/User";

const MainPage = () => {
  const { data: userData } = useQuery(["user"], user.getAllUser);
  // const { data: clubData } = useQuery(["user"], user.getAllUser);

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
        <ClubCard></ClubCard>
      </Cards>
      <Content>
        <Title>학생</Title>
        <Link to="/student">
          <Allsee>모두 보기</Allsee>
        </Link>
      </Content>
      <Cards>
        {userData?.data.user_list.map((res: AllUser) => {
          const { class_num, grade, name, profile_image_url, user_id, view_counts } = res;
          return (
            <Link to={`/student/${user_id}`}>
              <UserCard
                class_num={class_num}
                grade={grade}
                name={name}
                profile_image_url={profile_image_url}
                user_id={user_id}
                view_counts={view_counts}
              ></UserCard>
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
`;
