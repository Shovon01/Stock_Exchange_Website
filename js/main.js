//line
var ctxL = document.getElementById("lineChart").getContext("2d");
var myLineChart = new Chart(ctxL, {
  type: "line",
  data: {
    labels: ["8.30", "10.00", "11.30", "13.30", "14.00", "15.30", "17.00"],
    datasets: [
      {
        label: "Market Share",
        data: [
          65,
          59,
          80,
          81,
          56,
          55,
          40,
          56,
          89,
          43,
          45,
          23,
          89,
          23,
          21,
          90,
          67,
          56,
          43,
          89,
          67,
          48
        ],
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true
  }
});

// Clock
var timeDisplay = document.getElementById("time");

function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka"
  });
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

var people,
  asc1 = 1,
  asc2 = 1,
  asc3 = 1;
window.onload = function() {
  people = document.getElementById("people");
};

function sort_table(tbody, col, asc) {
  var rows = tbody.rows,
    rlen = rows.length,
    arr = new Array(),
    i,
    j,
    cells,
    clen;

  for (i = 0; i < rlen; i++) {
    cells = rows[i].cells;
    clen = cells.length;
    arr[i] = new Array();
    for (j = 0; j < clen; j++) {
      arr[i][j] = cells[j].innerHTML;
    }
  }

  arr.sort(function(a, b, c) {
    return a[col] == b[col] ? 0 : a[col] > b[col] ? asc : -1 * asc;
  });

  for (i = 0; i < rlen; i++) {
    rows[i].innerHTML = "<td>" + arr[i].join("</td> <td>") + "</td>";
  }
}
