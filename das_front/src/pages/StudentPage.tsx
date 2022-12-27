import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackDeco from "../Assets/img/BackDeco.svg";
import PageCard from "../components/PageCard/PageCard";
import { AllUser } from "../interfaces/User";
import user from "../Utils/api/User/User";

const Student = () => {
  const { data } = useQuery(["allUser"], user.getAllUser);

  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeco} alt="배경이미지" />
        <Display>
          <Title>학생</Title>
          <Title></Title>
        </Display>
        <Display>
          <Content>대마고의 모든 학생들을 여기서 확인하실 수 있습니다.</Content>
          <div style={{ width: 280 }}></div>
        </Display>
      </Wrapper>
      <CardWrapper>
        {data?.data.user_list.map((res: AllUser) => {
          const { class_num, grade, name, profile_image_url, user_id, view_counts, introduce } = res;
          return (
            <Link to={`/student/${user_id}`} state={{ data: user_id }}>
              <PageCard
                key={user_id}
                class_num={class_num}
                grade={grade}
                name={name}
                profile_image_url={profile_image_url}
                user_id={user_id}
                introduce={introduce}
                view_counts={view_counts}
              />
            </Link>
          );
        })}
      </CardWrapper>
    </Container>
  );
};

export default Student;

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
  width: 1200px;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  min-height: 50vh;
`;
