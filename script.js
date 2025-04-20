const quizData = [
    // Multiple Choice
    {
      question: "What does Buffy say when she first meets Angel?",
      options: ["You're a vampire.", "You're standing in the dark with a coat. That’s not creepy at all.", "Who are you?", "Nice stalker trench coat."],
      answer: 2
    },
    {
      question: "Which item is not part of the Slayer emergency kit?",
      options: ["Holy water", "Wooden stake", "Crossbow", "Pepper spray"],
      answer: 3
    },
    {
      question: "What song is playing during Buffy and Angel’s first kiss?",
      options: ["Close Your Eyes", "Wild Horses", "Full of Grace", "I'll Remember You"],
      answer: 1
    },
    {
      question: "Which of these is *not* a real episode title?",
      options: ["Once More, with Feeling", "Beer Bad", "I Know What Slayed You Last Summer", "Hush"],
      answer: 2
    },
    {
      question: "What does Willow turn into in the alternate universe episode 'The Wish'?",
      options: ["A demon", "A werewolf", "A vampire", "A vengeance demon"],
      answer: 2
    },
    {
      question: "Which character said: 'I may be dead, but I'm still pretty'?",
      options: ["Buffy", "Faith", "Cordelia", "Anya"],
      answer: 0
    },
    {
      question: "Who kills Glory’s human host, Ben?",
      options: ["Buffy", "Willow", "Giles", "Spike"],
      answer: 2
    },
    {
      question: "What is the name of Xander’s favorite comic book shop?",
      options: ["Nerdvana", "The Magic Box", "Sunnydale Comics", "All About Comics"],
      answer: 0
    },
    {
      question: "Which of the following isn’t part of The Initiative?",
      options: ["Professor Walsh", "Graham", "Adam", "Oz"],
      answer: 3
    },
    {
      question: "What was Buffy’s official job title at the Doublemeat Palace?",
      options: ["Line cook", "Grill technician", "Counter girl", "Patty puncher"],
      answer: 2
    },
  
    // True/False
    { question: "Buffy dies twice over the course of the series.", options: ["True", "False"], answer: 0 },
    { question: "Spike originally came to Sunnydale with the intention of helping Buffy defeat the Master.", options: ["True", "False"], answer: 1 },
    { question: "Tara was the first witch introduced in the series.", options: ["True", "False"], answer: 1 },
    { question: "The Body is one of the few episodes with no musical score at all.", options: ["True", "False"], answer: 0 },
    { question: "Angel appears in the musical episode “Once More, with Feeling.”", options: ["True", "False"], answer: 1 },
  
    // Guess the Episode
    { question: "Episode where Buffy comes back from the dead, but no one realizes she was in heaven.", options: ["After Life", "Bargaining", "The Gift", "Grave"], answer: 0 },
    { question: "“I’m seventeen. Looking at linoleum makes me want to have sex.”", options: ["The Zeppo", "Where the Wild Things Are", "Bad Girls", "Something Blue"], answer: 1 },
    { question: "Episode told entirely in silence – terrifying Gentlemen steal everyone's voices.", options: ["Restless", "Once More, with Feeling", "Hush", "Fear, Itself"], answer: 2 },
    { question: "Buffy’s mom dies suddenly and the world feels painfully ordinary and cruel.", options: ["The Gift", "The Body", "Helpless", "Forever"], answer: 1 },
    { question: "A musical demon causes the Scooby Gang to sing and reveal their secrets.", options: ["Once More, with Feeling", "Tabula Rasa", "Him", "Something Blue"], answer: 0 },
  ];
  
  const quizForm = document.getElementById("quizForm");
  const results = document.getElementById("results");
  const submitBtn = document.getElementById("submitBtn");
  const restartBtn = document.getElementById("restartBtn");
  
  function loadQuiz() {
    quizForm.innerHTML = "";
    quizData.forEach((item, index) => {
      const qBlock = document.createElement("div");
      qBlock.classList.add("question-block");
      const qTitle = document.createElement("h3");
      qTitle.textContent = `Q${index + 1}. ${item.question}`;
      qBlock.appendChild(qTitle);
  
      item.options.forEach((opt, optIndex) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${index}`;
        input.value = optIndex;
        label.appendChild(input);
        label.appendChild(document.createTextNode(opt));
        qBlock.appendChild(label);
        qBlock.appendChild(document.createElement("br"));
      });
  
      quizForm.appendChild(qBlock);
    });
  }
  
  submitBtn.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((item, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && parseInt(selected.value) === item.answer) {
        score++;
      }
    });
  
    results.innerHTML = `You scored <strong>${score}/20</strong>.`;
    submitBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
  });
  
  restartBtn.addEventListener("click", () => {
    loadQuiz();
    results.innerHTML = "";
    submitBtn.style.display = "inline-block";
    restartBtn.style.display = "none";
  });
  
  loadQuiz();
  