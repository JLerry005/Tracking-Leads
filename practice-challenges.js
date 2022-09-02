// alert("Working!");

// // SETTING THE STAGE
// const player = "Per";
// const opponent = "Nick";
// const game = "AmazingFighter";
// let points = 0;
// let hasWon = false;

// // PLAYING THE GAME
// points += 100;
// hasWon = true; 

// // ANNOUNCING THE WINNER
// if (hasWon){
//     console.log( `${player} got ${points} points and won the ${game} game!` )
// } else {
//     console.log( `The winner is ${opponent}! ${player} lost the game`)
// }


// ARRAY 

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];
// let myFavorites = ["Watching Anime", "Read Manga, Manwha, and also books", "Coding Everyday!"];

// function logItems(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// logItems(myCourses);


// lOCAL STORAGE

// localStorage.setItem("myKey", "I want to moving up my skills everyday!")

// let myKeyStorage = localStorage.getItem("myKey")
// console.log(myKeyStorage)

// localStorage.removeItem("myKey")


// addEventListener and object in array

// const logBtn = document.getElementById("log-btn");

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// logBtn.addEventListener("click", () =>{
//     console.log(data[0].player);
// })
// console.log(playerScore.data[0]);


// Generate Sentence

// ["China", "India", "USA"];
// ["Apples", "Bananas"]

// The 3 largest countries are
// The best fruits are Apples, Bananas

// function generateSentence(desc, arr){
//     let baseDesc = `The ${arr.length} ${desc} are `
//     const lastIndex = arr.length - 1;

//     for(let i = 0; i < arr.length; i++){

//         if(lastIndex === i){
//             baseDesc += arr[i]
//         } else{
//             baseDesc += arr[i] + ", "
//         }
//     }
//     return baseDesc;
// }

// const descArr = generateSentence( "largest countries", ["China", "India", "USA", "Russia"] )
// console.log(descArr)


// Render Image

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "asta.jpg",
    "boruto.jpg",
    "deku.png",
    "skeleton.jpg"
]

const newimgs = [
    "images/hip3.jpg",
    "images/hip2.jpg",
    "images/hip1.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container");
 
function renderImages(strimgs){
    let storeImgs = "";
    
    for(let i = 0; i < strimgs.length; i++){
        storeImgs += ` 
            <img alt="Employee in the company" class="team-img" src="${strimgs[i]}"> 
        `
    } 
    container.innerHTML += storeImgs;
 };
 
renderImages(imgs);
