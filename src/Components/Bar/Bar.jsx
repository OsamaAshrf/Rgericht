import { useState } from 'react';
import './Bar.css' ;

function Bar(){
    const backg = ["../../src/assets/beer.jpg",
    "../../src/assets/beer2.png",
    "../../src/assets/beer3.png"
    ];
    let i = "";
    function hoverHandle(event){
        i = `0${event.target.id}`;
        if(i === "00"){
            document.getElementById('00').style.width="7.1rem";
            document.getElementById('01').style.width="0";
            document.getElementById('02').style.width="0";
            document.getElementById('backg').src=`${backg[0]}`;

        }else if(i === "01"){
            document.getElementById('00').style.width="0";
            document.getElementById('01').style.width="7.8rem";
            document.getElementById('02').style.width="0";
            document.getElementById('backg').src=`${backg[1]}`;
        } else{
            document.getElementById('00').style.width="0";
            document.getElementById('01').style.width="0";
            document.getElementById('02').style.width="10.1rem";
            document.getElementById('backg').src=`${backg[2]}`;
        }
    }
    return(
    <div className="Bar-container">
        <img id="backg" src={backg[0]} className='background'/>
        <div className='titles'>
            <span  id="00" className='active0 mb-5' >
                <div id="0" className='Bar' onMouseOver={hoverHandle}>Bar Menu</div>
            </span>
            <span id="01" className='active1 mb-5'>
                <div id="1" className='Food' onMouseOver={hoverHandle}>Food Menu</div>
            </span>
            <span id="02" className='active2'> 
                <div id="2" className='Desserts' onMouseOver={hoverHandle}>Desserts Menu</div>
            </span>
        </div>

    </div>);
} export default Bar