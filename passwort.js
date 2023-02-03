var benutzername = "Florian"
var password = "FloR";


function passCheck(){

    if(document.getElementById('Password-Input').value != password || document.getElementById('Benutzername-Input').value != benutzername){

        alert('Falsches Passwort oder Benutzername');
        return false;
    }

    if(document.getElementById('Password-Input').value == password && document.getElementById('Benutzername-Input').value == benutzername){

       // alert('Richtiges Passwort');
    }
}