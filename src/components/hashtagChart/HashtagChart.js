import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import './hashtagChart.css';

class HashtagChart extends Component {
  componentDidMount() {
    this.chart = am4core.create('hashtagsChart', am4charts.XYChart);
    this.chart.cursor = new am4charts.XYCursor();
    const categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    const valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    const series = this.chart.series.push(new am4charts.ColumnSeries());
    series.fill = am4core.color('#d0021b');
    series.stroke = am4core.color('#d0021b');
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'category';
    valueAxis.renderer.labels.template.fill = am4core.color('#808080');
    valueAxis.renderer.labels.template.fontSize = 11;
    valueAxis.renderer.grid.template.strokeDasharray = '10';
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.disabled = true;
    categoryAxis.renderer.labels.template.fill = am4core.color('#808080');
    valueAxis.cursorTooltipEnabled = true;
    categoryAxis.dataFields.category = 'category';

    this.refreshChartData();
  }

  componentWillUnmount() {
    this.disposeChart();
  }

  componentDidUpdate() {
    this.refreshChartData();
  }

  disposeChart() {
    if(this.chart) this.chart.dispose();

    this.chart = null;
  }

  refreshChartData() {
    this.chart.data = this.getHashtagChart();
  };

  getHashtagChart = () => {
    let data = this.props.tweetsCount;
    let dataArray = [];
    for (let key in data) {
      dataArray.push({
        category: key,
        value: data[key]
      });
    }
    return dataArray;
  };

  render() {
    return(
      <div>
        <div id="hashtagsChart" />
      </div>
    );
  }
}

export default HashtagChart;
