import React from 'react';
import _ from "lodash";
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';

import './words.css';

am4core.useTheme(am4themes_animated);

export default class Words extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checkWords: false };

    this.onHashTagSelect = this.onHashTagSelect.bind(this);
    this.createWords = this.createWords.bind(this);
    this.onChartReady = this.onChartReady.bind(this);
  }

  componentDidMount() {
    this.chart = am4core.create("hashtagsWords", am4plugins_wordCloud.WordCloud);
    this.series = new am4plugins_wordCloud.WordCloudSeries();
    this.series.maxCount = 20;
    this.series.minWordLength = 2;
    this.series.minFontSize = 30;
    this.series.maxFontSize = 120;
    this.series.randomness = 0.5;
    this.series.angles = [0];
    this.series.labels.template.fill = am4core.color("#000000");
    this.series.dataFields.word = "tag";
    this.series.dataFields.value = "weight";

    this.chart.series.push(this.series);
    this.series.events.off("arrangestarted", this.onChartReady);
    this.series.events.on("arrangestarted", this.onChartReady);

    this.createWords();
  }

  componentWillUnmount() {
    this.disposeChart();
  }

  componentDidUpdate() {
    this.createWords();
  }

  disposeChart() {
    if(!this.chart) return;

    this.chart.dispose();
    this.chart = null;
    this.series = null;
  }

  createWords() {
    if(!this.chart) return;

    const { hashtags } = this.props;

    this.series.data = _.map(hashtags, (weight, tag) => ({ tag, weight }));
    this.series.labels.template.events.off("hit", this.onHashTagSelect);
    this.series.labels.template.events.on("hit", this.onHashTagSelect);
  };

  onChartReady(event) {
    const { keyword } = this.props;

    const current = _.find(event.target.labels.values, (v) => v.currentText.toLowerCase() === keyword.toLowerCase());
    // not found;
    if(!current) return;

    // highlight current;
    current.background.fill = am4core.color("#000000");
    current.fill = am4core.color("#ffffff");
  }

  onHashTagSelect(event) {
    const { keyword } = this.props;
    const tagName = event.target.currentText;

    // clicked the same tag; no need to reload;
    if(keyword === tagName) return;

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
