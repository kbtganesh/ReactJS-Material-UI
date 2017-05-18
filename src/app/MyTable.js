import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


class MyTable extends React.Component{
   render(){
       return(
  <Table style={{display:'inline-block', width:'37%', backgroundColor: 'rgba(52, 52, 52, 0.1)', borderRadius:10}}>
    
    <TableBody style={{display: 'inline' }}>
      {this.props.rowData.map((data) => 
      <Content datatext={data}/>
      )}
    </TableBody>
  </Table>
);
   }
}
class Content extends React.Component {
   render() {
     console.log(this.props.datatext);
      return (
                 <TableRow ><TableRowColumn style={{textAlign: 'center', fontFamily: 'Roboto',fontSize: 20,fontWeight: 300,fontColor: '#ff5722'}}>{this.props.datatext}</TableRowColumn></TableRow>
      );
   }
}
export default MyTable;