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

const tab = [
    {url: ""}
]

tabBtn.addEventListener("click", () => {
    tab.push(myLeads)
    localStorage.setItem("saveTab", JSON.stringify(tab));
    render(tab);
})

console.log(tab[length].url)


function render(leads){
    let listItems = "";

    for(let i = 0; i < leads.length; i++){

        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
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