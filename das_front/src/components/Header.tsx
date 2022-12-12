import { useEffect, useState } from "react";
import styled from "styled-components";
import { Logo, Home, User, Club, Wanted, Search, Bell } from "../Assets/img/Logo";
import DefaultImage from "../Assets/img/defaultImg.svg";
import { Link, useLocation } from "react-router-dom";

type CurrentHeader = "HOME" | "STUDENT" | "CLUB" | "GATHER" | "MYPAGE";

const Header = () => {
  const router = useLocation();
  const [current, setCurrent] = useState<CurrentHeader>("HOME");

  useEffect(() => {
    console.log(router);
    switch (router.pathname) {
      case "/":
        setCurrent("HOME");
        break;
      case "/student":
        setCurrent("STUDENT");
        break;
      case "/club":
        setCurrent("CLUB");
        break;
      case "/gather":
        setCurrent("GATHER");
        break;
      case "/mypage":
        setCurrent("MYPAGE");
        break;
      case "/notice":
        setCurrent("GATHER");
        break;
      case "/my":
        setCurrent("MYPAGE");
        break;
      default:
        break;
    }
  }, [router]);

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Click>
            <Logo color="white" width="86" height="22"></Logo>
          </Click>
        </Link>
        <Link to="/">
          <Click>
            <Home color={current === "HOME" ? "#FD3078" : "white"}></Home>
          </Click>
        </Link>
        <Link to="/student">
          <Click>
            <User color={current === "STUDENT" ? "#FD3078" : "white"}></User>
          </Click>
        </Link>
        <Link to="/club">
          <Click>
            <Club color={current === "CLUB" ? "#FD3078" : "white"}></Club>
          </Click>
        </Link>
        <Link to="/notice">
          <Click>
            <Wanted color={current === "GATHER" ? "#FD3078" : "white"}></Wanted>
          </Click>
        </Link>
      </Wrapper>
      <Wrapper>
        <Pos>
          <Search></Search>
        </Pos>
        <SearchInput type="text" placeholder="검색"></SearchInput>
        {localStorage.getItem("access_token") ? (
          <>
            <Bell />
            <Link to="/my">
              <Click>
                <img
                  src={DefaultImage}
                  width={30}
                  height={30}
                  style={{ backgroundColor: "white", borderRadius: "50px" }}
                  alt=""
                />
              </Click>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signUp">
              <Signup>가입</Signup>
            </Link>
            <Link to="/login">
              <Login>로그인</Login>
            </Link>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: #222222;
  z-index: 99;
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