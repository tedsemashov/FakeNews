import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4charts from "@amcharts/amcharts4/charts";

import './trollsPieChart.css';

am4core.useTheme(am4themes_animated);

export default class TrollsPieChart extends React.Component {
  componentDidMount() {
    this.chart = am4core.create("trollsPieChart", am4charts.PieChart);
    this.pieSeries = new am4charts.PieSeries();

    this.chart.series.push(this.pieSeries);

    this.createTrollsPieChart();
  };

  componentWillUnmount() {
    if(!this.chart) return;

    this.chart.dispose();
    this.chart = null;
    this.pieSeries = null;
  }

  createTrollsPieChart() {
    if(!this.chart) return;

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
