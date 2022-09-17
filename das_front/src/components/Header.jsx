import { useState } from "react";
import styled from "styled-components";
import { Logo, Home, User, Club, Wanted, Search, Bell } from "./Logo";

function Header() {
  const [current, setCurrent] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  const onClick = (value) => {
    setCurrent(value);
  };

  return (
    <Container>
      <Wrapper>
        <Logo color="white"></Logo>
        <Click onClick={() => onClick(0)}>
          <Home color={current === 0 ? "#FD3078" : "white"}></Home>
        </Click>
        <Click onClick={() => onClick(1)}>
          <User color={current === 1 ? "#FD3078" : "white"}></User>
        </Click>
        <Click onClick={() => onClick(2)}>
          <Club color={current === 2 ? "#FD3078" : "white"}></Club>
        </Click>
        <Click onClick={() => onClick(3)}>
          <Wanted color={current === 3 ? "#FD3078" : "white"}></Wanted>
        </Click>
      </Wrapper>
      <Wrapper>
        <Pos>
          <Search></Search>
        </Pos>
        <SearchInput type="text" placeholder="검색"></SearchInput>
        {isLogin ? (
          <>
            <Bell></Bell>
            <Profile></Profile>
          </>
        ) : (
          <>
            <Signup>가입</Signup>
            <Login>로그인</Login>
          </>
        )}
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: #222222;
  padding-right: 15%;
  padding-left: 15%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Click = styled.div`
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 180px;
  height: 30px;
  border: 0;
  outline: 0;
  border-radius: 8px;
  background-color: #323132;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding-left: 35px;
  color: white;
  margin-right: 15px;
  &::placeholder {
    color: white;
  }
`;

const Pos = styled.div`
  position: absolute;
  margin-left: 10px;
  margin-top: 5px;
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 78px;
  height: 30px;
  font-weight: 500;
  background-color: #fd3078;
  border-radius: 8px;
  cursor: pointer;
`;

const Signup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 30px;
  background-color: #323132;
  color: white;
  font-weight: 500;
  border-radius: 8px;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #323132;
  &:hover {
    border: 2px solid #fd3078;
  }
`;
