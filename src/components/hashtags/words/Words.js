import React, { Component } from 'react';
import _ from "lodash";
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';
import './words.css';

class Words extends Component {
  createWords = (hashTags, currentText, { onHit }) => {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("hashtagsWords", am4plugins_wordCloud.WordCloud);
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.maxCount = 20;
    series.minWordLength = 2;
    series.minFontSize = 30;
    series.maxFontSize = 120;
    series.randomness = 0.5;
    series.angles = [0];
    series.labels.template.fill = am4core.color("#000000");
    series.data = _.map(hashTags, (weight, tag) => ({ tag, weight }));
    series.dataFields.word = "tag";
    series.dataFields.value = "weight";
    // first delete all events;
    series.labels.template.events.off("hit", onHit);
    // add one event listener;
    series.labels.template.events.on("hit", onHit);
    series.events.on("ready", (event) => {
      const current = _.find(event.target.labels.values, (v) => v.currentText.toLowerCase() === currentText.toLowerCase());
      // not found;
      if(!current) return;

      // highlight current;
      current.background.fill = am4core.color("#000000");
      current.fill = am4core.color("#ffffff");
    });
  };

  constructor(props) {
    super(props);

    this.state = { checkWords: false };

    this.onHashTagSelect = this.onHashTagSelect.bind(this);
  }

  componentDidMount() {
    const { hashtags, keyword } = this.props;

    this.createWords(hashtags, keyword, { onHit: this.onHashTagSelect });
  }

  componentDidUpdate() {
    const { hashtags, keyword } = this.props;

    this.createWords(hashtags, keyword, { onHit: this.onHashTagSelect });
  }

  onHashTagSelect(event) {
    const { keyword } = this.props;
    const tagName = event.target.currentText;

    // clicked the same tag; no need to reload;
    // if(keyword === tagName) return;

    // roll the ball;
    this.props.onChange(tagName, this.props);
  }

  render() {
    return (
      <div>
        <div className="hashtagsWords" />
      </div>
    );
  }
}

export default Words;
