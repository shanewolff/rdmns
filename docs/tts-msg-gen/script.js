const trains = ["03:50 AM Chilaw - Panadura (Udaya Kumari)",
    "04:20 AM Chilaw - Moratuwa (Moratu Kumari)",
    "04:30 AM Puttalam - Mt. Lavania (Bange)",
    "04:50 AM Chilaw - Panadura (Muthu Kumari)",
    "05:30 AM Chilaw - Colombo-Fort (Lali)",
    "06:15 AM Chilaw - Colombo-Fort (CFS)",
    "06:50 AM Negombo - Colombo-Fort (Mendis)",
    "04:10 PM Panadura - Puttalam (Bange)",
    "04:30 PM Colombo-Fort - Chilaw (Saliya)",
    "04:45 PM Colombo-Fort - Chilaw (Lali)",
    "04:45 PM Panadura - Chilaw (Muthu Kumari)",
    "04:55 PM Colombo-Fort - Negombo (Mendis)",
    "05:30 PM Colombo-Fort - Negombo (Meepura)",
    "05:45 PM Kalutara-South - Chilaw (CS)",
    "08:20 PM Colombo-Fort - Chilaw (LC)"];

const stations = ["Noornagar", "Puttalam", "Thilladiya", "Palavi", "Erukkalam Pendu", "Madurankuliya", "Mangala-Eliya", "Mundal", "Palachchikulam", "Baththulu-Oya", "Anavilundawa", "Arachchikattuwa", "Bangadeniya", "Manuwangama", "Chilaw", "Savarana", "Kakkapalliya", "Madampe", "Nelum-Pokuna", "Kuda-Wewa", "Walahapitiya", "Nattandiya", "Thummodara", "Lunuwila", "Boralessa", "Bolawatta", "Waikkala", "Kochchikade", "Kattuwa", "Negombo", "Kurana", "Katunayaka", "IPZ-Katunayaka", "Liyanagemulla", "Seeduwa", "Alawathupitiya", "Kudahakapola", "Tudella", "Ja-Ela", "Kapuwatta", "Kandana", "Peralanda", "Ragama", "Horape", "Enderamulla", "Hunupitiya", "Wanawasala", "Kelaniya", "Dematagoda", "Maradana", "Colombo-Fort", "Secretariat", "Slave Island", "Kollupitiya", "Bambalapitiya", "Wellawatta", "Dehiwala", "Mt. Lavania", "Ratmalana", "Angulana", "Lunawa", "Moratuwa", "Koralawella", "Egoda-Uyana", "Pandura", "Pinwatta", "Wadduwa", "Station-No.1", "Kalutara-North", "Kalutara-South"];

const trainSelector = document.querySelector("#trainSelector");
const stationSelector = document.querySelector("#stationSelector");
const timeInput = document.querySelector("#timepicker");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const generateBtn = document.querySelector("#generateBtn");

for (let train of trains) {
    const optionElement = document.createElement("OPTION");
    optionElement.nodeValue = train;
    optionElement.text = train;
    trainSelector.appendChild(optionElement);
}

for (let station of stations) {
    const optionElement = document.createElement("OPTION");
    optionElement.nodeValue = station;
    optionElement.text = station;
    stationSelector.appendChild(optionElement);
}

trainSelector.addEventListener("change", (e) => {
    if (trainSelector.classList.contains("border-danger")) {
        trainSelector.classList.remove("border-danger");
    }

    if (document.querySelector("#trainRequiredMsg")) {
        document.querySelector("#trainRequiredMsg").remove();
    }
});

stationSelector.addEventListener("change", (e) => {
    if (stationSelector.classList.contains("border-danger")) {
        stationSelector.classList.remove("border-danger");
    }

    if (document.querySelector("#stationRequiredMsg")) {
        document.querySelector("#stationRequiredMsg").remove();
    }

    if (stationSelector.selectedIndex > 1) {
        upBtn.removeAttribute("disabled");
    } else {
        if (!upBtn.hasAttribute("disabled")) {
            upBtn.setAttribute("disabled", "disabled");
        }
    }

    if (stationSelector.selectedIndex < stations.length) {
        downBtn.removeAttribute("disabled");
    } else {
        if (!downBtn.hasAttribute("disabled")) {
            downBtn.setAttribute("disabled", "disabled");
        }
    }
});

generateBtn.addEventListener("click", (e) => {

    let trainValidation = true;
    let stationValidation = true;

    if (trainSelector.value === "") {
        if (!trainSelector.classList.contains("border-danger")) {
            trainSelector.classList.add("border-danger");
        }
        if (document.querySelector("#trainRequiredMsg") === null) {
            smallElement = document.createElement("small");
            smallElement.setAttribute("id", "trainRequiredMsg")
            smallElement.classList.add("text-danger");
            smallElement.innerHTML = "Train is required!";
            trainSelector.parentNode.insertBefore(smallElement, trainSelector.nextSibling);
        }

        trainValidation = false;

    }
    if (stationSelector.value === "") {
        if (!stationSelector.classList.contains("border-danger")) {
            stationSelector.classList.add("border-danger");
        }
        if (document.querySelector("#stationRequiredMsg") === null) {
            smallElement = document.createElement("small");
            smallElement.setAttribute("id", "stationRequiredMsg")
            smallElement.classList.add("text-danger");
            smallElement.innerHTML = "Station is required!";
            stationSelector.parentNode.insertBefore(smallElement, stationSelector.nextSibling);
        }

        stationValidation = false;
    }

    if (!(trainValidation && stationValidation)) {
        return;
    }


    let time;
    if (timeInput.value === "") {
        const currentDate = new Date();
        time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
        time = timeInput.value;
    }

    let movement;
    const radios = document.getElementsByName("movementRadio");
    for (let radio of radios) {
        if (radio.checked) {
            movement = radio.value;
            break;
        }
    }
    let message = `${trainSelector.value} ${movement} ${stationSelector.value} ${time}`;
    document.querySelector("#generatedMessage").textContent = message;
    copyText(document.querySelector("#generatedMessage"));

});

upBtn.addEventListener("click", (e) => {

    let trainValidation = true;
    let stationValidation = true;

    if (trainSelector.value === "") {
        if (!trainSelector.classList.contains("border-danger")) {
            trainSelector.classList.add("border-danger");
        }
        if (document.querySelector("#trainRequiredMsg") === null) {
            smallElement = document.createElement("small");
            smallElement.setAttribute("id", "trainRequiredMsg")
            smallElement.classList.add("text-danger");
            smallElement.innerHTML = "Train is required!";
            trainSelector.parentNode.insertBefore(smallElement, trainSelector.nextSibling);
        }

        trainValidation = false;

    }
    if (stationSelector.value === "") {
        if (!stationSelector.classList.contains("border-danger")) {
            stationSelector.classList.add("border-danger");
        }
        if (document.querySelector("#stationRequiredMsg") === null) {
            smallElement = document.createElement("small");
            smallElement.setAttribute("id", "stationRequiredMsg")
            smallElement.classList.add("text-danger");
            smallElement.innerHTML = "Station is required!";
            stationSelector.parentNode.insertBefore(smallElement, stationSelector.nextSibling);
        }

        stationValidation = false;
    }

    if (!(trainValidation && stationValidation)) {
        return;
    }

    let time;
    if (timeInput.value === "") {
        const currentDate = new Date();
        time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
        time = timeInput.value;
    }

    let movement;
    const radios = document.getElementsByName("movementRadio");
    for (let radio of radios) {
        if (radio.checked) {
            movement = radio.value;
            break;
        }
    }

    stationSelector.selectedIndex -= 1;

    if (stationSelector.selectedIndex > 1) {
        upBtn.removeAttribute("disabled");
    } else {
        if (!upBtn.hasAttribute("disabled")) {
            upBtn.setAttribute("disabled", "disabled");
        }
    }

    if (stationSelector.selectedIndex < stations.length) {
        downBtn.removeAttribute("disabled");
    } else {
        if (!downBtn.hasAttribute("disabled")) {
            downBtn.setAttribute("disabled", "disabled");
        }
    }

    let message = `${trainSelector.value} ${movement} ${stationSelector.value} ${time}`;
    document.querySelector("#generatedMessage").textContent = message;
    copyText(document.querySelector("#generatedMessage"));
});

downBtn.addEventListener("click", (e) => {

    let trainValidation = true;
    let stationValidation = true;

    if (trainSelector.value === "") {
        if (!trainSelector.classList.contains("border-danger")) {
            trainSelector.classList.add("border-danger");
        }
        if (document.querySelector("#trainRequiredMsg") === null) {
            smallElement = document.createElement("small");
            smallElement.setAttribute("id", "trainRequiredMsg")
            smallElement.classList.add("text-danger");
            smallElement.innerHTML = "Train is required!";
            trainSelector.parentNode.insertBefore(smallElement, trainSelector.nextSibling);
        }

        trainValidation = false;

    }
    if (stationSelector.value === "") {
        if (!stationSelector.classList.contains("border-danger")) {
            stationSelector.classList.add("border-danger");
        }
        if (document.querySelector("#stationRequiredMsg") === null) {
            smallElement = document.createElement("small");
            smallElement.setAttribute("id", "stationRequiredMsg")
            smallElement.classList.add("text-danger");
            smallElement.innerHTML = "Station is required!";
            stationSelector.parentNode.insertBefore(smallElement, stationSelector.nextSibling);
        }

        stationValidation = false;
    }

    if (!(trainValidation && stationValidation)) {
        return;
    }

    let time;
    if (timeInput.value === "") {
        const currentDate = new Date();
        time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
        time = timeInput.value;
    }

    let movement;
    const radios = document.getElementsByName("movementRadio");
    for (let radio of radios) {
        if (radio.checked) {
            movement = radio.value;
            break;
        }
    }

    stationSelector.selectedIndex += 1;

    if (stationSelector.selectedIndex > 1) {
        upBtn.removeAttribute("disabled");
    } else {
        if (!upBtn.hasAttribute("disabled")) {
            upBtn.setAttribute("disabled", "disabled");
        }
    }

    if (stationSelector.selectedIndex < stations.length) {
        downBtn.removeAttribute("disabled");
    } else {
        if (!downBtn.hasAttribute("disabled")) {
            downBtn.setAttribute("disabled", "disabled");
        }
    }

    let message = `${trainSelector.value} ${movement} ${stationSelector.value} ${time}`;
    document.querySelector("#generatedMessage").textContent = message;
    copyText(document.querySelector("#generatedMessage"));
});

function copyText(element) {
    //Before we copy, we are going to select the text.
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    //add to clipboard.
    document.execCommand('copy');
    selection.removeAllRanges();
}
