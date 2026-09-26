const heart = document.getElementById("heart")

const quantidade = 100

for (let i = 0; i < quantidade; i++) {

    const palavra = document.createElement("span")

    palavra.classList.add("love_word")

    palavra.innerText = "I love you"

    const t = (Math.PI * 2 * i) / quantidade

    const x = 16 * Math.pow(Math.sin(t), 3)

    const y =
        -(13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t))

    const escala = 17

    palavra.style.left = `calc(50% + ${x * escala}px)`
    palavra.style.top = `calc(50% + ${y * escala}px)`

    palavra.style.animationDelay = `${i * 0.03}s`

    heart.appendChild(palavra)
}

setTimeout(() => {
    heart.classList.add("girando")
}, quantidade * 30 + 1000)
