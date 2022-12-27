import styled from "styled-components"
import Camera from "../../Assets/img/camera.svg"
import { useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fileImageAtom, SetAtom } from "../../Store/atoms";

const SetImg = ({ img }: any) => {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const Set = useRecoilValue(SetAtom)
    const [fileImage, setFileImage] = useRecoilState<any>(fileImageAtom)

    const handleClickFileInput = () => {
        fileInputRef.current?.click();
    }

    const saveFileProfile = (e: any) => {
        setFileImage(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div>
            <ProFileImg src={fileImage ? fileImage : img} />
            <ImgWrapper>
                <FileInput
                    type="file"
                    accept="image/jpg, image/jpeg, image/png"
                    ref={fileInputRef}
                    onChange={saveFileProfile} />
                {Set && <CameraWrapper onClick={handleClickFileInput}>
                    <CameraImg src={Camera} />
                </CameraWrapper>}
            </ImgWrapper>
        </div>
    )
}

export default SetImg

const ImgWrapper = styled.div`
    position: relative;
`

const ProFileImg = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
`

const CameraWrapper = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    margin-top: -50px;
    margin-left: 110px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
`

const CameraImg = styled.img`
    width: 30px;
`

const FileInput = styled.input`
    display: none;
`