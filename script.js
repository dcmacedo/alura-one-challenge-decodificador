const inputText = document.querySelector("#textarea");
const btnCripto = document.querySelector(".container__left__buttons__cripto");
const btnDescripto = document.querySelector(".container__left__buttons__descripto")
const btnCopy = document.querySelector(".container__right__copy");
const resultImg = document.querySelector(".container__right__img");
const resultWarning = document.querySelector(".container__right__warning");
const resultText = document.querySelector(".container__right__resultado");

const ENCRYPTION_KEYS = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

btnCripto.addEventListener("click", () => {
    const text = inputText.value;
    resultImg.style.display = "none";
    resultWarning.style.display = "none";
    resultText.style.display = "flex";
    btnCopy.style.display = "flex";
    resultText.textContent = encryptText(text);
    inputText.value = ""
})

btnDescripto.addEventListener("click", () => {
    const text = inputText.value;
    resultImg.style.display = "none";
    resultWarning.style.display = "none";
    resultText.style.display = "flex";
    btnCopy.style.display = "flex";
    resultText.textContent = decryptText(text);
    inputText.value = ""
})

btnCopy.addEventListener("click", () => {
    const text = resultText.textContent;
    navigator.clipboard.writeText(text);
})

function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function encryptText(text) {
    if (!text) return "Digite um texto para Criptografar!";
    let encryptedText = removeAccents(text.toLowerCase());
    ENCRYPTION_KEYS.forEach(([letter, word]) => {
        const regex = new RegExp(letter, "g");
        encryptedText = encryptedText.replace(regex, word);
    });
    return encryptedText;
};

function decryptText(text){
    if (!text) return "Digite um texto para Descriptografar!";
    let decryptedText = removeAccents(text.toLowerCase());
    const DECRYPTION_KEYS = ENCRYPTION_KEYS.map(([letter, word]) => [word, letter]);
    DECRYPTION_KEYS.forEach(([word, letter]) => {
        const regex = new RegExp(word, "g");
        decryptedText = decryptedText.replace(regex, letter);
    });
    return decryptedText;
}