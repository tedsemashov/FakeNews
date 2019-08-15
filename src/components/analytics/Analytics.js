import React, {Component} from 'react';
import './analytics.css';
import Header from '../header/Header';
import Subheader from  '../subheader/Subheader';

class Analytics extends Component {
   state = {
      timePeriod: false
   };

   componentDidMount() {
      //Method for getting data from back-end
      // this.props.getTwitterData();
   };

   toogleTimePeriod = () => {
      this.setState(state => ({timePeriod: !state.timePeriod}))
   };
   // setSelectedName = (id) => {
   //    this.props.setSelectedName(id);
   // };

   render() {
      // const {filteredNames} = this.props;
      return (
           <div>
              <Header/>
              <Subheader onClick={this.toogleTimePeriod}/>
              {/*<ListGroup>*/}
              {/*   <ListGroup.Item>*/}
              {/*      <FilterInput/>*/}
              {/*   </ListGroup.Item>*/}
              {/*   <ListGroup.Item>*/}
              {/*      <SelectedNames/>*/}
              {/*   </ListGroup.Item>*/}
              {/*   <ListGroup.Item>*/}
              {/*      {*/}
              {/*         filteredNames.map(({id, name,}) =>*/}
              {/*              <Button variant="outline-primary" size="sm" type="button" id="buttonName"*/}
              {/*                      key={id} onClick = {() => this.setSelectedName(id)}> {name} </Button>*/}
              {/*         )*/}
              {/*      }*/}
              {/*   </ListGroup.Item>*/}
              {/*</ListGroup>*/}
           </div>
      );
   }
}

export default Analytics;