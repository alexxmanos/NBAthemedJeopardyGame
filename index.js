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
        level: "easy1"
      },
      {
        question: "This NBA team has three-peated twice",
        answers: ["The Celtics", "The Lakers", "The Bulls"],
        correct: "The Bulls",
        level: "easy2"
      },
      {
        question: "This Western Conference team has the most NBA Titles",
        answers: ["The Spurs", "The Lakers", "The Warriors"],
        correct: "The Lakers",
        level: "medium3"
      },
      {
        question: "This Eastern Conference team has the most NBA Titles",
        answers: ["The Celtics", "The Bulls", "The Heat"],
        correct: "The Celtics",
        level: "medium4"
      },
      {
        question: "This NBA team has the most NBA Titles (17 Titles)",
        answers: ["The Lakers", "The Celtics", "Both"],
        correct: "Both",
        level: "hard5"
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
            level: "easy1"
          },
          {
            question: "What players are considered The South's Big Three?",
            answers: ["LeBron James, Dwayne Wade, and Chris Bosh ", "Kevin Garnett, Ray Allen and Paul Pierce", "Steph Curry, Klay Thompson, and Draymond Green"],
            correct: "LeBron James, Dwayne Wade, and Chris Bosh",
            level: "easy2"
          },
          {
            question: "This NBA Player has the most MVPs in NBA History",
            answers: ["Michael Jordan", "Kareem Abdul-Jabbar", "Bill Russell"],
            correct: "Kareem Abdul-Jabbar",
            level: "medium3"
          },
          {
            question: "Considered to be one of the GOAT's and he retired to play baseball",
            answers: ["Michael Jordan", "Kobe Bryant", "LeBron James"],
            correct: "Michael Jordan",
            level: "medium4"
          },
          {
            question: "The youngest player to ever win an NBA MVP award",
            answers: ["LeBron James", "Kobe Bryant", "Derrick Rose"],
            correct: "Derrick Rose",
            level: "hard5" 
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
            level: "easy1"
          },
          {
            question: "What team wears gold and purple ?",
            answers: ["Lakers", "Kings", "Jazz"],
            correct: "Lakers",
            level: "easy2"
          },
          {
            question: "The Warriors beat this team to win the 2022 NBA Finals",
            answers: ["Knicks", "Celtics", "Heat"],
            correct: "Celtics",
            level: "medium3"
          },
          {
            question: "Which team never won a championship in the 90's",
            answers: ["Jazz", "Pistons", "Knicks"],
            correct: "Knicks",
            level: "medium4"
          },
          {
            question: "What is the New York Knicks full team name?",
            answers: ["Knicklebacks", "Knickerbackers", "Knickerbockers"],
            correct: "Knickerbockers",
            level: "hard5" 
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
            level: "easy1"
          },
          {
            question: "The most points ever scored in one game by a player?",
            answers: ["81", "100", "71"],
            correct: "100",
            level: "easy2"
          },
          {
            question: "The all-time assist leader with 15,806 assists",
            answers: ["Jason Kidd", "Chris Paul", "John Stockon"],
            correct: "John Stockon",
            level: "medium3"
          },
          {
            question: "The player with the most triple-doubles in NBA history (198)",
            answers: ["Russell Westbrook", "Oscar Robertson", "Magic Johnson"],
            correct: "Oscar Robertson",
            level: "medium4"
          },
          {
            question: "The player with the most NBA Championships (11)",
            answers: ["Bill Russell", "Kareem Abdul-Jabbar", "Sam Jones"],
            correct: "Knickerbockers",
            level: "hard5" 
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
            level: "easy1"
          },
          {
            question: "The winner of the 2015 NBA Slam Dunk Contest",
            answers: ["Aaron Gordon", "Zach Lavine", "John Wall"],
            correct: "Zach Lavine",
            level: "easy2"
          },
          {
            question: "How many teams are in the NBA?",
            answers: ["32", "30", "28"],
            correct: "30",
            level: "medium3"
          },
          {
            question: " What NBA player is the logo for the NBA",
            answers: ["Wilt Chamberlain", "Jerry Rice", "Jerry West"],
            correct: "Jerry West",
            level: "medium4"
          },
          {
            question: "Who was the Number 1 draft pick in the 2008 NBA Draft",
            answers: ["Derrick Rose", "Blake Griffin", "John Wall"],
            correct: "Derrick Rose",
            level: "hard5" 
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
  
    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)
        
        if(question.level === 'easy1') {
          card.innerHTML = 100
        }
        if(question.level === 'easy2') {
          card.innerHTML = 200
        }
        if(question.level === 'medium3') { 
          card.innerHTML = 300
        }
        if(question.level === 'medium4') { 
          card.innerHTML = 400
        }
        if(question.level === 'hard5') {
          card.innerHTML = 500
        }

        card.setAttribute('data-question', question.question)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-answer-3', question.answers[2])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())

        card.addEventListener('click', flipCard)
})
                               
                              

}

JeopardyCatergories.forEach(catergory => addCatergory(catergory))

function flipCard() {
  this.innerHTML = ""
  this.style.fontSize = "15px"
  this.style.lineHeight = "30px" 
  const textDisplay = document.createElement('div')
  textDisplay.classList.add('card-text')
  textDisplay.innerHTML = this.getAttribute('data-question')
  const firstButton = document.createElement('button')
  const secondButton = document.createElement('button')
  const thirdButton = document.createElement('button')
  firstButton.classList.add('first-button')
  secondButton.classList.add('second-button')
  thirdButton.classList.add('third-button')
  firstButton.innerHTML = this.getAttribute('data-answer-1')
  secondButton.innerHTML = this.getAttribute('data-answer-2')
  thirdButton.innerHTML = this.getAttribute('data-answer-3')
  this.append(textDisplay, firstButton, secondButton, thirdButton)

  console.log(firstButton,secondButton,thirdButton)

  const allCards = Array.from(document.querySelector('.card'))
    allCards.forEach(card => card.removeEvenListener('click', flipCard))
}