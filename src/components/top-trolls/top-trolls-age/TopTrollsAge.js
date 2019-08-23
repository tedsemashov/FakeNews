import React, {Component} from 'react';
import './topTrollsAge.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";

class topTrollsAge extends Component {

   componentDidMount() {
      this.createTrollsLineraChart();
   };

   createTrollsLineraChart = () => {
      am4core.useTheme(am4themes_animated);
      am4core.useTheme(am4themes_dataviz);

      var chart = am4core.create("topTrollsAge", am4charts.XYChart);

      chart.data = [
         {
            category: "2 to 12",
            value1: 1,
            value2: 5,
            value3: 3,
            value4: 3
         },
         {
            category: "13 to 17",
            value1: 2,
            value2: 5,
            value3: 3,
            value4: 4
         },
         {
            category: "18 to 24",
            value1: 2,
            value2: 5,
            value3: 3,
            value4: 4
         },
         {
            category: "25 to 34",
            value1: 2,
            value2: 5,
            value3: 3,
            value4: 4
         },
         {
            category: "35 to 44",
            value1: 2,
            value2: 5,
            value3: 3,
            value4: 4
         },
         {
            category: "45 to 54",
            value1: 2,
            value2: 5,
            value3: 3,
            value4: 4
         },
         {
            category: "55 to 64",
            value1: 2,
            value2: 5,
            value3: 3,
            value4: 4
         },
         {
            category: "65+",
            value1: 2,
            value2: 5,
            value3: 3,
            value4: 4
         },
      ];

      chart.colors.step = 2;

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.line.strokeOpacity = 1;
      categoryAxis.renderer.minGridDistance = 30;

      categoryAxis.renderer.cellStartLocation = 0;
      categoryAxis.renderer.cellEndLocation = 1;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      let series1 = chart.series.push(new am4charts.ColumnSeries());
      series1.columns.template.width = am4core.percent(80);
      series1.columns.template.tooltipText = "{name}: {valueY.value}";
      series1.columns.template.strokeWidth = 0;
      series1.name = "Series 1";
      series1.dataFields.categoryX = "category";
      series1.dataFields.valueY = "value1";
      series1.columns.template.fill = am4core.color("#4a90e2");
      series1.stroke = am4core.color("#4a90e2");

      let series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.columns.template.width = am4core.percent(80);
      series2.columns.template.tooltipText = "{name}: {valueY.value}";
      series2.columns.template.strokeWidth = 0;
      series2.name = "Series 2";
      series2.dataFields.categoryX = "category";
      series2.dataFields.valueY = "value2";
      series2.columns.template.fill = am4core.color("#a2cdff");
      series2.stroke = am4core.color("#a2cdff");

      valueAxis.renderer.grid.template.disabled = true;
   };

   render() {
      return (
           <div className='topTrollsAge'/>
      );
   }
}

export default topTrollsAge;