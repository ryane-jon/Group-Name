//Game Constructor
function Game(title, console, developer, publisher, series, availability, reviews, id) {
    this.title = title; // The title of the game -- String
    this.console = console; // The console(s) that the game is on -- Array of String
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