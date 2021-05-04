import Logo from './sorrento_by_the_sea_logo.jpg'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Home} from'./Components/Home'
import {Apartment} from'./Components/Apartment'
import {Booking} from'./Components/Booking'
import {FAQ} from'./Components/FAQ'
import {Contact} from'./Components/Contact'
import {LocalArea} from './Components/LocalArea'
import {NotFound} from './Components/NotFound'
import {Header} from './Components/Header'

const NavItems = [
  {"name" : "Home" , "link" : "/" },
  {"name" : "The Apartment" , "link" : "/apartment" },
  {"name" : "FAQ" , "link" : "/faq" },
  {"name" : "Booking" , "link" : "/booking" },
  {"name" : "Local Area" , "link" : "/localarea" },
  {"name" : "Contact" , "link" : "/contact" }
]
function App() {
  return (
    <div className="website">
      <Header logo={Logo} nav={NavItems}/>
      <main className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Apartment"> 
          <Apartment />
          </Route>
          <Route path="/Booking">
          <Booking />
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/LocalArea">
          <LocalArea/>
          </Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route path="*">
          <NotFound />
          </Route>

        </Switch>
      </main>
      <footer className="footer"></footer>
  
    </div>


  );
}

export default App;
