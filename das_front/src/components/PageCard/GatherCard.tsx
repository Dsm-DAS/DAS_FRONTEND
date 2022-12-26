import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ExampleImg from "../../Assets/img/ExampleImg.png";
import { AllFeed } from "../../interfaces/Feed";
import { Deadline } from "../../Utils/Function/Timer";

const GatherCard = ({ major, end_at, created_at, feed_id, title, views, writer }: AllFeed) => {
  const { name, profile_image_url, user_id } = writer;
  const [feedImg, setFeedImg] = useState(ExampleImg);

  return (
    <Container>
      <img src={feedImg} width={220} height={200} alt="모집글 이미지" />
      <TextBox>
        <div>
          <Title>{title}</Title>
          <ClubName>{name}</ClubName>
          <FieldSupport>지원분야</FieldSupport>
          <Fields>
            <Field>{major}</Field>
          </Fields>
        </div>
        <div>
          <Detail>자세히보기</Detail>
          <div style={{ display: "flex", alignItems: "center", marginTop: 75 }}>
            <EndDate>마감일</EndDate>
            <Date>D-{Deadline(end_at)}</Date>
          </div>
        </div>
      </TextBox>
    </Container>
  );
};

export default GatherCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  height: 200px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.White};
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
  overflow: hidden;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 140px;
  margin-left: 40px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const ClubName = styled.div`
  margin-top: 2px;
  font-size: 16px;
  font-weight: 300;
  color: #7f7f7f;
`;

const FieldSupport = styled(ClubName)`
  font-weight: 350;
  margin-top: 35px;
  margin-bottom: 4px;
`;

const Fields = styled.div`
  display: flex;
  gap: 15px;
`;

const Field = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.RealBlack};
  font-weight: 400;
`;

const Detail = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: ${(props) => props.theme.Main};
  font-weight: 350;
  padding: 8px;
  border-right: 1.5px solid ${(props) => props.theme.Main};
`;

const EndDate = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #7f7f7f;
  margin-right: 10px;
`;

const Date = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: ${(props) => props.theme.RealBlack};
`;
