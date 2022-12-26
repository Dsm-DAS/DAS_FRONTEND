import styled from "styled-components";

const Table = () => {
  return (
    <TableHeader>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Text>번호</Text>
        <Text>제목</Text>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <Text>작성일</Text>
        <Text>조회수</Text>
      </div>
    </TableHeader>
  );
};

export default Table;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 73vw;
  height: 50px;
  border-top: 1.5px solid #aaaaaa;
  border-bottom: 1.5px solid #aaaaaa;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  height: 10px;
  font-weight: 370;
  color: #7f7f7f;
`;
