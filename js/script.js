//Game Constructor
function Game(title, console,year, developer, publisher, series, availability, reviews, id) {
    this.title = title; // The title of the game -- String
    this.console = console; // The console(s) that the game is on -- Array of String
    this.year=year // year the game was released 
    this.developer = developer; // The Developer of the game -- String
    this.publisher = publisher; // The Publisher of the game -- String
    this.series = series; // The series the game is a part of (if any) -- String
    this.availability = availability; // is the game still available to buy -- String -- "Available", "Overpriced", "Partial", "Unavailable" etc
    this.reviews = reviews // the existing reviews for this game -- Array of ReviewScore
    this.id = id; // self explanitory -- int
}

//Console Constructor
function Console(title, company, availability){
    this.title = title; // The title of the console
    this.company = company; // Company behind the console -- String
    this.availability = availability; // is the console that runs this game still available to buy --  String -- "Available", "Overpriced", "Partial", "Unavailable" etc
}

//User Constructor
function User(username, password, email, subsctiption) {
    username = this.username; // String
    password = this.password; // String
    email = this.email; // String
    subsctiption = this.subsctiption; // boolean
}

//Review Constructor
function ReviewScore(score, game, source) {
    score = this.score; // int
    game = this.game; // the game the review is for -- String
    source = this.source; // The source of the review -- String -- "metacritic", "IGN" etc
}

//populates consoles
function populateConsoles(){

    let consoles = [];

    consoles.push(new Console("SNES","Nintendo","Unavailable"));
    consoles.push(new Console("PS2","Sony","Unavailable"));
    consoles.push(new Console("GameCube","Nintendo","Unavailable"));

    //store it in local storage
    for(let i = 0;i<consoles.length;i++){
        localStorage.setItem("Console"+consoles[i].title+","+consoles[i].company+","+consoles[i].availability)
    }
}

//Populate games
function populateGames(){
    let games =[];

    games.push(new Game("Super Metroid"," ",1994,"Nintendo","Nintendo","Metroid","Available"," ",0))
    games.push(new Game("Resident Evil 4"," ",2005,"Capcom","Capcom","Resident Evil","Available"," ",1))

    //store it in local storage
    for(let i = 0;i<games.length;i++){
        localStorage.setItem("game"+games[i].id,games[i].title+","+games[i].console+","
            +games[i].year+","+games[i].developer+","+games[i].publisher+","
            +games[i].series+","+games[i].availability+","+games[i].reviews+","
            +games[i].id);
    }
    
}

//get games
function getGames(){
    let games =[];
    let game=localStorage.getItem("game"+"0");
    while(game!= null){
        var gameValues = game.split(",");
        games.push(new Game(gameValues[0],gameValues[1],gameValues[2],gameValues[3],gameValues[4]
            ,gameValues[5],gameValues[6],gameValues[7],gameValues[8]));

            game=localStorage.getItem("game"+parseInt(parseInt(gameValues[8])+1));
    }
    return games
}

function viewGame(gameID){
    localStorage.setItem("SelectedGame",gameID)
    window.location.href = "game.html"
}

function addGame(){
    game=getGames()[localStorage.getItem("SelectedGame")]
    document.getElementById("gameContent").innerHTML += "<h2>"+game.title+"</h2>";
    document.getElementById("gameContent").innerHTML += "<h5>"+game.console+"</h5>";
    document.getElementById("gameContent").innerHTML += "<h5>"+game.year+"</h5>";
    document.getElementById("gameContent").innerHTML += "<h6>"+game.developer+"</h6>";
    document.getElementById("gameContent").innerHTML += "<h6>"+game.publisher+"</h6>";
    document.getElementById("gameContent").innerHTML += "<h6>"+game.series+"</h6>";
    document.getElementById("gameContent").innerHTML += "<p>"+game.availability+"</p>";
    document.getElementById("gameContent").innerHTML += "<p>"+game.reviews+"</p>";

}