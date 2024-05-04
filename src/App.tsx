import type { WidgetConfig } from '@lifi/widget';
import { LiFiWidget } from '@lifi/widget';
import React from "react";
import Logo from "./logo.png";
import '../styles/globals.css';
import { useState , useEffect } from 'react';


export const widgetConfig: Partial<WidgetConfig> = {
  containerStyle: {
    border: `2px solid #21273a `,
    borderRadius: '16px',
  },
  theme: {
    palette: {
      primary: { main: '#6164ff' },
      secondary: { main: '#FFFFFF' },
      background: { 
        paper: '#1f2639', // bg color for cards
        default: '#0d1421', // transparent , #0e111b
        },

    },
    
    shape: {
      borderRadius: '11px',
      
    },
    typography: {
      fontFamily: "Segoe UI" ,
      
    }
    },
    appearance: 'dark',
    hiddenUI: ['appearance'],
    variant: 'expandable',
    subvariant: 'split',
};

export function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth >= 700) {
      setShowSidebar(false); // Close sidebar on larger screens
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const handleButtonClick1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };

  const handleButtonClick2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
  };

  const handleButtonClick3 = () => {
    const url = "https://hiswap.org/blog";
    window.open(url, '_blank'); // Opens the URL in a new tab
  };

  const handleButtonClick4 = () => {
    const url = "https://perp.hiswap.org/";
    window.open(url, '_blank'); // Opens the URL in a new tab
  };

  const handleButtonClick5 = () => {
    const url = "https://hiswap.org/about-us";
    window.open(url, '_blank'); // Opens the URL in a new tab
  };
  const headerItem = { 
    marginLeft:'10px',
    padding: '10px',
    paddingLeft: '15px',
    paddingRight: '15px',
    borderRadius:' 11px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f2639',
    color: 'white' ,
    fontSize : '17px',
    cursor: 'pointer', 
    
    
    
  }


  const lastheaderItem: React.CSSProperties = {
    position: 'absolute',
    top: '20px',       // Adjust this value as needed
    right: '45px', 
    marginRight:'0px',
    padding: '10px',
    paddingLeft :'15px',
    paddingRight : '15px',
    borderRadius:' 11px',
    alignItems: 'right',
    backgroundColor: '#1f2639',
    color: 'white' ,
    fontSize : '17px',
    cursor: 'pointer', 
    
    
    
    
  }
  const headerCss = {  height: '60px',
  display: 'flex',
  alignItems : 'center',
  paddingLeft : '50px' , 
  paddingRight: '50px',
  paddingTop: '16px' ,
  paddingBottom : '22px'
}

const logoDiv ={  display: 'flex',
alignItems: 'center',
gap: '20px'
}

const logoCss = {
  width: '180px',
  height: '42px',
  paddingRight: '20px',
  paddingLeft:'-10px'
}



const ifrCss ={    border:' 2px solid #21273a' , borderRadius : '15px' ,  width: '490px' , height: '590px' , marginLeft : '35%'}

const ifrCss2 ={    border:' 2px solid #21273a' , borderRadius : '15px' ,  width: '370px' , height: '520px' , marginLeft : '15%'}


const sidebarCss: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '250px',
  backgroundColor: '#1f2639',
  zIndex: 1000,
  transition: 'transform 0.3s ease',
  transform: showSidebar ? 'translateX(0)' : 'translateX(-100%)',
};

const sidebarItemCss = {
  padding: '15px',
  color: 'white',
  cursor: 'pointer',
  borderBottom: '1px solid #333',
};

const contentCss = {
  marginLeft: showSidebar ? '250px' : 0,
  transition: 'margin-left 0.3s ease',
};
  
  return(
    <div  >
      <head>
        <title>Home | HiSwap Protocol App </title>
        
        
      </head>

      
      <header
       style={headerCss}
  >
      <div style={logoDiv}>
       <a href='https://app.hiswap.org' ><img src={Logo} alt="logo" style={logoCss} />
       </a>

      
      </div>


      {windowWidth > 1101 && (
<div style={headerCss}>
  
        <div style={headerItem} onClick={handleButtonClick1}>Swap & Bridge</div>
        <div style={headerItem} onClick={handleButtonClick4}>Trading Perps</div>

<div style={headerItem} onClick={handleButtonClick2}>Buy Crypto</div>

<div style={headerItem} onClick={handleButtonClick3}>Blog & News</div>
<div style={headerItem} onClick={handleButtonClick5}>About Us</div>

</div>

)}

      {windowWidth < 1100 && (
            <div style={lastheaderItem} onClick={toggleSidebar} >
              ☰
            </div>
          )}



      
    </header>
    
    
    { !showSidebar   ? (
        <div>
        {showDiv1 && <LiFiWidget config={widgetConfig} integrator="vite-example" />}
        {showDiv2 && windowWidth < 1100 && <iframe  style={ifrCss2} allow="usb; ethereum; clipboard-write" loading="lazy"  title="Buy Crypto widget" src="https://global.transak.com/" ></iframe>}

        {showDiv2 &&  windowWidth > 1100 && <iframe  style={ifrCss} allow="usb; ethereum; clipboard-write" loading="lazy"  title="Buy Crypto widget" src="https://global.transak.com/" ></iframe>}
         </div> 
      ) : (
        <div style={sidebarCss}>
          <div style={sidebarItemCss} onClick={() => { toggleSidebar(); handleButtonClick1(); }}>Swap & Bridge</div>
          <div style={sidebarItemCss}  onClick={() => { toggleSidebar(); handleButtonClick4(); }}>Trading Perps</div>
          <div style={sidebarItemCss}  onClick={() => { toggleSidebar(); handleButtonClick2(); }}>Buy Crypto</div>
          <div style={sidebarItemCss}  onClick={() => { toggleSidebar(); handleButtonClick3(); }}>Blog & News</div>
          <div style={sidebarItemCss}  onClick={() => { toggleSidebar(); handleButtonClick5(); }}>ABout Us</div>

        </div>
      )}
      </div>
    

   
  )
  
}
