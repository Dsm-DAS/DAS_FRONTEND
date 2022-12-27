import styled from "styled-components"

const MyStack = () => {
    return (
        <>
            <Container>
                <TitleWrapper>
                    <TitleText>Stact</TitleText>
                    <SideText>자세히보기 ⨠</SideText>
                </TitleWrapper>
                <Wrapper>
                    <Text>Javascript</Text>
                    <Text>HTML</Text>
                    <Text>CSS</Text>
                    <Text>React</Text>
                    <Text>⋮</Text>
                </Wrapper>
            </Container>
        </>
    )
}

export default MyStack

const Container = styled.div`
    width: 17vw;
    height: 255px;
    background: #FFFFFF;
    border: 0px solid;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 50px;
    `

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 25px 25px 15px 25px;
`

const SideText = styled.div`
    font-size: 12px;
    color: #757474;
    margin-top: 15px;
`

const TitleText = styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-top: 4px;
`

const Text = styled.div`
    font-weight: 300;
    font-size: 20px;
    margin-top: 4px;
`