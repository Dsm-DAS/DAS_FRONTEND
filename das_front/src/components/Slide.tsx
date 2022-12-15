import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Slide = () => {
  const settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    dots: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    draggable: true,
    cssEase: "linear",
    centerMode: true,
    variableWidth: true,
    swipeToSlide: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Card></Card>
          <Title>동아리 이름</Title>
        </div>
        <div>
          <Card></Card>
          <Title>동아리 이름</Title>
        </div>
        <div>
          <Card></Card>
          <Title>동아리 이름</Title>
        </div>
        <div>
          <Card></Card>
          <Title>동아리 이름</Title>
        </div>
        <div>
          <Card></Card>
          <Title>동아리 이름</Title>
        </div>
        <div>
          <Card></Card>
          <Title>동아리 이름</Title>
        </div>
        <div>
          <Card></Card>
          <Title>동아리 이름</Title>
        </div>
        <div>
          <Card></Card>
          <Title>동아리 이름</Title>
        </div>
      </Slider>
    </div>
  );
};

export default Slide;

const Card = styled.div`
  width: 800px;
  height: 300px;
  background-color: white;
  margin-top: 90px;
  border-radius: 8px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-top: 15px;
`;
