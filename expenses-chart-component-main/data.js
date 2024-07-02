let day = [];
let amount = [];

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        //iterates the day
        data.forEach(element =>{
            console.log(element.day)
            console.log(element.amount)
            day.push(element.day);
            amount.push(element.amount);
        });

        let myChart = document.getElementById('expenses-chart').getContext('2d');

        Chart.defaults.color = 'hsl(28, 10%, 53%)';

        let expensesChart = new Chart(myChart, {
            type:"bar", // bar, horizontal, pie, line, doughnut, radar, polarArea

            data:{
                //eto yung nakalagay baba ng barchart
                labels:day,
                datasets:[{
                    label: 'Expenses',
                    data:amount,
                    //backgroundColor: 'green'
                    backgroundColor:[
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(186, 34%, 60%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    ],
                    borderRadius: 5,
                    hoverBackgroundColor: [
                    'hsl(10, 89%, 75%)',
                    'hsl(10, 89%, 75%)',
                    'hsl(186, 34%, 70%)',
                    'hsl(10, 89%, 75%)',
                    'hsl(10, 89%, 75%)',
                    'hsl(10, 89%, 75%)',
                    'hsl(10, 89%, 75%)',
                    ]
                    //hoverBorderWidth: '3',
                    //hoverBorderColor: '#000'
                }],
            },
            options:{
                             
            }
        });
    });

        


