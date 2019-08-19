import React, {Component} from 'react';
import './trollsActivity.css';
import SectionTitle from '../section-title/SectionTitle';
import TrollsPieChart from '../trolls-activity/trolls-pie-chart/index';

class TrollsActivity extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='trollsWrapper'>
              <div className='titleWrapper'>
                 <SectionTitle value='TROLLS ACTIVITY'/>
              </div>
              <div className='trollsChartsWrapper'>
                 <div className='trollsPieChartsWrapper'>
                    <div className='trollsPieWrapperUsers'>
                       <TrollsPieChart data={this.props.fakeUsers}/>
                    </div>
                    <div className='trollsPieWrapperNews'>
                       <TrollsPieChart data={this.props.fakeNews}/>
                    </div>
                 </div>
                 <div className='trollsLinearChart'>
                 </div>
              </div>

           </div>
      );
   }
}

export default TrollsActivity;