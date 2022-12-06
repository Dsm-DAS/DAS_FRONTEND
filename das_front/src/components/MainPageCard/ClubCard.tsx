import { Heart } from "../../Assets/img/Logo";
import styled from "styled-components";

const ClubCard = () => {
  return (
    <Container>
      <Circle></Circle>
      <Name>동아리 이름</Name>
      <HeartPos>
        <Count>38</Count>
        <Heart color={"#979797"}></Heart>
      </HeartPos>
      <Line></Line>
      <Tags>
        <Tag>#프론트엔드</Tag>
        <Tag>#프론트엔드</Tag>
      </Tags>
    </Container>
  );
};

export default ClubCard;

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 130px;
  border-radius: 8px;
  background-color: #eeeeee;
  margin-right: 20px;
  overflow: visible;
`;

const Circle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  margin-left: 12px;
  margin-top: 12px;
`;

const Name = styled.div`
  position: absolute;
  font-size: 21px;
  font-weight: 600;
  margin-top: 30px;
  margin-left: 80px;
`;

const Count = styled.div`
  color: #979797;
  font-size: 16px;
  font-weight: 550;
  margin-right: 3px;
  margin-top: 3px;
`;

const HeartPos = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  margin-right: 8px;
  margin-top: 6px;
`;

const Line = styled.div`
  width: 270px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  margin-top: 80px;
`;

const Tags = styled.div`
  overflow: hidden;
  display: flex;
  width: 300px;
  height: 50px;
  white-space: pre-wrap;
`;

const Tag = styled.div`
  margin-top: 5px;
  color: black;
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
`;
