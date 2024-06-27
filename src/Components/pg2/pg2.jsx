import './pg2.css' ;
import Heading from '../Knife/Heading.jsx';

function AboutUs2(){
    return(
    <div className='AboutUs2-Container'>
        <Heading head1="Our History" head2="Serving Customers For Over A Decade" dirc="center"/>
        <div className='SectionT'>
            <div className='SecL'>
                <p style={{fontSize:"13px",color:"var(--color-theme-secondary)"}}>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Dolor illum et, dolorum nesciunt esse asperiores vero nulla possimus? Doloremque
                totam quaerat beatae assumenda molestias voluptates impedit laborum libero porro excepturi.
                </p>
                <div className='divIm'>
                    <img src="/Rgericht/assets/p.png" style={{width:"100%"}}></img>
                </div>
            </div>
            <div className='SecR'>
                <div className='divIm'>
                    <img src="/Rgericht/assets/pg21.png" className='imgR mb-4' style={{width:"100%"}}></img>
                </div>
                <h5 style={{color:"var(--color-theme-primary)"}} className='overYears'>Over The Years</h5>
                <div className='staticsDiv'>
                    <div className='statics'>
                        <h5>30+</h5>
                        <img className='mb-3' src="/Rgericht/assets/spoon.png" style={{width:"30px"}}/>
                        <p style={{width:"50px"}}>Breakfast Options</p>
                    </div>
                    <div className='bord'></div>
                    <div className='statics'>
                        <h5>50+</h5>
                        <img src="/Rgericht/assets/spoon.png" style={{width:"30px"}}/>
                        <p style={{width:"50px"}}>Dinner Options</p>
                    </div>
                    <div className='bord'></div>
                    <div className='statics'>
                        <h5>8+</h5>
                        <img src="/Rgericht/assets/spoon.png" style={{width:"30px"}}/>
                        <p style={{width:"50px"}}>New Locations</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-5 sec2'>
            <Heading head1="About Us" head2="Happy Hours With Us" dirc="center"/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta voluptate quam voluptatem asperiores magni! Consectetur, aperiam. Non sint molestias saepe obcaecati delectus consequuntur incidunt tempore quia ex. Sed, repellat.</p>
        </div>
    </div>);
} export default AboutUs2
