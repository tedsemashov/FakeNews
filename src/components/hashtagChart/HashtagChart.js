import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import './hashtagChart.css';

class HashtagChart extends Component {
  componentDidMount() {
    this.createHashtagChart();
  }

  componentDidUpdate() {
    this.createHashtagChart();
  }

  createHashtagChart = () => {
    let chart = am4core.create('hashtagsChart', am4charts.XYChart);
    chart.data = this.getHashtagChart();
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.fill = am4core.color('#d0021b');
    series.stroke = am4core.color('#d0021b');
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'category';
    valueAxis.renderer.labels.template.fill = am4core.color('#808080');
    valueAxis.renderer.labels.template.fontSize = 11;
    valueAxis.renderer.grid.template.strokeDasharray = '10';
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.fill = am4core.color('#808080');
    chart.cursor = new am4charts.XYCursor();
    valueAxis.cursorTooltipEnabled = true;
  };

  getHashtagChart = () => {
    let data = this.props.tweetsCount;
    let dataArray = [];
    for (let key in data) {
      dataArray.push({
        category: key.slice(11, 16),
        value: data[key]
      });
    }
    return dataArray;
  };

  render() {
    return (
      <div>
        <div id="hashtagsChart" />
      </div>
    );
  }
}

export default HashtagChart;
