import styled from "styled-components";
import { Heart } from "../../Assets/img/Logo";

const PageCard = () => {
  return (
    <Container>
      <Back></Back>
      <ClubName>DMS</ClubName>
      <Explain>간단한 동아리 소개</Explain>
      <Wrapper>
        <Heart color={"#979797"} />
        <Number>38</Number>
      </Wrapper>
    </Container>
  );
};

export default PageCard;

const Container = styled.div`
  width: 250px;
  height: 260px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3px;
`;

const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292929;
  width: 250px;
  height: 100px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px 3px 0 0;
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
