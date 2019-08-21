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

                        </div>
                        <div className='topTrollsCharts'>

                        </div>
                     </div>
                     <div className='topTrollsSectionBlock'>

                     </div>

                 </div>
              </div>
           </div>
      );
   }
}

export default TopTrolls;