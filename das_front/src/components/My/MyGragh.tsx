import ApexChart from "react-apexcharts";
import styled from "styled-components";

const MyGragh = () => {
  return (
    <Container>
      <TitleText>View</TitleText>
      <ApexChart
        type="line"
        series={[
          {
            name: "Desktops",
            data: [
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 20),
              Math.floor(Math.random() * 20 + 10),
              Math.floor(Math.random() * 20 + 30),
              Math.floor(Math.random() * 20 + 60),
              Math.floor(Math.random() * 20 + 50),
              Math.floor(Math.random() * 20 + 80),
            ],
          },
        ]}
        options={{
          theme: { mode: "light" },
          chart: {
            height: 300,
            width: 300,
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          grid: { show: false },
          stroke: {
            curve: "smooth",
            width: 4,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            categories: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
          },
          colors: ["#0fbcf9"],
        }}
      />
    </Container>
  );
};

export default MyGragh;

const Container = styled.div`
  position: relative;
  width: 49vw;
  height: 475px;
  background: #ffffff;
  border: 0px solid;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-left: 40px;
`;
const TitleText = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  font-weight: 700;
  font-size: 20px;
  margin-top: 4px;
`;
