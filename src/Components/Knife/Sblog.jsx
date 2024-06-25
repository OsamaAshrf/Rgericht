import './Heading.css';

function Sblog(props){
    const date = props.date;
    const word = props.word;
    const img = props.img;
    const title = props.title;
    const text = props.text;
    return(
    <div className="Sblog-container">
        <div style={{position:"relative"}} className="mb-2">
            <img src={img} style={{width:"100%"}}/>
            <span style={{position:"absolute",top:"0",right:"0", 
            color:"white", padding:"0.5rem 1rem",
            backgroundColor:"black",fontSize:"0.75rem"}}>{date}</span>
        </div>
        <p style={{color:"white"}}className="mb-4">{word} / admin</p>
        <h5 className="mb-5">{title}</h5>
        <p style={{color:"rgb(129, 129, 129)"}} className="mb-5">{text}</p>
        <p style={{
                color:"var(--color-theme-primary)",
                fontFamily: "'Cormorant Upright', Sans-serif",
                fontWeight: "bold"
        }}>Read More</p>
    </div>
);
} export default Sblog