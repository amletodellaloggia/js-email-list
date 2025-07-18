const mailListVar = document.getElementById(`mailList`);
const tempMailListArr = [];

for (let i=0; i<10; i++){
axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
	mailListVar.innerHTML += `<li>${resp.data.response}</li>`;
})
}