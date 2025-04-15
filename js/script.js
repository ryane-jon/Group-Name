//Game Constructor
function Game(title, gameConsole, genre, year, developer, publisher, series, availability, reviews,info,summary, id) {
    this.title = title; // The title of the game -- String
    this.gameConsole = gameConsole; // The gameConsole(s) that the game is on -- Array of String
    this.genre = genre; // The genre -- Array of String
    this.year=year // year the game was released 
    this.developer = developer; // The Developer of the game -- String
    this.publisher = publisher; // The Publisher of the game -- String
    this.series = series; // The series the game is a part of (if any) -- String
    this.availability = availability; // is the game still available to buy -- String -- "Available", "Overpriced", "Partial", "Unavailable" etc
    this.reviews = reviews // the existing reviews for this game -- Array of ReviewScore
    this.summary=summary// summary of game
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

function UserReview(username,score,reviewText,gameTitle){
    this.username=username
    this.score=score
    this.reviewText=reviewText
    this.gameTitle=gameTitle
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
        "As Mario, the player embarks on a quest to rescue Princess Peach and save the universe from Bowser",
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
        "The single-player story follows three protagonists-retired bank robber Michael De Santa (Ned Luke), street gangster Franklin Clinton (Shawn Fonteno), and drug dealer and gunrunner Trevor Philips (Steven Ogg), and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals.",
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
        "Each player assumes control of an attacker or a defender in different gameplay modes such as rescuing a hostage, defusing a bomb, or taking control of an objective within a room.",
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
        "It follows Mario and his new ally Cappy-a sentient hat-as they journey across various kingdoms to save Princess Peach from Mario's nemesis Bowser's plans of forced marriage.",
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
        "Set in the Lands Between, players control a customizable player character on a quest to repair the Elden Ring and become the new Elden Lord.",
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
        "<br>The PS4,PS5,Xbox Series X,Nintendo Switch and PC Versions are available via Metal Gear Solid: Master Collection vol 1"+
        "<br>Metal Gear Solid 3 is available on Steam, Xbox Games Store, Playstation Store and The Nintendo Switch eShop",
        "Set in 1964, 31 years before the events of the original Metal Gear, the story centers on the FOX operative codenamed Naked Snake as he attempts to rescue Russian rocket scientist Nikolai Stepanovich Sokolov, sabotage an experimental superweapon, and assassinate his defected former boss.",
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
        "<br>3DS Version is Playable on The New Nintendo 3DS"+
        "<br>Nintendo Switch Version is available on Nintendo switch Online",
        "It is set in the fantasy land of Hyrule and centers on an elf-like boy named Link, who aims to collect the eight fragments of the Triforce of Wisdom to rescue Princess Zelda from Ganon.",
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
        "Mario Kart DS features characters from the Mario series and pits them against each other as they race in karts on tracks based on locations in the Mario series.",
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
        "The player controls bounty hunter Samus Aran, who travels to planet Zebes to retrieve an infant Metroid creature stolen by the Space Pirate leader Ridley.",
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
        "<br>Resident Evil 4 is available on Steam, Xbox Games Store,Playstation Store and The Nintendo Switch eShop",
        "Players control the special agent Leon S. Kennedy on a mission to rescue the US president's daughter, Ashley Graham, who has been kidnapped by a religious cult in rural Spain.",
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
        "Skyrim has 3 version on PC these are called The Elder Scrolls V: Skyrim, The Elder Scrolls V: Skyrim - Special Edition and The Elder Scrolls V: Skyrim Anniversary Edition"
        +"<br>The PS4 and Xbox one versions is known as The Elder Scrolls V: Skyrim - Special Edition"
        +"<br>The PS4 version is playable on the PS5 Via Backwards Compatibility"
        +"<br>Xbox One version is playable on the xbox series X via Backwards Compatibility"
        +"<br>The xbox series X and PS5 Version is known as The Elder Scrolls V: Skyrim Anniversary Edition"
        +"<br>The alexa version is called Skyrim Very Special Edition"
        +"<br>The Elder Scrolls V: Skyrim is available on Steam,Xbox Games Store,Playstation Store and The Nintendo Switch eShop",
        "The game is set 200 years after the events of Oblivion and takes place in Skyrim, the northernmost province of Tamriel, a continent on the planet Nirn. Its main story focuses on the player character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon prophesied to destroy the world. ",
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
        "The game follows the story of Caleb, an undead early 20th century gunslinger seeking revenge against the demon Tchernobog.",
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
        " Lo Wang finds he can no longer stomach Zilla's evil and quits his job. Master Zilla soon realizes the threat that Lo Wang poses and orders the creatures to kill him. Forced to fight for his life, Lo Wang manages to slaughter dozens of Zilla's minions until he discovers that Zilla also had his old mentor, Master Liep, murdered. Following his mentor's dying words, Lo swears to put an end to Zilla's schemes.",
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
        "The N64 Version was call Duke Nukem 64. this version has slightly altered levels, new weapons, no music and was censored to remove any drug and sex refrences"
        +"<br>The Sega Genesis version had simplified graphics and only containted episode 2"
        +"<br>The xbox 360 version has a rewind feature and has modified music"
        +"<br>The PS3 and PS vita versions is known as Duke Nukem 3D: Megaton Edition"
        +"<br>Duke Nukem 3D: Megaton Edition also included three expansion used to be on Steam but was removed in 2016"
        +"<br>Steam Also had another version called Duke Nukem Kill-a-Ton 2015 Collection this was removed in 2015"
        +"<br>The PS4, Xbox one and nintendo Switch versions is know as Duke Nukem 3D: 20th Anniversary World Tour"
        +"<br>Duke Nukem 3D: 20th Anniversary World Tour is currently the only version available on steam it also added a new episode but didn't include any of the expansions"
        +"<br>Duke Nukem 3D is available on Steam, Xbox Games Store,Playstation Store and The Nintendo Switch eShop",
        "Duke Nukem 3D features the adventures of the titular Duke Nukem, voiced by Jon St. John, who fights against an alien invasion on Earth.",
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
        "The Snes version has 5 levels missing from episode 1-3"
        +"<br>The PS1 Version has 28 levels from episode 1-4, 23 levels from Doom II and 7 original levels. It also has different music"
        +"<br>The Game Boy advance version has missing levels and some censorship"
        +"<br>Playable on Xbox via Doom 3: Collector's Edition it also contains 2 exclusive levels"
        +"<br>The Xbox 360 version was digital only"
        +"<br>The PS3 Version was know as Classic Complete"
        +"<br>The PS4,Xbox One and Nintedo Switch has 2 versions The First is called Doom 1993 the 2nd is called Doom + Doom II"
        +"<br> Doom + Doom II is also on Xbox Series X, PS5 and PC. This is the current version of the Game"
        +"<br>Doom is available on Steam, Xbox Games Store,Playstation Store and The Nintendo Switch eShop",
        "The player assumes the role of a space marine, later unofficially referred to as Doomguy, fighting through hordes of undead humans and invading demons. The game begins on the moons of Mars and finishes in hell, with the player traversing each level to find its exit or defeat its final boss.",
        games.length
    ))
    return games;
}

// populates user reviews(would be stored in a database)
function populateUserReviews(){
    let userReviews =[];
    userReviews.push(new UserReview(
        "Ding20",
        90,
        "I enjoy this game and love the structure of the galaxies.I also really like the level design and attention to details.",
        "Super Mario Galaxy"
    ))

    userReviews.push(new UserReview(
        "Ding20",
        80,
        "The story for this game is amazing and love the different playable characters, Online just as good will amazing depth to what can be done, however f*ck the guy on the flying bike with missiles.",
        "Grand Theft Auto V"
    ))

    userReviews.push(new UserReview(
        "Ding20",
        30,
        "If you enjoy getting shot through every wall in a room mid explosion, then this game is perfect for you",
        "Rainbow Six Siege"
    ))

    userReviews.push(new UserReview(
        "Prisonerflake",
        90,
        "As a completionist I love this game, great world designs, amazing soundtrack with plenty of replayability and a good DLC, only complaint I could have is that the worlds aren’t big enough for me.",
        "Super Mario Odyssey"
    ))

    userReviews.push(new UserReview(
        "Ding20",
        0,
        "Game too hard",
        "Elden Ring"
    ))

    userReviews.push(new UserReview(
        "Prisonerflake",
        50,
        "Second that ",
        "Elden Ring"
    ))
       
    userReviews.push(new UserReview(
        "Padlowan",
        70,
        "Too easy but really good lore",
        "Elden Ring"
    ))

    userReviews.push(new UserReview(
        "Padlowan",
        80,
        "This is the moment the naked snake became the big boss",
        "Metal Gear Solid 3: Snake Eater"
    ))
    userReviews.push(new UserReview(
        "ThompsonThompson",
        100,
        "The game Has a Crocodile hat",
        "Metal Gear Solid 3: Snake Eater"
    ))
    userReviews.push(new UserReview(
        "ThompsonThompson",
        60,
        "Need a guide for this game",
        "The Legend of Zelda"
    ))
    userReviews.push(new UserReview(
        "Ding20",
        70,
        "Fun game with plenty of well-made tracks, I just wish rainbow road was easier :(",
        "Mario Kart DS"
    ))
    userReviews.push(new UserReview(
        "ThompsonThompson",
        90,
        "Best mario kart",
        "Mario Kart DS"
    ))
    userReviews.push(new UserReview(
        "ThompsonThompson",
        100,
        "Great Atmosphere and exploration",
        "Super Metroid"
    ))

    userReviews.push(new UserReview(
        "Prisonerflake",
        100,
        "What did Leon mean he said the bingo line",
        "Resident Evil 4"
    ))
    userReviews.push(new UserReview(
        "ThompsonThompson",
        100,
        "\"Your right hand comes off?\"",
        "Resident Evil 4"
    ))
    userReviews.push(new UserReview(
        "Obisdian-fan",
        10,
        "Todd said you can climb the mountains",
        "The Elder Scrolls V: Skyrim"
    ))
    userReviews.push(new UserReview(
        "Padlowan",
        100,
        "Spend weeks downloading hundreds of mods and then play for 10 minutes",
        "The Elder Scrolls V: Skyrim"
    ))
    userReviews.push(new UserReview(
        "Ralof",
        80,
        "I\'m finally awake",
        "The Elder Scrolls V: Skyrim"
    ))
    userReviews.push(new UserReview(
        "Padlowan",
        100,
        "I love boomer shooters where the protagonist is too angry to die",
        "Blood"
    ))
    userReviews.push(new UserReview(
        "ThompsonThompson",
        70,
        "Greasy Randy worked on this game so that makes it lose some points",
        "Shadow Warrior"
    ))
    userReviews.push(new UserReview(
        "Padlowan",
        80,
        "Crazy good level design. Juxtaposition between a serious alien invasion and Dukey Nukey’s ridiculous character is hilarious.",
        "Duke Nukem 3D"
    ))
    userReviews.push(new UserReview(
        "Padlowan",
        80,
        "It can run on my smart fridge",
        "DOOM"
    ))
    userReviews.push(new UserReview(
        "Civvie",
        80,
        "Weirdly shaped rooms haphazardly strewn together",
        "DOOM"
    ))
    userReviews.push(new UserReview(
        "ThompsonThompson",
        80,
        "I can run this on a pdf file",
        "DOOM"
    ))


    return userReviews;   
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
    games = populateGames();
    //name equal
    for(i=0; i<games.length; i++){
        if(games[i].title.toLowerCase()==name.toString().toLowerCase() & !result.includes(games[i])) result.push(games[i]);
    }
    //name includes search term
    for(i=0; i<games.length; i++){
        if(games[i].title.toLowerCase().includes(name.toString().toLowerCase()) & !result.includes(games[i])) result.push(games[i]);
    }
    //console equal or includes
    for(i=0; i<games.length; i++){
        for(c=0; c<games[i].gameConsole.length; c++){
            if(games[i].gameConsole[c].title.toString().toLowerCase()==name.toString().toLowerCase() & !result.includes(games[i])) result.push(games[i]);
        }
        for(c=0; c<games[i].gameConsole.length; c++){
            if(games[i].gameConsole[c].title.toLowerCase().includes(name.toLowerCase()) & !result.includes(games[i])) result.push(games[i]);
        }

    }
    //search term includes name
    for(i=0; i<games.length; i++){
        if(name.toLowerCase().includes(games[i].title.toLowerCase()) & !result.includes(games[i])) result.push(games[i]);
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

//View a game on the game page
function viewGame(game){
    localStorage.setItem("SelectedGame",game)
    window.location.href = "game.html"
}
//Add the game to be fully displayed on the current page
function addGame(){
    game=getGame(localStorage.getItem("SelectedGame"));
    uReviews=populateUserReviews();
    htmlContent = ""

    //display game info
    htmlContent += "<h2>"+game.title+"</h2>";
    gameImgLink = game.title.split(" ").join("")
    gameImgLink = gameImgLink.replace(":","")
    htmlContent += "<div id =allGame><img src=images/games/"+gameImgLink+".jpg>"

    htmlContent += "<div class = row><div class = col-sm><h5>"
    htmlContent +="Console:<br>"
    htmlContent += game.gameConsole[0].title;

    for (i=1; i<game.gameConsole.length; i++){
        htmlContent += ", "+game.gameConsole[i].title;
    }
    htmlContent += "</h5>"
    htmlContent += "<h6>"+game.availability+"</h6>";
    htmlContent += "<h5>Genre: </h5>";
    for (i=0; i<game.genre.length; i++){
        htmlContent += "<h5>"+game.genre[i]+" ";
    }
    htmlContent += "</h5>"

    htmlContent += "<h5>Released in: </h5> <h5>"+game.year+"</h5>";
    htmlContent += "<h6>Developer: "+game.developer+"</h6>";
    htmlContent += "<h6>Publisher: "+game.publisher+"</h6>";
    htmlContent += "<h6>A part of "+game.series+" series</h6>";
     htmlContent += "<h5>External Reviews: </h5>"
    for (i=0; i<game.reviews.length;i++){

        htmlContent += "<p>"+game.reviews[i].score+" from "+game.reviews[i].source+"</p>";
    }

    htmlContent += "</div><div class = col-sm><h5> Summary: </h5>";
    htmlContent +="<p>"+game.summary+"</p>"
    htmlContent +="<h5> Game Info: </h5>"
    htmlContent += "<p>"+game.info+"</p></div></div></div>"
    htmlContent += "<br><div id = allgame><h2>User Reviews</h2>"

    content = false;
    for(i= 0 ;i<uReviews.length;i++){
        if(game.title == uReviews[i].gameTitle){
            content = true
            htmlContent +="<div id = review>"
            htmlContent += "<h5>"+uReviews[i].username+"<h5/>"
            htmlContent += "<h5>Score: "+uReviews[i].score+"/100</h5>"
            htmlContent += "<p>"+uReviews[i].reviewText+"</p>"
            htmlContent +="</div><br>"
        }
            
    }
    if(!content){
        htmlContent +="<h2>This Game Doesn't have any reviews"
    }
    htmlContent +="<\div>"
    document.getElementById("gameContent").innerHTML += htmlContent

}

//Go through each console and display it on the page
function displayPlatforms(){
    consoles = populateGameConsoles();
    for (i = 0; i<consoles.length; i++){
        document.getElementById("platforms").innerHTML +="<img src='images/platformLogos/"+consoles[i].title+".jpg' onclick='getGamesConsole("+consoles[i].id+")' class='platformLogo'>";
    }
}

//Get the average review for a game
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


function getConsoleStr(game){
    consoleToStr = ""
    consoleToStr += game.gameConsole[0].title;
    for (c=1; c<game.gameConsole.length; c++){
        consoleToStr += ", "
        consoleToStr += game.gameConsole[c].title;   
    }
    return consoleToStr
}

function displayGame(){
    if(localStorage.getItem("searchTerm").length>0){
        games = getGamesName(localStorage.getItem("searchTerm"))
        document.getElementById("searchBox").value=localStorage.getItem("searchTerm");
    }
    else{
         games = populateGames()
        }
    htmlContent = "";
    //htmlContent +="<div id=img-gallery class = container>"
    for(i=0; i<games.length;){
        htmlContent += "<div class = row>"
        for(j=0;j<4;j++){
            if (games[i]!=null){
                gameImgLink = games[i].title.split(" ").join("")
                gameImgLink = gameImgLink.replace(":","")
                htmlContent += "<div class = col-sm> <div class = displayGames id = gameImgLink><button id = gameButton onclick=viewGame(games["+i+"].title)> <img id=allgames src=images/games/"+gameImgLink+".jpg width=100px>";
                htmlContent += "<h6>"+games[i].title+"</h6>"
                htmlContent += "<p>"+getConsoleStr(games[i])+"</p>"
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
    document.getElementById("gameDescription").innerHTML = htmlContent
}

/* Login Page Scripts */

function loginFunctionality() {
    var form = document.getElementById("loginForm");
    var errorMessage = document.getElementById("errorMessage");
  
    form.addEventListener("submit", function (prevention) {
      prevention.preventDefault();
  
      var username = document.getElementById("username").value.trim();
      var password = document.getElementById("password").value;
  
      if (username === "admin" && password === "admin") {
        window.location.href = "profile.html";
      } else {
        errorMessage.style.display = "block";
      }
    });
  }

// Get games based on a search term
function searchGame(){
    term= document.getElementById("searchBox").value;
    localStorage.setItem("searchTerm", term);
    displayGame();
}
