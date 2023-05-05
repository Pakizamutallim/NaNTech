function show() {
    const eye = document.getElementById("eye")
    const input = document.getElementById("inputtype")
    const eyeslash = document.getElementById("eye-slash")
    if (input.type == "password") {
        input.type = "text"; 
        eyeslash.style.display = "block"; 
        eye.style.display = "none"
    }
}
function hide() {
    const eye = document.getElementById("eye")
    const input = document.getElementById("inputtype")
    const eyeslash = document.getElementById("eye-slash")
    if (input.type == "text") {
        input.type = "password"; 
        eyeslash.style.display = "none"; 
        eye.style.display = "block"; 
    }
}