const img_var = document.getElementById("");
const h1_var = document.getElementById("h1");
const p_var = document.getElementById("p");
const li_var = document.getElementById("li");
const git_var = document.getElementById("git-img-icons");
const live_var = document.getElementById("live-img-icons");




let project_demo = ("project", 1, ["images/rock.png", ["Rock Paper Scissors"
,"This project allows the user to play rock, paper, scissors against a computer", ["HTML","CSS","JavaScript"]],"git","live"]);


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
    return content[0];
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
    return content[-2]
}

function getLive(content){
    return content[-1]
}