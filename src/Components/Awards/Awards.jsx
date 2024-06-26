import './Awards.css' ;
import Heading from '../Knife/Heading.jsx';
import Laurel from '../Knife/Laurel.jsx';

function Awards(){

    return(
    <div className="Awards-bg" id='awards'>
        <div className="Awards-container">
            <div className="Infodev">
                <Heading head1="Awards & Recognotion" head2="Our Laurels" dirc=""/>
                <div className='AwardContain'>
                    <Laurel img="../../gericht/src/assets/award02.png" title="Bib Gourmond" text="Lorem ipsum dolor sit amet, consectetur"/>
                    <Laurel img="../../gericht/src/assets/award01.png" title="Bib Gourmond" text="Lorem ipsum dolor sit amet, consectetur"/>
                    <Laurel img="../../gericht/src/assets/award05.png" title="Bib Gourmond" text="Lorem ipsum dolor sit amet, consectetur"/>
                    <Laurel img="../../gericht/src/assets/award03.png" title="Bib Gourmond" text="Lorem ipsum dolor sit amet, consectetur"/>
                </div>
            </div>
            <div className="picdev">
                <img src="../../gericht/src/assets/laurels.png" style={{width:"80%"}}/>
            </div>
        </div>
    </div>);
} export default Awards