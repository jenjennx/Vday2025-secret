/* General Cute Pastel Theme */
body {
    font-family: 'Gill sans';
    text-align: center;
    background-color: #ffeaf4;
    color: #d63384;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: auto;
    background: #fffaf5;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

h1 {
    font-size: 24px;
    color: #ff6699;
}

.hearts {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.heart {
    font-size: 50px;
    cursor: pointer;
    margin: 10px;
    transition: transform 0.3s;
}

.heart:hover {
    transform: scale(1.2);
}

.hidden {
    display: none;
    font-size: 20px;
    margin-top: 20px;
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Bouquet Section */
.bouquet-container {
    margin-top: 30px;
}

.bouquet-text {
    font-size: 18px;
    color: #ff4d6d;
    margin-bottom: 10px;
}

/* Bouquet Arrangement */
.bouquet {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
}

/* Roses */
.rose-container {
    display: flex;
    gap: 8px;
}

.rose {
    width: 30px;
    height: 30px;
    background-color: pink;
    border-radius: 50%;
    position: relative;
    transform: scale(0); /* Start hidden */
    transition: transform 0.5s ease-in-out;
}

/* Rose Colors */
.rose.red {
    background-color: #ff4d6d;
}

.rose.pink {
    background-color: #ffb3c6;
}

.rose.peach {
    background-color: #ff9999;
}

/* Rose Stems */
.rose::after {
    content: "";
    width: 4px;
    height: 50px;
    background-color: green;
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
}

/* Rose Bloom Animation */
.rose.show {
    transform: scale(1);
}
