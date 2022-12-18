const togglebtn = document.getElementById("toggle-mode")
let darkMode = localStorage.getItem('darkMode');
const toggleicon = document.getElementById("toggle")
const togglename = document.body.querySelector("toggle_mode")

const enabledarkMode = () => {
    document.body.classList.add("darkMode")
    localStorage.setItem("darkMode", "enabled")
    toggleicon.innerHTML = "dark_mode"
    togglename.innerHTML = "Dark Mode"
};

const disabledarkMode = () => {
    document.body.classList.remove("darkMode")
    localStorage.setItem("darkMode", null)
    toggleicon.innerHTML = "light_mode"
    togglename.innerHTML = "Light Mode"
};

togglebtn.addEventListener("click", () =>{
    darkMode = localStorage.getItem('darkMode');

    if(darkMode !== "enabled") {
        enabledarkMode()
    } else {
        disabledarkMode()
    };
});