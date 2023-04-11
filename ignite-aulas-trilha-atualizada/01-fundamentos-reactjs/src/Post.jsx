export function Post(props) {
    return (
        <div>
            <h1>
                <strong>{props.author}</strong>
            </h1>
            <p>{props.content}</p>
        </div>
    )
}
