import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import LogOut from "../../components/ChangeSet/LogOut";
import MyInfo from "../../components/ChangeSet/MyInfo";
import PwChange from "../../components/ChangeSet/PwChange";
import SetImg from "../../components/ChangeSet/SetImg";
import SetMyInfo from "../../components/ChangeSet/SetMyInfo";
import SetPwChange from "../../components/ChangeSet/SetPwChange";
import { SetAtom, SetPwAtom } from "../../Store/atoms";
import user from "../../Utils/api/My/My";

const ChangeSetPage = () => {
    const { data, isLoading } = useQuery(["myInfo"], user.getMyInfo);
    const Set = useRecoilValue(SetAtom)
    const SetPw = useRecoilValue(SetPwAtom)

    if (isLoading) {
        return <h2>Loading</h2>
    }

    return (
        <Container>
            <SetImg img={data?.data.profile_image_url} />
            <Bar />
            <div>
                {!Set ?
                    <MyInfo
                        names={data?.data.name}
                        grades={data?.data.grade}
                        class_nums={data?.data.class_num}
                        numbers={data?.data.number}
                        introduces={data?.data.introduce}
                        majors={data?.data.major}
                        regions={data?.data.region}
                        link_infos={data?.data.link_info}
                    /> :
                    <SetMyInfo
                        names={data?.data.name}
                        grades={data?.data.grade}
                        class_nums={data?.data.class_num}
                        numbers={data?.data.number}
                        introduces={data?.data.introduce}
                        majors={data?.data.major}
                        regions={data?.data.region}
                        link_infos={data?.data.link_info} />}
                {!SetPw ?
                    <PwChange /> :
                    <SetPwChange />}
                <LogOut />
            </div>
        </Container>
    );
};

export default ChangeSetPage;

const Container = styled.div`
    padding-top: 60px;
    width: 100vw;
    display: flex;
    justify-content: center;
    padding-top: 160px;
    margin-bottom: 100px;
`;

const Bar = styled.div`
    width: 2px;
    height: 1200px;
    background-color:#7F7F7F;
    margin: 0px 100px;
`;