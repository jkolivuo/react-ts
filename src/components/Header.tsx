import * as React from 'react';
import '../styles/Header.css';

interface Props {
    title: string
}

const Header = (props: Props) => {
    return (
        <div className="header">
        <h3>{props.title}</h3>
    </div>
    );
    }

export default Header;