

type QuoteProps = {

    content: string;
    author: string



}


export function Quote(props:QuoteProps) {
    

    return (
        <div>
           <p role='quote'>{props.content}</p> 
           <p> - {props.author}</p>
        </div>
    )


}