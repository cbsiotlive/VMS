
// ------------------------side ber----------------------------------
const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});


$(document).ready(function () {
    $(".dashboard-nav-item").click(function () {
        // Remove the "active" class from all items
        $(".dashboard-nav-item").removeClass("active");

        // Add the "active" class to the clicked item
        $(this).addClass("active");
    });
});
// ------------------------side ber End----------------------------------

let chart = am4core.create("activeStrategiesChart", am4charts.PieChart);
var emp = 89;
var oth = 59;
var cop = 18;
var gov = 13;

var total = emp + oth + cop + gov;
chart.data = [
    {
        'name': 'Employee',
        'numberOfStrategies': emp
    },
    {
        'name': 'Other',
        'numberOfStrategies': oth
    },
    {
        'name': 'Corporate',
        'numberOfStrategies': cop
    },
    {
        'name': 'Gov',
        'numberOfStrategies': gov
    }
];

let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "numberOfStrategies";
pieSeries.dataFields.category = "name";

chart.innerRadius = am4core.percent(40);
chart.paddingTop = 0;
chart.marginTop = 0;
chart.valign = 'top';
chart.contentValign = 'top';

// add number of strategies
let label = chart.seriesContainer.createChild(am4core.Label);
label.text = total + "+";
label.horizontalCenter = "middle";
label.verticalCenter = "middle";
label.fontSize = 16;
label.fontWeight = "bold";

pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 1;
pieSeries.slices.template.strokeOpacity = 1;

// Display actual values in labels
pieSeries.labels.template.text = "{name}" + "{value}";

pieSeries.labels.template.disabled = false;
pieSeries.ticks.template.disabled = true;
pieSeries.slices.template.tooltipText = "";
pieSeries.slices.template.fillOpacity = 1;

// tooltip
pieSeries.slices.template.tooltipHTML = '<div>{category}: {value.value}</div>';

//--------------------------------------chart4 div two ----------------------------------------

let chart2 = am4core.create("chartdivtwo", am4charts.PieChart);
var emp2 = 89;
var oth = 59;
var cop = 18;
var gov = 13;

var total = emp2 + oth + cop + gov;
chart2.data = [
    {
        'name': 'Employee',
        'numberOfStrategies': emp2
    },
    {
        'name': 'Other',
        'numberOfStrategies': oth
    },
    {
        'name': 'Corporate',
        'numberOfStrategies': cop
    },
    {
        'name': 'Gov',
        'numberOfStrategies': gov
    }
];

let pieSeries2 = chart2.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "numberOfStrategies";
pieSeries2.dataFields.category = "name";

chart2.innerRadius = am4core.percent(40);
chart2.paddingTop = 0;
chart2.marginTop = 0;
chart2.valign = 'top';
chart2.contentValign = 'top';

// add number of strategies
let label2 = chart2.seriesContainer.createChild(am4core.Label);
label2.text = total + "+";
label2.horizontalCenter = "middle";
label2.verticalCenter = "middle";
label2.fontSize = 16;
label2.fontWeight = "bold";

pieSeries2.slices.template.stroke = am4core.color("#fff");
pieSeries2.slices.template.strokeWidth = 1;
pieSeries2.slices.template.strokeOpacity = 1;

// Display both name and values in labels
pieSeries2.labels.template.text = "{category}: {value}";

pieSeries2.labels.template.disabled = false;
pieSeries2.ticks.template.disabled = true;
pieSeries2.slices.template.tooltipText = "";
pieSeries2.slices.template.fillOpacity = 1;

// tooltip
pieSeries2.slices.template.tooltipHTML = '<div>{category}: {value.value}</div>';

//---------------------------------chart div tree----------------------------------
let chart3 = am4core.create("chartdivthree", am4charts.PieChart);
var emp2 = 89;
var oth = 59;
var cop = 18;
var gov = 13;

var total = emp2 + oth + cop + gov;
chart3.data = [
    {
        'name': 'Employee',
        'numberOfStrategies': emp2
    },
    {
        'name': 'Other',
        'numberOfStrategies': oth
    },
    {
        'name': 'Corporate',
        'numberOfStrategies': cop
    },
    {
        'name': 'Gov',
        'numberOfStrategies': gov
    }
];

let pieSeries3 = chart3.series.push(new am4charts.PieSeries());
pieSeries3.dataFields.value = "numberOfStrategies";
pieSeries3.dataFields.category = "name";

chart3.innerRadius = am4core.percent(40);
chart3.paddingTop = 0;
chart3.marginTop = 0;
chart3.valign = 'top';
chart3.contentValign = 'top';

// add number of strategies
let label3 = chart3.seriesContainer.createChild(am4core.Label);
label3.text = total + "+";
label3.horizontalCenter = "middle";
label3.verticalCenter = "middle";
label3.fontSize = 16;
label3.fontWeight = "bold";

pieSeries3.slices.template.stroke = am4core.color("#fff");
pieSeries3.slices.template.strokeWidth = 1;
pieSeries3.slices.template.strokeOpacity = 1;

// Display both name and values in labels
pieSeries3.labels.template.text = "{category}: {value}";

pieSeries3.labels.template.disabled = false;
pieSeries3.ticks.template.disabled = true;
pieSeries3.slices.template.tooltipText = "";
pieSeries3.slices.template.fillOpacity = 1;

// tooltip
pieSeries3.slices.template.tooltipHTML = '<div>{category}: {value.value}</div>';
//---------------------------------chart div 4----------------------------------
let chart4 = am4core.create("chartdiv4", am4charts.PieChart);
var emp2 = 89;
var oth = 59;
var cop = 18;
var gov = 13;

var total = emp2 + oth + cop + gov;
chart4.data = [
    {
        'name': 'Employee',
        'numberOfStrategies': emp2
    },
    {
        'name': 'Other',
        'numberOfStrategies': oth
    },
    {
        'name': 'Corporate',
        'numberOfStrategies': cop
    },
    {
        'name': 'Gov',
        'numberOfStrategies': gov
    }
];

let pieSeries4 = chart4.series.push(new am4charts.PieSeries());
pieSeries4.dataFields.value = "numberOfStrategies";
pieSeries4.dataFields.category = "name";

chart4.innerRadius = am4core.percent(40);
chart4.paddingTop = 0;
chart4.marginTop = 0;
chart4.valign = 'top';
chart4.contentValign = 'top';

// add number of strategies
let label4 = chart4.seriesContainer.createChild(am4core.Label);
label4.text = total + "+";
label4.horizontalCenter = "middle";
label4.verticalCenter = "middle";
label4.fontSize = 16;
label4.fontWeight = "bold";

pieSeries4.slices.template.stroke = am4core.color("#fff");
pieSeries4.slices.template.strokeWidth = 1;
pieSeries4.slices.template.strokeOpacity = 1;

// Display both name and values in labels
pieSeries4.labels.template.text = "{category}: {value}";

pieSeries4.labels.template.disabled = false;
pieSeries4.ticks.template.disabled = true;
pieSeries4.slices.template.tooltipText = "";
pieSeries4.slices.template.fillOpacity = 1;

// tooltip
pieSeries4.slices.template.tooltipHTML = '<div>{category}: {value.value}</div>';

//---------------------------------chart div 5----------------------------------
let chart5 = am4core.create("chartdiv5", am4charts.PieChart);
var emp2 = 89;
var oth = 59;
var cop = 18;
var gov = 13;

var total = emp2 + oth + cop + gov;
chart5.data = [
    {
        'name': 'Employee',
        'numberOfStrategies': emp2
    },
    {
        'name': 'Other',
        'numberOfStrategies': oth
    },
    {
        'name': 'Corporate',
        'numberOfStrategies': cop
    },
    {
        'name': 'Gov',
        'numberOfStrategies': gov
    }
];

let pieSeries5 = chart5.series.push(new am4charts.PieSeries());
pieSeries5.dataFields.value = "numberOfStrategies";
pieSeries5.dataFields.category = "name";

chart5.innerRadius = am4core.percent(40);
chart5.paddingTop = 0;
chart5.marginTop = 0;
chart5.valign = 'top';
chart5.contentValign = 'top';

// add number of strategies
let label5 = chart5.seriesContainer.createChild(am4core.Label);
label5.text = total + "+";
label5.horizontalCenter = "middle";
label5.verticalCenter = "middle";
label5.fontSize = 16;
label5.fontWeight = "bold";

pieSeries5.slices.template.stroke = am4core.color("#fff");
pieSeries5.slices.template.strokeWidth = 1;
pieSeries5.slices.template.strokeOpacity = 1;

// Display both name and values in labels
pieSeries5.labels.template.text = "{category}: {value}";

pieSeries5.labels.template.disabled = false;
pieSeries5.ticks.template.disabled = true;
pieSeries5.slices.template.tooltipText = "";
pieSeries5.slices.template.fillOpacity = 1;

// tooltip
pieSeries5.slices.template.tooltipHTML = '<div>{category}: {value.value}</div>';

//---------------------------------chart div 6----------------------------------
let chart6 = am4core.create("chartdiv6", am4charts.PieChart);
var emp2 = 89;
var oth = 59;
var cop = 18;
var gov = 13;

var total = emp2 + oth + cop + gov;
chart6.data = [
    {
        'name': 'Employee',
        'numberOfStrategies': emp2
    },
    {
        'name': 'Other',
        'numberOfStrategies': oth
    },
    {
        'name': 'Corporate',
        'numberOfStrategies': cop
    },
    {
        'name': 'Gov',
        'numberOfStrategies': gov
    }
];

let pieSeries6 = chart6.series.push(new am4charts.PieSeries());
pieSeries6.dataFields.value = "numberOfStrategies";
pieSeries6.dataFields.category = "name";

chart6.innerRadius = am4core.percent(40);
chart6.paddingTop = 0;
chart6.marginTop = 0;
chart6.valign = 'top';
chart6.contentValign = 'top';

// add number of strategies
let label6 = chart6.seriesContainer.createChild(am4core.Label);
label6.text = total + "+";
label6.horizontalCenter = "middle";
label6.verticalCenter = "middle";
label6.fontSize = 16;
label6.fontWeight = "bold";

pieSeries6.slices.template.stroke = am4core.color("#fff");
pieSeries6.slices.template.strokeWidth = 1;
pieSeries6.slices.template.strokeOpacity = 1;

// Display both name and values in labels
pieSeries6.labels.template.text = "{category}: {value}";

pieSeries6.labels.template.disabled = false;
pieSeries6.ticks.template.disabled = true;
pieSeries6.slices.template.tooltipText = "";
pieSeries6.slices.template.fillOpacity = 1;

// tooltip
pieSeries6.slices.template.tooltipHTML = '<div>{category}: {value.value}</div>';

//--------------------------------------------------------------------------------------------
am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("line-chartdiv", am4charts.XYChart);

    chart.data = [{
        "Date": "21/11",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "22/11",
        "CBS1": 1039,
        "CBS2": 483,
        "CBS3": 27,
        "CBS4": 89,
        "CBS5": 159,
        "CBS6": 277,
        "CBS7": 21,
        "CBS8": 215,
        "CBS9": 600,
        "CBS10": 29
    }, {
        "Date": "23/11",
        "CBS1": 959,
        "CBS2": 119,
        "CBS3": 458,
        "CBS4": 44,
        "CBS5": 159,
        "CBS6": 77,
        "CBS7": 71,
        "CBS8": 609,
        "CBS9": 207,
        "CBS10": 11
    }, {
        "Date": "24/11",
        "CBS1": 200,
        "CBS2": 179,
        "CBS3": 687,
        "CBS4": 39,
        "CBS5": 459,
        "CBS6": 207,
        "CBS7": 10,
        "CBS8": 709,
        "CBS9": 67,
        "CBS10": 571
    }, {
        "Date": "25/11",
        "CBS1": 459,
        "CBS2": 789,
        "CBS3": 907,
        "CBS4": 40,
        "CBS5": 59,
        "CBS6": 367,
        "CBS7": 902,
        "CBS8": 39,
        "CBS9": 27,
        "CBS10": 0
    }, {
        "Date": "26/11",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "27/11",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "28/11",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "29/11",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "30/11",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "01/12",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "02/12",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "03/12",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "04/12",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "05/12",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "06/12",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "07/12",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "08/12",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }, {
        "Date": "09/12",
        "CBS1": 1159,
        "CBS2": 1159,
        "CBS3": 277,
        "CBS4": 71,
        "CBS5": 1159,
        "CBS6": 277,
        "CBS7": 71,
        "CBS8": 1159,
        "CBS9": 277,
        "CBS10": 71
    }];

    chart.dateFormatter.inputDateFormat = "dd/MM";
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;
    dateAxis.baseInterval = {
        timeUnit: "Date",
        count: 1
    };

    // Set the date format for the axis labels
    dateAxis.dateFormats.setKey("day", "dd");

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    // Your series configuration...

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;

    // Remove scrollbar
    chart.scrollbarX = new am4core.Scrollbar();

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "Date";
    series.name = "CBS1";
    series.dataFields.valueY = "CBS1";
   // series.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series.tooltipText = "[#000]{valueY.value}[/]";
    series.tooltip.background.fill = am4core.color("#FFF");
    series.tooltip.getStrokeFromObject = true;
    series.tooltip.background.strokeWidth = 3;
    series.tooltip.getFillFromObject = false;
    series.fillOpacity = 0.6;
    series.strokeWidth = 2;
    series.stacked = true;

    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.name = "CBS2";
    series2.dataFields.dateX = "Date";
    series2.dataFields.valueY = "CBS2";
   // series2.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series2.tooltipText = "[#000]{valueY.value}[/]";
    series2.tooltip.background.fill = am4core.color("#FFF");
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.background.strokeWidth = 3;
    series2.sequencedInterpolation = true;
    series2.fillOpacity = 0.6;
    series2.stacked = true;
    series2.strokeWidth = 2;

    var series3 = chart.series.push(new am4charts.LineSeries());
    series3.name = "CBS3";
    series3.dataFields.dateX = "Date";
    series3.dataFields.valueY = "CBS3";
   // series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series3.tooltipText = "[#000]{valueY.value}[/]";
    series3.tooltip.background.fill = am4core.color("#FFF");
    series3.tooltip.getFillFromObject = false;
    series3.tooltip.getStrokeFromObject = true;
    series3.tooltip.background.strokeWidth = 3;
    series3.sequencedInterpolation = true;
    series3.fillOpacity = 0.6;
    series3.defaultState.transitionDuration = 1000;
    series3.stacked = true;
    series3.strokeWidth = 2;



    var series4 = chart.series.push(new am4charts.LineSeries());
    series4.name = "CBS4";
    series4.dataFields.dateX = "Date";
    series4.dataFields.valueY = "CBS3";
   // series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series4.tooltipText = "[#000]{valueY.value}[/]";
    series4.tooltip.background.fill = am4core.color("#FFF");
    series4.tooltip.getFillFromObject = false;
    series4.tooltip.getStrokeFromObject = true;
    series4.tooltip.background.strokeWidth = 3;
    series4.sequencedInterpolation = true;
    series4.fillOpacity = 0.6;
    series4.defaultState.transitionDuration = 1000;
    series4.stacked = true;
    series4.strokeWidth = 2;



    var series5 = chart.series.push(new am4charts.LineSeries());
    series5.name = "CBS5";
    series5.dataFields.dateX = "Date";
    series5.dataFields.valueY = "CBS3";
   // series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series5.tooltipText = "[#000]{valueY.value}[/]";
    series5.tooltip.background.fill = am4core.color("#FFF");
    series5.tooltip.getFillFromObject = false;
    series5.tooltip.getStrokeFromObject = true;
    series5.tooltip.background.strokeWidth = 3;
    series5.sequencedInterpolation = true;
    series5.fillOpacity = 0.6;
    series5.defaultState.transitionDuration = 1000;
    series5.stacked = true;
    series5.strokeWidth = 2;



    var series6 = chart.series.push(new am4charts.LineSeries());
    series6.name = "CBS6";
    series6.dataFields.dateX = "Date";
    series6.dataFields.valueY = "CBS3";
   // series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series6.tooltipText = "[#000]{valueY.value}[/]";
    series6.tooltip.background.fill = am4core.color("#FFF");
    series6.tooltip.getFillFromObject = false;
    series6.tooltip.getStrokeFromObject = true;
    series6.tooltip.background.strokeWidth = 3;
    series6.sequencedInterpolation = true;
    series6.fillOpacity = 0.6;
    series6.defaultState.transitionDuration = 1000;
    series6.stacked = true;
    series6.strokeWidth = 2;


    var series7 = chart.series.push(new am4charts.LineSeries());
    series7.name = "CBS7";
    series7.dataFields.dateX = "Date";
    series7.dataFields.valueY = "CBS3";
   // series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series7.tooltipText = "[#000]{valueY.value}[/]";
    series7.tooltip.background.fill = am4core.color("#FFF");
    series7.tooltip.getFillFromObject = false;
    series7.tooltip.getStrokeFromObject = true;
    series7.tooltip.background.strokeWidth = 3;
    series7.sequencedInterpolation = true;
    series7.fillOpacity = 0.6;
    series7.defaultState.transitionDuration = 1000;
    series7.stacked = true;
    series7.strokeWidth = 2;



    var series8 = chart.series.push(new am4charts.LineSeries());
    series8.name = "CBS8";
    series8.dataFields.dateX = "Date";
    series8.dataFields.valueY = "CBS3";
   // series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series8.tooltipText = "[#000]{valueY.value}[/]";
    series8.tooltip.background.fill = am4core.color("#FFF");
    series8.tooltip.getFillFromObject = false;
    series8.tooltip.getStrokeFromObject = true;
    series8.tooltip.background.strokeWidth = 3;
    series8.sequencedInterpolation = true;
    series8.fillOpacity = 0.6;
    series8.defaultState.transitionDuration = 1000;
    series8.stacked = true;
    series8.strokeWidth = 2;


    var series9 = chart.series.push(new am4charts.LineSeries());
    series9.name = "CBS9";
    series9.dataFields.dateX = "Date";
    series9.dataFields.valueY = "CBS3";
   // series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series9.tooltipText = "[#000]{valueY.value}[/]";
    series9.tooltip.background.fill = am4core.color("#FFF");
    series9.tooltip.getFillFromObject = false;
    series9.tooltip.getStrokeFromObject = true;
    series9.tooltip.background.strokeWidth = 3;
    series9.sequencedInterpolation = true;
    series9.fillOpacity = 0.6;
    series9.defaultState.transitionDuration = 1000;
    series9.stacked = true;
    series9.strokeWidth = 2;




    var series10 = chart.series.push(new am4charts.LineSeries());
    series10.name = "CBS10";
    series10.dataFields.dateX = "Date";
    series10.dataFields.valueY = "CBS3";
   // series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series10.tooltipText = "[#000]{valueY.value}[/]";
    series10.tooltip.background.fill = am4core.color("#FFF");
    series10.tooltip.getFillFromObject = false;
    series10.tooltip.getStrokeFromObject = true;
    series10.tooltip.background.strokeWidth = 3;
    series10.sequencedInterpolation = true;
    series10.fillOpacity = 0.6;
    series10.defaultState.transitionDuration = 1000;
    series10.stacked = true;
    series10.strokeWidth = 2;




    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();

    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";

    // axis ranges
    var range = dateAxis.axisRanges.create();
    range.date = new Date(2001, 0, 1);
    range.endDate = new Date(2003, 0, 1);
    range.axisFill.fill = chart.colors.getIndex(7);
    range.axisFill.fillOpacity = 0.2;

    range.label.text = "Fines for speeding increased";
    range.label.inside = true;
    range.label.rotation = 90;
    range.label.horizontalCenter = "right";
    range.label.verticalCenter = "bottom";

    var range2 = dateAxis.axisRanges.create();
    range2.date = new Date(2007, 0, 1);
    range2.grid.stroke = chart.colors.getIndex(7);
    range2.grid.strokeOpacity = 0.6;
    range2.grid.strokeDasharray = "5,2";


    range2.label.text = "Motorcycle fee introduced";
    range2.label.inside = true;
    range2.label.rotation = 90;
    range2.label.horizontalCenter = "right";
    range2.label.verticalCenter = "bottom";

}); // end am4core.ready()