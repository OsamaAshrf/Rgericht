import Heading from '../Knife/Heading';
import Bio from '../Knife/Bio';
import './Comments.css';

function Comments(){

    return(
    <div className="Comments-container" id="test">
        <Heading head1="Testimony" head2="Happy Customers" dirc="center"/>
        <div className="bioGrid">
            <Bio pic="/Rgericht/assets/prof1.png"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas maiores pariatur nulla eum sequi sed. Quod libero, sint, sunt odio ut saepe, doloribus at iusto eligendi labore distinctio inventore consequatur."
            name="Wade Warren"
            jop="Sommelier"/>
            <Bio pic="/Rgericht/assets/prof2.png"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas maiores pariatur nulla eum sequi sed. Quod libero, sint, sunt odio ut saepe, doloribus at iusto eligendi labore distinctio inventore consequatur."
            name="Wade Warren"
            jop="Sommelier"/>
            <Bio pic="/Rgericht/assets/prof3.png"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas maiores pariatur nulla eum sequi sed. Quod libero, sint, sunt odio ut saepe, doloribus at iusto eligendi labore distinctio inventore consequatur."
            name="Wade Warren"
            jop="Sommelier"/>
            <Bio pic="/Rgericht/assets/prof4.png"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas maiores pariatur nulla eum sequi sed. Quod libero, sint, sunt odio ut saepe, doloribus at iusto eligendi labore distinctio inventore consequatur."
            name="Wade Warren"
            jop="Sommelier"/>
        </div>
    </div>);
} export default Comments
