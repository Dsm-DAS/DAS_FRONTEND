import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import BackDeco from "../../Assets/img/BackDeco.svg";
import PrivateInfoCompo from "../../components/My/PrivateInfoCompo";
import PublicInfoCompo from "../../components/My/PublicInfoCompo";
import MyStack from "../../components/My/MyStack";
import user from "../../Utils/api/My/My";
import MyClub from "../../components/My/MyClub";
import MyGragh from "../../components/My/MyGragh";

const MyPage = () => {
  const { data, isLoading } = useQuery(["myInfo"], user.getMyInfo);

  if (isLoading) {
    return <h2>Loading</h2>
  }

  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeco} alt="배경이미지" />
        <Display>
          <BTitle>마이페이지</BTitle>
          <BTitle></BTitle>
        </Display>
      </Wrapper>
      <PublicInfoCompo
        titleName={data?.data.name}
        major={data?.data.major}
        profile_image_url={data?.data.profile_image_url}
        view_counts={data?.data.view_counts} />
      <PrivateInfoCompo
        titleName={data?.data.name}
        grade={data?.data.grade}
        class_num={data?.data.class_num}
        number={data?.data.number}
        major={data?.data.major}
        region={data?.data.region}
        sex={data?.data.sex}
        introduce={data?.data.introduce}
        link_info={data?.data.link_info}
      />
      <BoxWrapper>
        <div>
          <MyClub />
          <MyStack />
        </div>
        <MyGragh />
      </BoxWrapper>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  padding-top: 60px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxWrapper = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 20vh;
  background-color: ${(props) => props.theme.MainBlack};
  overflow: hidden;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;

const BTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.White};
  margin-top: 80px;
  width: 345px;
  text-align: left;
`;