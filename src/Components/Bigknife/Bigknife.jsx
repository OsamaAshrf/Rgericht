import './Bigknife.css' ;
import Knifedev from '../Knife/Knife.jsx';


function Knife(){


    return(
    <div className="Knife-container2" id='aboutUs'>
        <div className="Knife-container">
            <Knifedev title="About Us" display="end" deg="0deg"/>
            <div className="knifeimg"><img src="../Rgericht/public/assets/knife.png"/></div>
            <Knifedev title="Our History" display="start" deg="180deg"/>
        </div>
    </div>
    );
} export default Knife