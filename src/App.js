import Logo from './beachlogo.png'
import './App.css';

import {Header} from './Components/Header'
const NavItems = [
  {"name" : "Home" , "link" : "/home" },
  {"name" : "The Appartment" , "link" : "/appartment" },
  {"name" : "FAQ" , "link" : "/faq" },
  {"name" : "Book" , "link" : "/book" },
  {"name" : "Local Area" , "link" : "/local" },
  {"name" : "Contact" , "link" : "/contact" }
]
function App() {
  return (
    <div className="website">
      <Header logo={Logo} nav={NavItems}/>
      <main className="content"></main>
      <footer className="footer"></footer>
  
    </div>


  );
}

export default App;
