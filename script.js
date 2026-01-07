const startInput = document.querySelector("#start")
const endInput = document.querySelector("#end")
const button = document.querySelector("button")
const background = document.querySelector(".background")

button.disabled = true
endInput.disabled = true

function validate() {
    const start = Number(startInput.value)
    const end = Number(endInput.value)

    button.disabled = !(startInput.value && endInput.value && start < end)
}

startInput.addEventListener("input", () => {
    endInput.disabled = !startInput.value
    endInput.value = ""
    validate()
})

endInput.addEventListener("input", () => {
    const start = Number(startInput.value)
    const end = Number(endInput.value)

    endInput.setCustomValidity(
        end <= start ? "O valor final deve ser maior que o inicial" : ""
    )

    validate()
})

button.addEventListener("click", () => {
    const start = Number(startInput.value)
    const end = Number(endInput.value)

    const result = Math.floor(Math.random() * (end - start + 1)) + start
    alert(`Número sorteado: ${result}`)
})

/* ===== ANIMAÇÃO DE FUNDO (definida no CSS) ===== */
