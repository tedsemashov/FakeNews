import React, {Component} from 'react';
import './trollsActivity.css';
import SectionTitle from '../section-title/SectionTitle'

class TrollsActivity extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='trollsWrapper'>
              <div className='titleWrapper'>
                 <SectionTitle value='TROLLS ACTIVITY'/>
              </div>
           </div>
      );
   }
}

export default TrollsActivity;