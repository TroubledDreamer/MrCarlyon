const img_var = document.getElementById("image");
const h1_var = document.getElementById("h1");
const p_var = document.getElementById("p");
const li_var = document.getElementById("li");
const git_var = document.getElementById("git");
const live_var = document.getElementById("live");
const techList = document.getElementById('tech');


let num_move = 1;




const rock_paper_scissors = ["rock_paper_scissors", 1, ["images/rock.png", ["Rock Paper Scissors"
,"This project allows the user to play rock, paper, scissors against a computer", ["HTML","CSS","JavaScript"]],
"https://github.com/TroubledDreamer/RockPaperScissors","https://64c553fef44549115969a915--profound-blancmange-f0fa93.netlify.app/"]];

const tic_tac_toe = ["tic_tac_toe", 2, ["images/tic_tac_toe.png", ["Tic Tac Toe",
"This project allows the user to play Tic Tac Toe against a computer",
["HTML","CSS","JavaScript"]],"https://github.com/TroubledDreamer/info2180-lab3","https://656feb2411920b1d7ac61cfa--benevolent-alfajores-ef206e.netlify.app/"]];


let project_list = [rock_paper_scissors, tic_tac_toe];

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
            if (num_move >= 0){
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

