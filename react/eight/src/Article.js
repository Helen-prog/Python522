
function Article(props){
    let {name, title} = props;

    return(
        <div style={{
            boxShadow: "0 0 12px 2px #999",
            padding: "10px",
            margin: "20px"
        }}>
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    )
}

export default Article;