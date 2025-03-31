fetch('http://127.0.0.1:5500/index.html')  // Fetch data from Flask API
  .then(response => response.json())  // Convert response to JSON
  .then(data => {
      console.log(data.code);  // Output: IN
      console.log(data.value); // Output: India
  })
  //.catch(error => console.error('Error:', error));



const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");

    for (let select of dropdowns){
        for( currCode in country){
            let newOption=document.createElement("option");
            newOption.innerText=currCode;
            newOption.value=currCode;
            if(select.name==="from" && currCode==="USD"){
                newOption.selected="selected";
            }
            else if(select.name==="to" && currCode==="INR"){
                newOption.selected="selected";
            }
            select.append(newOption);
        }
        select.addEventListener("change",(e)=>{
            updateFlag(e.target);
        });
    }

const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=country[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let amount=document.querySelector(".amount input");
    let amt=amount.value;
    if(amt>=0 && amt!=""){
    amt=0;
    amount.value="0";
    }
    else{
        alert("invalid input");
    }

    //console.log(fromCurr.value,toCurr.value);
    //const URL=`https://api.currencyapi.com/v3/latest?apikey=cur_live_Om7AJYzd6oxFMe5h3qnMJZtWYPOp6CT0ClePOxoK`;
});
