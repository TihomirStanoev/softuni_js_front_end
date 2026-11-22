function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener("mousemove",
        (e) => {
        let pr = (e.offsetX / e.target.clientWidth) * 100;
        result.textContent = `${Math.floor(pr)}%`
        }
    )

}
