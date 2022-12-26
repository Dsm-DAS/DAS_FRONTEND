import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackDeoco from "../../Assets/img/BackDeco.svg";
import useInput from "../../Hooks/useInput";
import { IMajor } from "../../interfaces/Enums";
import Feed from "../../Utils/api/Sign/Feed";

interface IGahterCreate {
  Y: number;
  M: number;
  D: number;
  Major: IMajor;
}

const GatherCreate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [date, setDate] = useState<IGahterCreate>({
    Y: 2022,
    M: 1,
    D: 1,
    Major: null,
  });
  const { Y, M, D, Major } = date;
  const [title, onChangeTitle, setTitle] = useInput();
  const [content, onChangeContent, setContent] = useInput();
  const [url, onChangeUrl, setUrl] = useInput();

  useEffect(() => {
    if (location.state.type === "edit") {
      Feed.getFeedDetail(location.state.data).then((res) => {
        const { content, title, das_url } = res.data;
        setUrl(das_url);
        setContent(content);
        setTitle(title);
      });
    }
    if (location.state.type === "write") return;
  }, []);

  const Fields = ["분야선택", "FRONTEND", "BACKEND", "ANDROID", "IOS"];
  const Year = Array(10)
    .fill(1)
    .map((v, i) => i + 2022);
  const Month = Array(12)
    .fill(1)
    .map((v, i) => i + 1);
  const Day = Array(31)
    .fill(1)
    .map((v, i) => i + 1);

  const onChangeDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setDate({ ...date, [name]: value });
  };

  const WriteFeed = () => {
    Feed.postFeed(
      title,
      content,
      url,
      Major,
      `${Y}-${String(M).padStart(2, "0")}-${String(D).padStart(2, "0")}`,
      navigate
    );
  };

  return (
    <Container>
      <Wrapper>
        <img style={{ position: "absolute", right: "0" }} src={BackDeoco} alt="배경 이미지" />
        <Display>
          <Title>모집 공고</Title>
          <Title></Title>
        </Display>
        <Display>
          <Content>
            동아리에서 부원을 모집하고 있습니다!
            <br />
            동아리에 지원하고 합격하세요!
          </Content>
          <div style={{ width: 280 }}></div>
        </Display>
      </Wrapper>
      <div style={{ width: "73vw", marginTop: 40 }}>
        <TitleFont>모집글 작성</TitleFont>
        <SFont>제목 :</SFont>
        <TitleInput onChange={onChangeTitle} value={title} />
        <SFont>모집 내용 :</SFont>
        <TextArea maxLength={1000} onChange={onChangeContent} value={content} placeholder="자세한 모집 내용"></TextArea>
        <Length>{content.length}/1000</Length>
        <SFont>URL :</SFont>
        <URLInput onChange={onChangeUrl} value={url} placeholder="URL입력" />
        <SFont>
          지원 분야 : <SFont style={{ color: "#000000", marginLeft: 15 }}>프론트엔드 백엔드 안드로이드 iOS</SFont>
        </SFont>
        <Select name="Major" onChange={onChangeDate}>
          {Fields.map((res, i) => {
            return <option key={i}>{res}</option>;
          })}
        </Select>
        <SFont>
          마감일 :{" "}
          <SFont style={{ color: "#000000", marginLeft: 15 }}>
            {Y}년 {M}월 {D}일
          </SFont>
        </SFont>
        <div style={{ display: "flex", gap: "10px" }}>
          <Select name="Y" onChange={onChangeDate}>
            {Year.map((res, i) => {
              return <option key={i}>{res}</option>;
            })}
          </Select>
          <Select name="M" onChange={onChangeDate}>
            {Month.map((res, i) => {
              return <option key={i}>{res}</option>;
            })}
          </Select>
          <Select name="D" onChange={onChangeDate}>
            {Day.map((res, i) => {
              return <option key={i}>{res}</option>;
            })}
          </Select>
        </div>
        <div style={{ margin: "100px 0px", display: "flex", gap: 20, justifyContent: "flex-end" }}>
          {location.state.type === "edit" ? (
            <>
              <WriteButton>삭제하기</WriteButton>
              <WriteButton>저장하기</WriteButton>
            </>
          ) : (
            <WriteButton onClick={WriteFeed}>작성하기</WriteButton>
          )}
        </div>
      </div>
    </Container>
  );
};

export default GatherCreate;

const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 40vh;
  background-color: ${(props) => props.theme.MainBlack};
  overflow: hidden;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.White};
  margin-top: 80px;
  width: 345px;
  text-align: left;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;

const Content = styled.div`
  margin-top: 10px;
  font-size: 18px;
  width: 400px;
  color: ${(props) => props.theme.White};
  font-weight: 340;
`;

const TitleFont = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const SFont = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 450;
  color: #7f7f7f;
  margin-bottom: 6px;
`;

const TitleInput = styled.input`
  width: 73vw;
  height: 45px;
  background-color: #fdfdfd;
  border: 0;
  outline: 0;
  border: 1px solid #cccccc;
  padding: 15px;
  font-size: 16px;
  margin-bottom: 40px;
`;

const TextArea = styled.textarea`
  position: relative;
  width: 73vw;
  height: 400px;
  background-color: #fdfdfd;
  border: 0;
  outline: 0;
  border: 1px solid #cccccc;
  resize: none;
  padding: 10px;
`;

const Length = styled.div`
  margin-left: 69.5vw;
  font-size: 16px;
  color: black;
  margin-bottom: 40px;
  z-index: 99;
`;

const URLInput = styled.input`
  width: 73vw;
  height: 30px;
  border: 0;
  background-color: #fdfdfd;
  border: 0;
  outline: 0;
  border: 1px solid #cccccc;
  padding: 15px;
  margin-bottom: 40px;
`;

const Select = styled.select`
  width: 130px;
  height: 35px;
  background: url("https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png") calc(100% - 5px)
    center no-repeat;
  background-size: 20px;
  padding: 5px 30px 5px 10px;
  border-radius: 4px;
  outline: 0 none;
  border: 1px solid #b8b8b8;
  margin-bottom: 40px;
`;

const WriteButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 23px;
  width: 120px;
  height: 36px;
  background: #ff4385;
  box-shadow: 0px 0px 4px rgb(253, 48, 120);
  border-radius: 8px;
  color: white;
  font-weight: 500;
  margin: 40px 0;
  cursor: pointer;
`;
