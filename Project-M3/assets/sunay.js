// // let body = document.body;
// // let currency1 = document.querySelector('.currency-row1');
// // let currency2 = document.querySelector('.currency-row2');


// // // mouseover mouseout
// // currency1.addEventListener("mouseover", e=>{
// //     if(e.target.className==='currency1'){
// //         e.target.style.backgroundColor="#833AE0"
// //         e.target.style.borderColor="833AE0"
// //     }
// // })
// // currency1.addEventListener("mouseout", e=>{
// //     if(e.target.className==='currency1'){
// //         e.target.style.backgroundColor="white"
// //         e.target.style.borderColor="lightgrey"
// //     }
// // })
// // currency2.addEventListener("mouseover", e=>{
// //     if(e.target.className==='currency2'){
// //         e.target.style.backgroundColor="#833AE0"
// //         e.target.style.borderColor="833AE0"
// //     }
// // })
// // currency2.addEventListener("mouseout", e=>{
// //     if(e.target.className==='currency2'){
// //         e.target.style.backgroundColor="white"
// //         e.target.style.borderColor="lightgrey"
// //     }
// // })

// //Default values
// let money1='RUB'
// let money2='USD'


// //currencyColumn1 onclick

// let input1= document.querySelector('#input-1');
// //input1= input1.replace(/,/g, '.')
// let input2= document.querySelector('#input-2');
// //input2= input1.replace(/,/g, '.')
// let p1= document.querySelector('#p-1');
// let p2= document.querySelector('#p-2');

// let currencyColumn1 = document.querySelector('#currency-column1');

// let childrenOfArray1 = [...currencyColumn1.children]
// console.log(currencyColumn1.children)
// currencyColumn1.addEventListener("click", e=>{

//     childrenOfArray1.forEach(item => {
//         if(item.classList.contains('active')){
//             item.classList.remove('active')
//         }
//      })

//       e.target.classList.add("active");
//       money1=e.target.innerText
     

//       fetch(`https://api.exchangerate.host/latest?base=${money1}&symbols=${money2}`)
//       .then(response=>response.json())
//       .then(data=>{
    
    
//         p1.innerText=`1 ${money1} =${(+Object.values(data.rates))} ${money2}`
//         p2.innerText=`1 ${money2} =${(1/Object.values(data.rates))} ${money1}`

//        // input1.value=input1.value.replace(/,/g, '. ')
//        // input2.value=input2.value.replace(/,/g, '. ')

//         if(typeof input2.value==='string'){
//             input2.value=(input1.value*Object.values(data.rates));
//         }
//         else if(typeof input1.value==='string'){
//             input1.value=(input2.value/Object.values(data.rates));
//         }

//       }
//         )
// })



// //currencyColumn2 onclick

// let currencyColumn2 = document.querySelector('#currency-column2');

// let childrenOfArray2 = [...currencyColumn2.children]

// currencyColumn2.addEventListener("click", e=>{

//     childrenOfArray2.forEach(item => {
//         if(item.classList.contains('active')){
//             item.classList.remove('active')
//         }
//      })

//       e.target.classList.add("active")
//       money2=e.target.innerText
     

//       fetch(`https://api.exchangerate.host/latest?base=${money1}&symbols=${money2}`)
//       .then(response=>response.json())
//       .then(data=>{
    
    
//         p1.innerText=`1 ${money1} =${(+Object.values(data.rates))} ${money2}`
//         p2.innerText=`1 ${money2} =${(1/Object.values(data.rates))} ${money1}`
        

//        // input1.value=input1.value.replace(/,/g, '. ')
//         //input2.value=input2.value.replace(/,/g, '. ')


//         if(typeof input2.value==='string'){
//             input2.value=(input1.value*Object.values(data.rates));
//         }
//         else if(typeof input1.value==='string'){
//             input1.value=(input2.value/Object.values(data.rates));
//         }

//       }
//      )
// })

let button = document.querySelectorAll('.first-container');
let secondButton = document.querySelectorAll('.second-container');
let p = document.querySelector('.in p');
let p2 = document.querySelector('.out p');
let x = "1 RUB",y = "1 RUB",any;
p.innerHTML = x+" = "+y;
let base='RUB',symbols='RUB';

let input = document.querySelector('.in input')
let output = document.querySelector('.out input')

button.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        x = "1 "+ e.target.innerText;
        base = e.target.innerText;
        myFunction();
        console.log(base,symbols);
        if(e.target){
            e.target.class = 'active';
            let notButton = document.querySelectorAll('.first-container button:not(button.active)');
            notButton.forEach((element)=>{
                element.style.background = 'white';
                element.style.color = '#E5E5E5';
            })
            e.target.style.background = '#ea7fc1';
            e.target.style.color = 'white';
        }
    })
})

secondButton.forEach((element)=>{
    element.addEventListener('click',(a)=>{
        symbols = a.target.innerText;
        myFunction();
        if(a.target){
            a.target.class = 'active';
            let notButton = document.querySelectorAll('.second-container button:not(button.active)');
            notButton.forEach((element)=>{
                element.style.background = 'white';
                element.style.color = '#E5E5E5';
            })
            a.target.style.background = '#ea7fc1';
            a.target.style.color = 'white';
        }
    })
})

async function myFunction(){
    let q = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
    let d = await q.json();
    any = d.rates[symbols];
    console.log(any)
    input.oninput = function(){
        output.value = any * input.value;
    }
    output.oninput = function(){
        input.value = 1/any * output.value;
    }
    output.value = any * input.value;
    y = any + " " + symbols;
    p.innerHTML = x+" = "+y;
    p2.innerHTML = "1 "+ symbols +" = "+1/any + " " + base;
}  

myFunction();