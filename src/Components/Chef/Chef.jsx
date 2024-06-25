import './Chef.css' ;
import Heading from '../Knife/Heading.jsx';

function Chef(){

    return(
    <div className='Chef-bg' id="chef">
    <div className="Chef-container">
        <div className="chefPicdev">
            <img src="../../src/assets/chef.png" style={{width:"100%"}}/>
        </div>
        <div className="chefInfo">
            <Heading head1="Chef's World" head2="What We Believe In"/>
            <p className="mb-5" style={{color:"rgb(168, 168, 168)",
                fontSize:"0.8rem",
                }}>
                    <span><img className='me-3 mb-2 mt-0' src="../../src/assets/quote.png" style={{width:"2.3rem"}}/></span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quas maiores pariatur nulla eum sequi sed. Quod libero,
                    sint, sunt odio ut saepe, doloribus at iusto eligendi
                    labore amet consectetur adipisicing elit. Quod libero,
                    sint, sunt odio ut saepe, doloribus at iusto inventore
                    consequatur.
            </p>
            <div className="mb-5">
                <h3 style={{color:"rgb(228, 209, 102)",
                    fontFamily: "'Cormorant Upright', Sans-serif"
                }}>Kevin Luo</h3>
                <p style={{color:"rgb(168, 168, 168)",fontSize:"0.8rem"}}>Chef & Founder</p>
            </div>
            <img src="../../src/assets/sign.png" style={{width:"10rem"}}/>
        </div>
    </div>
    </div>);
} export default Chef