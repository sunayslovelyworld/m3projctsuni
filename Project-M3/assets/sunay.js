// let body = document.body;
// let currency1 = document.querySelector('.currency-row1');
// let currency2 = document.querySelector('.currency-row2');


// // mouseover mouseout
// currency1.addEventListener("mouseover", e=>{
//     if(e.target.className==='currency1'){
//         e.target.style.backgroundColor="#833AE0"
//         e.target.style.borderColor="833AE0"
//     }
// })
// currency1.addEventListener("mouseout", e=>{
//     if(e.target.className==='currency1'){
//         e.target.style.backgroundColor="white"
//         e.target.style.borderColor="lightgrey"
//     }
// })
// currency2.addEventListener("mouseover", e=>{
//     if(e.target.className==='currency2'){
//         e.target.style.backgroundColor="#833AE0"
//         e.target.style.borderColor="833AE0"
//     }
// })
// currency2.addEventListener("mouseout", e=>{
//     if(e.target.className==='currency2'){
//         e.target.style.backgroundColor="white"
//         e.target.style.borderColor="lightgrey"
//     }
// })


// let body = document.body;
// let currencyRow1 = document.querySelector('#currency-row1');
// let currencyRow2 = document.querySelector('#currency-row2');
// let p1= document.querySelector('.area1>p');
// let p2= document.querySelector('.area2>p');
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')

// Violet color function

// White color function



// let state1= 'RUB';
// let state2= 'USD';
// // If clicked state
// currencyRow1.addEventListener("click", e=>{
//     if(e.target.className==='currency1' || e.target.className==='currency2'){
//         e.target.style.backgroundColor="#833AE0";
//         e.target.style.borderColor="#833AE0";
//         e.target.style.color="white";

//         fetch(`https://api.exchangerate.host/latest?base=${e.target.innerText}&symbols=${state2}`)
//         .then(r=>r.json())
//         .then(data=>{
//             state1=e.target.innerText;
//             p1.innerText=`1 ${state1} = ${(+Object.values(data.rates)).toFixed(3)} ${state2}`;
//             p2.innerText=`1 ${state2} = ${(1/Object.values(data.rates)).toFixed(3)} ${state1}`;

//             console.log(input1.value.match('/\d/'))

//             if(input2.value==='' || typeof input2.value==='string'){
//                 input2.value=(input1.value*Object.values(data.rates)).toFixed(3);
//             }
//             else if(input1.value===''){
//                 input1.value=(input2.value/Object.values(data.rates)).toFixed(3);
//             }
//         })
//     }
// })







let currencyColumn1 = document.querySelector('#currency-column1');
console.log(currencyColumn1.children)

let childrenOfArray1 = [...currencyColumn1.children]
console.log(childrenOfArray1)

currencyColumn1.addEventListener("click", e=>{
    childrenOfArray1.forEach(item=>{
        if(item.classList.contains('active')){
            item.classList.remove('active')
        }
    })
    e.target.classList.add("active")
})


// let currencyColumn2 = document.querySelector('currency-column2');
// console.log(currency-column2.children)

// let childrenOfArray2 = [...currencyColumn2.children]
// console.log(childrenOfArray2)

// currencyColumn2.addEventListener("click", e=>{
//     childrenOfArray2.forEach(item=>{
//         if(item.classList.contains('active')){
//             item.classList.remove('active')
//         }
//     })
//     e.target.classList.add('active')
// })




