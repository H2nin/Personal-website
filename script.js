function showMessage(type) {
  const msg = document.getElementById("message");
  if (type === "email") {
    msg.textContent = "You clicked Email! 💌";
  } else if (type === "call") {
    msg.textContent = "You clicked Call! 📞";
  } else if (type === "magic") {
    msg.textContent = "✨ A little magic just for you ✨";
  }
}