const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

const JeopardyCatergories = [
  {
    genre: "NBA Championships",
    questions: [
      {
        question: "What team won the 2023 NBA Finals?",
        answers: ["The Nuggets", "The Warriors", "The Bucks"],
        correct: "The Nuggets",
        level: "100"
      },
      {
        question: "This NBA team has three-peated twice",
        answers: ["The Celtics", "The Lakers", "The Bulls"],
        correct: "The Bulls",
        level: "200"
      },
      {
        question: "This Western Conference team has the most NBA Titles",
        answers: ["The Spurs", "The Lakers", "The Warriors"],
        correct: "The Lakers",
        level: "300"
      },
      {
        question: "This Eastern Conference team has the most NBA Titles",
        answers: ["The Celtics", "The Bulls", "The Heat"],
        correct: "The Celtics",
        level: "400"
      },
      {
        question: "This NBA team has the most NBA Titles (17 Titles)",
        answers: ["The Lakers", "The Celtics", "Both"],
        correct: "Both",
        level: "500"
      }
    ]
  },
  {
    genre: "Greatest Players",
    questions: [
        {
            question: "This Player Scored 100 points in 1 game",
            answers: ["Kobe Bryant", "Damian Lillard", "Wilt Chamberlain"],
            correct: "Wilt Chamberlain",
            level: "100"
          },
          {
            question: "What players are considered The South's Big Three?",
            answers: ["LeBron James, Dwayne Wade, and Chris Bosh ", "Kevin Garnett, Ray Allen and Paul Pierce", "Steph Curry, Klay Thompson, and Draymond Green"],
            correct: "LeBron James, Dwayne Wade, and Chris Bosh",
            level: "200"
          },
          {
            question: "This NBA Player has the most MVPs in NBA History",
            answers: ["Michael Jordan", "Kareem Abdul-Jabbar", "Bill Russell"],
            correct: "Kareem Abdul-Jabbar",
            level: "300"
          },
          {
            question: "Considered to be one of the GOAT's and he retired to play baseball",
            answers: ["Michael Jordan", "Kobe Bryant", "LeBron James"],
            correct: "Michael Jordan",
            level: "400"
          },
          {
            question: "The youngest player to ever win an NBA MVP award",
            answers: ["LeBron James", "Kobe Bryant", "Derrick Rose"],
            correct: "Derrick Rose",
            level: "500" 
          }
    ]
  },
  {
    genre: "Teams",
    questions: [
        {
            question: "Which team's nickname is the Bulls?",
            answers: ["Detroit", "Chicago", "Milwaukee"],
            correct: "Chicago",
            level: "100"
          },
          {
            question: "What team wears gold and purple ?",
            answers: ["Lakers", "Kings", "Jazz"],
            correct: "Lakers",
            level: "200"
          },
          {
            question: "The Warriors beat this team to win the 2022 NBA Finals",
            answers: ["Knicks", "Celtics", "Heat"],
            correct: "Celtics",
            level: "300"
          },
          {
            question: "Which team never won a championship in the 90's",
            answers: ["Jazz", "Pistons", "Knicks"],
            correct: "Knicks",
            level: "400"
          },
          {
            question: "What is the New York Knicks full team name?",
            answers: ["Knicklebacks", "Knickerbackers", "Knickerbockers"],
            correct: "Knickerbockers",
            level: "500" 
          }
    ]
  },
  {
    genre: "Stats",
    questions: [
        {
            question: "The all-time 3pt leader with 3,390 3 points made",
            answers: ["Stephen Curry", "Ray Allen", "James Harden"],
            correct: "Stephen Curry",
            level: "100"
          },
          {
            question: "The most points ever scored in one game by a player?",
            answers: ["81", "100", "71"],
            correct: "100",
            level: "200"
          },
          {
            question: "The all-time assist leader with 15,806 assists",
            answers: ["Jason Kidd", "Chris Paul", "John Stockon"],
            correct: "John Stockon",
            level: "300"
          },
          {
            question: "The player with the most triple-doubles in NBA history (198)",
            answers: ["Russell Westbrook", "Oscar Robertson", "Magic Johnson"],
            correct: "Oscar Robertson",
            level: "400"
          },
          {
            question: "The player with the most NBA Championships (11)",
            answers: ["Bill Russell", "Kareem Abdul-Jabbar", "Sam Jones"],
            correct: "Knickerbockers",
            level: "500" 
          }
    ]
  },
  {
    genre: "Random",
    questions: [
        {
            question: "What NBA player's nickname is the Black Mamba?",
            answers: ["Gilbert Arenas", "Kobe Bryant", "Shaquille O'Neal"],
            correct: "Kobe Bryant",
            level: "100"
          },
          {
            question: "The winner of the 2015 NBA Slam Dunk Contest",
            answers: ["Aaron Gordon", "Zach Lavine", "John Wall"],
            correct: "Zach Lavine",
            level: "200"
          },
          {
            question: "How many teams are in the NBA?",
            answers: ["32", "30", "28"],
            correct: "30",
            level: "300"
          },
          {
            question: " What NBA player is the logo for the NBA",
            answers: ["Wilt Chamberlain", "Jerry Rice", "Jerry West"],
            correct: "Jerry West",
            level: "400"
          },
          {
            question: "Who was the Number 1 draft pick in the 2008 NBA Draft",
            answers: ["Derrick Rose", "Blake Griffin", "John Wall"],
            correct: "Derrick Rose",
            level: "500" 
          }
    ]
  }
];


function addCatergory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerText = category.genre

    column.appendChild(genreTitle)
    game.append(column)
}

JeopardyCatergories.forEach(catergory => addCatergory(catergory))