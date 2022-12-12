import styled from "styled-components";

export const BtnWrapper = styled.div`
    width: 25.5rem;
    margin-top: 35px;
`

export const SelectWrapper = styled.div`
    display: flex;
    width: 25.5rem;
    justify-content: space-between;
`

export const OptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const BtnStyle = styled.button<{ borderColor?: string }>`
    width: 4rem;
    border: none;
    border-bottom: 1.5px solid ${(props) => props.borderColor};
    color: white;
    background-color: transparent;
    padding: 6px;
    margin-top: 5px;
`

export const SelectStyle = styled.select<{ borderColor?: string; inputs?: boolean, value?: number }>`
    width: 5.5rem;
    height: 2rem;
    border: none;
    border-bottom: 1.5px solid ${(props) => props.inputs ? (props.value ? "red" : "gray") : "green"};
    color: white;
    background-color: transparent;
    outline: none;
    &:focus {
    border-bottom: 1.5px solid ${(props) => props.borderColor};
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #2B2B2B;
`;

export const InputWrapper = styled.div`
    margin-bottom: 25px;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 470px;
    height: 400px;
    border-radius: 14px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

export const SubTitle = styled.div`
    color: white;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 80px;
`;

export const Text = styled.div`
    color: white;
    font-weight: 500;
    font-size: 15px;
`;

export const Input = styled.input<{ borderColor?: string; inputs?: boolean, value?: string }>`
    background-color: #2b2b2b;
    color: white;
    width: 406px;
    height: 40px;
    border: 0;
    outline: none;
    border-bottom: 1.5px solid ${(props) => props.inputs ? (props.value ? "red" : "gray") : "green"};
    margin-bottom: 13px;
    padding-left: 10px;
    padding-right: 10px;
    &:focus {
        border-bottom: 1.5px solid ${(props) => props.borderColor};
    }
`;

export const BigButton = styled.button`
    width: 250px;
    height: 60px;
    border: 0px;
    background: #FD3078;
    border-radius: 10px;
    color: white;
    font-weight: 400;
    font-size: 15px;
    margin-top: 60px;
    &:first-child {
        :disabled {
            background: #f39abb;
        }
    }
`;

export const SmallButton = styled.button`
    width: 100px;
    height: 36px;
    border: 0px;
    background: #FD3078;
    border-radius: 10px;
    color: white;
    font-weight: 400;
    font-size: 15px;
    margin-left: 19rem;
    cursor: pointer;
    &:first-child {
        :disabled {
            background: #f39abb;
        }
    }
`;

export const SendImg = styled.img`
    position: absolute;
    margin-left: 0.5rem;
    margin-top: 0.3rem;
    cursor: pointer;
`