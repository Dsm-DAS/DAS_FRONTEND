import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { StudentCardEye, Heart } from "../../Assets/img/Logo";
import { AllUser } from "../../interfaces/User";

const PageCard = ({ name, profile_image_url, user_id, view_counts, introduce }: AllUser) => {
  const location = useLocation();
  return (
    <Container>
      <Back>
        <img src={profile_image_url} width={277} height={277} alt="프로필 이미지" />
      </Back>
      <ClubName>{name}</ClubName>
      <Explain>{introduce || "동아리 소개"}</Explain>
      <Wrapper>
        {location.pathname === "/club" ? (
          <Heart color={"#979797"} />
        ) : (
          <StudentCardEye color={"#979797"}></StudentCardEye>
        )}
        <Number>{view_counts || 0}</Number>
      </Wrapper>
    </Container>
  );
};

export default PageCard;

const Container = styled.div`
  width: 277px;
  height: 280px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3px;
`;

const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292929;
  width: 277px;
  height: 105px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px 3px 0 0;
  overflow: hidden;
`;

const ClubName = styled.div`
  font-size: 30px;
  font-weight: 550;
  margin-left: 25px;
  margin-top: 10px;
`;

const Explain = styled.div`
  font-size: 20px;
  margin-top: 5px;
  margin-left: 25px;
`;

const Number = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #979797;
  margin-left: 7px;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 11px;
  display: flex;
  align-items: center;
`;
