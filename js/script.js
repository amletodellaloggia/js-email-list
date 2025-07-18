const mailListVar = document.getElementById("mailList");
const generateBtn = document.getElementById("generateBtn");

// Carico le prime 10 email appena apro la pagina
function loadEmails() {
  mailListVar.innerHTML = ""; // resetto la lista
  for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((resp) => {
        mailListVar.innerHTML += `<li class="list-group-item">${resp.data.response}</li>`;
      });
  }
}

// Al click del bottone genero nuove email
generateBtn.addEventListener("click", loadEmails);

// Chiamo la funzione all’avvio per mostrare le mail iniziali
loadEmails();
