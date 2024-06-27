import '../Header/Header.css' ;
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';



function Headpg2 (){
    let ispressed = false;
    function openav(){
        if(ispressed === true){
            document.querySelector('.navbuttbg2').style.height="0";
            document.querySelector('.navbuttbg2').style.transition="1s ease";
            document.querySelector('.navbutt2 .nav-link').style.transform="translateX(-400px)";
            document.querySelectorAll('.elem').forEach((item)=>{
                item.style.transform="translateX(-950px)";
            })
            ispressed = false;
        }else{
            document.querySelector('.navbuttbg2').style.transition="0.35s ease";
            console.log('clicked');
            document.querySelector('.navbuttbg2').style.height="2.9rem";
            ispressed = true;
            document.querySelector('.navbutt2 .nav-link').style.transform="translateX(0)";
            document.querySelectorAll('.elem').forEach((item)=>{
                item.style.transform="translateX(0)";
            })
        }
    }
    
    return(
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className='logoimg' src="\Rgericht\assets\gericht.png"></img></a>
            <div id='navCollap' className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/Rgericht/" className="nav-link">HOME</a>
                    </li>
                    <li className="nav-item2">
                        <div className="nav-link">PAGES</div>
                    </li>
                    <li className="nav-item2">
                        <div className="nav-link">CONTACT US</div>
                    </li>
                    <li className="nav-item2">
                        <div className="nav-link">BLOGS</div>
                    </li>
                </ul>
            </div>
            <form className="d-flex">
                <div className="d-flex search-container">
                    <input className="form-control me-2" type="search" placeholder="Search website" aria-label="Search"></input>
                    <button className="btn btn-dark"><FontAwesomeIcon icon={faSearch} size="xs"/></button>
                </div>
                <div className='butcont2'>
                <button onClick={openav} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span  className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className='navbuttbg2 navbar-toggler'>
                    <div className='navbutt2'>
                        <a href="/Rgericht/" className="nav-link">Home</a>
                        <div className='elem'>Pages</div>
                        <a href="/Rgericht/about" className='elem isIn'>About Us</a>
                        <div className='elem'>Blogs</div>
                    </div>
                </div>
            </form>

        </div>
    </nav> 
);
} export default Headpg2
