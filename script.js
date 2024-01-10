let workContainer = document.querySelector(".works");
let gitHubBtnLayer = document.querySelector(".see-in-github-layer");
let gitHubBtn = document.querySelector(".github-btn");
let left = document.querySelector("#left-icon");
let right = document.querySelector("#right-icon");
let sendBtn = document.querySelector("#employer-btn");
let username = document.querySelector("#employer-name");
let userid = document.querySelector("#employer-email");
let userMailBody = document.querySelector("#employer-problem-description");
let currWork = 0;
let currLink = currWork;
let works = ["ToDoList.png","tictactoe.png","StopWatch.png","WeatherApp.png","snakeGame.png","netflixLandingPageClone.png","quote-generator-img.png"];
let workLinks = ["https://to-do-eight-chi.vercel.app/","https://javascript-basic-projects-i57f-git-main-sunny-mishras-projects.vercel.app/tic-tac-toe/tictactoe.html","https://stopwatch-gamma-seven.vercel.app/","https://weather-app-kappa-dun.vercel.app/","https://javascript-basic-projects-i57f-git-main-sunny-mishras-projects.vercel.app/snake%20game/snake.html","https://flix-blush.vercel.app/","https://my-portfolio-beta-kohl.vercel.app/"];
workContainer.style.background = `url(${works[currWork]})`;
gitHubBtn.addEventListener("click",()=>{
    window.open(workLinks[currLink])
})
// let gitHubLink = workLinks[0];
// console.log(workLinks[currLink]);
workContainer.style.backgroundSize = "cover";
workContainer.style.backgroundPosition = "center";

gitHubBtnLayer.addEventListener("mouseover",()=>{
    gitHubBtn.style.display = "";
    gitHubBtnLayer.style.backdropFilter = "blur(10px)";
    // workContainer.style.backdropFilter = "blur(10px)";
})
gitHubBtnLayer.addEventListener("mouseleave",()=>{
     gitHubBtn.style.display = "none";
    gitHubBtnLayer.style.backdropFilter = "blur(0px)";
    //  workContainer.style.backdropFilter = "blur(0px)";
 })

 right.addEventListener("click",()=>{
    currWork = (currWork+1)%6;
    currLink=currWork;
    // console.log(workLinks[currLink]);
    workContainer.style.background = `url(${works[currWork]})`;
    workContainer.style.backgroundSize = "cover";
    workContainer.style.backgroundPosition = "center";
 })
 left.addEventListener("click",()=>{
    currWork -=1;
    if(currWork===-1){
        currWork=5;
    }
    currLink=currWork;
    workContainer.style.background = `url(${works[currWork]})`;
    workContainer.style.backgroundSize = "cover";
    workContainer.style.backgroundPosition = "center";
 })
 sendBtn.addEventListener("click",()=>{
    window.open("mailto:sunnymishra9007689708@gmail.com"+"?subject="+username.value+"&body="+userMailBody.value);
 })
