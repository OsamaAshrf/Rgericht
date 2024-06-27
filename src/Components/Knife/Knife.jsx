import './Heading.css' ;
import Button from './Button.jsx';

function Knifedev(props){
    const display = props.display;
    const deg = props.deg;
    return(<>
        <div className="Knifedev-container" style={{alignItems:`${display}`}}>
            <h2>{props.title}</h2>
            <img src="\Rgericht\assets\spoon.png" className='img' 
            style={{transform:`rotate(${deg})`,
            width:"2rem",
            marginTop:"-8px"}}/>
            <p style={{textAlign:`${display}`}} className="mt-4 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ex eligendi fugit iusto consequatur hic, tempora harum qui! Placeat a asperiores.</p>
            <a href='/Rgericht/about'><button className="buttonReuse">Know More</button></a>
        </div>
    </>);
} export default Knifedev
