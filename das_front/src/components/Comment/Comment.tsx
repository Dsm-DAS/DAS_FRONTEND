import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MoreImg from "../../Assets/img/MoreImg.svg";

const Comment = ({ content, writer }: { content: string; writer: any }) => {
  const { name, profile_image_url, user_id } = writer;
  const [showOption, setShowOption] = useState(false);

  const handleClickOutSide = () => {
    if (showOption) {
      setShowOption(false);
    }
  };

  useEffect(() => {
    if (showOption) document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  });

  return (
    <Container>
      <Circle>
        <img src={profile_image_url} width={50} height={50} alt="프로필 이미지" />
      </Circle>
      <Name>{name}</Name>
      <Text readOnly>{content}</Text>
      <Image onClick={() => setShowOption((prev) => !prev)} src={MoreImg} />
      {showOption && <Box></Box>}
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  position: relative;
  display: flex;
  width: 73vw;
  height: 50px;
  margin-bottom: 20px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #d9d9d9;
  border-radius: 50px;
  overflow: hidden;
`;

const Name = styled.div`
  position: absolute;
  left: 60px;
  top: 7px;
  font-size: 14px;
  font-weight: 400;
  color: #7f7f7f;
`;

const Text = styled.textarea`
  position: absolute;
  left: 60px;
  top: 25px;
  width: 50vw;
  font-size: 15px;
  border: 0;
  outline: 0;
  font-weight: 500;
  resize: none;
`;

const Image = styled.img`
  position: absolute;
  right: 5px;
  top: 5px;
  margin: auto 0;
  cursor: pointer;
`;

const Box = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  width: 100px;
  height: 70px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border-radius: 5px;
  z-index: 59;
`;
