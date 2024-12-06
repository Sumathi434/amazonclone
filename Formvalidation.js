
function Uservalid() {
    const username = document.getElementById("fname").value.trim() //input ids
    const mobileinput = document.getElementById("mobileinput").value.trim()
    const passwordinput = document.getElementById("passwordinput").value.trim()

    if (username === "") {
        document.getElementById("text").style.display = "block" //paragraph error ids

    }
    else {
        document.getElementById("text").style.display = "none"
    }


    if (mobileinput === "") {
        document.getElementById("mobilenumber").style.display = "block"
    }
    else {
        document.getElementById("mobilenumber").style.display = "none"
    }


    if (passwordinput === "") {
        document.getElementById("password").style.display = "block"
    }
    else {
        document.getElementById("password").style.display = "none"
    }
}


//SignIn form validation

function signIn(event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value.trim();

    if (fname === "") {
        document.getElementById("errorfield").style.display = "block";
    } else {
        document.getElementById("errorfield").style.display = "none";
    }
}
