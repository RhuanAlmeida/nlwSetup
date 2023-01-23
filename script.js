const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pr-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso🔴")
    return
  }

  alert("Adicionado com Sucesso🟢")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

/*const data = {
  run: ["01-22", "01-23", "01-24", "01-25", "01-26"],
  water: ["01-22", "01-23", "01-24", "01-26", "01-27", "01-28"],
  food: ["01-22", "01-23", "01-24", "01-27"],
  gym: ["01-22", "01-23", "01-24", "01-26", "01-27", "01-28"],
  language: ["01-22", "01-24", "01-25", "01-26"],
  code: ["01-22", "01-23", "01-25", "01-28"],
  book: ["01-22", "01-23", "01-27", "01-28"],
}*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()

const casa = {}

console.log(typeof casa)
