import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './header.component.css'


class Header extends Component {

    render() {
        return (
            <div className="header" >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todoTest">todoTest</Link>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Header;