const ip = document.querySelector('.copy');
const info = document.querySelector('.info');

function resetInfo() {
    info.innerText = "Cliquez ci-dessus pour copier l'ip";
    info.style.color = "#f1f1f19c";
}

ip.addEventListener('click', () => {
    navigator.clipboard.writeText(ip.innerText);
    info.innerText = "IP copié ✅";
    info.style.color = "#12de6d";
    setTimeout(() => {
        resetInfo();
      }, 1000);      
});
