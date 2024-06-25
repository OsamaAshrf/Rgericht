import './Heading.css';

function Laurel(props){
    const img = props.img;
    const title = props.title;
    const text = props.text;
    return(
    <div className="Laurel-container">
        <div>
            <img src={img} style={{width:"100%"}}/>
        </div>
        <div>
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    </div>
);
} export default Laurel