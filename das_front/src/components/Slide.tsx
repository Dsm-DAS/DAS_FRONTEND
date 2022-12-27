import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Modeep from "../Assets/img/모딥.png";
import Dms from "../Assets/img/DMS.png";

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
          <Card>
            <Img src={Modeep} />
          </Card>
          <Title>모딥</Title>
        </div>
        <div>
          <Card>
            <Img src={Dms} />
          </Card>
          <Title>DMS</Title>
        </div>
        <div>
          <Card>
            <Img src="https://test-imag-upload-bucket.s3.ap-northeast-2.amazonaws.com/Vector.png" />
          </Card>
          <Title>정</Title>
        </div>
      </Slider>
    </div>
  );
};

export default Slide;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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

const Img = styled.img`
  width: 200px;
  height: 200px;
`;
