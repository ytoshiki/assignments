const nativeSelect = document.querySelector(".native-select")
const customSelect = document.querySelector(".custom-select")
const options = nativeSelect.querySelectorAll("option")
let storedOptions = []

nativeSelect.addEventListener("click", () => {
  storeOptions()
  hideOptions()
  addOptions()
  customSelect.classList.toggle("visible")
  if (customSelect.className.includes("visible")) {
    customSelect.style.transform = "scale(1)"
  } else {
    customSelect.style.transform = "scale(0)"
  }
})

const storeOptions = () => {
  if (!customSelect.children.length) {
    options.forEach(option => {
      const div = document.createElement("div")
      div.innerText = option.textContent
      storedOptions.push(div)
    })
  }
}

const hideOptions = () => {
  const nativeOptions = nativeSelect.children
  Array.from(nativeOptions).forEach(option => {
    nativeSelect.removeChild(option)
  })
}

const addOptions = () => {
  storedOptions.forEach(option => {
    customSelect.appendChild(option)
  })
}
