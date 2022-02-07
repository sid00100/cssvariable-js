const allControl = document.querySelectorAll(".controls-js");

allControl.forEach(input => {
    input.addEventListener("change", changeGetter)
});


function changeGetter() {
    const suffix = this.dataset.sizing || ""
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}