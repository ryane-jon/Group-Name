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
function ReviewScore(score, source) {
    this.score = score; // int
    this.source = source; // The source of the review -- String -- "metacritic", "IGN" etc
}

//populates gameConsoles (also used to get and return in place of would-be database)
function populateGameConsoles(){
    let gameConsoles = [];
    gameConsoles.push(new GameConsole("SNES","Unavailable",gameConsoles.length)); //0
    gameConsoles.push(new GameConsole("PS2","Unavailable",gameConsoles.length)); //1
    gameConsoles.push(new GameConsole("GameCube","Unavailable",gameConsoles.length)); //2
    gameConsoles.push(new GameConsole("Nintendo Switch","Available",gameConsoles.length)) //3
    gameConsoles.push(new GameConsole("Nintendo Wii","Unavailable",gameConsoles.length)) //4
    gameConsoles.push(new GameConsole("Xbox One","Available",gameConsoles.length)) //5
    gameConsoles.push(new GameConsole("Xbox 360","Unavailable",gameConsoles.length)) //6
    gameConsoles.push(new GameConsole("Xbox Series X","Available",gameConsoles.length)) //7
    gameConsoles.push(new GameConsole("PS5","Available",gameConsoles.length)) //8
    gameConsoles.push(new GameConsole("PS4","Available",gameConsoles.length)) //9
    gameConsoles.push(new GameConsole("PS3","Unavailable",gameConsoles.length)) //10
    gameConsoles.push(new GameConsole("SNES Classic","Unavailable",gameConsoles.length)) //11
    gameConsoles.push(new GameConsole("NES","Unavailable",gameConsoles.length)) //12
    gameConsoles.push(new GameConsole("NES Classic","Unavailable",gameConsoles.length)) //13
    gameConsoles.push(new GameConsole("Nintendo 3DS","Unavailable",gameConsoles.length)) //14
    gameConsoles.push(new GameConsole("New Nintendo 3DS","Unavailable",gameConsoles.length)) //15
    gameConsoles.push(new GameConsole("Wii U","Unavailable",gameConsoles.length)) //16
    gameConsoles.push(new GameConsole("PS Vita","Unavailable",gameConsoles.length)) //17
    gameConsoles.push(new GameConsole("PC","Available",gameConsoles.length))//18
    gameConsoles.push(new GameConsole("Game Boy Advance","Unavailable",gameConsoles.length))//19
    gameConsoles.push(new GameConsole("Nintendo DS","Unavailable",gameConsoles.length))//20
    gameConsoles.push(new GameConsole("Nintendo DSi","Unavailable",gameConsoles.length))//21
    return gameConsoles;
}

//Populate games (also used to get and return in place of would-be database)
function populateGames(){
    let games =[];
    gameConsoles = populateGameConsoles();

//  Kieran's Games

    games.push(new Game(
        "Super Mario Galaxy", 
        [gameConsoles[4],gameConsoles[3]], 
        ["Adventure","3D Platformer"],
        2007,
        "Nintendo",
        "Nintendo",
        "Mario",
        "Available",
        [new ReviewScore(97, "IGN"), new ReviewScore(97, "Metacritic"), new ReviewScore(91, "Metacritic Users")],
        games.length
    ))
    games.push(new Game(
        "Grand Theft Auto 5", 
        [gameConsoles[5],gameConsoles[6],gameConsoles[7],gameConsoles[8],gameConsoles[9],gameConsoles[10],gameConsoles[18]], 
        ["Action"],
        2013,
        "Rockstar","Rockstar",
        "Grand Theft Auto",
        "Available",
        [new ReviewScore(100, "IGN"), new ReviewScore(97, "Metacritic"), new ReviewScore(85, "Metacritic Users")],
        games.length
    ))
    games.push(new Game(
        "Rainbow Six Siege",
        [gameConsoles[5],gameConsoles[6],gameConsoles[8],gameConsoles[9],gameConsoles[10],gameConsoles[18]], 
        ["Action Shooter"],
        2015,
        "Ubisoft",
        "Ubisoft",
        "Tom Clancy",
        "Available",
        [new ReviewScore(85, "IGN"), new ReviewScore(73, "Metacritic"), new ReviewScore(71, "Metacritic Users")],
        games.length
    ))
    games.push(new Game(
        "Super Mario Odyssey", 
        [gameConsoles[3]], 
        ["Adventure","3D Platformer"],
        2017,
        "Nintendo",
        "Nintendo",
        "Mario",
        "Available",
        [new ReviewScore(100, "IGN"), new ReviewScore(97, "Metacritic"), new ReviewScore(89, "Metacritic Users")],
        games.length
    )) 
    games.push(new Game(
        "Elden Ring",
        [gameConsoles[5],gameConsoles[8],gameConsoles[9],gameConsoles[7],gameConsoles[18]], 
        ["Action Roleplay"],
        2017,
        "FromSoftware",
        "FromSoftware",
        "Dark Souls",
        "Available",
        [new ReviewScore(100, "IGN"), new ReviewScore(96, "Metacritic"), new ReviewScore(82, "Metacritic Users")],
        games.length
    )) 
    
//  jacks Games

    games.push(new Game(
        "Metal Gear Solid 3: Snake Eater",
        [gameConsoles[1],gameConsoles[6],gameConsoles[10],gameConsoles[17],gameConsoles[5],gameConsoles[14],gameConsoles[15],gameConsoles[9],gameConsoles[8],gameConsoles[7],gameConsoles[3],gameConsoles[18]],
        ['Stealth Action'],
        2004,
        'Konami',
        'konami',
        'Metal Gear',
        'Available',
        [new ReviewScore(96, "IGN"), new ReviewScore(91, "Metacritic"), new ReviewScore(84, "Metacritic Users")],
        games.length
    ));
    games.push(new Game(
        "The Legend of Zelda",
        [gameConsoles[12],gameConsoles[13],gameConsoles[2],gameConsoles[19],gameConsoles[4],gameConsoles[16],gameConsoles[14],gameConsoles[15],gameConsoles[3]],
        ["Adventure"],
        1986,
        'Nintendo',
        'Nintendo',
        'Zelda',
        'Available',
        [new ReviewScore(100, "IGN"), new ReviewScore(84, "Metacritic"), new ReviewScore(80, "Metacritic Users")],
        games.length
    ))
    games.push(new Game(
        "Mario Kart DS",
        [gameConsoles[20],
        gameConsoles[21],
        gameConsoles[16]],
        ["Racing"],
        2005,
        "Nintendo",
        "Nintedo",
        "Mario Kart",
        'Unavailable',
        [new ReviewScore(95, "IGN"), new ReviewScore(91, "Metacritic"), new ReviewScore(86, "Metacritic Users")],
        games.length
    ))
    games.push(new Game(
        "Super Metroid", 
        [gameConsoles[0],gameConsoles[3],gameConsoles[4],gameConsoles[11],gameConsoles[15],gameConsoles[16]], 
        ["Metroidvania"],
        1994,
        "Nintendo",
        "Nintendo",
        "Metroid",
        "Available",
        [new ReviewScore(95, "IGN"), new ReviewScore(97, "Metacritic"), new ReviewScore(90, "Metacritic Users")],
        games.length
    ))
    games.push(new Game(
        "Resident Evil 4",
        [gameConsoles[2],gameConsoles[1],gameConsoles[3],gameConsoles[4],gameConsoles[16],gameConsoles[5],gameConsoles[6],gameConsoles[7],gameConsoles[8],gameConsoles[9],gameConsoles[10],gameConsoles[18]], 
        ["action horror"],
        2005,
        "Capcom",
        "Capcom",
        "Resident Evil",
        "Available",
        [new ReviewScore(98, "IGN"), new ReviewScore(96, "Metacritic"), new ReviewScore(91, "Metacritic Users")],
        games.length
    ))
    return games;
}



//get games
function getGame(id){
    games = populateGames();
    //try to find game from id
    console.log("Finding game with id: "+id);
    for(i=0; i<games.length; i++){
        console.log(games[i].id);
        if(games[i].id==id) return games[i];
    }
    //if return not reached, try to find game from name
    console.log("Failed, trying name instead");
    for(i=0; i<games.length; i++){
        if(games[i].title.toLowerCase().includes(id.toString().toLowerCase())) return games[i];

    }
    //if return still not reached just get id 0
    return getGame(0);
}



function viewGame(gameID){
    localStorage.setItem("SelectedGame",gameID)
    window.location.href = "game.html"
}

function addGame(){
    game=getGame([localStorage.getItem("SelectedGame")]);

    //display game info
    document.getElementById("gameContent").innerHTML += "<h2>"+game.title+"</h2>";

    document.getElementById("gameContent").innerHTML += "<h5>"
    document.getElementById("gameContent").innerHTML += game.gameConsole[0].title;
    for (i=0; i<game.gameConsole.length; i++){
            document.getElementById("gameContent").innerHTML += ", "+game.gameConsole[i].title;
    }
    document.getElementById("gameContent").innerHTML += "<h5>"
 document.getElementById("gameContent").innerHTML += "Genre: ";
    for (i=0; i<game.genre.length; i++){
        document.getElementById("gameContent").innerHTML += "<h5>"+game.genre[i]+" ";
    }
    document.getElementById("gameContent").innerHTML += "<h5>"

    document.getElementById("gameContent").innerHTML += "Released in <h5>"+game.year+"</h5>";
    document.getElementById("gameContent").innerHTML += "<h6>Developed by "+game.developer+"</h6>";
    document.getElementById("gameContent").innerHTML += "<h6>Published by "+game.publisher+"</h6>";
    document.getElementById("gameContent").innerHTML += "<h6>A part of "+game.series+" series</h6>";
    document.getElementById("gameContent").innerHTML += "<p>"+game.availability+"</p>";
    for (i=0; i<game.reviews.length;i++){

        document.getElementById("gameContent").innerHTML += "<p>"+game.reviews[i].score+" from "+game.reviews[i].source+"</p>";
    }

}

function displayPlatforms(){
    consoles = populateGameConsoles();
    for (i = 0; i<consoles.length; i++){
        document.getElementById("platforms").innerHTML +="<img src='images/platformLogos/"+consoles[i].title+".jpg' class='platformLogo'>";
    }
}
        function displayAllGames(){
    games = populateGames()
    for(i=0; i<games.length; i++){
        game = games[i]
        document.getElementById("allgamesDescription").innerHTML += "<p>"+game.title+"</p>";
    }
}