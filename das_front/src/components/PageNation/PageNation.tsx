import styled from "styled-components";

const PageNation = () => {
  //   const Left = () => {
  //     if (page !== 0) {
  //       setPage((prev) => prev - 1);
  //     }
  //   };

  //   const Right = () => {
  //     if (page !== Math.ceil(data?.length / 3) - 1) {
  //       setPage((prev) => prev + 1);
  //     }
  //   };

  return (
    <Pages>
      <Arrows>
        <Arrow>&lt;</Arrow>
        <Text>이전</Text>
      </Arrows>
      <Number>0</Number>
      <Number>1</Number>
      <Number>2</Number>
      <Arrows>
        <Text>다음</Text>
        <Arrow>&gt;</Arrow>
      </Arrows>
    </Pages>
  );
};

export default PageNation;

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 40px;
  gap: 20px;
`;

export const Arrows = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  margin: 0 20px;
  color: #aaaaaa;
  &:hover {
    color: black;
  }
  cursor: pointer;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin: 0 10px;
`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31px;
  height: 31px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 2px;
  background-color: #fd3078;
  color: black;
  &:hover {
    background-color: #fd3078;
    color: white;
  }
  cursor: pointer;
`;
