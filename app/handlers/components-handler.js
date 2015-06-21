import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/components/buttons'>Buttons</Link></li>
                    <li><Link to='/components/button-groups'>Button groups</Link></li>
                    <li><Link to='/components/dropdown-buttons'>Dropdown Buttons</Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }

}
