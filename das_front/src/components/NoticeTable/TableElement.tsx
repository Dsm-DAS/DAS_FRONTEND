import styled from "styled-components";
import { IAllNotice } from "../../interfaces/Notice";

const TableElement = ({ notice_id, title, created_at, view_counts, index }: IAllNotice) => {
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Text style={{ width: 76 }}>{index}</Text>
        <Text>{title}</Text>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Text>{created_at.slice(0, 10).replaceAll("-", ".")}</Text>
        <Text style={{ width: 90 }}>{view_counts}</Text>
      </div>
    </Container>
  );
};

export default TableElement;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 73vw;
  height: 40px;
  margin-top: 10px;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  height: 10px;
  font-weight: 370;
  color: black;
`;
