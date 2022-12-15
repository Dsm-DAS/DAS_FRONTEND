import styled from "styled-components";
import { Heart } from "../../Assets/img/Logo";
import { AllUser } from "../../interfaces/User";

const UserCard = ({ name, profile_image_url, user_id, view_counts }: AllUser) => {
  return (
    <Card>
      <Circle>
        <img src={profile_image_url} style={{ borderRadius: 50 }} width={70} height={70} alt="" />
      </Circle>
      <Wrapper>
        <Name>{name}</Name>
        <HeartPos>
          <Heart color={"#979797"}></Heart>
          <Count>{view_counts}</Count>
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  overflow: hidden;
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
