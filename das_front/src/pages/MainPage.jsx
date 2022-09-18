import styled from "styled-components";
import ClubCard from "../components/Card/ClubCard";
import UserCard from "../components/Card/UserCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";

const MainPage = () => {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Content>
        <Title>동아리</Title>
        <Allsee>모두 보기</Allsee>
      </Content>
      <Cards>
        <ClubCard></ClubCard>
      </Cards>
      <Content>
        <Title>학생</Title>
        <Allsee>모두 보기</Allsee>
      </Content>
      <Cards>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
      </Cards>
      <Footer></Footer>
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
`;

const Cards = styled.div`
  display: flex;
  margin-left: 15%;
  margin-top: 10px;
`;