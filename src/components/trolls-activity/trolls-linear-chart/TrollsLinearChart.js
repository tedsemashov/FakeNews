import React from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import './trollsLinearChart.css';

export default class TrollsLinearChart extends React.Component {
  componentDidMount() {
    this.setChart();

    this.createHashtagChart();
  };

  componentDidUpdate() {
    this.disposeChart();
    this.setChart();
    this.createHashtagChart();
  }

  componentWillUnmount() {
    this.disposeChart();
  }

  setChart() {
    this.chart = am4core.create("TrollsLinearChart", am4charts.XYChart);
    this.categoryAxis = new am4charts.CategoryAxis();
    this.valueAxis = new am4charts.ValueAxis();
    this.series = new am4charts.ColumnSeries();

    this.chart.xAxes.push(this.categoryAxis);
    this.chart.yAxes.push(this.valueAxis);
    this.chart.series.push(this.series);
  }

  disposeChart() {
    if(this.chart) this.chart.dispose();
    if(this.categoryAxis) this.categoryAxis.dispose();
    if(this.valueAxis) this.valueAxis.dispose();
    if(this.series) this.series.dispose();

    this.chart = null;
    this.categoryAxis = null;
    this.valueAxis = null;
    this.series = null;
  }

  createHashtagChart = () => {
    this.chart.data = this.getHashtagChart();
    this.categoryAxis.dataFields.category = "category";
    this.series.fill = am4core.color("#ffc800");
    this.series.stroke = am4core.color("#ffc800");
    this.series.dataFields.valueY = "value";
    this.series.dataFields.categoryX = "category";
    this.valueAxis.renderer.labels.template.fill = am4core.color("#808080");
    this.valueAxis.renderer.labels.template.fontSize = 11;
    this.valueAxis.renderer.grid.template.strokeDasharray = "10";
    this.categoryAxis.renderer.grid.template.disabled = true;
    this.categoryAxis.renderer.labels.template.fill = am4core.color("#808080");
    this.chart.cursor = new am4charts.XYCursor();
    this.categoryAxis.renderer.disabled = true;
    this.valueAxis.cursorTooltipEnabled = true;
  };

  getHashtagChart() {
    let data = this.props.tweetsCount;
    let dataArray = [];
    for (let key in data) {
      dataArray.push({
        "category": key,
        "value": data[key]
      })
    }
    return dataArray;
  };

  render() {
    return (
      <div className='trollsLinearChartContainer'>
        <div id="TrollsLinearChart"/>
      </div>
    );
  }
}
