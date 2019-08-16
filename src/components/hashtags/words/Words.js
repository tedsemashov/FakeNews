import React, {Component} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import './words.css';

class Words extends Component {

   componentDidMount() {
   };

   componentDidUpdate() {
      this.createWords();
   }

   createWords = () => {
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
      let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
      series.maxCount = 20;
      series.minWordLength = 2;
      series.minFontSize = 30;
      series.maxFontSize = 150;
      series.randomness = 0.5;
      series.angles = [0];
      series.labels.template.fill = am4core.color("#1f1f1f");
      series.data = this.getHashtags();
      series.dataFields.word = "tag";
      series.dataFields.value = "weight";
   };

   getHashtags = () => {
      let data = this.props.hashtags;
      let dataArray = [];
      for (let key in data) {
         dataArray.push({
            "tag": key,
            "weight": data[key]
         })
      }
      return dataArray
   };

   render() {
      return (
           <div>
              <div id="chartdiv"/>
           </div>
      );
   }
}

export default Words;