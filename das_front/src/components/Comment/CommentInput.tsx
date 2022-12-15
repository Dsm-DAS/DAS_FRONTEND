import styled from "styled-components";
import Arrow from "../../Assets/img/Arrow.svg";

const CommentInput = () => {
  return (
    <Container>
      <Input placeholder="댓글추가" />
      <Button src={Arrow} alt="" />
    </Container>
  );
};

export default CommentInput;

const Container = styled.div`
  position: relative;
  width: 73vw;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  width: 70vw;
  height: 30px;
  font-size: 16px;
  color: #7f7f7f;
  padding: 10px;
  font-weight: 350;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 30px;
`;

const Button = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  cursor: pointer;
`;
