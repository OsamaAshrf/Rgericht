import './Header.css' ;
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';
import { dom } from '@fortawesome/fontawesome-svg-core';


function Header (){
    function clos(){
        document.querySelector('.navbuttbg').style.transition="1.9s ease";
        document.querySelector('.navbuttbg').style.transform="translateY(-120%)";
        document.querySelector('.navbutt .nav-link').style.transform="translateX(-200px)";
        document.querySelectorAll('.navbutt .elem').forEach((item)=>{
            item.style.transform="translateX(-200px)";
        })
        document.querySelector('body').style.overflow="unset";
    }
    function openav(){
        document.querySelector('.navbuttbg').style.transition="1.5s ease";
        document.querySelector('.navbutt .nav-link').style.transform="translateY(0px)";
        document.querySelector('.navbuttbg').style.transform="translateX(0%)";
        document.querySelectorAll('.navbutt .elem').forEach((item)=>{
            item.style.transform="translateX(0)";
        })
        document.querySelector('body').style.overflow="hidden";
    }   
    
    return(
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className='logoimg' src="..\src\assets\gericht.png"></img></a>
            <div id='navCollap' className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">HOME</a>
                    </li>
                    <li className="nav-item page-nav">
                        <a className="nav-link" aria-current="page" href="#">PAGES <FontAwesomeIcon icon={faChevronDown} size="xs"/></a>
                        <div className='PagesNav'>
                            <Link to="#aboutUs" className="page-link">About Us & Our History</Link>
                            <Link to="#reserve" className="page-link">Reservation</Link>
                            <Link to="#menu" className="page-link">Menu</Link>
                            <Link to="#chef" className="page-link">Chef</Link>
                            <Link to="#test" className="page-link">Testimony</Link>
                            <Link to="#awards" className="page-link">Awards & Recognition</Link>
                            <Link to="#insta" className="page-link">Instgram</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#contactus">CONTACT US</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#blog">BLOGS</Link>
                    </li>
                </ul>
            </div>
            <form className="d-flex">
                <div className="d-flex search-container">
                    <input className="form-control me-2" type="search" placeholder="Search website" aria-label="Search"></input>
                    <button className="btn btn-dark"><FontAwesomeIcon icon={faSearch} size="xs"/></button>
                </div>
                <div className='butcont'>
                <button onClick={openav} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className='navbuttbg navbar-toggler'>
                    <div className='headtit'>
                        <a className="navbar-brand" href="#"><img className='logoimg' src="..\src\assets\gericht.png"></img></a>
                        <div className='clos' onClick={clos}><FontAwesomeIcon icon={faX} /></div>
                    </div>
                    <div className='navbutt'>
                        <a href='/' className="elem mb-3 isIn" style={{transition:"1.35s ease"}}>Home</a>
                        <div className='elem mb-3' style={{transition:"1.75s ease"}}>Pages <FontAwesomeIcon icon={faChevronRight} size="xs"></FontAwesomeIcon></div>
                        <a href='/about' className='nav-link mb-3' style={{transition:"1.95s ease"}}>About Us</a>
                        <div className='elem' style={{transition:"2.11s ease"}}>Blogs</div>
                    </div>
                </div>
            </form>
        </div>
    </nav> 
);
} export default Header