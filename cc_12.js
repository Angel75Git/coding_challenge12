//Task 1
console.log("=".repeat(20));
console.log("Task 1");

const metricDiv = document.getElementById("dashboard"); // Saving element "dashboard"
const sameDiv = document.querySelector("dashboard");    // to variables

const revenueMetric = document.createElement("div");    
revenueMetric.setAttribute("class", "metric-card");   //Assigning revenueMetric:
revenueMetric.setAttribute("id", "revenueCard")       // with class and id


const title = document.createElement("h3");     //Populate title
title.textContent = "Revenue";

const placeHolder = document.createElement("p"); //populate placeholder value
placeHolder.textContent = "$0";

revenueMetric.appendChild(title)
revenueMetric.appendChild(placeHolder)      //Have revenueMetric adopt populated values

metricDiv.appendChild(revenueMetric);    //Have metricDiv adopt revenueMetric
