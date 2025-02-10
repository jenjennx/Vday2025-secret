const messages = [
    "It has always been you 💓",
    "You make me laugh more than anyone could 😊",
    "You are my sunshine ☀️",
    "I adore your eyes when you look at me like a Golden Retriever 🐶"
];

function showMessage(index) {
    let messageElement = document.getElementById("message");
    messageElement.textContent = messages[index];
    messageElement.classList.remove("hidden");
}

// Gradually show the roses (Auto-start on page load)
function revealRoses() {
    const roses = document.querySelectorAll(".rose"); // Select all roses

    roses.forEach((rose, index) => {
        setTimeout(() => {
            rose.classList.add("show"); // Add class to make roses appear
        }, index * 600); // Staggered blooming effect
    });

    setTimeout(() => {
        document.getElementById("rose-message").classList.remove("hidden");
        rose-message.classList.add("show"); // Show message
    }, roses.length * 600 + 1000);
}

// Run bouquet animation automatically on page load
window.onload = function() {
    setTimeout(revealRoses, 500);
};
