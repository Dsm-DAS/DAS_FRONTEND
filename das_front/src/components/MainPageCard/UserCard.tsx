import styled from "styled-components";
import { Heart } from "../../Assets/img/Logo";

const UserCard = () => {
  return (
    <Card>
      <Circle></Circle>
      <Wrapper>
        <Name>정지관</Name>
        <HeartPos>
          <Heart color={"#979797"}></Heart>
          <Count>38</Count>
        </HeartPos>
      </Wrapper>
    </Card>
  );
};

export default UserCard;

const Card = styled.div`
  display: flex;
  width: 190px;
  height: 70px;
`;

const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 10px;
`;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const Count = styled.div`
  font-size: 16px;
  font-weight: 550;
  color: #979797;
  margin-left: 3px;
  margin-top: 3px;
`;

const HeartPos = styled.div`
  display: flex;
`;
