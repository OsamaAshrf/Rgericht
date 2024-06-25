import './Menubig.css'
import Button from '../Knife/Button.jsx';
import Heading from '../Knife/Heading.jsx';
import Menu from '../Knife/Menu.jsx';

function Menubig(){
    const menu1Arr = [
    {head:"Chapel Hill Shiraz",prize:56,type1:"AU",type2:"Bottle"},
    {head:"Catena Malbec",prize:59,type1:"AR",type2:"Bottle"},
    {head:"La Vieille Rose",prize:44,type1:"FR",type2:"750 ml"},
    {head:"Rhino Pale Ale",prize:31,type1:"CA",type2:"750 ml"},
    {head:"Irish Guinness",prize:26,type1:"IE",type2:"750 ml"},
    ]
    const menu2Arr = [
        {head:"Chapel Hill Shiraz",prize:20,type1:"AU",type2:"Bottle"},
        {head:"Catena Malbec",prize:16,type1:"AR",type2:"Bottle"},
        {head:"La Vieille Rose",prize:10,type1:"FR",type2:"750 ml"},
        {head:"Rhino Pale Ale",prize:31,type1:"CA",type2:"750 ml"},
        {head:"Irish Guinness",prize:26,type1:"IE",type2:"750 ml"},
        ]
    return(
    <div className="Menubig" id="menu">
        <Heading head1="Menu That Fits You Palatte" head2="Today's Special" dirc="center"/>
        <div className='triplecont'>
            <Menu className="menudev" items={menu1Arr} catagory="Wine & Beer"/>
            <div style={{display:"flex",flex:"1"}}>
                <img src="../../src/assets/menu.png" style={{width:"100%",objectFit:"cover"}} className="mb-5"/>
            </div>
            <Menu items={menu1Arr}  catagory="Wine & Beer"/>
        </div>
    </div>);
} export default Menubig