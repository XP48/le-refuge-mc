const ip = document.querySelector('.copy');

ip.addEventListener('click', () => {
    navigator.clipboard.writeText(ip.innerText);
});