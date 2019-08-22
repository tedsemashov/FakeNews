import React, {Component} from 'react';
import './topTrollsGender.css';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import * as am4charts from "@amcharts/amcharts4/charts";

class TopTrollsGender extends Component {

   componentDidMount() {
      this.createTrollsPieChart();
   };

   createTrollsPieChart = () => {
      am4core.useTheme(am4themes_animated);
      am4core.useTheme(am4themes_kelly);
      let chart = am4core.create("topTrollsGender", am4charts.XYChart);
      chart.data = [{
         "gender": "",
         "man": 501.9,
         "woman": 199
      }];

// Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "gender";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 20;

      var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "man";
      series.dataFields.categoryX = "gender";
      series.name = "Man";
      series.tooltipText = "{name}: [bold]{valueY}[/]";
      series.columns.template.fill = am4core.color("#4a90e2");

      let series3 = chart.series.push(new am4charts.ColumnSeries());
      series3.dataFields.valueY = "woman";
      series3.dataFields.categoryX = "gender";
      series3.name = "Woman";
      series3.tooltipText = "{name}: [bold]{valueY}[/]";
      series3.columns.template.fill = am4core.color("#a2cdff");

// Add cursor
      chart.cursor = new am4charts.XYCursor();

// Add legend
      chart.legend = new am4charts.Legend();
      categoryAxis.renderer.disabled = true;
      valueAxis.renderer.grid.template.disabled = true;
   };

   render() {
      return (
           <div className="topTrollsGender"/>
      );
   }
}

export default TopTrollsGender;