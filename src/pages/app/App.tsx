import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../components/style/GlobalStyle";
import { Quote } from "../../components/Quote"
import { HeaderNavbar } from "../../components/HeaderNavbar";
import naturoImg  from '../../img/naruto.png'


type QuoteType = {
  content : string
  author : string 
}

function App() {

  const [ quote , setQuote] = useState<QuoteType>({content : 'ze' , author : 'zeze'});

  async function getRandomQuote() {
    
     let res = await fetch('http://api.quotable.io/random')

     let quoteData = await res.json()

     return  setQuote({ content : quoteData.content, author : quoteData.author});



  }

  
  

  return (
    <Fragment>
      <GlobalStyle/>
        <HeaderNavbar titleText='naturo quotes'/>
        <Content>
            <ContentContainer>
              <QuoteContainer>

                <Quote content={quote.content} author={quote.author}/>

              </QuoteContainer>

              <ImageContianer>
                <button onClick={getRandomQuote}>clique aqui</button>
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
  

`

const ImageContianer = styled.div`
  flex: 1;
  width: 100%;
  background-color: honeydew;


`

export default App;
