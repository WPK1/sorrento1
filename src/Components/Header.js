import {Link} from 'react-router-dom'
import '../Styles/Header.css'
export function Header ( props ) {
    const Navigation = props.nav.map( (item) => {
        return (
            <Link
             to={item.link}
             exact={ (item.link==="/") ? true : false }
              >{item.name}</Link>
        )
    } )
    return (
        <header className="Header">
        <img className="logo" src={props.logo} />
        <nav className="navigation">
            {Navigation}
        </nav>
        </header>

    )
}

export default Header