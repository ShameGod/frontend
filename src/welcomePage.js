import styled, {css} from "styled-components";
import App from './App';

const H1 = styled.h1`
    text-align : center;
    color : lightgrey;
`
const Container = styled.section`

`

const FooterLayout  = styled.div`
    width : 100%;
    height : 5em ;
    background-color : #F0D9D4;
    position : absolute;
    bottom : 0px;
    `


export default function welcomePage() {
    <Container>
        <H1>Welcome User start by writing a post : </H1>
        
        <FooterLayout></FooterLayout>

    </Container>
}