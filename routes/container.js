import React from 'react'
import Nav from './nav'

var myStyle1 = {
    fontFamily: 'Dosis'
  }

export const Container = (props) => (
  <div style={myStyle1}>
    <Nav /> 
    {this.props.children}
  </div>
)