// alert("Working!");

let myLeads = [];
// myLead = JSON.parse(myLead)
// myLead.push("www.netflix.com");

// myLead = JSON.stringify(myLead);
// console.log(typeof myLead)

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el");

// localStorage.setItem("myWebsite", "www.swiftcareph.com");
// console.log( localStorage.getItem("myWebsite") );
// localStorage.clear()

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
    // console.table(myLeads)
}

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
     });
})

function render(leads){
    let listItems = "";

    for(let i = 0; i < leads.length; i++){

        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    <div class="weblink">
                        <svg class="webIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        ${leads[i]} 
                    </div>
                </a>               
            </li>
        `;
    }
    
    ulEl.innerHTML = listItems;
}




inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    inputEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

// undoBtn.addEventListener("click", () => {
//     myLeads.shift()
// })


// Use .innerHTML to render a Buy! button inside the div container

// let container = document.getElementById("container");

// container.innerHTML = "<button onclick='buy()'>" + "BUY" + "</button>"

// function buy(){
//     container.innerHTML += "<p> Thank you for buying! </p>"
// }


// const recipient = "James";

// const sender = "John Lerry"

// const email = `Hey ${recipient}! 

// How is it going? Cheers ${sender}
// `;

// console.log(email)

        // listItems += `
        //     <li>
        //         <a href='${myLead[i]}' target='_blank'>
        //             ${myLead[i]}
        //         </a>
        //     </li>
        // `

// Truthy ang falsy values 
 
// console.log( Boolean("") )    // False
// console.log( Boolean("0") )   // True
// console.log( Boolean(100) )   // True
// console.log( Boolean(null) )  // false
// console.log( Boolean([0]) )   // True
// console.log( Boolean(-0) )    // False

// Function Parameter

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greet, name){
//     welcomeEl.textContent = `${greet} , ${name}`
// }

// greetUser("Howdy", "Ler!")

// function add(num1, num2){
//     return num1 + num2;
// }

// console.log( add(3, 4) );
// console.log( add(9, 102) );

// function getFirst(arr){
//     return arr[1]
// }

// let firstNum = getFirst([10, 20 ,50]);
// console.log( firstNum )