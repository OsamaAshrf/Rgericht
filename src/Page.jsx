
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header/Header.jsx'
import Intro from './Components/Intro/Intro.jsx'
import Knife from './Components/Bigknife/Bigknife.jsx';
import Table from './Components/Servetable/Table.jsx'
import Menubig from './Components/Menucomp/Menubig.jsx';
import Chef from './Components/Chef/Chef.jsx';
import Comments from './Components/Comments/Comments.jsx';
import Awards from './Components/Awards/Awards.jsx'; 
import Blogs from  './Components/Blogs/Blogs.jsx'; 
import Instgram from  './Components/Instgram/Instgram.jsx'; 
import Newsletter from  './Components/Newsletter/Newsletter.jsx'; 
import Footer from  './Components/Footer/Footer.jsx'; 
import Footerdev from './Components/Footer/Footerdev.jsx';
import Bar from './Components/Bar/Bar.jsx';
import Video from './Components/Video/Video.jsx';


function App1() {

  return(
    <>
        <Header/>
        <Intro/>
        <Knife/>
        <Table/>
        <Bar/>
        <Menubig/>
        <Chef/>
        <Comments/>
        <Video/>
        <Awards/>
        <Blogs/>
        <Instgram/>
        <Newsletter/>
        <Footer/>
        <Footerdev/>
    </>
  );    
}

export default App1