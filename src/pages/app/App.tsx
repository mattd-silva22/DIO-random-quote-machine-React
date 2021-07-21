import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../components/style/GlobalStyle";
import { Quote } from "../../components/Quote"
import { HeaderNavbar } from "../../components/HeaderNavbar";
import naturoImg  from '../../img/naruto.png'


type QuoteType = {
  content : string;
  author : string;
}

function App() {

  const [ quote , setQuote] = useState<QuoteType>({content: 'loading' , author : 'loading'});

  async function getRandomQuote() {
    
     let res = await fetch('http://api.quotable.io/random')

     let quoteData = await res.json()

     return setQuote({ content : quoteData.content, author : quoteData.author});



  }

  useEffect(()=>{

    
    getRandomQuote()
    console.log('add iniciou')


  },[])


  
  

  return (
    <Fragment>
      <GlobalStyle/>
        <HeaderNavbar titleText='Random Quote'/>
        <Content>
            <ContentContainer>
              <QuoteContainer>

                <Quote content={quote.content} author={quote.author}/>

              </QuoteContainer>

              <ImageContianer>
                <button onClick={getRandomQuote}>New Quote</button>
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
  flex-direction: column;


  

`

const QuoteContainer = styled.div`
  flex: 2;
  width: 100%;
  align-items: center;
  justify-content: center;
  

`

const ImageContianer = styled.div`
  flex: 1;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px ;

  button {
    padding: 15px 50px;
  }


`

export default App;
