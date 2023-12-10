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
   
    //------------------------------------------------------------------------------------------------  funzione cambio pagina
    function startQuiz(){
      if(document.getElementById('agreeCheckbox').checked){
        window.location.replace("quizPage.html");
      }else {
        alert('Promise not checked');
      }
    }

    //variabili globali
    let answerTot=[];
    //variabile per sapere posizione della domanda 
    let numberQuestion=0; //numero della domanda progressivo
    let positionQuestion=0; //posizione della domanda se lo facciamo casuale nell'array di domande
    let second=59; //togliere 1 sec 
    
    // --------------------------------------------------------------------------------------------------    eventi

    document.getElementById('saveAnswer').addEventListener('click',() => {
      recordAnswer();
      clearAnswers();
    })

    document.getElementById('readyGo').addEventListener("click", () => {
      document.getElementById('startQuiz').style.display="none";
      document.querySelector('main').style.display="block";
      nextDomanda();
    })

    // -------------------------------------------------------------------------------------      caricamento domande risposte
    function nextDomanda(){
      if(numberQuestion > (questions.length-1)) return caricamentoPaginaRisultato();
      //------domanda
      document.getElementById('answerTab2').style.display='flex';
      document.getElementById('questionName').innerText=questions[numberQuestion].question;
      console.log('domanda caricata');
      if(questions[numberQuestion].type=='boolean'){
        document.getElementById('answerTab2').style.display='none';
        document.getElementsByClassName('answerLabel')[0].firstChild.innerText="True";
        document.getElementsByClassName('answerLabel')[1].firstChild.innerText="False";
      }
      //caricamento risposte
      let risposte=questions[numberQuestion].incorrect_answers.concat(questions[numberQuestion].correct_answer);
      let i=0;
      for (const iterator of document.getElementsByClassName('answerLabel')) {
        iterator.firstChild.innerText=risposte[i];
        i++;
      }
      document.getElementById('questionCounter').innerText="QUESTION "+(numberQuestion+1)+"/"+questions.length;
      document.getElementById('timeCircle').classList.add('timer');
      document.getElementById('maskCircle').classList.add('mask');
    }
    
    let nodeAnswer=document.querySelectorAll('input');

    //funzioni  
    function recordAnswer(){
      // valutare se necessario uno variabile per registrare l'overtime o se basta verificare che il timer sia 0
        if(second==(-1)) {
    //timer 0 salvo il risultato nel mio array di risposte 
          answerTot[numberQuestion] = {
            answer:null,
            question: positionQuestion,
            point:0,
            empty:true, //domanda vuota
            };
            return
         } else {
            let tempAnswer='';
            let tempPoint=0;
             for (let singleRecord of nodeAnswer) {
              //controllo in tutti gli input se son checked
               if(singleRecord.checked){
                  //trovato quello ok assegno il valore de testo contenuto nel label corrisposndente
                  tempAnswer=document.querySelectorAll('label')[+singleRecord.value-1].innerText;
                  break
                }
              }  
                //verifico che la risposta sia corretta
                if(questions[numberQuestion].correct_answer===tempAnswer){
                //se corretta assegno un punto  
                  tempPoint=1;
                }
    // forse meglio metodo concat?? ma funziona
    //salvo la compilazione 
    answerTot[numberQuestion]={
      answer: tempAnswer, // mi salva la risposta che ha dato utente
      question: positionQuestion,  //salvo la posizione della domanda per sapere quale sia nella array questions
      point: tempPoint, //inserisco 1 o 0 in base alla risposta
      empty:(tempAnswer===''), // valore per overtime
    }
  }
  
  //settare il timer con la variabile second=60
  second=59;
  let timeCircle = document.getElementById('timeCircle');
  timeCircle.classList.remove('timer');
  let maskCircle = document.getElementById('maskCircle');  //per restar element
  maskCircle.classList.remove('mask');
  void timeCircle.offsetWidth; 
  void maskCircle.offsetWidth;
  numberQuestion++;
  nextDomanda();
}

function clearAnswers() {
  for(let i = 0; i < nodeAnswer.length; i++) {
    nodeAnswer[i].checked = false; 
  }

}

  //array per provare funzionamento

  // answerTot=[{
  //   answer: 'tempAnswer',
  //   question: positionQuestion,
  //   point: 0,
  //   empty:false,
  // },{
  //   answer: 'tempAnswer',
  //   question: positionQuestion,
  //   point: 0,
  //   empty:false,
  // },{
  //   answer: 'tempAnswer',
  //   question: positionQuestion,
  //   point: 1,
  //   empty:false,
  // },{
  //   answer: 'tempAnswer',
  //   question: positionQuestion,
  //   point: 0,
  //   empty:true,
  // }];

    //non funziona alert per cambio tab
/*     document.getElementById('bigAnswerContainer').addEventListener('blur', () => {
      alert('hai cambiato tab');
    })
     */ /// Non penso ci sia bisogno di un alert che ti avverte ogni volta che cambi risposta. C'è già l'indizio visivo del campo riempito !

    // funzione per tabella punti in pagina risultato
    let nomeClassePunteggio='punteggio';

    function caricamentoPaginaRisultato(){
      //nascondo e mostro 
      document.getElementById('answersContainer').style.display='none';
      document.getElementById('timerContainer').style.display='none';
      document.getElementById('topBlock').style.display='none';
      //  $("#finalResult").fadeIn("slow"); //jQuery
      document.getElementById('finalResult').style.display='block';
      //blocco il timer
      clearInterval(timeQ);
      
      let tempNode=document.getElementsByClassName(nomeClassePunteggio);
      tempNode[0].innerText=scoreMatch('point',1);
      tempNode[1].innerText=(scoreMatch('point',0)-(scoreMatch('empty',true)));
      tempNode[2].innerText=scoreMatch('empty',true);
      tempNode[3].innerText=numberQuestion;

      // id dove inserire il punteggio calcolato in centesimi
      document.getElementById("punteggioTot").innerText=((+tempNode[0].innerText*questions.length)+ '/100');
      console.log(''+(+tempNode[0].innerText/numberQuestion*100)+'%');
      document.getElementById('correct-progress').style.width=(''+(+tempNode[0].innerText/numberQuestion*100)+'%');

      //elenco delle domande 
      for(let i=0 ; i < questions.length; i++){
        let nodoQ=document.getElementById("elencoDomande");
        let rightWrong=`<i class="fas fa-times-circle" style="color:red;"></i>`;
        if(answerTot[i].point==1) {
          rightWrong=`<i class="fas fa-check-square" style="color:green;"></i>`
        };
        nodoQ.innerHTML += `<li class="riga">${rightWrong}${questions[i].question}<button class="showMore" value="${i}" ></button></li>`;
      }

      let pin=0;
      for (let index of document.getElementsByClassName('openanswers')) {
        let risposte=questions[pin].incorrect_answers.concat(questions[pin].correct_answer);
        for (const iterator of risposte) {
          index.innerHTML += `<li>${iterator}</li>`;
          console.log('li creati')  
        }
        pin++;
      }
        //eventlistener per tutti i button
        let listaButton= document.getElementsByClassName('showMore');
        console.log(listaButton);
        for (let iterator of listaButton) {
          iterator.addEventListener('click',(event)=>{
            let risposte=questions[+event.target.value].incorrect_answers.concat(questions[+event.target.value].correct_answer);
            console.log(risposte);
          })
        }
      }
    //conta quante volte key conbacia con il val e restituisce il numero
    function scoreMatch (key,val){
      let numb=0;
      for (let objectSingle of answerTot) {
        if(objectSingle[key]===val) numb++;
      }
      return numb;
    }

//TImer 
    let tempoRisposta=document.getElementsByClassName('timer');
    tempoRisposta[0].style.setProperty("--duration", "61");  //settare un secondo in piu
    // document.querySelector('p.countdown').style.setProperty("--duration", "20"); 
    // setInterval(()=>{console.log(document.querySelector('p.countdown').style.getPropertyValue('duration'))},500)
    // setInterval(()=>{document.getAnimations('time').start},10000)
    let timeQ=setInterval(timer,1000); //richiama funzione ogno 1000 millesimi di secondo
    function timer(){
      document.getElementById('second').innerText=(''+second);
      if(second==(-1)) return recordAnswer();       //funzione avanzamneto domanda
      if(second<10){
        document.getElementById('second').style.color='red';
      }
      second--;
  
    }
