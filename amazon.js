
let item= prompt("What is the name of the item?");

let basePrice= prompt("What is the base price");

let blackFriday= prompt("Is today Black Friday?");

let searchengine= prompt("Did you find the product through a search engine?");

let comparison= prompt("Did you visit a comparison-shopping site?");
let finalPrice;
let message ="The " + basePrice +" for a " + item + " is " + basePrice + ". We will increase the price by 1% to pay the " + searchengine + " This purchaser is a " + comparison + " shopper, so we will reduce the price by 10%. Since it's " + blackFriday +", we will reduce the price by 25%. The final price is " + finalPrice + "."; 

if (blackFriday == "yes")




// alert the final message //
alert (message);