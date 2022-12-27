import { Heart } from "../../Assets/img/Logo";
import styled from "styled-components";
import { AllClub } from "../../interfaces/Club";
import { Link } from "react-router-dom";
const ClubCard = ({
  club_id,
  club_name,
  club_image_url,
  club_introduce,
  club_type,
  club_category,
  like_counts,
}: AllClub) => {
  return (
    <Container>
      <Circle>
        <img width={60} height={60} src={club_image_url} />
      </Circle>
      <Name>{club_name}</Name>
      <HeartPos>
        <Count>{like_counts}</Count>
        <Heart color={"#979797"}></Heart>
      </HeartPos>
      <Line></Line>
      <Tags>
        <Tag>#{club_type}</Tag>
        <Tag>#{club_category}</Tag>
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
  cursor: pointer;
`;

const Circle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  margin-left: 12px;
  margin-top: 12px;
  overflow: hidden;
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
