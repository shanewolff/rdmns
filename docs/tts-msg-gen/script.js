const trains = [
    "03:50 (CHL-PND) Udaya Kumari",
    "04:20 (CHL-MRT) Moratu Kumari",
    "04:30 (PTM-MLV) Bange",
    "04:50 (CHL-PND) Muthu Kumari",
    "05:30 (CHL-FOT) Lali",
    "06:15 (CHL-FOT) CFS",
    "06:50 (NGB-FOT) Mendis",
    "16:10 (PND-PTM) Bange",
    "16:30 (FOT-CHL) Saliya",
    "16:45 (FOT-CHL) Lali",
    "16:45 (PND-CHL) Muthu Kumari",
    "16:55 (FOT-NGB) Mendis",
    "17:30 (FOT-NGB) Meepura",
    "17:45 (KTS-CHL) CS",
    "20:20 (FOT-CHL) LC",
];

const stations = [
    "Noornagar",
    "Puttalam",
    "Thilladiya",
    "Palavi",
    "Erukkalam-Pendu",
    "Madurankuliya",
    "Mangala-Eliya",
    "Mundal",
    "Palachchikulam",
    "Baththulu-Oya",
    "Anavilundawa",
    "Arachchikattuwa",
    "Bangadeniya",
    "Manuwangama",
    "Chilaw",
    "Savarana",
    "Kakkapalliya",
    "Madampe",
    "Nelum-Pokuna",
    "Kuda-Wewa",
    "Walahapitiya",
    "Nattandiya",
    "Thummodara",
    "Lunuwila",
    "Boralessa",
    "Bolawatta",
    "Waikkala",
    "Kochchikade",
    "Kattuwa",
    "Negombo",
    "Kurana",
    "Katunayaka",
    "IPZ-Katunayaka",
    "Liyanagemulla",
    "Seeduwa",
    "Alawathupitiya",
    "Kudahakapola",
    "Tudella",
    "Ja-Ela",
    "Kapuwatta",
    "Kandana",
    "Peralanda",
    "Ragama",
    "Horape",
    "Enderamulla",
    "Hunupitiya",
    "Wanawasala",
    "Kelaniya",
    "Dematagoda",
    "Maradana",
    "Colombo-Fort",
    "Secretariat",
    "Slave-Island",
    "Kollupitiya",
    "Bambalapitiya",
    "Wellawatta",
    "Dehiwala",
    "Mt.-Lavania",
    "Ratmalana",
    "Angulana",
    "Lunawa",
    "Moratuwa",
    "Koralawella",
    "Egoda-Uyana",
    "Panadura",
    "Pinwatta",
    "Wadduwa",
    "Station-No.1",
    "Kalutara-North",
    "Kalutara-South",
];

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
            const smallElement = document.createElement("small");
            smallElement.setAttribute("id", "trainRequiredMsg");
            smallElement.classList.add("text-danger", "font-weight-bold");
            smallElement.innerHTML = "Train is required!";
            trainSelector.parentNode.insertBefore(
                smallElement,
                trainSelector.nextSibling
            );
        }

        trainValidation = false;
    }
    if (stationSelector.value === "") {
        if (!stationSelector.classList.contains("border-danger")) {
            stationSelector.classList.add("border-danger");
        }
        if (document.querySelector("#stationRequiredMsg") === null) {
            const smallElement = document.createElement("small");
            smallElement.setAttribute("id", "stationRequiredMsg");
            smallElement.classList.add("text-danger", "font-weight-bold");
            smallElement.innerHTML = "Station is required!";
            stationSelector.parentNode.insertBefore(
                smallElement,
                stationSelector.nextSibling
            );
        }

        stationValidation = false;
    }

    if (!(trainValidation && stationValidation)) {
        return;
    }

    let time;
    if (timeInput.value === "") {
        const currentDate = new Date();
        time = currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
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


    let direction;
    const directionRadios = document.getElementsByName("directionRadio");
    for (let radio of directionRadios) {
        if (radio.checked) {
            direction = radio.value;
            break;
        }
    }

    let message = `${trainSelector.value} ${direction} ${movement} ${stationSelector.value} ${time}`;
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
            const smallElement = document.createElement("small");
            smallElement.setAttribute("id", "trainRequiredMsg");
            smallElement.classList.add("text-danger", "font-weight-bold");
            smallElement.innerHTML = "Train is required!";
            trainSelector.parentNode.insertBefore(
                smallElement,
                trainSelector.nextSibling
            );
        }

        trainValidation = false;
    }
    if (stationSelector.value === "") {
        if (!stationSelector.classList.contains("border-danger")) {
            stationSelector.classList.add("border-danger");
        }
        if (document.querySelector("#stationRequiredMsg") === null) {
            const smallElement = document.createElement("small");
            smallElement.setAttribute("id", "stationRequiredMsg");
            smallElement.classList.add("text-danger", "font-weight-bold");
            smallElement.innerHTML = "Station is required!";
            stationSelector.parentNode.insertBefore(
                smallElement,
                stationSelector.nextSibling
            );
        }

        stationValidation = false;
    }

    if (!(trainValidation && stationValidation)) {
        return;
    }

    let time;
    if (timeInput.value === "") {
        const currentDate = new Date();
        time = currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
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

    let direction;
    const directionRadios = document.getElementsByName("directionRadio");
    for (let radio of directionRadios) {
        if (radio.checked) {
            direction = radio.value;
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

    let message = `${trainSelector.value} ${direction} ${movement} ${stationSelector.value} ${time}`;
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
            const smallElement = document.createElement("small");
            smallElement.setAttribute("id", "trainRequiredMsg");
            smallElement.classList.add("text-danger", "font-weight-bold");
            smallElement.innerHTML = "Train is required!";
            trainSelector.parentNode.insertBefore(
                smallElement,
                trainSelector.nextSibling
            );
        }

        trainValidation = false;
    }
    if (stationSelector.value === "") {
        if (!stationSelector.classList.contains("border-danger")) {
            stationSelector.classList.add("border-danger");
        }
        if (document.querySelector("#stationRequiredMsg") === null) {
            const smallElement = document.createElement("small");
            smallElement.setAttribute("id", "stationRequiredMsg");
            smallElement.classList.add("text-danger", "font-weight-bold");
            smallElement.innerHTML = "Station is required!";
            stationSelector.parentNode.insertBefore(
                smallElement,
                stationSelector.nextSibling
            );
        }

        stationValidation = false;
    }

    if (!(trainValidation && stationValidation)) {
        return;
    }

    let time;
    if (timeInput.value === "") {
        const currentDate = new Date();
        time = currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
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

    let direction;
    const directionRadios = document.getElementsByName("directionRadio");
    for (let radio of directionRadios) {
        if (radio.checked) {
            direction = radio.value;
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

    let message = `${trainSelector.value} ${direction} ${movement} ${stationSelector.value} ${time}`;
    document.querySelector("#generatedMessage").textContent = message;
    copyText(document.querySelector("#generatedMessage"));
});

function copyText(element) {
    try {
        let selection = window.getSelection();
        let range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
        //add to clipboard.
        document.execCommand("copy");
        selection.removeAllRanges();
        $('#successToast').toast("show");
    }
    //Before we copy, we are going to select the text.
    catch (error) {
        $('#errorToast').toast("show");
    }

}
