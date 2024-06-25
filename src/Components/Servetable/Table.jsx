import '../Knife/Heading.css' ;
import './Table.css'
import Button from '../Knife/Button.jsx';
import Heading from '../Knife/Heading.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; 

function Table(){

    function book(){
            document.querySelector('.booked').style.visibility="visible";
            const id = setTimeout(()=>{
                document.querySelector('.booked').style.visibility="hidden";
            },1500);
    }

    return(
    <div className='Table-container' id="reserve">
    <div className="Reserve">
        
        <Heading head1="Reservations" head2="Book A Table" dirc="center"/>
        <div className="inputContainer">
            <select className="reserveBox">
                <option  value="1 person">1 person</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
            </select>
            <select className="reserveBox">
                <option  value="25/5/2024">25/5/2024</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
            </select>
            <select className="reserveBox">
                <option  value="11:00 PM">11:00 PM</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
            </select>
        </div>
        <Button text="Book Now" func={book}/>
        <div className='booked'><FontAwesomeIcon icon={faCheck} /> Booked Successfully</div>
    </div>
    </div>);
} export default Table