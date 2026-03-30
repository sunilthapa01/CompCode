export function RandomMess() {

const messages = [
  "Success usually comes to those who are too busy to be looking for it.",
  "Small progress each day adds up to big results.",
  "Do something today that your future self will thank you for.",
  "Great developers are not born, they are built by practice.",
  "Consistency beats talent when talent does not work hard.",
  "Your only limit is the effort you are willing to give.",
  "Every bug you fix makes you a better programmer."
    ];
    const randomIndex = Math.floor(Math.random() * messages.length)
    return messages[randomIndex]
} 