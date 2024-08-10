const questions = [
    // ... Define question objects here ...
    {
      category: "songs",
      question: "Play the song and guess which choice of a song name is the correct answer below:",
      audioSrc: "./Moment 4 Life.mp3", 
      answers: ["Moment 4 Life", "Dear Old Nicki", "Starships", "Your Love"],
      correctAnswer: 0,
    },
    {
        category: "songs",
        question: "Play the song and guess which choice of a song name is the correct answer below:",
        audioSrc: "./Nicki Minaj - Red Ruby Da Sleeze (Best Clean Version).mp3", 
        answers: ["Fractions", "Red Ruby Da Sleeze", "Roman's Revenge", "Chun-Li"],
        correctAnswer: 1,
      },
      {
        category: "songs",
        question: "Play the song and guess which choice of a song name is the correct answer below:",
        audioSrc: "./Pink Friday Girls.mp3", 
        answers: ["Cowgirl", "I'm The Best", "Starships", "Pink Friday Girls"],
        correctAnswer: 3,
      },
      {
        category: "songs",
        question: "Play the song and guess which choice of a song name is the correct answer below:",
        audioSrc: "./Roman's Revenge.mp3", 
        answers: ["Roman's Revenge", "Roman In Moscow", "Roman Holiday", "Roman Reloaded"],
        correctAnswer: 0,
      },
      {
        category: "songs",
        question: "Play the song and guess which choice of a song name is the correct answer below:",
        audioSrc: "./Chun-Li.mp3", 
        answers: ["FTCU", "Chun-Li", "Good Form", "Only"],
        correctAnswer: 1,
      },
      {
        category: "songs",
        question: "Play the song and guess which choice of a song name is the correct answer below:",
        audioSrc: "./Nicki Minaj - Barbie World (ft. Ice Spice) (Clean Radio Edit).mp3", 
        answers: ["Barbie Dangerous", "Barbie Dreams", "Barbie Tingz", "Barbie World"],
        correctAnswer: 3,
      },
      {
        category: "songs",
        question: "Play the song and guess which choice of a song name is the correct answer below:",
        audioSrc: "./Super Bass.mp3", 
        answers: ["Super Bass", "Va Va Voom", "Yikes", "Here I Am"],
        correctAnswer: 0,
      },
      {
        category: "songs",
        question: "Play the song and guess which choice of a song name is the correct answer below:",
        audioSrc: "./Barbie Dangerous.mp3", 
        answers: ["Let Me Calm Down", "Did It On'em", "Barbie Dangerous", "Fallin 4 U"],
        correctAnswer: 2,
      },
      {
        category: "songs",
        question: "Play the song and guess which choice of a song name is the correct answer below:",
        audioSrc: "./Starships.mp3", 
        answers: ["Pound The Alarm", "Pink Birthday", "Starships", "Seeing Green"],
        correctAnswer: 2,
      },
      {
        category: "songs",
        question: "Play the song and guess which choice of a song name is the correct answer below:",
        audioSrc: "./Nicki Minaj - Last Time I Saw You (Official Audio).mp3", 
        answers: ["Are You Gone Already", "The Crying Game", "All Things Go", "Last Time I Saw You"],
        correctAnswer: 3,
      },
    {
      category: "facts",
      question: "What is the name of Nicki Minaj's first album?",
      answers: ["Queen", "The PinkPrint", "Pink Friday", "Pink Friday: Roman Reloaded"],
      correctAnswer: 2,
    },
    {
        category: "facts",
        question: "What is the name of Nicki Minaj's first album?",
        answers: ["Queen", "The PinkPrint", "Pink Friday", "Pink Friday: Roman Reloaded"],
        correctAnswer: 2,
      },
      {
        category: "facts",
        question: "What is Nicki's real name?",
        answers: ["Onika", "Nicki", "Nicole", "Nikki"],
        correctAnswer: 0,
      },
      {
        category: "facts",
        question: "Where did Nicki grow up?",
        answers: ["Queens", "Brooklyn", "Bronx", "Manhattan"],
        correctAnswer: 0,
      },
      {
        category: "facts",
        question: "What is Nicki's fan's name?",
        answers: ["Barbies", "Unicorns", "Barbz", "Bratz"],
        correctAnswer: 2,
      },
      {
        category: "facts",
        question: "How many albums does she currently have?",
        answers: ["6", "4", "8", "5"],
        correctAnswer: 0,
      },
      {
        category: "facts",
        question: "What was her latest released album's name?",
        answers: ["The PinkPrint", "Pink Friday 2", "Pink Friday", "Pink Friday: Roman Reloaded"],
        correctAnswer: 1,
      },
      {
        category: "facts",
        question: "What is Nicki's zodiac sign",
        answers: ["Virgo", "Leo", "Scorpio", "Sagittarius"],
        correctAnswer: 3,
      },
      {
        category: "facts",
        question: "How many cover arts does Nicki have for her album Pink Friday 2?",
        answers: ["5", "6", "2", "1"],
        correctAnswer: 0,
      },
      {
        category: "facts",
        question: "Nicki Minaj is known for and is the following?",
        answers: ["The Queen of Rap"],
        correctAnswer: 0
      },
  ];
  
  let currentQuestion = 0;
  let: audio = new Audio();
  let score = 100;
  
  function init() {
    const answerList = document.getElementById("answers");
    const restartButton = document.getElementById("restart");
    const currentScoreDisplay = document.getElementById("currentScore");
  
    answerList.addEventListener("click", handleAnswerClick);
    restartButton.addEventListener("click", handleRestart);
  
    render(); // Call render function to start the quiz
  }
  
  function handleAnswerClick(event) {
    if (!event.target.classList.contains("answer")) return; // Check if clicked element is an answer
  
    const userAnswer = parseInt(event.target.dataset.index); // Get answer index from data-index attribute
    const correctAnswer = questions[currentQuestion].correctAnswer;
  
    if (userAnswer === correctAnswer) {
      score += 5;
      alert("Correct! ✨ +5 points ✨");
    } else {
      alert(`Incorrect. The answer is ${questions[currentQuestion].answers[correctAnswer]}`);
    }
  
    currentQuestion++;
    render();
  }
  
  function handleRestart() {
    currentQuestion = 0;
    score = 0;
    render();
  }
  
  function render() {
    const questionElement = document.getElementById("question");
    const audioElement = document.getElementById("question-audio");
    const answerList = document.getElementById("answers");
    const currentScoreDisplay = document.getElementById("currentScore");
  
    // Clear previous content
    questionElement.textContent = "";
    answerList.innerHTML = ""; // Clear list items
  
    // Check if all questions are answered
    if (currentQuestion === questions.length) {
      questionElement.textContent = `Quiz Completed! Your final score is ${score} points.`;
      return; // Exit function if quiz is finished
    }
  
    const currentQuestionObj = questions[currentQuestion];
  
    // Update question, answers, and score
    questionElement.textContent = currentQuestionObj.question;
    currentScoreDisplay.textContent = `Current Score: ${score}`;
    audioElement.src = questions[currentQuestion].audioSrc;

  
    currentQuestionObj.answers.forEach((answer, index) => {
      const answerItem = document.createElement("li");
      answerItem.classList.add("answer");
      answerItem.textContent = answer;
      answerItem.dataset.index = index; // Store answer index in data attribute
      answerList.appendChild(answerItem);
    });
  }

  
  
  init(); // Call init function to start the quiz
  