import React, {Component} from 'react';
import './topTrolls.css';
import SectionTitle from '../section-title/SectionTitle';
import TopTrollsWorld from './top-trolls-world/index';
import TopTrollsGender from './top-trolls-gender/index';
import TopTrollsAge from './top-trolls-age/index';

class TopTrolls extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='topTrollsContainer'>
              <div className='titleWrapperNews'>
                 <SectionTitle value='TOP TROLLS'/>
              </div>
              <div className='topTrollsWrapper'>
                 <div className='topTrollsSection'>

                 </div>
                 <div className='topTrollsSection'>
                     <div className='topTrollsSectionBlock'>
                        <div className='topTrollsCharts'>
                           <p className='topTrollsWorldHeader'>IN THE WORLD</p>
                           <TopTrollsWorld data={this.props.fakeData}/>
                        </div>
                        <div className='topTrollsCharts'>
                           <p className='topTrollsWorldHeader'>GENDER</p>
                           <TopTrollsGender/>
                        </div>
                     </div>
                     <div className='topTrollsSectionAge'>
                        <p className='topTrollsAgeHeader'>AGE</p>
                        <TopTrollsAge/>
                     </div>
                 </div>
              </div>
           </div>
      );
   }
}

export default TopTrolls;