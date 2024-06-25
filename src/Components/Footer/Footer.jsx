import './Footer.css' ;
import Button from '../Knife/Button.jsx';
import Heading from '../Knife/Heading.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Footer(){

    function subsc(){
        const input = document.querySelector('.subsrch').value;
        if(input === ""){
            alert('Please Enter a Valid Email')
        }else{
            document.querySelector('.subscribed').style.visibility="visible";
            const id = setTimeout(()=>{
                document.querySelector('.subscribed').style.visibility="hidden";
            },1500);
        }
    }
    return(
    <div className="Footer-container" id="contactus">
        <div className="Newsletter2-container">
            <Heading head1="Newsletter" head2="Subscribe To Our Newsletter" dirc="center"/>
            <p style={{fontSize:"0.75rem",color:"rgb(187, 187, 187)",marginTop:"-1rem",marginBottom:"3.5rem"}}>And never miss lastest Updates!</p>
            <div style={{display:"flex",width:"100%"}}>
                <input type="text" placeholder="Email Address" className="subsrch"></input>
                <Button text="Subscribe" func={subsc}></Button>
            </div>
            <div className='subscribed'><FontAwesomeIcon icon={faCheck} /> Joined Successfully</div>
        </div>
        <div className="Aboutus-container">
            <div className="contactdev">
                <h5 className='mb-4'>Conect Us</h5>
                <p className='mb-2'>9 W 53rd New York, NY 10019, USA</p>
                <p>+1 212-344-1230</p>
                <p>+1 212-555-1230</p>
            </div>
            <div className="contactdev2">
                <h2 className='mb-3'>GERICHT</h2>
                <p className='mb-2'>The best way to find yourself is to lose yourself in the service of others</p>
                <img className='mb-2' src="../../src/assets/spoon.png"></img>
                <div style={{display:"flex",color:"rgb(187, 187, 187)"}}>
                    <FontAwesomeIcon icon={faFacebookF} size='xl' className='me-3 social'/>
                    <FontAwesomeIcon icon={faTwitter} size='xl'className='me-3 social'/>
                    <FontAwesomeIcon icon={faInstagram} size='xl' className='social'/>
                </div>
            </div>
            <div className="contactdev">
                <h5 className='mb-4'>Working Hours</h5>
                <div className='mb-2'>
                    <p>Monday - Friday</p>
                    <p>08:00 am - 12:00 am</p>
                </div>
                <div>
                    <p>Saturday - Sunday</p>
                    <p>07:00 am - 11:00 am</p>
                </div>
            </div>
        </div>
    </div>);
} export default Footer