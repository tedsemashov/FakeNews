import React from "react";
import _ from "lodash";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export default class ManipulativeNewsTimeSeries extends React.Component {
  componentDidMount() {
    this.setChart();
  };

  componentDidUpdate() {
    this.disposeChart();
    this.setChart();
  }

  componentWillUnmount() {
    this.disposeChart();
  }

  setChart() {
    this.chart = am4core.create("ManipulativeNewsTimeSeries", am4charts.XYChart);
    this.categoryAxis = new am4charts.CategoryAxis();
    this.valueAxis = new am4charts.ValueAxis();
    this.series = new am4charts.ColumnSeries();

    this.chart.xAxes.push(this.categoryAxis);
    this.chart.yAxes.push(this.valueAxis);
    this.chart.series.push(this.series);

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

    this.chart.legend = new am4charts.Legend();
    this.chart.legend.labels.template.text = "Number of fake news";
    this.chart.legend.labels.template.fill = am4core.color("#808080");
    this.chart.legend.markers.template.width = 12;
    this.chart.legend.markers.template.height = 12;
  }

  disposeChart() {
    if(this.valueAxis) this.valueAxis.dispose();
    if(this.categoryAxis) this.categoryAxis.dispose();
    if(this.series) this.series.dispose();
    if(this.chart) this.chart.dispose();

    this.chart = null;
    this.categoryAxis = null;
    this.valueAxis = null;
    this.series = null;
  }

  getHashtagChart() {
    let data = this.props.timeSeries;
    let dataArray = _.map(data, (value, key)=> {
      return (
        {
          "category": key,
          "value": value * 100
        }
      )
    });
    return dataArray;
  }

  render() {
    return (
      <div className='ManipulativeNewsTimeSeriesContainer'>
        <div id="ManipulativeNewsTimeSeries"/>
      </div>
    );
  }
}
