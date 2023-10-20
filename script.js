function sayHello() {
  alert("Memet abi lässt Grüssen!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}
function deleteText() {
  const elemToDeleteText = document.querySelector("#to-delete")
  elemToDeleteText.textContent = "to-delete"
}
function incrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num + 1
  numberElement.textContent = num
}
function decrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num - 1
  numberElement.textContent = num
}
function resetCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num =0
  numberElement.textContent = num
}
  function amnt() {
    const numberElement = document.querySelector("#counter")
    let num = parseInt(numberElement.textContent)
    num = num =-1000000000000000000
    numberElement.textContent = num
  }
