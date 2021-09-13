import React from 'react';
import {Link} from "react-router-dom";


export const Header = () => {
    return (
        <div >
            <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
                <div className="navbar-brand">
                    Todo App
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/"
                            exact
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
