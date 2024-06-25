import './Blogs.css' ;
import Heading from '../Knife/Heading.jsx';
import { BlogData } from './Blogdata.js';

function Blogs(){
    let i =0;

    setInterval(()=>{
        const imgWidth = document.querySelector('.blogimg').clientWidth;
        const imageList = document.querySelector('.BlogScroll');
        const scrollAmount = imgWidth+25;
        if(i===6){
            const scrollback = -6*scrollAmount;
            imageList.scrollBy({left: scrollback, behavior:"instant"});
            i=0;
        }
        imageList.scrollBy({left: scrollAmount, behavior:"smooth"});
        i++;
    },4000);


    const Blogelems = BlogData.map((element,index)=>
    <div key={index} id="elem" className="Blogdevelem">
        <div style={{position:"relative"}} className="mb-2">
            <img className='blogimg' src={element.img}/>
            <span style={{position:"absolute",top:"0",right:"0", 
            color:"white", padding:"0.5rem 1rem",
            backgroundColor:"black",fontSize:"0.75rem"}}>{element.date}</span>
        </div>
        <p style={{color:"white"}}className="mb-4">{element.word} / admin</p>
        <h5 className="mb-5">{element.title}</h5>
        <p style={{color:"rgb(129, 129, 129)"}} className="mb-5">{element.text}</p>
        <p style={{
            color:"var(--color-theme-primary)",
            fontFamily: "'Cormorant Upright', Sans-serif",
            fontWeight: "bold"
        }}>Read More</p>
    </div>);

    function pause(){
        setInterval(()=>{
            document.querySelectorAll('.Blogdevelem').forEach((elem)=>{
                elem.style.animationPlayState ="paused";
                setTimeout(()=>{
                    elem.style.animationPlayState ="running";
                },4000)
            }) 
        },4450);
    }
    
    /*function scroll (event){
        console.log(event.target.id);
        console.log(document.querySelector('BlogScroll'))
    }*/
    

    return(
    <div className="Blogs-container" id="blog">
        <Heading head1="Blogs" head2="Gericht Updates" dirc="center"/>
        <div id='imageList' className='BlogScroll'>
        {Blogelems}
        </div>
    </div>);
} export default Blogs