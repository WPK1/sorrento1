import {Link, NavLink} from 'react-router-dom'
import '../Styles/Header.css'
export function Header ( props ) {
    const Navigation = props.nav.map( (item) => {
        return (
            <NavLink
             to={item.link}
             activeClassName="active"
             exact={ (item.link==="/") ? true : false }
              >{item.name}</NavLink>
        )
    } )
    return (
        <header className="Header">
        <Link to ="/">
        <img className="logo" src={props.logo} />
        </Link>
        <nav className="navigation">
            {Navigation}
        </nav>
        </header>

    )
}

export default Header