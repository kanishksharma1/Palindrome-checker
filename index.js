
document.querySelector("button").addEventListener("click", () => {
    let text = document.querySelector("input").value 
    let newText = text.split("").reverse( ).join("").replace(/ /g, "")
    
    if (text === newText) {
        document.querySelector("#output").innerHTML = "It is a palindrome"
    } else {
        document.querySelector("#output").innerHTML = "It is a not palindrome"
    }
    
})



