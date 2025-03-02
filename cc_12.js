//Task 1
console.log("=".repeat(20));
console.log("Task 1");

const metricDiv = document.getElementById("dashboard"); // Saving element "dashboard"
const sameDiv = document.querySelector("#dashboard");    // to variables

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

//Task 2
console.log("=".repeat(20));
console.log("Task 2");
//Creating Scenario with Profit and expense cards

const profitCard = document.createElement("div"); //div creation
const expenseCard = document.createElement("div");

profitCard.setAttribute("class", "metric-card"); //set attributes
expenseCard.setAttribute("class", "metric-card");

profitCard.innerHTML = "<h3>Profit</h3> <p>$0</p>"  //More efficient population of values
expenseCard.innerHTML = "<h3>Expenses</h3> <p>$0</p>"

metricDiv.appendChild(profitCard); //Both cards are adopted by metricDiv
metricDiv.appendChild(expenseCard);
//Task 2 Requirements

allMetrics = document.querySelectorAll(".metric-card")
console.log(allMetrics); //Collecting all metric cards

nodeListArray = Array.from(allMetrics)
console.log(nodeListArray); //converting nodelist to array

nodeListArray.forEach(card => {
    card.style.background = "lightgreen"; //changing background color of cards
});
