/* eslint-disable  no-unused-vars */
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import MiniDrawer from './components/minidrawer'

class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: [],
    };
  }

  handleToggle = () => this.setState({open: !this.state.open}); 

  render() {
    return (
      <div>
        <CssBaseline />
        <MiniDrawer />
      </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <DrawerSimpleExample />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// getUsers().then(result => {
//   let usersBody = "";

//   result.forEach(user => {
//     usersBody += `<tr>
//     <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
//     <td>${user.id}</td>
//     <td>${user.firstName}</td>
//     <td>${user.lastName}</td>
//     <td>${user.email}</td>
//     </tr>`
//   });

//   global.document.getElementById('users').innerHTML = usersBody;

//   const deleteLinks = global.document.getElementsByClassName('deleteUser');

//   //Must use array.from to create a real array from a DOM collection
//   //getElementsByClassName only returns an "array like" object
//   Array.from(deleteLinks, link => {
//     link.onclick = function(event) {
//       const element = event.target;
//       event.preventDefault();
//       deleteUser(element.attributes["data-id"].value);
//       const row = element.parentNode.parentNode;
//       row.parentNode.removeChild(row);
//     }
//   });
// });
