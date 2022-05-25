import React from 'react'
import './App.css'
import Data from './data'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'
import About from './pages/about'
import Lifetours from './pages/lifetours'
import Main from './components/Main'
import VirginiaWoolf from './pages/virginiaWoolf'
// import MayaAngelou from './pages/mayaAngelou'
// import WaltWhitman from './pages/waltWhitman'
// import SylviaPlath from './pages/sylviaPlath'
// import ToniMorrison from './pages/toniMorrison'
// import EmilyDickinson from './pages/emilyDickinson'
// import MaryShelley from './pages/maryShelley'
// import JaneAusten from './pages/janeAusten'
// import CharlesBukowski from './pages/charlesBukowski'
// import LordByron from './pages/lordByron'
import ContactUs from './pages/contactUs'
import Error from './components/Error'
// import Main from './components/Main';
import Footer from './components/Footer'



const App =()=> {
return (
	<BrowserRouter>
    <Header />
    <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/lifetours' element= {<Lifetours/>} />
        <Route path='/Main' element= {<Main/>} />
        <Route path='/virginiaWoolf' element= {<VirginiaWoolf/>} />
        {/* <Route path='/mayaAngelou' element= {<MayaAngelou/>} />
        <Route path='/waltWhitman' element= {<WaltWhitman/>} />
        <Route path='/sylviaPlath' element= {<SylviaPlath/>} />
        <Route path='/toniMorrison' element= {<ToniMorrison/>} />
        <Route path='/emilyDickinson' element= {<EmilyDickinson/>} />
        <Route path='/maryShelley' element= {<MaryShelley/>} />
        <Route path='/janeAusten' element= {<JaneAusten/>} />
        <Route path='/charlesBukowski' element= {<CharlesBukowski/>} />
        <Route path='/lordByron' element= {<LordByron/>} /> */}
        <Route path='/contactUs' element= {<ContactUs/>} />
        <Route path="*" element= {<Error />} />
      </Routes>
      <Footer />
	</BrowserRouter>
  );
}

export default App;
