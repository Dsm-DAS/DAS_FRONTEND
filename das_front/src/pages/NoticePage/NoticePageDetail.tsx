import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackDeco from "../../Assets/img/BackDeco.svg";
import notice from "../../Utils/api/Sign/Notice";
import ViewIcon from "../../Assets/img/ViewIcon.svg";
import useAutosizeTextArea from "../../Utils/Function/TextAreaAutoHeight";
import { useRef } from "react";

const NoticePageDetail = () => {
  const location = useLocation();
  const notice_id = location.state.data;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { data } = useQuery(["notice", notice_id], () => notice.getNoticeDetail(notice_id));
  useAutosizeTextArea(textAreaRef.current, data?.data.content);
  console.log(data);

  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeco} alt="배경이미지" />
        <Display>
          <Title>공지</Title>
          <Title></Title>
        </Display>
        <Display>
          <Content>주기적으로 접속하여 선생님의 공지를 확인하세요.</Content>
          <div style={{ width: 280 }}></div>
        </Display>
      </Wrapper>
      <NoticeContent>
        <SFont>
          작성자: <SFont style={{ marginLeft: 10, color: "#FD3078" }}>{data?.data.writer.name}</SFont>
          <SFont style={{ marginLeft: 80 }}>작성일: </SFont>
          <SFont style={{ marginLeft: 10 }}>
            {data?.data.created_at.slice(0, 10)} {data?.data.created_at.slice(11, 16)}
          </SFont>
        </SFont>
        <NoticeTitle>{data?.data.title}</NoticeTitle>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={ViewIcon} alt="" />
          <SFont style={{ color: "#000000", margin: "0 5px" }}>{data?.data.views}</SFont>
          <SFont>viewed</SFont>
        </div>
        <div style={{ fontSize: 20, marginTop: 20, color: "#7F7F7F" }}>공지 내용 :</div>
        <TextArea readOnly ref={textAreaRef} value={data?.data.content}></TextArea>
      </NoticeContent>
    </Container>
  );
};

export default NoticePageDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 40vh;
  background-color: ${(props) => props.theme.MainBlack};
  margin-bottom: 50px;
  overflow: hidden;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.White};
  margin-top: 80px;
  width: 345px;
  text-align: left;
`;

const Content = styled.div`
  margin-top: 10px;
  font-size: 18px;
  width: 400px;
  color: ${(props) => props.theme.White};
  font-weight: 340;
`;

const NoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 73vw;
  min-height: 50vh;
`;

const SFont = styled.div`
  display: flex;
  font-size: 16px;
  color: #7f7f7f;
  font-weight: 400;
`;

const NoticeTitle = styled.div`
  font-size: 33px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 3px;
`;

const TextArea = styled.textarea`
  font-weight: 350;
  margin-bottom: 200;
  border: 0;
  outline: 0;
  resize: none;
  width: 73vw;
  font-size: 20px;
  margin-top: 7px;
`;
