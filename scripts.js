const messages = [
    "You make my heart skip a beat! 💓",
    "Every moment with you is magical! ✨",
    "You are my sunshine on a rainy day! ☀️",
    "I love you more than words can say! ❤️"
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
        document.getElementById("rose-message").style.opacity = "1"; // Show message
    }, roses.length * 600 + 1000);
}

// Run bouquet animation automatically on page load
window.onload = function() {
    setTimeout(revealRoses, 500);
};
