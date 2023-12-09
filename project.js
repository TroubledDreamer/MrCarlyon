var instructionsShown = localStorage.getItem('instructionsShown');
localStorage.setItem('instructionsShown', 'true');



const img_var = document.getElementById("image");
const h1_var = document.getElementById("h1");
const p_var = document.getElementById("p");
const li_var = document.getElementById("li");
const git_var = document.getElementById("git");
const live_var = document.getElementById("live");
const techList = document.getElementById('tech');


const icon_var = document.getElementById("live-img-icons");


let num_move = 1;




const rock_paper_scissors = ["rock_paper_scissors", 1, ["images/rock.png", ["Rock Paper Scissors"
,"This project allows the user to play rock, paper, scissors against a computer", ["HTML","CSS","JavaScript"]],
"https://github.com/TroubledDreamer/RockPaperScissors","https://64c553fef44549115969a915--profound-blancmange-f0fa93.netlify.app/"]];

const tic_tac_toe = ["tic_tac_toe", 2, ["images/tic_tac_toe.png", ["Tic Tac Toe",
"This project allows the user to play Tic Tac Toe against a computer",
["HTML","CSS","JavaScript"]],"https://github.com/TroubledDreamer/info2180-lab3","https://656feb2411920b1d7ac61cfa--benevolent-alfajores-ef206e.netlify.app/"]];

const base_and_planes = ["base_and_planes", 3, ["images/base_and_planes.png", ["Base and Planes",
"Using the principles of system programming this program mimics the behaviors of kernels having one base talk to many planes/ processes.",
["C","Systems Programming"]],"https://github.com/TroubledDreamer/Base-and-planes",""]];

const Language_Study_Application = ["Language_Study_App", 4, ["images/Language_Study_Application.png", ["Language Study App",
" Welcome to our Interactive Language Learning Interface: a comprehensive study application designed for individuals interested in mastering Spanish and French. Whether you're a beginner or an advanced learner, our platform caters to all proficiency levels, providing an engaging and effective language-learning experience.",
["Java","Object-Oriented Programming"]],"https://github.com/TroubledDreamer/Language_Study_Application.git",""]];

const Root_Legacies = ["Root_Legacies", 5, ["images/Root_Legacies.jpg", ["Root Legacies",
"Embark on an extraordinary adventure with RootLegacies, a captivating game developed during the 2023 game jam. Immerse yourself in an endless realm of enemy roots in this three-dimensional top-down medieval experience featuring a complete terrain.",
["C#","Unity"]],"https://github.com/TroubledDreamer/RootLegacies",""]];

const Big6_Food_Delivery_Web = ["Big6_Food_Delivery_Web", 6, ["images/Big6_Food_Delivery_Web.png", ["Big6 Food Delivery Web",
"Take a bite at Big6-Food-Delivery-Web, a dynamic web application developed using the Agile software development model. This application is designed to meet the following key",
["HTML, CSS, JavaScript","SupaBase (SQL)"]],"https://github.com/TroubledDreamer/Big6-Food-Delivery-Web",""]];



let project_list = [rock_paper_scissors, tic_tac_toe, base_and_planes, Language_Study_Application, Root_Legacies, Big6_Food_Delivery_Web];

function getPlacement(project){
    return project[1];
}

function getContent(project){
    return project[2];
}

function getImg(content){
    return content[0];
}

function getTextContent(content){
    return content[1];
}

function getHeader(getTextContent){
    return getTextContent[0]
}

function getParagraph(getTextContent){
    return getTextContent[1]
}

function getTechStack(getTextContent){
    return getTextContent[2]
}

function getGit(content){
    return content[2]
}

function getLive(content){
    return content[3]
}

function scoller(project_list, num){
    for (const item of project_list) {
        if (getPlacement(item) == num){
            return item;
        }
       
    }

    return project_list[0];

}

function setTechStach(text){
    let newItem = document.createElement('li');
    newItem.textContent = text;
    techList.appendChild(newItem);
}


function configer_set(item){
    
    
    let content = getContent(item);
    let img = getImg(content);
    let textContent = getTextContent(content);
    let h1 = getHeader(textContent);
    let p = getParagraph(textContent);
    let git = getGit(content);
    let live = getLive(content);
    let li = getTechStack(textContent);

    while (techList.firstChild) {
        techList.removeChild(techList.firstChild);
    }

    for (const text of li) {
        setTechStach(text)      
    }


    if (live == ""){
        live_var.innerText = null;
        live_var.appendChild(icon_var);
        live_var.innerHTML += "<p>No Live</p>";
        } else {
        live_var.innerText = null;
        live_var.appendChild(icon_var);
        live_var.innerHTML += "<p>Live</p>";
    }
    

    

    img_var.src = img;
    h1_var.innerText = h1;
    p_var.innerText = p;
    git_var.href = git;
    live_var.href = live;


    //li_var 

    


}



document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            window.location.href = 'index.html';
            // Perform actions for Arrow Up key
            break;
        case "ArrowDown":
            window.location.href = 'index.html';
            // Perform actions for Arrow Down key
            break;
        case "ArrowLeft":
            if (num_move <= 0){
                num_move = project_list.length;
            }else{
                num_move -= 1;
            }
            
            //console.log(num_move);            
            configer_set(scoller(project_list,num_move));

            
            // Perform actions for Arrow Left key
            break;
        case "ArrowRight":
            if (num_move > project_list.length){
                num_move = 1;
            }else{
                num_move += 1;
            }
            
            //console.log(num_move);
            configer_set(scoller(project_list,num_move));
            // Perform actions for Arrow Right key
            break;
    }
});

