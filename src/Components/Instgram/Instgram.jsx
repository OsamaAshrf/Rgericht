
import './Instgram.css' ;
import React from 'react';
import { useRef,useEffect } from 'react';
import Heading from '../Knife/Heading.jsx';
import Button from '../Knife/Button.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
function Instgram(){
    const myRef = useRef(null);
    const Instpic = ["../../gericht/src/assets/inst4.jpg",
    "../../gericht/src/assets/inst2.jpg",
    "../../gericht/src/assets/inst3.jpg",
    "../../gericht/src/assets/inst1.jpg",
    "../../gericht/src/assets/inst5.jpg",
    "../../gericht/src/assets/inst6.jpg",
    "../../gericht/src/assets/inst7.jpg"];
    const Instapics = Instpic.map((elem,index)=>
    <div key={index} style={{border:"1px solid rgb(228, 209, 102)"}}>
        <img className='instimg' src={elem}/>
    </div>
    ); 
    
    useEffect(()=>{
        myRef.current.addEventListener('keydown', disableKeyboardScroll);
        myRef.current.addEventListener('click', disableKeyboardScroll);
    },[])
    //disable keydowns:
    const disableKeyboardScroll = (event) =>{
        console.log('is called');
        console.log(event);
        var keys = [32,33,34,35,37,38,39,40];
        keys.forEach((item,index)=>{
          if(item === event.keyCode){
              event.preventDefault();
              return false;
          }
        })
    }/*
    function disable(){
        document.querySelector('.picsDev').addEventListener('kewdown',(event)=>{disableKeyboardScroll(event)});
    }
    disable();*/
    let rightcount =0;
    
    function handleClickR(){
        const imgWidth = document.querySelector('.instimg').clientWidth;
        document.querySelector('.but1').style.visibility="visible";
        document.querySelector('.but1').style.transition="0.35s ease";
        const imageList = document.querySelector('.picsDiv');
        const scrollAmount = imgWidth+26;
        imageList.scrollBy({left: scrollAmount, behavior:"smooth"});
        rightcount++;
        if(rightcount === 4){
            console.log(rightcount);
            document.querySelector('.but2').style.transition="none";
            document.querySelector('.but2').style.visibility="hidden";
        }
    }
    function handleClickL(){
        const imgWidth = document.querySelector('.instimg').clientWidth;
        document.querySelector('.but2').style.visibility="visible";
        document.querySelector('.but2').style.transition="0.35s ease";
        const imageList = document.querySelector('.picsDiv');
        const scrollAmount = -1*(imgWidth+26);
        imageList.scrollBy({left: scrollAmount, behavior:"smooth"});
        rightcount--;
        if(rightcount === 0){
            console.log(rightcount);
            document.querySelector('.but1').style.transition="none";
            document.querySelector('.but1').style.visibility="hidden";
        }
    }

    function viewMore(){

        document.querySelector('.Instgram-container').style.flexDirection="column";
        document.querySelector('.picsDiv').style.gridTemplateColumns="repeat(3,1fr)";
        document.querySelector('.picsDiv').style.overflowX="unset";
        document.querySelector('.picsDiv').style.marginTop="2rem";
        document.querySelector('.picsDiv').style.width="unset";
        document.querySelector('.but1').style.visibility="hidden";
        document.querySelector('.but2').style.visibility="hidden";

        document.querySelector('.picsDivContainer').style.width="unset";
        document.querySelector('.Instgram-container').style.alignItems="start";
    }
    return(
    <div className="Inst-bg" id="insta">
    <div className="Instgram-container">
        <div className='instInfoDiv'>
            <Heading head1="Instagram" head2="Photo Gallery"/>
            <p ref={myRef} className="lorem" style={{color:"rgb(187, 187, 187)",fontSize:"0.75rem", width:"90%"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam odit optio dolores cupiditate, blanditiis,
                et officiis.
            </p>
            <Button text="View More" func={viewMore}/>
        </div>
        <div className='picsDivContainer'>
            <div  onKeyDown={disableKeyboardScroll} className='picsDiv'>
                {Instapics}
                <button id="prev" onClick={handleClickL} className='but but1'><FontAwesomeIcon icon={faChevronLeft} /></button>
                <button id="next" onClick={handleClickR} className='but but2'><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        </div>
    </div>
    </div>);
} export default Instgram