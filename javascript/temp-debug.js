// TODO TEMP remove when complete
const printf = document.getElementById("printf");
    printf.style.zIndex = 200;
    printf.style.position = "fixed";
    printf.style.background = "black";
    printf.style.color = "ivory";
    printf.style.right = 0;
    printf.style.bottom = 0;
    printf.style.padding = "2vh";


function debugPrompt(...strings) {
    printf.innerHTML= "";
    strings.forEach( (string) => {
        printf.innerHTML += "<p>" + (string) + "</p>";
    });
}