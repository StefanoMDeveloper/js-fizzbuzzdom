
// console log
for (let i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    }else{
        if(i % 3 == 0){
            console.log("Fizz");
        }else if(i % 5 == 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    } 
}


// DOM
let scatola = document.getElementById("container");

for (let i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        scatola.innerHTML += `<div class="box FBbox">FizzBuzz</div>`;
    }else{
        if(i % 3 == 0){
            scatola.innerHTML += `<div class="box Fbox">Fizz</div>`;
        }else if(i % 5 == 0){
            scatola.innerHTML += `<div class="box Bbox">Buzz</div>`;
        }else{
            scatola.innerHTML += `<div class="box">${i}</div>`;
        }
    } 
}
