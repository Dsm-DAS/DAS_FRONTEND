import { Link } from "react-router-dom";
import styled from "styled-components";
import { IClubMember } from "../../interfaces/Club";

const ClubMember = ({ name, user_id, profile_image_url }: IClubMember) => {
  return (
    <Link to={`/student/${user_id}`}>
      <Container>
        <Img>
          <img src={profile_image_url} alt=""></img>
        </Img>
        <Name>{name}</Name>
      </Container>
    </Link>
  );
};

export default ClubMember;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 60px;
`;

const Img = styled.div`
  width: 50px;
  height: 50px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-left: 15px;
`;
