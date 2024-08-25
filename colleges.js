var univArray = new Array(
    {name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
    {name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
    {name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
    {name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
    {name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
    {name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
    {name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435},
    {name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
    {name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
    {name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
);

function display(results) {
    var table = document.getElementById("results-table");
    var tableBody = table.getElementsByTagName('tbody')[0];

    tableBody.innerHTML = "";
    for (var i = 0; i < results.length; i++) {
        var row = "<tr>";
        row += "<td>" + results[i].nickname + "</td>";
        row += "<td>" + results[i].SATh + "</td>";
        row += "<td>" + results[i].SATl + "</td>";
        row += "<td>" + results[i].tuition.toLocaleString("en-US", {style:"currency", currency:"USD"}) + "</td>";
        row += "</tr>";
        tableBody.innerHTML += row;
    }
}

function filter() {
    var publicprivate = document.querySelector('input[name="publicprivate"]:checked').value;
    var maxtuition = document.getElementById("maxtuition").value;
    var minsat = document.getElementById("minsat").value;
    var maxsat = document.getElementById("maxsat").value;

    var results = [];

    for (var i = 0; i < univArray.length; i++) {
        if (publicprivate == "Don't Care" || univArray[i].ownership == publicprivate) {
            if (!maxtuition || univArray[i].tuition <= maxtuition) {
                if ((!minsat || univArray[i].SATl >= minsat) && (!maxsat || univArray[i].SATh <= maxsat)) {
                    results.push(univArray[i]);
                }
            }
        }
    }

    display(results);
}

document.getElementById("filterbutton").addEventListener("click", filter);
display(univArray);
