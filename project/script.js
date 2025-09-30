console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.innerWidth)
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const dob = document.getElementById("dob");
const allError = document.querySelector(".allError");
const submitBtn = document.querySelector(".submitBtn")
const massage = document.getElementById("massage");

let obj = {}

function cheakFirstName() {
    const firstNameError = document.querySelector(".firstNameError");
    let value = firstname.value;
    firstNameError.style.color = "red"
    if (value == "") {
        firstNameError.innerHTML = "fields are required."
        return false
    } else if (value[0] >= 0 || value[0] <= 9) {
        firstNameError.innerHTML = "enter correct name."
        return false
    } else if (value.length < 2) {
        firstNameError.innerHTML = "enter correct name."
        return false
    } else {
        firstNameError.innerHTML = "";
        obj.firstName = value;
        // console.log(obj)
        return true
    }
}
function cheakLastName() {
    const lastNameError = document.querySelector(".lastNameError")
    let value = lastname.value;
    lastNameError.style.color = "red"
    if (value == "") {
        lastNameError.innerHTML = "fields are required."
        return false
    } else if (value[0] >= 0 || value[0] <= 9) {
        lastNameError.innerHTML = "enter correct name."
        return false
    } else if (value.length < 2) {
        lastNameError.innerHTML = "enter correct name."
        return false
    } else {
        lastNameError.innerHTML = "";
        // console.log("err");

        obj.lastName = value;
        // console.log(obj)
        return true
    }
}

function cheakEmail() {
    let value = email.value;
    const emailError = document.querySelector(".emailError");
    emailError.style.color = "red"
    let newValue = value.split()
    if (value == "") {
        emailError.innerHTML = "fields are required."
        return false
    }
    else if (value[0] >= 0 || value[0] <= 9) {
        emailError.innerHTML = "please enter correct email."
        return false
    }
    else if (newValue.includes("@")) {
        emailError.innerHTML = "please enter correct email."
        return false
    }
    else if (newValue.includes(".")) {
        emailError.innerHTML = "please enter correct email."
        return false
    } else {
        emailError.innerHTML = ""
        obj.Email = value;
        // console.log(obj)
        return true
    }
}
function cheakPhoneNumber() {
    const phnError = document.querySelector(".phnError");
    phnError.style.color = "red"
    let value = phoneNumber.value;
    if (value == "") {
        phnError.innerHTML = 'field is requiered'
        return false;
    }
    else if (value.length !== 10) {
        phnError.innerHTML = 'please enter correct number.'
        return false;
    }
    for (let a of value) {
        if (isNaN(a)) {
            phnError.innerHTML = 'please enter correct number.'
            return false;
        } else {
            phnError.innerHTML = "";
            obj.Phone = value;
            // console.log(obj)
            return true;
        }
    }
}
function cheakDateOfBirth() {
    let value = dob.value;
    const datetimeError = document.querySelector(".datetimeError");
    datetimeError.style.color = "red"
    if (value == "") {
        datetimeError.innerHTML = 'field is requiered'
        return false;
    } else {
        datetimeError.innerHTML = ''
        obj.DOB = value;
        // console.log(obj)
        return true;
    }
}
function cheakGender() {
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const other = document.getElementById("other");
    const genderError = document.querySelector('.genderError');
    genderError.style.color = "red"
    // console.log(maleValue)
    if (male.checked) {
        obj.Gender = male.value;
        genderError.innerHTML = ""
        return true;
    } else if (female.checked) {
        obj.Gender = female.value;
        genderError.innerHTML = ""
        return true;
    } else if (other.checked) {
        obj.Gender = other.value;
        genderError.innerHTML = ""
        return true;
    }
    else {
        genderError.innerHTML = "field are required"
        return false;
    }
}
let hobbies = []
function cheakHobbie() {
    hobbies = [];
    const others = document.getElementById("other");
    const bike = document.getElementById("bike");
    const tv = document.getElementById("tv");
    const book = document.getElementById("book");
    const Cricket = document.getElementById("Cricket");
    const hobbieError = document.querySelector(".hobbieError");
    hobbieError.style.color = "red"
    if (bike.checked) {
        hobbies.push(bike.value)
    } if (tv.checked) {
        hobbies.push(tv.value)
    } if (book.checked) {
        hobbies.push(book.value)
    } if (Cricket.checked) {
        hobbies.push(Cricket.value)
    } if (others.checked) {
        hobbies.push(others.value)
    }
    if (hobbies.length > 0) {
        obj.Hobbies = hobbies;
        hobbieError.innerHTML = ""
        // console.log(obj)
        return true
    } else {
        hobbieError.innerHTML = "fields are required"
        return false
    }
    // console.log(hobbies)
}
let turm = []
function turmAndCondition() {
    turm = [];
    const cheak1 = document.getElementById("cheak1");
    const cheak2 = document.getElementById("cheak2");
    const cheak3 = document.getElementById("cheak3")
    const turmError = document.querySelector(".turmError");
    turmError.style.color = "red"
    if (cheak1.checked) {
        turm.push(cheak1.value)
    } if (cheak2.checked) {
        turm.push(cheak2.value)
    } if (cheak3.checked) {
        turm.push(cheak3.value)
    } if (turm.length > 0) {
        obj.condition = turm;
        turmError.innerHTML = ""
        return true
    }
    else {
        turmError.innerHTML = "fields are required"
        return false
    }
}
function cheakMassage() {
    let value = massage.value;
    const msgError = document.querySelector(".msgError");
    msgError.style.color = "red"
    if (value == "") {
        msgError.innerHTML = "fields are required"
        return false
    } else {
        msgError.innerHTML = "";
        obj.Massage = value;
        // console.log(obj)
        return true;
    }
}
submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    let fname = false;
    let lname = false;
    let dob = false;
    let hobbie = false;
    let email = false;
    let phone = false;
    let gen = false;
    let msg = false;
    let turm = false
    if (cheakFirstName()) {
        fname = true;
    } else {
        fname = false;
    }
    if (cheakLastName()) {
        lname = true;
    } else {
        lname = false;
    }
    if (cheakDateOfBirth()) {
        dob = true;
    } else {
        dob = false;
    }
    if (cheakHobbie()) {
        hobbie = true;
    } else {
        hobbie = false;
    }
    if (cheakMassage()) {
        msg = true;
    } else {
        msg = false;
    }
    if (cheakEmail()) {
        email = true;
    } else {
        email = false;
    }
    if (cheakPhoneNumber()) {
        phone = true;
    } else {
        phone = false;
    }
    if (turmAndCondition()) {
        turm = true;
    } else {
        turm = false;
    } if (cheakGender()) {
        gen = true;
    } else {
        gen = false
    }
    if (msg && phone && email && hobbie && dob && lname && fname && turm) {
        localStorage.setItem("user", JSON.stringify(obj))
        console.log(obj)
    }

})

