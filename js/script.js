//Game Constructor
function Game(title, gameConsole, genre, year, developer, publisher, series, availability, reviews,info, id) {
    this.title = title; // The title of the game -- String
    this.gameConsole = gameConsole; // The gameConsole(s) that the game is on -- Array of String
    this.genre = genre; // The genre -- Array of String
    this.year=year // year the game was released 
    this.developer = developer; // The Developer of the game -- String
    this.publisher = publisher; // The Publisher of the game -- String
    this.series = series; // The series the game is a part of (if any) -- String
    this.availability = availability; // is the game still available to buy -- String -- "Available", "Overpriced", "Partial", "Unavailable" etc
    this.reviews = reviews // the existing reviews for this game -- Array of ReviewScore
    this.info= info// info about the games ports
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
        [gameConsoles[4],gameConsoles[16],gameConsoles[3]], 
        ["Adventure","3D Platformer"],
        2007,
        "Nintendo",
        "Nintendo",
        "Mario",
        "Unavailable",
        [new ReviewScore(97, "IGN"), new ReviewScore(97, "Metacritic"), new ReviewScore(91, "Metacritic Users")],
        "The Wii version is playable on the WiiU via Backwards Compatibility"+
        "<br>Super Mario Galaxy is on the Wii, and WiiU eShop but can't be bought as those eShops were shut down"+
        "<br>Playable on the Switch via Super Mario 3D all-stars and was only available for a 6 months",
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
        "The PS4 and Xbox one Versions added a first Person Camera Option this was included in every other version except PS3 and xbox 360"+
        "<br>Grand Theft Auto V is available on Steam,Xbox Games Store and Playstation Store",
        games.length
    ))
    games.push(new Game(
        "Rainbow Six Siege",
        [gameConsoles[5],gameConsoles[8],gameConsoles[9],gameConsoles[10],gameConsoles[18]], 
        ["Action Shooter"],
        2015,
        "Ubisoft",
        "Ubisoft",
        "Tom Clancy",
        "Available",
        [new ReviewScore(85, "IGN"), new ReviewScore(73, "Metacritic"), new ReviewScore(71, "Metacritic Users")],
        "Rainbow Six Siege is available on Steam,Xbox Games Store and Playstation Store",
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
        "Super Mario Odyssey is available on the Nintendo Switch eShop",
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
        "Elden Ring is available on Steam,Xbox Games Store and Playstation Store",
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
        "PS2 had another version called Subsistence Which added a 3rd Person Camera. This version is used for every port"+
        "<br>The PS3,Xbox 360 And PSVita versions are available as Metal Gear Solid HD collection"+
        "<br>Both PS2 Versions are Playble on The first PS3 models Via Backwards Compatibility"+
        "<br>The Xbox 360 version Is playable on Xbox One And Xbox Series X via Backwards Compatibility"+
        "<br>The 3DS version is Know As Metal Gear Solid: Snake Eater 3D is also Playable on New 3ds"+
        "<br>The 3DS version was on the 3DS eShop but can't be bought as the 3DS eShop was Shut down"+
        "<br>The PS4,PS5,Xbox Series X,Nintendo Switch and PC Versions are available via Metal Gear Solid: Master Collection vol 1",
        "<br>Metal Gear Solid 3 is available on Steam,Xbox Games Store and Playstation Store",
        games.length
    ));
    games.push(new Game(
        "The Legend of Zelda",
        [gameConsoles[12],gameConsoles[13],gameConsoles[2],gameConsoles[19],gameConsoles[4],gameConsoles[16],gameConsoles[14],gameConsoles[15],gameConsoles[3]],
        ["Adventure"],
        1986,
        'Nintendo',
        'Nintendo',
        'Legend of Zelda',
        'Available',
        [new ReviewScore(100, "IGN"), new ReviewScore(84, "Metacritic"), new ReviewScore(80, "Metacritic Users")],
        "Playable on Gamecube via The Legend of Zelda: Collector's Edition"+
        "<br>Playable on Gameboy advance via Classic Nes Series: The Legend of Zelda"+
        "<br>The Lengend of zelda is on The Nintendo Wii, Wii U, Nintendo 3DS eShops but can't be bought as those eShops were shut down"+
        "<br>3DS Version is Playble on The New Nintendo 3DS"+
        "<br>Nintendo Switch Version is available on Nintendo switch Online",
        games.length
    ))
    games.push(new Game(
        "Mario Kart DS",
        [gameConsoles[20],
        gameConsoles[21],
        gameConsoles[14],
        gameConsoles[15],
        gameConsoles[16]],
        ["Racing"],
        2005,
        "Nintendo",
        "Nintendo",
        "Mario Kart",
        'Unavailable',
        [new ReviewScore(95, "IGN"), new ReviewScore(91, "Metacritic"), new ReviewScore(86, "Metacritic Users")],
        "can be played on DSi,3DS,New 3DS Via Backwards Compatibility"+
        "<br>Wii U version is on the WiiU eShop but can't be bought as The WiiU eShop was shut down",
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
        "Super Metroid is on the Wii,WiiU and 3DS eShop but can't be bought as the eShop was shut down"+
        "<br>On the 3DS eShop It was only Avaliable for the New 3DS"+
        "<br>Nintendo Switch Version is available on Nintendo switch Online",
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
        "The PS2 Version Added a new campaign called Seperate ways this is included in every Version except the GameCube version"+
        "<br>PS2 Version is Playble on The first PS3 models Via Backwards Compatibility"+
        "<br>The Gamecube version is Playable on the wii via Backwards Compatibility"+
        "<br>The Wii version added motion Controls and was playable on the WiiU Via Backwards Compatibility"+
        "<br>Resident evil 4 is on the WiiU eShop but can't be bought as the WiiU eShop was shut down"+
        "<br>The PS3,PS4,Xbox 360,Xbox One is known as resident evil 4 HD"+
        "<br>The PS4 version is playable on the PS5 Via Backwards Compatibility"+
        "<br>Xbox One version is playable on the xbox series X via Backwards Compatibility"+
        "<br>There are 2 PC versions the most recent version was called Resident evil 4 ultimate HD edition"+
        "<br>Resident Evil 4 had a remake because of this most digital versions have been renamed to Resident Evil 4 (2005)"+
        "<br>Resident Evil 4 is available on Steam,Xbox Games Store,Playstation Store and The Nintendo Switch eShop",
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
        "",
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
        "Blood Got a Remaster Called Blood Fresh Supply which includes two expansions"+
        "<br>Blood Fresh Supply is available on Steam",
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
        "Shadow Warrior Got a Remaster called Shadow Warrior classic Redux which includes two expansion"+
        "<br>Steam has Two Version of Shadow Warrior available. Shadow Warrior Classic (1997) Which is free and Shadow Warrior classic Redux",
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
        "",
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
        "",
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
    document.getElementById("gameContent").innerHTML += "<p>"+game.info+"</p>";

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
    console.log(selectedValue)
    console.log(games[0].title)
    const items = document.querySelectorAll(".displayGames");
    g = 0
    items.forEach(item => {
    if (selectedValue === "All"){
        item.classList.remove("hidden");
    } else {
            item.classList.add("hidden");
            found = false
            for(c=0;c<games[g].gameConsole.length;c++){
                if(games[g].gameConsole[c].title == selectedValue){
                    console.log(games[g])
                    console.log(games[g].gameConsole[c].title)
                    console.log(selectedValue)
                    item.classList.remove("hidden")
                    found = true
            }
        }
        g++
    }
    });

}

