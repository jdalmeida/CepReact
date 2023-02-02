type TweetProps = {
    text: String;
}

export function Tweet(props: TweetProps){
    return(
        <p>{props.text}</p>
    );
}