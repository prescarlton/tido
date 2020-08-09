import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavItem extends React.Component {
    render() {
        console.log(this.props);
        const { router } = this.props;
        const { className, index, onlyActiveOnIndex, to, children, ...props } = this.props;

        const isActive = router.isActive(to, onlyActiveOnIndex);
        return (
            <li className={`${className} ${isActive ? this.props.activeClass : ''}`}>
                <NavLink {...props}>{children}</NavLink>
            </li>
        )
    }
}