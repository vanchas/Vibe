import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { authenticationService } from '../_services';
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
  // const [currentUser, setCurrentUser] = useState({});
  // const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // useEffect(() => {
  //   setCurrentUser(props.currentUser);
  //   setIsAdmin(props.currentUser === 'Admin' ? true : false);
  // }, []);

  const logout = () => {
    toggle();
    // authenticationService.logout();
  }


  return (
    <div>
      <Navbar color="light" light expand="lg">
        <NavbarBrand href="/">EGOLIST</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            {/* {currentUser.role &&
              <React.Fragment>
                <NavItem>
                  <NavLink href="/user" >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/messages" >
                    Messages
                  </NavLink>
                </NavItem>
                {isAdmin &&
                  <NavItem>
                    <NavLink href="/admin" >
                      Admin page
                  </NavLink>
                  </NavItem>}
                <NavItem>
                  <NavLink href="/login" onClick={logout} >
                    Logout
                </NavLink>
                </NavItem>
              </React.Fragment>} */}
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
