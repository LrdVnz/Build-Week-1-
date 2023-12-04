//

    const questions = [
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
          "Central Process Unit",
          "Computer Personal Unit",
          "Central Processor Unit",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
          "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Computer Style Sheet",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
      },
    ];

    
    // Creare una funzione per cambiare domanda ad ogni click di risposta
    // svuotare la pagina
    // cambiare il contenuto del div con una domanda a random presa dall'array 
    // verifica ogni volta che questionsNumber non sia maggiore di 10
    
      /// Codice principale : 
      /// 0. Controlla che questionsNumber non sia superiore a 10 
      /// se superiore a dieci mostra la pagina di fine (punteggio etc)
      /// 1. svuota il contenuto del div 
      /// 2. prendi un numero random 
      /// 3. controlla che il numero random non sia già presente nell'array
      /// 3a. se il numero è già presente, creane un altro
      /// 4. prendi una domanda random 
      /// 5. cambia il contenuto del div con la domanda a random 
      /// 6. registrare la risposta data dall'utente 
      /// 7. se la risposta coincide, aggiungi un punto a user_score

      let questionsNumber = 0;
    
      let user_score = 0; 
  
      let question1 = document.querySelector('.question');
  
      let usedNumbers = [];
  
      tastoInvio.addEventListener('click', () => {
        if (questionsNumber > 10 ) {
            question1.innerText = "Hai finito il benchmark" // provvisorio
            return
        }
        question1.innerText = " "; // svuota il contenuto del 
        question1.innerText = questions[questionsNumber].question;

      } )  
   