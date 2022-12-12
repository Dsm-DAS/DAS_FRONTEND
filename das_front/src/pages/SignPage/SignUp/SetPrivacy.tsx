import { useState } from "react";
import api from "../../../Utils/api/Sign/SignUp"
import { useRecoilValue } from "recoil";
import { EmailAtom, PasswordAtom } from "../../../Store/atoms";
import { useNavigate } from "react-router-dom";
import * as _ from "../Sign.Style"

const SetPrivacy = () => {
    const email = useRecoilValue(EmailAtom)
    const password = useRecoilValue(PasswordAtom)
    const [inputs, setInputs] = useState({
        email: email,
        password: password,
        name: "",
        grade: 0,
        class_num: 0,
        number: 0,
        sex: "",
    });
    const { name, grade, class_num, number, sex } = inputs;

    const navigate = useNavigate()

    const NumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const Disabled = !(name && grade && class_num && number && sex);
    const NameBorder = !(name)
    const GradeBorder = !(grade)
    const ClassBorder = !(class_num)
    const NumberBorder = !(number)
    const SexBorder = (sex === "MALE" || sex === "FEMALE")

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const ChangeSex = (e: any) => {
        const { name } = e.target;
        setInputs({
            ...inputs,
            sex: name,
        })
    }

    const SignUpAPI = () => {
        api.SignUp(inputs, navigate)
    };

    return (
        <>
            <_.Container>
                <_.Box>
                    <_.SubTitle>회원가입</_.SubTitle>
                    <_.InputWrapper>
                        <_.Text>이름</_.Text>
                        <_.Input
                            name="name"
                            onChange={onChange}
                            borderColor={NameBorder ? "red" : "green"}
                            inputs={NameBorder}
                            value={name}></_.Input>
                    </_.InputWrapper>
                    <_.SelectWrapper>
                        <_.OptionWrapper>
                            <_.Text>학년</_.Text>
                            <_.SelectStyle
                                name="grade"
                                value={grade}
                                onChange={onChange}
                                borderColor={GradeBorder ? "red" : "green"}
                                inputs={GradeBorder}>
                                <option value={0} disabled></option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </_.SelectStyle>
                        </_.OptionWrapper>
                        <_.OptionWrapper>
                            <_.Text>반</_.Text>
                            <_.SelectStyle
                                name="class_num"
                                value={class_num}
                                onChange={onChange}
                                borderColor={ClassBorder ? "red" : "green"}
                                inputs={ClassBorder}>
                                <option value={0} disabled></option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </_.SelectStyle>
                        </_.OptionWrapper>
                        <_.OptionWrapper>
                            <_.Text>번호</_.Text>
                            <_.SelectStyle
                                name="number"
                                value={number}
                                onChange={onChange}
                                borderColor={NumberBorder ? "red" : "green"}
                                inputs={NumberBorder}>
                                <option value={0} disabled></option>
                                {NumberArray.map((res, i) => {
                                    return (
                                        <option key={i} value={res}>{res}</option>
                                    )
                                })}
                            </_.SelectStyle>
                        </_.OptionWrapper>
                    </_.SelectWrapper>
                    <_.BtnWrapper>
                        <_.Text>성별</_.Text>
                        <_.BtnStyle
                            borderColor={SexBorder ? (sex === "MALE" ? "green" : "gray") : "gray"}
                            name="MALE"
                            onClick={ChangeSex}>남성</_.BtnStyle>
                        <_.BtnStyle
                            borderColor={SexBorder ? (sex === "FEMALE" ? "green" : "gray") : "gray"}
                            name="FEMALE"
                            onClick={ChangeSex}>여성</_.BtnStyle>
                    </_.BtnWrapper>
                    <_.Wrapper>
                        <_.BigButton onClick={SignUpAPI} disabled={Disabled}>
                            가입하기
                        </_.BigButton>
                    </_.Wrapper>
                </_.Box>
            </_.Container>
        </>
    );
}

export default SetPrivacy