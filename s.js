
let billinput = document.getElementById("billTotalInput");
let tips= document.getElementById("tipInput");
let nopeople = document.getElementById("numberOfPeople");
let perPersonTotalamount=document.getElementById("perPersonTotal")

let topeople=Number(nopeople.innerText)
const calculateBill = () => {
let bill=Number(billinput.value);

let tippercentage=Number(tips.value)/100;

let actualtip=bill*tippercentage;
;














 let totalamount=bill+actualtip;
let perpersontotal=totalamount/topeople;
console.log(perpersontotal)
perPersonTotalamount.innerText=`${perpersontotal.toFixed(2)}`
};

const increasePeople = () => {
 topeople+=1;
 nopeople.innerText=topeople;
 calculateBill()

};
const decreasePeople = () => {
  if (topeople<=1){
    console.log("you can't decrease the number of people to 0 or negative!");
  }
  else{
    topeople-=1;
  nopeople.innerText=topeople;
  }
  calculateBill()
};
