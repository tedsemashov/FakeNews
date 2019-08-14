import React, {Component} from 'react';
import './subheader.css';
import Section from './section/Section';

class Subheader extends Component {

   componentDidMount() {
   };

   render() {
      return (
           <div className='subheaderContainer'>
               <div className='subheaderSections'>
                  <div className='sectionsWrapper'>
                     <Section sectionClass='sectionSelected' sectionValue='DEFAULT'/>
                     <Section sectionClass='sectionDefault' sectionValue='ZELENSKIY'/>
                     <Section sectionClass='sectionDefault' sectionValue='WAR WITH RUSSIA'/>
                  </div>
                  <div className='subheaderDots'>
                     <p className='round'/>
                     <p className='round'/>
                     <p className='round'/>
                  </div>
               </div>
               <div className='subheaderSeparator'/>
               <div className='subheaderInputs'></div>
           </div>
      );
   }
}

export default Subheader;