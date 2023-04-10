const story_intro = new Typed('#dialogue-box', {
  strings: ['I found myself standing in the middle of a dense forest.', 
  'Surrounded by towering trees and the soothing sounds of nature.',
  'I looked down and saw that I was dressed in my iconic outfit, but had no memory of how I got there.',
  'As I took in my surroundings, I felt a sudden thirst and a craving for a cold drink.',
  'Fortunately, I spotted a vending machine nearby, but to my dismay, I had no cash on me.',
  'Just as I was about to give up and continue my journey..',
  'The vending machine beeped and a message appeared on its screen.',
  'Message: "Challenge me to a game of rock-paper-scissors, and if you win 5 rounds, I\'ll give you a drink."',
  'I couldn\'t resist the challenge, I stepped forward and accepted the vending machine\'s challenge.',
  'Click on the vending machine to start the game.'],
  showCursor: false,
  typeSpeed: 55,
  backSpeed: 10,
  startDelay: 4000,
  backDelay: 2000, 
  onComplete: (self) => {
    const element = self.el
    element.style.opacity = 0
    element.style.transition = 'opacity 5s ease-out'
    setTimeout(() => {
      self.destroy()
    }, 1000)
  }
});

story_intro.start()
