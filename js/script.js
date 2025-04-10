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
    gameConsoles.push(new GameConsole("Alexa","Available",gameConsoles.length))//22
    gameConsoles.push(new GameConsole("N64","Unavailable",gameConsoles.length))//23
    gameConsoles.push(new GameConsole("Playstation","Unavailable",gameConsoles.length))//24
    gameConsoles.push(new GameConsole("Sega Genesis","Unavailable",gameConsoles.length))//25
    gameConsoles.push(new GameConsole("Xbox","Unavailable",gameConsoles.length))//26

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
        "Grand Theft Auto V", 
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
        2022,
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
        "Nintendo",
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
        [new ReviewScore(95, "IGN")],
        games.length
    ))
    games.push(new Game(
        "Resident Evil 4",
        [gameConsoles[2],gameConsoles[1],gameConsoles[3],gameConsoles[4],gameConsoles[16],gameConsoles[5],gameConsoles[6],gameConsoles[7],gameConsoles[8],gameConsoles[9],gameConsoles[10],gameConsoles[18]], 
        ["Action Horror"],
        2005,
        "Capcom",
        "Capcom",
        "Resident Evil",
        "Available",
        [new ReviewScore(98, "IGN"), new ReviewScore(96, "Metacritic"), new ReviewScore(91, "Metacritic Users")],
        games.length
    ))

//Ryan's Games
    games.push(new Game(
        "The Elder Scrolls V: Skyrim",
        [gameConsoles[3], gameConsoles[5], gameConsoles[6], gameConsoles[7], gameConsoles[8], gameConsoles[9], gameConsoles[10], gameConsoles[18], gameConsoles[22]], 
        ["Action RPG"],
        2011,
        "Bethesda Game Studios",
        "Bethesda Softworks",
        "The Elder Scrolls",
        "Available",
        [new ReviewScore(95, "IGN"), new ReviewScore(96, "Metacritic"), new ReviewScore(86, "Metacritic Users")],
        games.length
    ))
    games.push(new Game(
        "Blood",
        [gameConsoles[18]], 
        ["First-Person Shooter"],
        1997,
        "Monolith Productions",
        "GT Interactive",
        "Blood",
        "Available",
        [new ReviewScore(82, "Metacritic"), new ReviewScore(88, "Metacritic Users")],
        games.length
    ))
    games.push(new Game(
        "Shadow Warrior",
        [gameConsoles[18]], 
        ["First-Person Shooter"],
        1997,
        "3D Realms",
        "GT Interactive",
        "",
        "Available",
        [new ReviewScore(86, "IGN"), new ReviewScore(83, "Metacritic Users")],
        games.length
    ))
    games.push(new Game(
        "Duke Nukem 3D",
        [gameConsoles[18], gameConsoles[23], gameConsoles[24], gameConsoles[10], gameConsoles[17], gameConsoles[25], gameConsoles[3], gameConsoles[5], gameConsoles[6], gameConsoles[9], gameConsoles[8]], 
        ["First-Person Shooter"],
        1996,
        "3D Realms",
        "FormGen",
        "Duke Nukem",
        "Available",
        [new ReviewScore(85, "IGN"), new ReviewScore(80, "Metacritic Users")],
        games.length
    ))
    games.push(new Game(
        "DOOM",
        [gameConsoles[18], gameConsoles[0], gameConsoles[24], gameConsoles[18], gameConsoles[19], gameConsoles[26], gameConsoles[6], gameConsoles[10],gameConsoles[3], gameConsoles[9],gameConsoles[5],gameConsoles[8],gameConsoles[7]], 
        ["First-Person Shooter"],
        1993,
        "id Software",
        "id Software",
        "Doom",
        "Available",
        [new ReviewScore(80, "IGN"), new ReviewScore(85, "Metacritic Users")],
        games.length
    ))
    return games;
}



//get games
//get one game from a nonspecific term
function getGame(term){
    games = populateGames();
    //try to find game from id
        for(i=0; i<games.length; i++){
            console.log(games[i].id);
            if(games[i].id==term) return games[i];
        }
    //try to find game from name
    for(i=0; i<games.length; i++){
        if(games[i].title.toLowerCase().includes(term.toString().toLowerCase())) return games[i];
    }


    //if return still not reached just get id 0
    return getGame(0);
}

//get a list of games from name
function getGamesName(name){
    result = [];
    for(i=0; i<games.length; i++){
        if(games[i].title.toLowerCase().includes(name.toString().toLowerCase())) result.push(games[i]);
    }
    return result
}

//get a list of games from console
function getGamesConsole(gameConsoleId){
    console.log("----GAMES FOR "+populateGameConsoles()[gameConsoleId].title)
    games = populateGames();
    result = [];
    for(i=0; i<games.length; i++){
        for(j=0; j<games[i].gameConsole.length; j++){
            if (games[i].gameConsole[j].id==parseInt(gameConsoleId)){
                result.push(games[i].title)
                console.log(games[i].title)
                break
            }
        }
    }
    return result;
}

function viewGame(game){
    localStorage.setItem("SelectedGame",game)
    window.location.href = "game.html"
}

function addGame(){
    game=getGame([localStorage.getItem("SelectedGame")]);

    //display game info
    document.getElementById("gameContent").innerHTML += "<h2>"+game.title+"</h2>";
    gameImgLink = game.title.split(" ").join("")
    gameImgLink = gameImgLink.replace(":","")
    document.getElementById("gameContent").innerHTML += "<img src=images/games/"+gameImgLink+".jpg width=10%>"

    document.getElementById("gameContent").innerHTML += "<h5>"
    document.getElementById("gameContent").innerHTML += game.gameConsole[0].title;

    for (i=1; i<game.gameConsole.length; i++){
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
        document.getElementById("platforms").innerHTML +="<img src='images/platformLogos/"+consoles[i].title+".jpg' onclick='getGamesConsole("+consoles[i].id+")' class='platformLogo'>";
    }
}

function getAverageReview(game){
    reviewCount = 0;
    reviewAverage = 0;
    console.log(game.title+" "+game.reviews.length)
    for(k=0; k<game.reviews.length; k++){
        reviewCount++;
        reviewAverage+=game.reviews[k].score;
        console.log(reviewCount+" "+reviewAverage);
    }
    reviewAverage = reviewAverage/reviewCount;
    return reviewAverage;
}

function getConsole(game){
    consoleToStr = ""
    consoleToStr += game.gameConsole[0].title;
    for (c=1; c<game.gameConsole.length; c++){
        consoleToStr += ", "
        consoleToStr += game.gameConsole[c].title;   
    }
    return consoleToStr
}

function displayGame(){
    games = populateGames()
    htmlContent = ""
    //htmlContent +="<div id=img-gallery class = container>"
    for(i=0; i<games.length;){
        htmlContent += "<div class = row>"
        for(j=0;j<4;j++){
            if (games[i]!=null){
                gameImgLink = games[i].title.split(" ").join("")
                gameImgLink = gameImgLink.replace(":","")
                htmlContent += "<div class = col-sm> <div class = displayGames id = gameImgLink><button id = gameButton onclick=viewGame(games["+i+"].title)> <img id=allgames src=images/games/"+gameImgLink+".jpg width=100px>";
                htmlContent += "<h6>"+games[i].title+"</h6>"
                htmlContent += "<p>"+getConsole(games[i])+"</p>"
                htmlContent += "<p>Release Date: "+games[i].year+
                    "</p><p>Genre: "+games[i].genre+
                    "</p><p>Review Average: "+Math.round(getAverageReview(games[i])*100)/100+"</p></button></div></div>";
                i++;
            } else {
                htmlContent += "<div class = col-sm></div>"
            }
        }
        htmlContent += "</div>"
    }
    //htmlContent += "</div>"
    document.getElementById("gameDescription").innerHTML += htmlContent
}

function populateConsoleFilter(){
    games = populateGames()
    gameconsole = [];
    htmlContent = ""
    consoles = populateGameConsoles();
    for (i = 0; i<consoles.length; i++){
        gameconsole[i] = gameConsoles[i].title   
    }
    htmlContent += "<option value=All>All</option>";
    //console.log("gameconsole array: "+gameconsole)
    for(i=0; i<gameconsole.length;){
        consoleLink = gameconsole[i].split(" ").join("")
        consoleLink = consoleLink.replace(":","") 
        htmlContent+= "<option value="+consoleLink+">"+gameconsole[i]+"</option>";
        console.log(consoleLink)
        //console.log("console title: "+gameconsole[i])
        i++;
        
    }
    document.getElementById("console").innerHTML += htmlContent;
}

/*
function applyFilters(){
    console.log("found function applyFilters")
    const selectedValue = document.getElementById("console").value;
    console.log(selectedValue)
    const items = document.querySelectorAll(".displayGames");

    items.forEach(item => {
        console.log(getGamesConsole(item))
        if (selectedValue === "All") {
            item.classList.remove("hidden");
        } else {
            item.id === selectedValue ? 
        }
    });
}
*/




function applyFilters(){
    games = populateGames()
    const selectedValue = document.getElementById("console").value;
    const items = document.querySelectorAll(".displayGames");
    const col = document.querySelectorAll(".col-sm")
    const row = document.querySelectorAll(".row")
    htmlContent = ""
    for(i=0; i<games.length; i++){
        console.log("first loop")
        console.log("Game: ",games[i])
        console.log(games[i].gameConsole)
        for(c=0;c<games[i].gameConsole.length;c++){
            console.log("second loop")
            conName = games[i].gameConsole[c].title.split(" ").join("").replace(":","")
            console.log(selectedValue)
            console.log(conName)
            if(conName == selectedValue){ 
                console.log("Displays to screen")
                console.log(games[i])
                htmlContent = displayGame()  
                
            }
        }
        
    }

}

// NOTE FOR SELF (KIERAN)

/*
Steps for making filters

Redo displayGame() into 2 functions
First function will display rows and cols
Second will input the data 

*/




/*
    items.forEach(item => {
        if (selectedValue === "All"){
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
            col[g].style.display = "none"
            row[g].style.display = "none"
            for(c=0;c<games[g].gameConsole.length;c++){
                conName = games[g].gameConsole[c].title.split(" ").join("").replace(":","")
                if(conName == selectedValue){
                    item.classList.remove("hidden")
                    col[g].style.display = ""
                    row[g].style.display = ""
                    
            }
        }
        g++
        }
    });
*/
