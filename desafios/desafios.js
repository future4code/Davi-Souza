const quinzena1ok = () => {
    let A = document.getElementById("quinzena1a").value
    let B = document.getElementById("quinzena1b").value
    let C = A
    A = B
    B = C
    alert(`variaveis trocadas A=${A} B=${B}`)
}

const quinzena2ok = () => {
    alert(`Você digitou ${document.getElementById("quinzena2").value}`)
}

const quinzena3ok = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()+1
    const day = new Date().getDate()

    const birth = document.getElementById("quinzena3").value

    const birthYear = Number(birth.split("").splice(0, 4).join(""))
    const birthMonth = Number(birth.split("").splice(5, 2).join(""))
    const birthday = Number(birth.split("").splice(8, 2).join(""))

    let daysLived = (year - birthYear)*365 + (month - birthMonth)*30 + (day - birthday)

    if (daysLived < 0) { daysLived = 0 }

    alert(`Você já viveu ${daysLived} dias`)
}





