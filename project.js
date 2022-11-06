// let redcolour = document.getElementById("colours_red");
// redcolour.onclick = () => console.log("your have clicked the red colour");
// let yellowcolour = document.getElementById("colours_yellow");
// yellowcolour.onclick = () => console.log("your have clicked the yellow colour");

// let greencolour = document.getElementById("colours_green");
// greencolour.onclick = () => console.log("your have clicked the green colour");

// function magick() {
//     for(i=0;i>1000;i++){
//         console.log(greencolour.onclick )
//     }
// };
// magick()

let square = document.querySelectorAll(".colours");
let ntimesclick={
    'red':0,'yellow':0,'green':0
};
// console.log(square[1].value);
square.forEach((squares) => {
  squares.onclick = () => {
    ntimesclick[squares.value]+=1
    squares.innerHTML=ntimesclick[squares.value]
    console.log("you have clicked" +" "+ squares.value);
  };
});
