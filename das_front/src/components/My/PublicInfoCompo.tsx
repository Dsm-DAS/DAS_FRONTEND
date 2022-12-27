import { Link } from "react-router-dom";
import styled from "styled-components";
import ViewIcon from "../../Assets/img/ViewIcon.svg";
import { Public } from "../../interfaces/My";

const PublicInfoCompo = ({ titleName, major, profile_image_url, view_counts, isMine }: Public) => {
  return (
    <Container>
      <MyImg>
        <img style={{ width: "100%", overflow: "hidden", borderRadius: "50%" }} src={profile_image_url} />
      </MyImg>
      <PublicInfo>
        <Name>{titleName}</Name>
        <Major>{major}</Major>
        <ViewWrapper>
          <img width={20} src={ViewIcon} />
          <NormalText>{view_counts}</NormalText>
          <STitleText>viewed</STitleText>
        </ViewWrapper>
        <Link to="/ChangeSet">{isMine && <SetBtn>프로필 설정</SetBtn>}</Link>
      </PublicInfo>
    </Container>
  );
};

export default PublicInfoCompo;

const ViewWrapper = styled.div`
  display: flex;
`;

const MyImg = styled.div`
  width: 10rem;
  height: 10rem;
  border: 1px solid #d9d9d9;
  background-color: #d9d9d9;
  border-radius: 50%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  width: 68vw;
  margin-top: 5vh;
  overflow: hidden;
`;

const PublicInfo = styled.div`
  margin-left: 2.5rem;
  margin-top: 1.5rem;
`;

const Major = styled.div`
  font-weight: 300;
  font-size: 18px;
  margin-left: 0.2rem;
  margin-top: 0.4rem;
  margin-bottom: 0.5rem;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 33px;
`;

const NormalText = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-top: 0.15rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
`;

const STitleText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #7f7f7f;
  margin-top: 0.11rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
`;

const SetBtn = styled.button`
  width: 120px;
  height: 36px;
  background: #fd3078;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  border: none;
  box-shadow: 0px 0px 4px rgba(253, 48, 120, 0.5);
  border-radius: 2px;
  position: absolute;
  right: 0;
  cursor: pointer;
`;
