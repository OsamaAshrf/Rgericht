import './Heading.css'

function Heading(props){
    const head1 = props.head1;
    const head2 = props.head2;
    const dirc = props.dirc;
    return(
    <div className="Head" style={{alignItems:`${dirc}`}}>
        <h5>{head1}</h5>
        <img style={{width:"2rem"}} src="../../src/assets/spoon.png" ></img>
        <h2>{head2}</h2>
    </div>);
} export default Heading