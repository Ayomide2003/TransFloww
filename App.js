import React from 'react'
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import SemiBody from './SemiBody';
import BodyTwo from './BodyTwo';
import Transport from './Transport';
import Customer from './Customer';
import Moving from './Moving';
import Export from './Export'
import Contact from './contact'
import News from './News'
import Footer from './Footer';
import CopyRight from './CopyRight';
function App() {
  return (
    <div className="app">
     <Header />
     <Sidebar/>
    
        <div className="bg">
            <Body/>
        </div>
        <SemiBody/>
   <div className="bag">
    </div>
    <BodyTwo/>
    <Transport />
    <Customer/>
    <Moving/>
    <Export/>
    
    <Contact/>
    <News/>
    <Footer/>
    <CopyRight/>
   </div>
 
  );
}

export default App;
