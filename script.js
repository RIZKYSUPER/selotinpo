// JavaScript for Spin Animation
const wheel = document.querySelector('.wheel-inner');
const spinButton = document.querySelector('.spin-button');

spinButton.addEventListener('click', () => {
    // Generate a random degree for the spin
    const randomDegree = Math.floor(Math.random() * 360) + 1440; // 1440 = 4 full spins
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    // Disable button during spin
    spinButton.disabled = true;
    setTimeout(() => {
        spinButton.disabled = false;
    }, 3000); // Re-enable button after 3 seconds
});