// Welcoming speech
 function replaceName() {
   let name = prompt("Siapa nama anda?", "");
    document.getElementById("name").innerHTML = name
}

replaceName();


// messaage form
// nama
let nameInput = document.getElementById('nama-anda')

document.getElementById('kirim').addEventListener("click", function(){
    const nama = nameInput.value

    if (nama == "") {
        document.getElementById("eror").innerHTML = "Tolong lengkapi semua"
    } else{
        document.getElementById('output-nama').innerHTML = nama
    }
})


// tanggal lahir
let dateInput = document.getElementById('tanggal-lahir')

document.getElementById('kirim').addEventListener("click", function(){
    const date = dateInput.value
    if (date == "") {
        document.getElementById("eror").innerHTML = "Tolong lengkapi semua"
        } else{
            document.getElementById('output-tanggal-lahir').innerHTML = date
        }
})

// jenis kelamin
let genderInput = document.getElementById('gender')

document.getElementById('kirim').addEventListener("click", function(){
    const gender = genderInput.value
    if (gender == "") {
        document.getElementById("eror").innerHTML = "Tolong lengkapi semua"
        } else{
            document.getElementById('output-gender').innerHTML = gender
        }
})

// pesan
let pesanInput = document.getElementById('pesan')
document.getElementById('kirim').addEventListener("click", function(){
    const pesan = pesanInput.value
    if (pesan == "") {
        document.getElementById("eror").innerHTML = "Tolong lengkapi semua"
        } else{
            document.getElementById('output-pesan').innerHTML = pesan
            }
        })