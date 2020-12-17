import React, { Component } from 'react'
import { Trans } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby'
import { MenuItems } from './MenuItem'
import { Button } from '../Button/Button'
import Languages from '../Languages/Languages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'

class Navbar extends Component {
    state = {
        clicked: false,
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <div className="menu-icon" role="button" tabIndex={0} onClick={this.handleClick} onKeyDown={this.handleClick}>
                    <i>{this.state.clicked ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}</i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}><Trans>{item.title}</Trans></Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Button><Trans>Préinscription</Trans></Button>
                <Languages />
            </nav>
        )
    }
}

export default Navbar