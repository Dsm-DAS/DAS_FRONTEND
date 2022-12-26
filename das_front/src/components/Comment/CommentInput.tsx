import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../Assets/img/Arrow.svg";
import useInput from "../../Hooks/useInput";
import comment from "../../Utils/api/Sign/Comment";
import ToastSuccess from "../../Utils/Function/SuccessMessage";

const CommentInput = ({ feed_id }: { feed_id: number }) => {
  const [content, onChangeContent, setContent] = useInput();

  const navigate = useNavigate();

  const WriteComment = () => {
    comment.postComment(feed_id, content, navigate);
  };

  return (
    <Container>
      <Input maxLength={500} onChange={onChangeContent} value={content} placeholder="댓글추가(최대 500자)" />
      <Button onClick={WriteComment} src={Arrow} alt="" />
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
