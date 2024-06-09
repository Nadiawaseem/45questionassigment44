"use strict";
function sandWich(...items) {
    console.log("sandWich order");
    for (let i = 0; i < items.length; i++) {
        console.log('= ${items[i]}');
    }
}
console.log("Enjoy your sendWich.");
sandWich("Capsicum", "Tomato", "chicken");
sandWich("Chicken", "Onion", "Tamato");
sandWich("Cabbage", "Chiken", "Tomato", "Cheez");
