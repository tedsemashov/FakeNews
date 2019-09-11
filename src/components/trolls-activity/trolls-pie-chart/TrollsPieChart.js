import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4charts from "@amcharts/amcharts4/charts";

import './trollsPieChart.css';

am4core.useTheme(am4themes_animated);

export default class TrollsPieChart extends React.Component {
  componentDidMount() {
    this.createTrollsPieChart();
  };

  componentWillUnmount() {
    this.disposeChart();
  }

  disposeChart() {
    if(this.pieSeries) this.pieSeries.dispose();
    if(this.chart) this.chart.dispose();

    this.chart = null;
    this.pieSeries = null;
  }

  createTrollsPieChart() {
    this.chart = am4core.create("trollsPieChart", am4charts.PieChart);
    this.pieSeries = new am4charts.PieSeries();
    this.chart.series.push(this.pieSeries);
    this.chart.data = this.props.data;
    this.pieSeries.dataFields.value = "amount";
    this.pieSeries.dataFields.category = "title";
    this.chart.innerRadius = am4core.percent(45);
    this.pieSeries.slices.template.strokeWidth = 2;
    this.pieSeries.slices.template.strokeOpacity = 1;
    this.chart.legend = new am4charts.Legend();
    this.pieSeries.labels.template.disabled = true;
    this.pieSeries.ticks.template.disabled = true;
    this.pieSeries.colors.list = [am4core.color("#d0021b"), am4core.color("#000000")];
  };

  render() {
    return (<div className="trollsPieChart" />);
  }
}
