const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const generate = document.querySelector(".generate")
const result = document.querySelector(".result")
const copiedSection = document.querySelector(".copied-section")
const eightCharSwitch = document.querySelector("#eight-char")
const fifteenCharSwitch = document.querySelector("#fifteen-char")
let passwordLength = 15

eightCharSwitch.addEventListener('click', () => passwordLength = 8)
fifteenCharSwitch.addEventListener('click', () => passwordLength = 15)

generate.addEventListener('click', () => {
    result.textContent = ""
    for (let i = 1; i < passwordLength + 1; i++) {
        let rand = Math.floor(Math.random() * characters.length)
        result.textContent += characters[rand]
        const copyIcon = document.createElement('img');
        copyIcon.setAttribute("src", "images/copy-regular.png");
        copyIcon.setAttribute("height", "20")
        copyIcon.setAttribute("width", "20")
        copyIcon.className = "copy-icon"
        result.appendChild(copyIcon);
        copyIcon.addEventListener('click', () => {
            return copyToClipboard(result)
        })
        copiedSection.innerHTML = ""
    }
})


async function copyToClipboard(result) {
    if (result.textContent.length > 0) {
        try {
            await navigator.clipboard.writeText(result.textContent);
            copiedSection.innerHTML = ""
            const copied = document.createElement('div');
            copied.innerText = "Copied to the Clipboard!"
            copied.className = "copied"
            copiedSection.appendChild(copied);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
}




