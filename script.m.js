// Week 8 – Motivation Generator

const quotes = [
    "“Leadership and learning are indispensable to each other.” — John F. Kennedy",
    "“Change is hardest at the beginning, messiest in the middle, and best at the end.” — Robin Sharma",
    "“A leader is one who knows the way, goes the way, and shows the way.” — John C. Maxwell",
    "“Adaptability is about the powerful difference between adapting to cope and adapting to win.” — Max McKeown",
    "“Don’t be afraid to give up the good to go for the great.” — John D. Rockefeller",
    "“You don’t learn to walk by following rules. You learn by doing and by falling over.” — Richard Branson",
    "“Change before you have to.” — Jack Welch",
    "“A good leader inspires people to have confidence in themselves.” — Eleanor Roosevelt"
];

document.getElementById("newQuoteBtn").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
});
