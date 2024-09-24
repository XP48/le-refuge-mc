const ip = document.getElementById('ip');

ip.addEventListener('click', () => {
    navigator.clipboard.writeText(ip.innerText);
});