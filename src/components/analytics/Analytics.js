import React, {Component} from 'react';
import './analytics.css';
import Header from '../header/Header';
import Subheader from  '../subheader/Subheader';
import TimeDropdown from  '../subheader/time-dropdown/TimeDropdown';

class Analytics extends Component {
   state = {
      timePeriod: false,
      timePeriodValue: '15 min'
   };

   componentDidMount() {
      //Method for getting data from back-end
      // this.props.getTwitterData();
   };

   toogleTimePeriod = () => {
      this.setState(state => ({timePeriod: !state.timePeriod}))
   };

   showTimePeriodDropdown = () => {
      if(this.state.timePeriod) {
         return (
              <div className='timeDropdownWrapper'>
                 <TimeDropdown/>
              </div>
         )
      }
   };
   // setSelectedName = (id) => {
   //    this.props.setSelectedName(id);
   // };

   render() {
      // const {filteredNames} = this.props;
      return (
           <div>
              <Header/>
              <Subheader onClick={this.toogleTimePeriod}
                         timePeriodValue={this.state.timePeriodValue}
              />
              {this.showTimePeriodDropdown()}
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