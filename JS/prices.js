const Price = [{
        price: 20
    },
    {
        price: 200
    },
    {
        price: 32
    },
    {
        price: 120
    },
    {
        price: 18
    },
    {
        price: 310
    }
]
console.log(Price[0].price);

// ID FOR THE BASKET TAG
var basket = document.querySelector('.basket');
// VARIABLES FOR THE BASKET BUTTONS
var toasteradd = document.querySelector('.addtobasket1');
var iphoneadd = document.querySelector('.addtobasket2');
var ironadd = document.querySelector('.addtobasket3');
var surroundadd = document.querySelector('.addtobasket4');
var kettleadd = document.querySelector('.addtobasket5');
var ovenadd = document.querySelector('.addtobasket6');

// Will generate the AddEventListener for each button
toasteradd.addEventListener('click', greet);
iphoneadd.addEventListener('click', greet);
ironadd.addEventListener('click', greet);
surroundadd.addEventListener('click', greet);
kettleadd.addEventListener('click', greet);
ovenadd.addEventListener('click', greet);

function greet() {
    alert(Price[0].price);
}