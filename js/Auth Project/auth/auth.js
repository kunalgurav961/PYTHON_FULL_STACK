const baseUrl = "http://127.0.0.1:5500/js/Auth Project/"

let regForm = document.querySelector("#regForm")
let loginForm = document.querySelector("#loginForm")
let users = JSON.parse(localStorage.getItem("users")) || []
// spread opt

function regUser(e) {
 
    e.preventDefault();
    let username = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;

    let user = {
        username,
        email,
        password
    }
    regForm.reset()
    users.push(user)
    console.log(user)
    localStorage.setItem('users', JSON.stringify(users))

}

function loginUser(e) {
    e.preventDefault();
    console.log(users)
    let user = {
        username: e.target[0].value,
        password: e.target[1].value
    };
    let current_user = users.filter((u) => {
        return u.username === user.username && u.password === user.password
    })[0]

    console.log(current_user)

    localStorage.setItem("current_user", JSON.stringify(current_user));
    // console.log(window.location)
    // http://127.0.0.1:5500/js/Auth Project/auth/login.html
    // http://127.0.0.1:5500/js/Auth Project/protected/index.html
    window.location = baseUrl + 'protected/index.html'
}
// regForm.addEventListener("submit", regUser)
loginForm.addEventListener("submit", loginUser)

