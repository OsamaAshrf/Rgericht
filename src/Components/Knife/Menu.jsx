import './Heading.css'

function Menu(props){
    const Objects = props.items;
    const Head = props.catagory;
    const List = Objects.map((elem,index)=>
        <li key={index} className="mb-4">
            <div style={{display:"flex",alignItems:"center"}}>
                <span style={{color:"var(--color-theme-primary)",
                    fontFamily: "'Cormorant Upright', Sans-serif",
                    fontWeight:"bold",
                    fontSize:"1.1rem"
                }}>{elem.head}</span>
                <span style={{display:"flex", 
                borderBottom:"1px solid white",
                flex:"1",
                margin:"0 5px",
                marginBottom:"-9px"}}></span>
                <span style={{fontSize:"0.8rem"}}>${elem.prize}</span>
            </div>
            <label style={{color:"rgb(168, 168, 168)",
            fontSize:"0.8rem"
            }}>{elem.type1} | {elem.type2}</label>
        </li>
    );
    return(
    <div className="Menu">
        <h3 style={{fontFamily: "'Cormorant Upright', Sans-serif",fontWeight:"bold",fontSize:"38px"}}>{Head}</h3>
        <ul className="uMenu">{List}</ul>
    </div>);
} export default Menu