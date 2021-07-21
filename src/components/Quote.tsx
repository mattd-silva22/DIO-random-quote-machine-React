import styled from "styled-components"


type QuoteProps = {

    content: string;
    author: string



}


export function Quote(props:QuoteProps) {
    

    return (

        <QuoteArea>
           <p role='quote'>{props.content}</p> 
           <p className='author'> - {props.author}</p>
        </QuoteArea>
    )


}

const QuoteArea = styled.div `


    background-color: rgba(25,35,35,0.3);
    
    width: 100%;
    font-size: 36px;
    text-align: center;
    color: white;


    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    padding: 10px;

    p.author {
        font-size: 32px;
        margin-top: 25px;
    }


`