//Game Constructor
function Game(title, gameConsole, genre, year, developer, publisher, series, availability, reviews, id) {
    this.title = title; // The title of the game -- String
    this.gameConsole = gameConsole; // The gameConsole(s) that the game is on -- Array of String
    this.genre = genre; // The genre -- Array of String
    this.year=year // year the game was released 
    this.developer = developer; // The Developer of the game -- String
    this.publisher = publisher; // The Publisher of the game -- String
    this.series = series; // The series the game is a part of (if any) -- String
    this.availability = availability; // is the game still available to buy -- String -- "Available", "Overpriced", "Partial", "Unavailable" etc
    this.reviews = reviews // the existing reviews for this game -- Array of ReviewScore
    this.id = id; // self explanitory -- int
}

//gameConsole Constructor
function GameConsole(title, availability, id){
    this.title = title; // The title of the gameConsole -- String
    this.availability = availability; // is the gameConsole that runs this game still available to buy --  String -- "Available", "Overpriced", "Partial", "Unavailable" etc
    this.id=id;
}

//User Constructor
function User(username, password, email, subsctiption, id) {
    username = this.username; // String
    password = this.password; // String
    email = this.email; // String
    subsctiption = this.subsctiption; // boolean
    this.id = id
}

//Review Constructor
function ReviewScore(score, game, source) {
    score = this.score; // int
    game = this.game; // the game the review is for -- String
    source = this.source; // The source of the review -- String -- "metacritic", "IGN" etc
}

//populates gameConsoles (also used to get and return in place of would-be database)
function populateGameConsoles(){
    let gameConsoles = [];
    gameConsoles.push(new GameConsole("SNES","Unavailable",0));
    gameConsoles.push(new GameConsole("PS2","Unavailable",1));
    gameConsoles.push(new GameConsole("GameCube","Unavailable",2));
    gameConsoles.push(new GameConsole("Nintendo Switch","Available",3))
    return gameConsoles;
}

//Populate games (also used to get and return in place of would-be database)
function populateGames(){
    let games =[];
    gameConsoles = populateGameConsoles();
    games.push(new Game("Super Metroid", [gameConsoles[0],gameConsoles[3]], ["metroid like"]
        ,1994,"Nintendo","Nintendo","Metroid","Available"," ",games.length))
    games.push(new Game("Resident Evil 4",[gameConsoles[2],gameConsoles[1]], ["action horror"]
        ,2005,"Capcom","Capcom","Resident Evil","Available"," ",games.length))
    console.log(games[0]);
    return games;
}



//get games
function getGame(id){
    games = populateGames();
            return games[id];
}


function viewGame(gameID){
    localStorage.setItem("SelectedGame",gameID)
    window.location.href = "game.html"
}

function addGame(){
    game=getGame([localStorage.getItem("SelectedGame")]);

    //display game info
    document.getElementById("gameContent").innerHTML += "<h2>"+game.title+"</h2>";

    document.getElementById("gameContent").innerHTML += "Consoles: <h5>"
    for (i=0; i<game.gameConsole.length; i++){
            document.getElementById("gameContent").innerHTML += game.gameConsole[i].title+" ";
    }
    document.getElementById("gameContent").innerHTML += "<h5>"
 document.getElementById("gameContent").innerHTML += "Genre: ";
    for (i=0; i<game.genre.length; i++){
        document.getElementById("gameContent").innerHTML += "<h5>"+game.genre+" ";
    }
    document.getElementById("gameContent").innerHTML += "<h5>"

    document.getElementById("gameContent").innerHTML += "Released in <h5>"+game.year+"</h5>";
    document.getElementById("gameContent").innerHTML += "<h6>Developed by "+game.developer+"</h6>";
    document.getElementById("gameContent").innerHTML += "<h6>Published by "+game.publisher+"</h6>";
    document.getElementById("gameContent").innerHTML += "<h6>A part of "+game.series+" series</h6>";
    document.getElementById("gameContent").innerHTML += "<p>"+game.availability+"</p>";
    document.getElementById("gameContent").innerHTML += "<p>Reviews: "+game.reviews+"</p>";

}