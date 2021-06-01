var tabledata = [
  {
    EOS: {
      name: "EOS",
      now: 15810,
      value: 1300,
      percent: 9,
    },
    ETH: {
      name: "ETH",
      now: 4942000,
      value: 47000,
      percent: 0.96,
    },
    BTC: {
      name: "BTC",
      now: 69062200,
      value: 524000,
      percent: 0.85,
    },
    XRP: {
      name: "XRP",
      now: 1797,
      value: 30,
      percent: 1.58,
    },
    BCH: {
      name: "BCH",
      now: 1802000,
      value: 42000,
      percent: 2.39,
    },
    ADA: {
      name: "ADA",
      now: 2140,
      value: 8,
      percent: 0.38,
    },
    LTC: {
      name: "LTC",
      now: 454700,
      value: 8500,
      percent: 1.91,
    },
    XLM: {
      name: "XLM",
      now: 868,
      value: 63.2,
      percent: 7.85,
    },
  },
];

var firstText = [
  {
    시가총액: 2450,
    변동: 299,
    변동률: 13.92,
  },
  {
    거래량: 179,
    변동: -18,
    변동률: -9.01,
  },
];
function setValueText() {
  $(".first .total-number").html(com(firstText[0].시가총액) + "조");
  $(".first .fff").html(com(firstText[0].변동) + "조");
  $(".first .sss").html(com("(" + firstText[0].변동률) + "%)");
  $(".second .total-number").html(com(firstText[1].거래량) + "조");
  $(".second .fff").html(com(firstText[1].변동) + "조");
  $(".second .sss").html(com("(" + firstText[1].변동률) + "%)");
}

$(document).ready(function () {
  setValueText();
  var tableHTML = "";
  tableHTML +=
    "<div class='table-header'>주문/거래 현황 <small style='color:#333; font-size:12px; font-weight:lighter; margin-left:130px;'>2021.03.28 기준</small></div>";
  tableHTML += "<table class='current-table'>";
  tableHTML += "<tr>";
  tableHTML += "<td class='th'>자산</td>";
  tableHTML += "<td class='th'>실시간 시세</td>";
  tableHTML += "<td class='th'>변동률</td>";
  tableHTML += "</tr>";

  $.each(tabledata[0], function (i, d) {
    tableHTML += "<tr>";
    tableHTML += "<td>" + d.name + "</td>";
    tableHTML += "<td>" + com(d.now) + " 원</td>";
    tableHTML += "<td>" + com(d.value) + " 원 (+" + d.percent + "%)</td>";

    tableHTML += "</tr>";
    console.log(d);
  });
  tableHTML += "</table" > $("#table-container").html(tableHTML);

  /**
   * Create a constructor for sparklines that takes some sensible defaults and merges in the individual
   * chart options. This function is also available from the jQuery plugin as $(element).highcharts('SparkLine').
   */
  Highcharts.SparkLine = function (a, b, c) {
    const hasRenderToArg = typeof a === "string" || a.nodeName;
    let options = arguments[hasRenderToArg ? 1 : 0];
    const defaultOptions = {
      chart: {
        renderTo:
          (options.chart && options.chart.renderTo) || (hasRenderToArg && a),
        backgroundColor: null,
        borderWidth: 0,
        type: "area",
        margin: [2, 0, 2, 0],
        width: 120,
        height: 20,
        style: {
          overflow: "visible",
        },
        // small optimalization, saves 1-2 ms each sparkline
        skipClone: true,
      },
      title: {
        text: "",
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickPositions: [],
      },
      yAxis: {
        endOnTick: false,
        startOnTick: false,
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        tickPositions: [0],
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        hideDelay: 0,
        outside: true,
        shared: true,
      },
      plotOptions: {
        series: {
          animation: false,
          lineWidth: 1,
          shadow: false,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          marker: {
            radius: 1,
            states: {
              hover: {
                radius: 2,
              },
            },
          },
          fillOpacity: 0.25,
        },
        column: {
          negativeColor: "#910000",
          borderColor: "silver",
        },
      },
    };

    options = Highcharts.merge(defaultOptions, options);

    return hasRenderToArg
      ? new Highcharts.Chart(a, options, c)
      : new Highcharts.Chart(options, b);
  };

  const start = +new Date(),
    tds = Array.from(document.querySelectorAll("td[data-sparkline]")),
    fullLen = tds.length;

  let n = 0;

  // Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
  // can take some seconds, so we split the input into chunks and apply them in timeouts
  // in order avoid locking up the browser process and allow interaction.
  function doChunk() {
    const time = +new Date(),
      len = tds.length;

    for (let i = 0; i < len; i += 1) {
      const td = tds[i];
      const stringdata = td.dataset.sparkline;
      const arr = stringdata.split("; ");
      const data = arr[0].split(", ").map(parseFloat);
      const chart = {};

      if (arr[1]) {
        chart.type = arr[1];
      }

      Highcharts.SparkLine(td, {
        series: [
          {
            data: data,
            pointStart: 1,
          },
        ],
        tooltip: {
          headerFormat:
            '<span style="font-size: 10px">' +
            td.parentElement.querySelector("th").innerText +
            ", Q{point.x}:</span><br/>",
          pointFormat: "<b>{point.y}.000</b> USD",
        },
        chart: chart,
      });

      n += 1;

      // If the process takes too much time, run a timeout to allow interaction with the browser
      if (new Date() - time > 500) {
        tds.splice(0, i + 1);
        setTimeout(doChunk, 0);
        break;
      }

      // Print a feedback on the performance
      if (n === fullLen) {
        document.getElementById("result").innerHTML =
          "Generated " +
          fullLen +
          " sparklines in " +
          (new Date() - start) +
          " ms";
      }
    }
  }
  doChunk();
});

function com(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
