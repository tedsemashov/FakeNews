import React, {Component} from 'react';
import './subheader.css';
import Section from './section/Section';
import Dropdown from '../dropdown/Dropdown';
import Search from './search-input/Search';

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
               <div className='subheaderInputs'>
                  <div className='inputWrapperTime'>
                     <Dropdown className = {'dropdownInput'}
                               placeholder = {'Select time period'}
                               title = {'Time Period'}
                               onClick = {this.props.onClick}
                     />
                  </div>
                  <div className='inputSearchWrapper'>
                     <Search title={'Key words'}
                             className={'searchInputArea'}
                     />
                  </div>
                  <div className='inputWrapperEmotions'>
                     <Dropdown className = {'dropdownInput'}
                               placeholder = {'Select emotion'}
                               title = {'Emotion / Sentiment'}
                               value = {'Any'}
                     />
                  </div>
               </div>
           </div>
      );
   }
}

export default Subheader;