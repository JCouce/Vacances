import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {
    renderLogin(){
        switch (this.props.auth) {
            case null:
                return (
                    <div className="header-item login">
                        Loading
                    </div>
                )
            case false:
                return (
                    <a className="header-item login" href="/auth/google">
                        Log in with google
                    </a>
                )
            default:
                return (
                    <a className="header-item login" href="/api/logout">
                        Log out
                    </a>
                )
        }
    }
    renderUser(){
        switch (this.props.auth) {
            case null:
                return 'LOADING'
            case false:
                return ''
            default:
                return (<span role="img" aria-label="Snowman">👤  {this.props.auth.name}</span>)
        }
    }

    render() {
        return (
            <div>
                <nav className="header-wrapper">
                    <a className="header-item logo" href="/">
                        Booklyng
                    </a>
                    <a className="header-item username" href="/account">
                        {this.renderUser()}
                    </a>
                    {this.renderLogin()}
                </nav>
            </div>
        );
    }
}
function mapStateToProps({auth}) {
    return { auth }   
}

export default connect(mapStateToProps)(Header)
