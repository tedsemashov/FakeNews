import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';
import './words.css';

class Words extends Component {
  state = {
    checkWords: false
  };

  componentDidMount() {
    this.createWords();
  }

  componentDidUpdate() {
    this.createWords();
  }

  createWords = () => {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create('hashtagsWords', am4plugins_wordCloud.WordCloud);
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.maxCount = 20;
    series.minWordLength = 2;
    series.minFontSize = 30;
    series.maxFontSize = 120;
    series.randomness = 0.5;
    series.angles = [0];
    series.labels.template.fill = am4core.color('#000000');
    series.data = this.getHashtags();
    series.dataFields.word = 'tag';
    series.dataFields.value = 'weight';
    series.labels.template.events.on('hit', ev => {
      ev.target.background.fill = am4core.color('#000000');
      ev.target.fill = am4core.color('#ffffff');
    });
  };

  getHashtags = () => {
    let data = this.props.hashtags;
    let dataArray = [];
    for (let key in data) {
      dataArray.push({
        tag: key,
        weight: data[key]
      });
    }
    return dataArray;
  };

  render() {
    return (
      <div>
        <div className="hashtagsWords" />
      </div>
    );
  }
}

export default Words;
