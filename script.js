const compliments = [
    "You are amazing!",
    "Your smile is contagious!",
    "You are an inspiration to others!",
    "You have an amazing sense of humor!",
    "You're doing a great job!",
    "You're a true star!",
    "You light up the room!",
    "You're a great listener!",
    "Your positivity is contagious!",
    "You have a heart of gold!",
    "You are so creative!",
    "Your kindness is incredible!",
    "You're absolutely awesome!"
  ];
  
  const complimentBox = document.getElementById('compliment');
  const generateBtn = document.getElementById('generate');
  
  generateBtn.addEventListener('click', function() {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentBox.style.transform = 'scale(0)';
    complimentBox.style.opacity = '0';
  
    setTimeout(() => {
      complimentBox.textContent = randomCompliment;
  
      complimentBox.style.transform = 'scale(1)';
      complimentBox.style.opacity = '1';
    }, 500); 
  });
  