import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ToastError from '../../Utils/Function/ErrorMessage';
import { useSetRecoilState } from 'recoil';
import { EmailCheckAtom } from '../../Store/atoms';

const Timer = () => {
    //5분 고정이 아닐 경우 Props로 전달
    const [min, setMin] = useState(5);
    const [sec, setSec] = useState(0);
    const setEmailCheck = useSetRecoilState(EmailCheckAtom)

    const navigate = useNavigate()

    useEffect(() => {
        let timer: any;
        //clearInterval(timer);
        timer = setInterval(() => {
            if (Number(sec) > 0) {
                setSec(Number(sec) - 1);
            }
            if (Number(sec) === 0) {
                if (Number(min) === 0) {
                    clearInterval(timer);
                    ToastError("인증 시간이 지났습니다.");
                    setEmailCheck(true)
                    navigate("/");
                } else {
                    setMin(Number(min) - 1);
                    setSec(59);
                }
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [min, sec]);

    return (
        <TimerStyle>
            {String(min).padStart(2, "0")}:{String(sec).padStart(2, "0")}
        </TimerStyle>
    );
};

export default Timer;

const TimerStyle = styled.span`
    position: absolute;
    font-size: 20px;
    color: #FD3078;
    font-weight: 700;
    margin-left: -60px;
    margin-top: 10px;
`