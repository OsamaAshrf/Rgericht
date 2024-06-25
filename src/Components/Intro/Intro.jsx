import './Intro.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faArrowRight,faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';


function Intro (){

    const Object = [
        {title:"The Key To Fine Dining",src:"../src/assets/pic1.png"},
        {title:"Reserve Your Table Today",src:"../src/assets/pic2.png"},
        {title:"Food That Surprize You",src:"../src/assets/pic3.png"},
        {title:"Love The Original Taste",src:"../src/assets/pic4.png"}
    ];

    function rerander(){
        document.getElementById('img').src=`${Object[i].src}`;
        document.getElementById('title').innerHTML=`${Object[i].title}`;
        transup();
        setTimeout(()=>{
            transdown();
        },30);
    }
    function transup(){
        document.getElementById('tran').style.transform="scaleX(1)";
        document.getElementById('tran').style.transition="none";
        document.getElementById('tran').style.visibility="visible";
        document.getElementById('tex').style.transform="translateY(20%)";
        document.getElementById('tex').style.opacity="0";
        document.getElementById('tex').style.transition="0s ease-in-out";

    }
    function transdown(){
        document.getElementById('tran').style.transition="0.8s ease-in-out";
        document.getElementById('tran').style.transform="scaleX(0)";
        document.getElementById('tex').style.transform="translateY(0)";
        document.getElementById('tex').style.opacity="1";
        document.getElementById('tex').style.transition="0.8s ease-in-out";
    }

    let i = 0;
    let direction = "";
    function clickHandle(event){
        direction = event.target.id;
        if(direction === "next"){if(i< Object.length-1){i++;rerander();}else{i=0;rerander();}} 
        else{if(i> 0){i--;rerander();}else{i=3;rerander();}}
    }
    setInterval(()=>{
        if(i>=3){
            i=0;
            document.getElementById('title').innerHTML=Object[i].title;
            document.getElementById('img').src=Object[i].src;
            transup();

        } else{
            i=i+1;
            document.getElementById('title').innerHTML=Object[i].title;
            document.getElementById('img').src=Object[i].src;
            transup();
        }

        setTimeout(()=>{
            transdown();
        },30)
    },5000);

    return(
    <div className="Intro-container" id="intro" >
        
        <div id="tex" className="Text-container">
            <h5>Chase The New Flavour</h5>
            <img src="..\src\assets\spoon.png" className='img'></img>
            <h1 id="title">{Object[0].title}</h1>
            <label>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptates dolore quas sed eligendi consequatur tempore corporis repellendus. Enim temporibus expedita.</label>
            <button><Link to="#menu" className='explore'>Explore Menu <FontAwesomeIcon icon={faArrowRight} size="2xs" className='ms-2'/></Link></button>
            
        </div>
        <div className="Pic-container"> 
            <img id="img" src={Object[0].src} className='img' style={{transition:"0.35s ease-in-out"}}/>
            <div id="tran" className='trans'></div>
            <div className='butCont'>
                <button className='slide1' id="prev" onClick={clickHandle}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <button className='slide2' id="next" onClick={clickHandle}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        </div>

    </div>
);
} export default Intro
