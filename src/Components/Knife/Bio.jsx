import './Heading.css';

function Bio(props){
    const pic = props.pic;
    const comment = props.comment;
    const name = props.name;
    const jop = props.jop;

    return(
    <div className="Bio">
        <div style={{position:"relative" ,width:"80px"}}>
            <img src="../../gericht/src/assets/quote.png" style={{width:"2.5rem", position:"absolute",top:"3.8rem",right:"-1rem"}}/>
            <img src={pic} style={{width:"100%"}}></img>
        </div>
        <div className='comment-container'>
            <p>{comment}</p>
            <div className='nameJop-container'>
                <h5>{name}</h5>
                <p>{jop}</p>
            </div>
        </div>
    </div>
);
} export default Bio