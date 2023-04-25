export const toggleDarkmode = document.getElementById("toggle-darkmode")
const body = document.querySelector("body")

export function darkModeToggle() {
    console.log(toggleDarkmode.value)
    console.log(toggleDarkmode.selectedIndex)
    switch(toggleDarkmode.selectedIndex) {
        // dark mode
        case (0):
            body.style.backgroundColor = "black";
            body.style.color = "white";
            break;
            // light mode
            case (1):
                body.style.backgroundColor = "white";
                body.style.color = "black";
                break;

                default:
                    body.style.backgroundColor = "black";
                    body.style.color = "white";
                    break;

    }
}