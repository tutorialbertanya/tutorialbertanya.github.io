const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	const username = document.getElementById("username")
	const email = document.getElementById("email");
	const contoh = document.getElementById("contoh");

	Email.send({
		Host : "smtp.gmail.com",
	    To : 'vins25165@gmail.com',
	    From : `${email.value}`,
	    Username: "zhopgang@gmail.com",
	    Password: "cdbczbvudmvsjvin",
	    Subject : `${username.value} request a certificate`,
	    Body : `Nama : ${username.value} <br /> Email : ${email.value} <br /> Contoh : ${contoh.value} <br /> ${Date.now()}`
	}).then(message => {
		console.log(message)
		alert("Terima kasih. request kamu sedang di validasi, harap tunggu email dari kami.")
	});	

	e.preventDefault()
})