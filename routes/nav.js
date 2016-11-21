import React from 'react'
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'

var myStyle1 = {
    marginLeft:  "-20px"
}
var myStyle2 = {
    color:  "#fff",
}
export default class navInstance extends React.Component {
  render() {
    return (

  <Navbar inverse fixedTop>
      <Navbar.Header>
        <Button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span style={myStyle2}>MENU</span>
        </Button>
      </Navbar.Header>
    <Navbar.Collapse id="myNavbar">
      <Nav style={myStyle1}>
        <NavItem eventKey={1} href="#home">Home</NavItem>
        <NavItem eventKey={2} href="#fruits">Fruits</NavItem>
        <NavItem eventKey={3} href="#veggies">Veggies</NavItem>
        <NavItem eventKey={4} href="#contact">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

);}}
