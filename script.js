const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)

function add() {
  alert('hello world!')
  nlwSetup.addDay('01/01')
}
const data = {
  run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
  takepills: ["01-03"],
  journal: ["01-02"],
}

nlwSetup.setData(data)
nlwSetup.load()



