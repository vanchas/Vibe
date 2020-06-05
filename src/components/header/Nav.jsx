import React, { useState, useEffect } from 'react';
import s from './header.module.scss';
import PropTypes from 'prop-types';
import { authenticationService } from '../../_services';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavComponent = props => {
  const [activeLink, setActiveLink] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{
      maxWidth: '1260px', margin: '0 auto'
    }}>
      <Navbar color="dark" dark expand="lg">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/modelCabinet" onClick={() => setActiveLink('model cabinet')} className={activeLink === 'model cabinet' ? s.activeLink : null}>Model Cabinet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/userCabinet" onClick={() => setActiveLink('user cabinet')} className={activeLink === 'user cabinet' ? s.activeLink : null}>User Cabinet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/addPost" onClick={() => setActiveLink('add post')} className={activeLink === 'add post' ? s.activeLink : null}>Add Post</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login" onClick={() => setActiveLink('login')} className={activeLink === 'login' ? s.activeLink : null}>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => authenticationService.logout()} >Logout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin" onClick={() => setActiveLink('admin')} className={activeLink === 'admin' ? s.activeLink : null}>Admin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/test" onClick={() => setActiveLink('test')} className={activeLink === 'test' ? s.activeLink : null}>TEST</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

NavComponent.getInitialProps = async ({ Component, ctx }) => {
  return {}
}


NavComponent.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

export default NavComponent;
