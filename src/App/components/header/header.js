import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title">分组列表</div>
                <button className="button">分组学员</button>
            </div>
        );
    }
}

export default Header;  