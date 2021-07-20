import { Fragment } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../components/style/GlobalStyle";



function App() {
  return (
    <Fragment>
      <GlobalStyle/>
        <Content>
            <ContentContainer>
              <QuoteContainer>

              <p role='quote'>ola mundo</p>
              <button>isto e um botao</button>

              </QuoteContainer>

              <ImageContianer>
                <img src="https://picsum.photos/400/300" alt="" />
              </ImageContianer>

            
            

            </ContentContainer>
        </Content>
      
    </Fragment>
      
  );
}

const Content = styled.div`

  height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid red;
  
  

`

const ContentContainer = styled.div`

  width: 90%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid blue;

`

const QuoteContainer = styled.div`
  flex: 2;
  width: 100%;
  background-color: green;

`

const ImageContianer = styled.div`
  flex: 1;
  width: 100%;
  background-color: honeydew;


`

export default App;
