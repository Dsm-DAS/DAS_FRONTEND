import styled from "styled-components";

const ClubMember = () => {
  return (
    <Container>
      <Img />
      <Name>정지관</Name>
    </Container>
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
