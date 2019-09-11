import React from "react";

import SectionTitle from '../section-title/SectionTitle';
import TrollsPieChart from '../trolls-activity/trolls-pie-chart/index';
import TrollsNewsChart from "./trolls-news-chart/index";
import TrollsLinearChart from "./trolls-linear-chart/index";

import './trollsActivity.css';

class TrollsActivity extends React.Component {
  render() {
    return (
      <div className='trollsWrapper'>
        <div className='titleWrapper'>
          <SectionTitle value='TROLLS ACTIVITY'/>
        </div>
        <div className='trollsChartsWrapper'>
          <div className='trollsPieChartsWrapper'>
            <div className='trollsPieWrapperUsers'>
              <p className='topTrollsWorldHeader'>FAKE USERS</p>
              <TrollsPieChart data={this.props.fakeUsers}/>
            </div>
            <div className='trollsPieWrapperNews'>
              <p className='topTrollsWorldHeader'>FAKE NEWS</p>
              <TrollsNewsChart data={this.props.fakeNews}/>
            </div>
          </div>
          <div className='trollsLinearChart'>
            <p className='topTrollsWorldHeader'>SENTIMENT OVER TIME</p>
            <TrollsLinearChart/>
          </div>
        </div>
      </div>
    );
  }
}

export default TrollsActivity;