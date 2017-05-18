/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Snackbar from 'material-ui/Snackbar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';



 import MyTable from './MyTable'
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  containerTop: {
    width: '100%',
    position: 'relative',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 200,
    top: 20,
  }
};



class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleTextField = this.handleTextField.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);   
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);   
    this.handleCloseDrawer = this.handleCloseDrawer.bind(this);   


    this.state = {
      open: false,
      openSnackbar: false,
      openDrawer: false,
      rowss: ['hi','hey'],
      tfText:'',
    };
  }
  

  handleRequestClose() {
    this.setState({
      open: false,
      openSnackbar: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

handleTextField(e){
  this.setState({tfText: e.target.value});
}
  handleAddButton(){
      this.setState({ 
    rowss: this.state.rowss.concat([this.state.tfText]),
    openSnackbar: true
    })
  }

  // Drawer
  handleToggleDrawer(){
    this.setState({openDrawer: !this.state.openDrawer});
    console.log("toogle")
  }
  handleCloseDrawer(){
  this.setState({openDrawer: false});
}
// handleRequestClose () { 
//     this.setState({
//       openSnackbar: false,
//     });
//   };
  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      
   <MuiThemeProvider muiTheme={muiTheme}>
  <div>
     
  <AppBar
    onLeftIconButtonTouchTap={this.handleToggleDrawer}
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  <div style={styles.containerTop}>
    
    <p style={{fontSize:30, color: '#ff54a9'}}> Enter Your To-Do List To add it in the list </p>
    <TextField style={{width:'30%', fontFamily: 'Roboto',fontWeight: 300,}} onChange={this.handleTextField}
      hintText=""
      floatingLabelText="Enter here"
    /> <br/>
 <FloatingActionButton 
               mini={true} 
               style={{margin: 20}}
               onTouchTap={this.handleAddButton}
               backgroundColor = '#ff54a9'
               >
      <ContentAdd />
    </FloatingActionButton> <br/>

    
     
    <MyTable rowData={this.state.rowss}/>
    
      </div> 
  <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          
          <h1>Material-UI</h1>
          
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
        <Snackbar
          open={this.state.openSnackbar}
          message="Event added to your calendar"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.openDrawer}
          onRequestChange={(openDrawer) => this.setState({openDrawer})}
        >
          <MenuItem onTouchTap={this.handleCloseDrawer}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleCloseDrawer}>Menu Item 2</MenuItem>
        </Drawer>
        </div>
       </MuiThemeProvider>
    );
  }
}

class Content extends React.Component {
   render() {
     console.log(this.props.datatext);
      return (
                 <li>{this.props.datatext}</li>
      );
   }
}

export default Main;
