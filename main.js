let theNumber=document.getElementById("theNumber")
let theTo=document.getElementById("the-Price-money")
let theclick=document.getElementById("the-click")
let theResult=document.querySelector("#result span")
    fetch("https://api.currencyfreaks.com/latest?apikey=c3492b662e6345818075ae47d01e9253")
    .then(response => {
        let myData=response.json()
        console.log(myData)
        return myData
    }).then((currency)=>{
        theclick.onclick=()=>{
            let lastNum=currency.rates[theTo.value] * theNumber.value
            console.log(lastNum)
            theResult.innerHTML=lastNum.toFixed(2)
        
        }
    })
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));