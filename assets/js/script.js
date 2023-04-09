const btn = document.getElementById("btn")
const btnclose = document.getElementById("close")
const div = document.getElementById("div")
let holat = false


btn.addEventListener("click", () => {

    div.classList.remove("block")
    div.classList.add("hidden")

})
btnclose.addEventListener("click", () => {

    div.classList.remove("hidden")
    div.classList.add("block")

})


