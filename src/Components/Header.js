import React from "react";

import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

//Import Image
import logo from '../img/logo.png';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Navbar dark expand="md" scrolling className="z-depth-0 w-100 position-fixed">
                <NavbarBrand href="/">
                    <img src={logo} alt="Logo" id="myLogo"/>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav right>
                    <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>MENS</DropdownToggle>
                            <DropdownMenu>
                                <div>
                                <div className="wrapper-dropdown">
                                    <div>
                                        <h6>CASUALS</h6>
                                        <DropdownItem href="#">Jackets</DropdownItem>
                                        <DropdownItem href="#">Hoodies & Sweatshirts</DropdownItem>
                                        <DropdownItem href="#">Polo Shirts</DropdownItem>
                                        <DropdownItem href="#">Sportswear</DropdownItem>
                                        <DropdownItem href="#">Trousers & Chinos</DropdownItem>
                                        <DropdownItem href="#">T-Shirts</DropdownItem>
                                    </div>

                                    <div>
                                        <h6>FORMAL</h6>
                                        <DropdownItem href="#">Jackets</DropdownItem>
                                        <DropdownItem href="#">Shirts</DropdownItem>
                                        <DropdownItem href="#">Suits</DropdownItem>
                                        <DropdownItem href="#">Trousers</DropdownItem>
                                    </div>
                                </div>
                                <div className="autumn-sale text-center text-white d-flex justify-content-center align-items-center">
                                    <h6 className="text-uppercase">autumn sale! <br/>
                                        up to 50% OFF
                                    </h6>
                                </div>
                                </div>
                            </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                        <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>WOMENS</DropdownToggle>
                            <DropdownMenu>
                                <div>
                                <div className="wrapper-dropdown">
                                    <div>
                                        <h6>CASUALS</h6>
                                        <DropdownItem href="#">Jackets</DropdownItem>
                                        <DropdownItem href="#">Hoodies & Sweatshirts</DropdownItem>
                                        <DropdownItem href="#">Polo Shirts</DropdownItem>
                                        <DropdownItem href="#">Sportswear</DropdownItem>
                                        <DropdownItem href="#">Trousers & Chinos</DropdownItem>
                                        <DropdownItem href="#">T-Shirts</DropdownItem>
                                    </div>

                                    <div>
                                        <h6>FORMAL</h6>
                                        <DropdownItem href="#">Jackets</DropdownItem>
                                        <DropdownItem href="#">Shirts</DropdownItem>
                                        <DropdownItem href="#">Suits</DropdownItem>
                                        <DropdownItem href="#">Trousers</DropdownItem>
                                    </div>
                                </div>
                                <div className="autumn-sale text-center text-white d-flex justify-content-center align-items-center">
                                    <h6 className="text-uppercase">autumn sale! <br/>
                                        up to 50% OFF
                                    </h6>
                                </div>
                                </div>
                            </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/brand">THE BRAND</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/stores">LOCAL STORES</NavLink>
                        </NavItem>
                        <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>LOOK BOOK</DropdownToggle>
                            <DropdownMenu>
                                <div>
                                <div className="wrapper-dropdown">
                                    <div>
                                        <h6>OUR LOOKBOOKS</h6>
                                        <DropdownItem href="#">Latest Posts (mixed)</DropdownItem>
                                        <DropdownItem href="#">Men's LookBook</DropdownItem>
                                        <DropdownItem href="#">Women's LookBook</DropdownItem>
                                    </div>

                                    <div>
                                        <h6>YOUR LOOKBOOK</h6>
                                        <DropdownItem href="#">View and Edit</DropdownItem>
                                        <DropdownItem href="#">Share</DropdownItem>
                                        <DropdownItem href="#">Delete</DropdownItem>
                                    </div>
                                </div>
                                <div className="autumn-sale text-center text-white d-flex justify-content-center align-items-center">
                                    <h6 className="text-uppercase">autumn sale! <br/>
                                        up to 50% OFF
                                    </h6>
                                </div>
                                </div>
                            </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    </NavbarNav>
                    <form className="form-inline md-form mt-0 ml-2 mb-0">
                        <input className="form-control mr-sm-2 mb-0 text-black" type="text" placeholder="Search" aria-label="Search"/>
                    </form>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;