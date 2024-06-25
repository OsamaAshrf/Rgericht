import './Heading.css';
import Footer from '../Footer/Footer';

function Button(props){
    const text = props.text;
    const func = props.func;
    return(
    <button className="buttonReuse" onClick={func}>{text}</button>
);
} export default Button