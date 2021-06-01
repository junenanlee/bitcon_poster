var bitCoinDataArray = [];
var ETHDataArray = [];
var xrpDataArray = [];
var brbDataArray = [];
var ltcDataArray = [];
var adaDataArray = [];
var linkDataArray = [];
var xlmDataArray = [];
var thetaDataArray = [];

var bitVal;
var ETHVal;
var brbVal;
var xrpVal;
var ltcVal;
var adaVal;
var linkVal;
var xlmVal;
var thetaVal;

function fnSaveAsPdf() {
  html2canvas(document.getElementById("capture")).then(function (canvas) {
    var imgData = canvas.toDataURL("image/png");
    var imgWidth = 420 * 1.414;
    var pageHeight = imgWidth * 1.414;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;

    var doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a1",
    });

    doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    doc.save("sample_A4.pdf");
    console.log("Reached here?");
  });
}

$(document).ready(function () {
  var contWidth = $(".svg-source").width();
  var contHeight = $(".svg-source").height();
  $("#capture").css("width", contWidth);
  $("#capture").css("height", contHeight);
  $("#container").css("width", contWidth);
  $("#container").css("height", contHeight * 0.9);
  $("#container").css("top", contHeight * 0.1);
  bitVal = parseFloat(removeComma(bitCoinVal[0].종가));
  ETHVal = parseFloat(removeComma(ethereum[0].종가));
  brbVal = parseFloat(removeComma(brb[0].종가));
  xrpVal = parseFloat(removeComma(xrp[0].종가));
  ltcVal = parseFloat(removeComma(ltc[0].종가));
  adaVal = parseFloat(removeComma(ada[0].종가));
  linkVal = parseFloat(removeComma(link[0].종가));
  xlmVal = parseFloat(removeComma(xlm[0].종가));
  thetaVal = parseFloat(removeComma(theta[0].종가));
  setBitCoinData();
  setChart();
  // setBubbleChart();
  setHeatMap();
});

function setHeatMap() {
  Highcharts.chart("heatmap-container", {
    series: [
      {
        type: "treemap",
        layoutAlgorithm: "squarified",
        data: heatmapData,
      },
    ],
    title: {
      text: "<b>암호화폐 점유율</b>",
    },
  });
}

function setBubbleChart() {
  Highcharts.chart("bubble-container", {
    chart: {
      type: "packedbubble",

      backgroundColor: "rgba(0,0,0,0)",
    },
    title: {
      text: "",
    },
    tooltip: {
      useHTML: true,
      pointFormat: "<b>{point.name}:</b> {point.value}m CO<sub>2</sub>",
    },
    plotOptions: {
      packedbubble: {
        minSize: "30%",
        maxSize: "120%",
        zMin: 0,
        zMax: 1000,
        layoutAlgorithm: {
          splitSeries: false,
          gravitationalConstant: 0.02,
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          filter: {
            property: "y",
            operator: ">",
            value: 250,
          },
          style: {
            color: "black",
            textOutline: "none",
            fontWeight: "normal",
          },
        },
      },
    },
    series: [
      {
        name: "Europe",
        data: [
          {
            name: "Germany",
            value: 767.1,
          },
          {
            name: "Croatia",
            value: 20.7,
          },
          {
            name: "Belgium",
            value: 97.2,
          },
          {
            name: "Czech Republic",
            value: 111.7,
          },
          {
            name: "Netherlands",
            value: 158.1,
          },
          {
            name: "Spain",
            value: 241.6,
          },
          {
            name: "Ukraine",
            value: 249.1,
          },
          {
            name: "Poland",
            value: 298.1,
          },
          {
            name: "France",
            value: 323.7,
          },
          {
            name: "Romania",
            value: 78.3,
          },
          {
            name: "United Kingdom",
            value: 415.4,
          },
          {
            name: "Turkey",
            value: 353.2,
          },
          {
            name: "Italy",
            value: 337.6,
          },
          {
            name: "Greece",
            value: 71.1,
          },
          {
            name: "Austria",
            value: 69.8,
          },
          {
            name: "Belarus",
            value: 67.7,
          },
          {
            name: "Serbia",
            value: 59.3,
          },
          {
            name: "Finland",
            value: 54.8,
          },
          {
            name: "Bulgaria",
            value: 51.2,
          },
          {
            name: "Portugal",
            value: 48.3,
          },
          {
            name: "Norway",
            value: 44.4,
          },
          {
            name: "Sweden",
            value: 44.3,
          },
          {
            name: "Hungary",
            value: 43.7,
          },
          {
            name: "Switzerland",
            value: 40.2,
          },
          {
            name: "Denmark",
            value: 40,
          },
          {
            name: "Slovakia",
            value: 34.7,
          },
          {
            name: "Ireland",
            value: 34.6,
          },
          {
            name: "Croatia",
            value: 20.7,
          },
          {
            name: "Estonia",
            value: 19.4,
          },
          {
            name: "Slovenia",
            value: 16.7,
          },
          {
            name: "Lithuania",
            value: 12.3,
          },
          {
            name: "Luxembourg",
            value: 10.4,
          },
          {
            name: "Macedonia",
            value: 9.5,
          },
          {
            name: "Moldova",
            value: 7.8,
          },
          {
            name: "Latvia",
            value: 7.5,
          },
          {
            name: "Cyprus",
            value: 7.2,
          },
        ],
      },
      {
        name: "Africa",
        data: [
          {
            name: "Senegal",
            value: 8.2,
          },
          {
            name: "Cameroon",
            value: 9.2,
          },
          {
            name: "Zimbabwe",
            value: 13.1,
          },
          {
            name: "Ghana",
            value: 14.1,
          },
          {
            name: "Kenya",
            value: 14.1,
          },
          {
            name: "Sudan",
            value: 17.3,
          },
          {
            name: "Tunisia",
            value: 24.3,
          },
          {
            name: "Angola",
            value: 25,
          },
          {
            name: "Libya",
            value: 50.6,
          },
          {
            name: "Ivory Coast",
            value: 7.3,
          },
          {
            name: "Morocco",
            value: 60.7,
          },
          {
            name: "Ethiopia",
            value: 8.9,
          },
          {
            name: "United Republic of Tanzania",
            value: 9.1,
          },
          {
            name: "Nigeria",
            value: 93.9,
          },
          {
            name: "South Africa",
            value: 392.7,
          },
          {
            name: "Egypt",
            value: 225.1,
          },
          {
            name: "Algeria",
            value: 141.5,
          },
        ],
      },
      {
        name: "Oceania",
        data: [
          {
            name: "Australia",
            value: 409.4,
          },
          {
            name: "New Zealand",
            value: 34.1,
          },
          {
            name: "Papua New Guinea",
            value: 7.1,
          },
        ],
      },
      {
        name: "North America",
        data: [
          {
            name: "Costa Rica",
            value: 7.6,
          },
          {
            name: "Honduras",
            value: 8.4,
          },
          {
            name: "Jamaica",
            value: 8.3,
          },
          {
            name: "Panama",
            value: 10.2,
          },
          {
            name: "Guatemala",
            value: 12,
          },
          {
            name: "Dominican Republic",
            value: 23.4,
          },
          {
            name: "Cuba",
            value: 30.2,
          },
          {
            name: "USA",
            value: 5334.5,
          },
          {
            name: "Canada",
            value: 566,
          },
          {
            name: "Mexico",
            value: 456.3,
          },
        ],
      },
      {
        name: "South America",
        data: [
          {
            name: "El Salvador",
            value: 7.2,
          },
          {
            name: "Uruguay",
            value: 8.1,
          },
          {
            name: "Bolivia",
            value: 17.8,
          },
          {
            name: "Trinidad and Tobago",
            value: 34,
          },
          {
            name: "Ecuador",
            value: 43,
          },
          {
            name: "Chile",
            value: 78.6,
          },
          {
            name: "Peru",
            value: 52,
          },
          {
            name: "Colombia",
            value: 74.1,
          },
          {
            name: "Brazil",
            value: 501.1,
          },
          {
            name: "Argentina",
            value: 199,
          },
          {
            name: "Venezuela",
            value: 195.2,
          },
        ],
      },
      {
        name: "Asia",
        data: [
          {
            name: "Nepal",
            value: 6.5,
          },
          {
            name: "Georgia",
            value: 6.5,
          },
          {
            name: "Brunei Darussalam",
            value: 7.4,
          },
          {
            name: "Kyrgyzstan",
            value: 7.4,
          },
          {
            name: "Afghanistan",
            value: 7.9,
          },
          {
            name: "Myanmar",
            value: 9.1,
          },
          {
            name: "Mongolia",
            value: 14.7,
          },
          {
            name: "Sri Lanka",
            value: 16.6,
          },
          {
            name: "Bahrain",
            value: 20.5,
          },
          {
            name: "Yemen",
            value: 22.6,
          },
          {
            name: "Jordan",
            value: 22.3,
          },
          {
            name: "Lebanon",
            value: 21.1,
          },
          {
            name: "Azerbaijan",
            value: 31.7,
          },
          {
            name: "Singapore",
            value: 47.8,
          },
          {
            name: "Hong Kong",
            value: 49.9,
          },
          {
            name: "Syria",
            value: 52.7,
          },
          {
            name: "DPR Korea",
            value: 59.9,
          },
          {
            name: "Israel",
            value: 64.8,
          },
          {
            name: "Turkmenistan",
            value: 70.6,
          },
          {
            name: "Oman",
            value: 74.3,
          },
          {
            name: "Qatar",
            value: 88.8,
          },
          {
            name: "Philippines",
            value: 96.9,
          },
          {
            name: "Kuwait",
            value: 98.6,
          },
          {
            name: "Uzbekistan",
            value: 122.6,
          },
          {
            name: "Iraq",
            value: 139.9,
          },
          {
            name: "Pakistan",
            value: 158.1,
          },
          {
            name: "Vietnam",
            value: 190.2,
          },
          {
            name: "United Arab Emirates",
            value: 201.1,
          },
          {
            name: "Malaysia",
            value: 227.5,
          },
          {
            name: "Kazakhstan",
            value: 236.2,
          },
          {
            name: "Thailand",
            value: 272,
          },
          {
            name: "Taiwan",
            value: 276.7,
          },
          {
            name: "Indonesia",
            value: 453,
          },
          {
            name: "Saudi Arabia",
            value: 494.8,
          },
          {
            name: "Japan",
            value: 1278.9,
          },
          {
            name: "China",
            value: 10540.8,
          },
          {
            name: "India",
            value: 2341.9,
          },
          {
            name: "Russia",
            value: 1766.4,
          },
          {
            name: "Iran",
            value: 618.2,
          },
          {
            name: "Korea",
            value: 610.1,
          },
        ],
      },
    ],
  });
}

function setBitCoinData() {
  $.each(bitCoinVal, function (i, d) {
    bitCoinDataArray.push([
      dateToTimeStamp(d.날짜),
      Math.floor((parseFloat(removeComma(d.종가)) / bitVal) * 100),
    ]);
  });
  $.each(ethereum, function (i, d) {
    ETHDataArray.push([
      dateToTimeStamp(d.날짜),
      Math.floor((parseFloat(removeComma(d.종가)) / ETHVal) * 100),
      ,
    ]);
  });
  $.each(xrp, function (i, d) {
    xrpDataArray.push([
      dateToTimeStamp(d.날짜),
      Math.floor((parseFloat(removeComma(d.종가)) / xrpVal) * 100),
    ]);
  });
  $.each(brb, function (i, d) {
    brbDataArray.push([
      dateToTimeStamp(d.날짜),
      Math.floor((parseFloat(removeComma(d.종가)) / brbVal) * 100),
    ]);
  });
  $.each(ltc, function (i, d) {
    ltcDataArray.push([
      dateToTimeStamp(d.날짜),
      Math.floor((parseFloat(removeComma(d.종가)) / ltcVal) * 100),
    ]);
  });
  $.each(ada, function (i, d) {
    adaDataArray.push([
      dateToTimeStamp(d.날짜),
      Math.floor((parseFloat(removeComma(d.종가)) / adaVal) * 100),
    ]);
  });
  $.each(link, function (i, d) {
    linkDataArray.push([
      dateToTimeStamp(d.날짜),
      Math.floor((parseFloat(removeComma(d.종가)) / linkVal) * 100),
    ]);
  });
  $.each(xlm, function (i, d) {
    xlmDataArray.push([
      dateToTimeStamp(d.날짜),
      Math.floor((parseFloat(removeComma(d.종가)) / xlmVal) * 100),
    ]);
  });
  $.each(theta, function (i, d) {
    thetaDataArray.push([
      dateToTimeStamp(d.날짜),
      Math.floor((parseFloat(removeComma(d.종가)) / thetaVal) * 100),
    ]);
  });
}

function dateToTimeStamp(d) {
  var timestamp = d;
  timestamp = timestamp.replace("년 ", "-");
  timestamp = timestamp.replace("월 ", "-");
  timestamp = timestamp.replace("일", "");
  var dateTime = new Date(timestamp).getTime();
  return dateTime;
}

function removeComma(d) {
  d = d.toString();
  if (d) {
    var value = d.replace(/,/g, "");
    return value;
  }
}

function setChart() {
  Highcharts.stockChart("container", {
    title: {
      text: "",
    },
    chart: {
      backgroundColor: "rgba(0,0,0,0)",
    },
    yAxis: {
      labels: {
        align: "right",
        x: -10,
      },
      opposite: true,
      lineWidth: 1,
      offset: 50,
      title: {
        text: "",
      },
      gridLineColor: "rgba(0,0,0,0)",
    },

    xAxis: {
      type: "datetime",
    },

    legend: {
      align: "center",
      verticalAlign: "bottom",
    },

    plotOptions: {
      series: {
        showInNavigator: true,
        label: {
          connectorAllowed: false,
        },
      },
    },

    series: [
      {
        name: "비트코인",
        data: bitCoinDataArray,
      },
      {
        name: "이더리움",
        data: ETHDataArray,
      },
      {
        name: "리플",
        data: xrpDataArray,
      },
      {
        name: "brb",
        data: brbDataArray,
      },
      {
        name: "ltc",
        data: ltcDataArray,
      },
      {
        name: "ada",
        data: adaDataArray,
      },
      {
        name: "link",
        data: linkDataArray,
      },
      {
        name: "xlm",
        data: xlmDataArray,
      },
      {
        name: "theta",
        data: thetaDataArray,
      },
    ],

    tooltip: {
      crosshairs: true,
      shared: true,
      split: true,
    },
  });

  $(".one").on("click", function () {
    chart.xAxis[0].update({ min: dateToTimeStamp("2019-05-01") }, true);
  });
}
