import styled from "styled-components";
import Comment from "./Comment";

const Comments = ({ comment_list }: { comment_list: any }) => {
  return (
    <Container>
      {comment_list?.map((res: any) => {
        const { comment_id, content, created_at, writer } = res;
        return <Comment key={comment_id} content={content} writer={writer} />;
      })}
    </Container>
  );
};

export default Comments;

const Container = styled.div`
  width: 73vw;
  min-height: 300px;
`;
