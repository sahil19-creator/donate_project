var menu = document.getElementById("mn")
console.log(mn)
var i = 0
menu.addEventListener("click", function() {
    console.log("hello")
    if (i == 0) {
        bar = document.querySelector(".sidebar")
        hid = document.querySelector(".area")
        bar.style.width = "0px"
        hid.style.marginLeft = "0px"
        i = 1
    } else {
        bar.style.width = "300px"
        i = 0
        hid.style.marginLeft = "300px"
        console.log(i)

    }
    // body...
})
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'Bubble',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['red', 'yellow', 'blue', 'green', 'gray', 'pink', 'black'],
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {
        responsive: false
    }
});