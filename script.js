//the task is to calculate the pizza order and the calories.  


document.getElementById('result').onclick = getResult;                 // accessing divs with the id "result" to display the sum of the bill 
getResult();                                                           // and the total amount of calories

function getResult(){
    var menu = document.getElementsByClassName('menu');                // making a list of all checkboxes
    var cost = 0;
    var cal = 0;
    for (var i=0; i<menu.length; i++){                                 // looping through checked checkboxes
        if (menu[i].checked) {
            cost += parseFloat(menu[i].getAttribute('data-cost'));     // adding the values
            cal += parseFloat(menu[i].getAttribute('data-cal'));       // and getting the sum
        }
    }
    document.getElementById('cost').innerHTML = cost;                  //displaying the result in the accessed divs
    document.getElementById('cal').innerHTML = cal;
}

