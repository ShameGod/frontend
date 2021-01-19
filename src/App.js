import logo from './logo.svg';
import './App.css';
import styled, {css} from "styled-components";

const FooterLayout  = styled.div`
    width : 100%;
    height : 5em ;
    background-color : #F0D9D4;
    position : absolute;
    bottom : 0px;
    `

    const Column = styled.div`    
    float : left; 
    width : 22%;
    height : 5rem;
    color : black ;
    margin-left : 5px;
    border-radius : 10px ;
    text-align : center;
    padding-top : 25px;;
    `


const FormContainer = styled.div`

    width : 25%;
    height : 30em ;
    background-color : #EFBBB0;
    border-radius : 10px;
    position : absolute;
    bottom : 0;
    top : 0;
    left : 0;
    right : 0;
    margin : auto;
`

const Input = styled.input.attrs(props => ({
  type: props.type || "text",

  size: props.size || "1em",
  
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  height : 50px;
  width : 130px;
  margin : 30px;
  text-decoration : none;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const A = styled.a`
  text-decoration : none;
  color : black;
`

function App() {
  return (
    <div className="App">
      <FormContainer> 
     
      <Input placeholder="User name" size="2em"  />
      <br />
      <Input placeholder="password" type="password" size ="2em" />
      <br/>
      
      <A href="https://en.wikipedia.org/"><Button primary> Sign in </Button></A>
      <Button> Sign Up </Button>


      </FormContainer>

      <FooterLayout>
        <Column> Welcome </Column>  
        <Column> Please </Column>
        <Column> Sign  </Column> 
        <Column> UP ! </Column>                 
      </FooterLayout>

    </div>
  );
}

export default App;
