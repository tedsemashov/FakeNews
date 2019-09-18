import React, {Component} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4charts from "@amcharts/amcharts4/charts";
import './topTrollsWorld.css';

class TopTrollsWorld extends Component {

   componentDidMount() {
      this.createTrollsPieChart();
   };

   componentDidUpdate() {
      this.createTrollsPieChart();
   }

   createTrollsPieChart = () => {
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("topTrollsWorld", am4charts.PieChart);
      chart.data = this.props.data;
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "amount";
      pieSeries.dataFields.category = "title";
      chart.innerRadius = am4core.percent(45);
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      chart.legend = new am4charts.Legend();
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      pieSeries.colors.list = [
         am4core.color("#fee58c"),
         am4core.color("#ffc800")
      ];
   };

   render() {
      return (
           <div className="topTrollsWorld"/>
      );
   }
}

export default TopTrollsWorld;