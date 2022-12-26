import styled from "styled-components";
import { AllFeed } from "../../interfaces/Feed";

interface IPage {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: AllFeed[];
  maxNumber: number;
}

const PageNation = ({ page, setPage, data, maxNumber }: IPage) => {
  const Left = () => {
    if (page !== 0) {
      setPage((prev) => prev - 1);
    }
  };

  const Right = () => {
    if (page !== Math.ceil(data?.length / 3) - 1) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Pages>
      <Arrows>
        <Arrow>&lt;</Arrow>
        <Text onClick={Left}>이전</Text>
      </Arrows>
      {data?.slice(0, Math.ceil(data?.length / maxNumber)).map((res, i) => {
        return (
          <Number key={i} onClick={() => setPage(i)} select={page === i}>
            {i + 1}
          </Number>
        );
      })}
      <Arrows>
        <Text onClick={Right}>다음</Text>
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

export const Number = styled.div<{ select: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31px;
  height: 31px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 2px;
  background-color: ${(props) => (props.select ? "#fd3078" : "#ffffff")};
  color: ${(props) => (props.select ? "#ffffff" : "#000000")};
  &:hover {
    background-color: #fd3078;
    color: white;
  }
  cursor: pointer;
`;
