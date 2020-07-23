const trains = [
    "03:50 AM (CHL-PND) Udaya Kumari",
    "04:20 AM (CHL-MRT) Moratu Kumari",
    "04:30 AM (PTM-MLV) Bange",
    "04:50 AM (CHL-PND) Muthu Kumari",
    "05:30 AM (CHL-FOT) Express",
    "06:15 AM (CHL-FOT) CFS",
    "06:50 AM (NGB-FOT) Mendis",
    "04:10 PM (PND-PTM) Bange",
    "04:30 PM (FOT-CHL) Saliya",
    "04:45 PM (FOT-CHL) Express",
    "04:45 PM (PND-CHL) Muthu Kumari",
    "04:55 PM (FOT-NGB) Mendis",
    "05:30 PM (FOT-NGB) Meepura",
    "05:45 PM (KTS-CHL) CS",
    "08:20 PM (FOT-CHL) LC",
];

const trainsSinhala = [
    "03:50 AM (CHL-PND) උදය කුමාරි",
    "04:20 AM (CHL-MRT) මොරටු කුමාරි",
    "04:30 AM (PTM-MLV) බංගෙ",
    "04:50 AM (CHL-PND) මුතු කුමාරි",
    "05:30 AM (CHL-FOT) එක්ස්ප්‍රස්",
    "06:15 AM (CHL-FOT) CFS",
    "06:50 AM (NGB-FOT) මෙන්ඩිස්",
    "04:10 PM (PND-PTM) බංගෙ",
    "04:30 PM (FOT-CHL) සාලිය",
    "04:45 PM (FOT-CHL) එක්ස්ප්‍රස්",
    "04:45 PM (PND-CHL) මුතු කුමාරි",
    "04:55 PM (FOT-NGB) මෙන්ඩිස්",
    "05:30 PM (FOT-NGB) මීපුර",
    "05:45 PM (KTS-CHL) CS",
    "08:20 PM (FOT-CHL) LC",
];

const stations = [
    "Noornagar",
    "Puttalam",
    "Thilladi",
    "Palavi",
    "Erukkalampiddy",
    "Madurankuliya",
    "Mangala Eliya",
    "Mundal",
    "Pulichchakulam",
    "Baththulu Oya",
    "Anavilundawa",
    "Arachchikattuwa",
    "Bangadeniya",
    "Manuwangama",
    "Chilaw",
    "Sawarana",
    "Kakkapalliya",
    "Madampe",
    "Nelumpokuna",
    "Kudawewa",
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
    "I.P. Zone",
    "Liyanagemulla",
    "Seeduwa",
    "Alawathupitiya",
    "Kudahakapola",
    "Tudella",
    "Ja Ela",
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
    "Colombo Fort",
    "Secretariat Halt",
    "Slave Island",
    "Kollupitiya",
    "Bambalapitiya",
    "Wellawatta",
    "Dehiwala",
    "Mt. Lavania",
    "Ratmalana",
    "Angulana",
    "Lunawa",
    "Moratuwa",
    "Koralawella",
    "Egoda Uyana",
    "Panadura",
    "Pinwatta",
    "Wadduwa",
    "Train Halt 01",
    "Kalutara North",
    "Kalutara South",
];

const stationsSinhala = [
    "නූර්නගර්",
    "පුත්තලම",
    "තිල්ලඩි",
    "පාලවිය",
    "එරුක්කලම්පිඩි",
    "මදුරන්කුලිය",
    "මංගල එළිය",
    "මුන්දලම",
    "පුලිච්චකුලම",
    "බත්තුළු ඔය",
    "ආනවිලුන්දාව",
    "ආරච්චිකට්ටුව",
    "බංගදෙණිය",
    "මනුවන්ගම",
    "හලාවත",
    "සවරාන",
    "කාක්කපල්ලිය",
    "මාදම්පේ",
    "නෙළුම්පොකුණ",
    "කුඩාවැව",
    "වලහපිටිය",
    "නාත්තන්ඩිය",
    "තුම්මෝදර",
    "ලුනුවිල",
    "බොරලැස්ස",
    "බෝලවත්ත",
    "වයික්කාල",
    "කොච්චිකඩේ",
    "කට්ටූව",
    "මීගමුව",
    "කුරණ",
    "කටුනායක",
    "ආයෝජන ප්‍රවර්ධන කලාපය",
    "ලියනගෙමුල්ල",
    "සීදුව",
    "අලවතුපිටිය",
    "කුඩහකපොල",
    "තුඩැල්ල",
    "ජා ඇල",
    "කපුවත්ත",
    "කඳාන",
    "පේරලන්ද",
    "රාගම",
    "හොරපේ",
    "එඬේරමුල්ල",
    "හුනුපිටිය",
    "වනවාසල",
    "කැළණිය",
    "දෙමටගොඩ",
    "මරදාන",
    "කොළඹ කොටුව",
    "මහලේකම් කාර්‍යාලය",
    "කොම්පඤ්ඤවීදිය",
    "කොල්ලුපිටිය",
    "බම්බලපිටිය",
    "වැල්ලවත්ත",
    "දෙහිවල",
    "ගල්කිස්ස",
    "රත්මලාන",
    "අඟුලාන",
    "ලුනාව",
    "මොරටුව",
    "කොරළවැල්ල",
    "එගොඩ උයන",
    "පානදුර",
    "පින්වත්ත",
    "වාද්දුව",
    "දුම්රිය නැවතුම්පොළ 01",
    "උතුරු කළුතර",
    "දකුණු කළුතර",
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

    let message = getMessage(getLanguage());
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

    let message = getMessage(getLanguage());
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

    let message = getMessage(getLanguage());
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

function getTime() {
    let time;
    if (timeInput.value === "") {
        const currentDate = new Date();
        time = currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
        time = time.substring(0, 6) + time.substring(6).toUpperCase();
    } else {
        selectedTimeCompenents = timeInput.value.split(":").map(n => parseInt(n, 10));
        const selectedTime = new Date();
        selectedTime.setHours(selectedTimeCompenents[0], selectedTimeCompenents[1]);
        time = selectedTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
        time = time.substring(0, 6) + time.substring(6).toUpperCase();
    }

    return time;
}

function getMovement(lang) {
    let movement;
    const radios = document.getElementsByName("movementRadio");
    for (let radio of radios) {
        if (radio.checked) {
            movement = radio.value;
            break;
        }
    }

    if (lang === "sin") {
        switch (movement) {
            case "in":
                movement = "ඉන්";
                break;
            case "out":
                movement = "අවුට්";
                break;
            case "passing":
                movement = "පාසින්";
                break;
        }
    }

    return movement;
}

function getDirection(lang) {
    const directionRadios = document.getElementsByName("directionRadio");
    for (let radio of directionRadios) {
        if (radio.checked) {
            direction = radio.value;
            break;
        }
    }

    if (lang === "sin") {
        switch (direction) {
            case "UP":
                movement = "අප්";
                break;
            case "DOWN":
                movement = "ඩවුන්";
                break;
            default:
                break;
        }
    }
    return direction;
}

function getLanguage() {
    const languageRadios = document.getElementsByName("languageRadio");
    for (let radio of languageRadios) {
        if (radio.checked) {
            return radio.value;
        }
    }
}

function getMessage(lang) {
    let direction = getDirection(lang);
    let movement = getMovement(lang);
    let time = getTime();

    let message;
    switch (lang) {
        case "eng":
            message = `${trainSelector.value} ${direction} ${movement} ${stationSelector.value} ${time}`;
            break;
        case "sin":
            message = `${trainsSinhala[trainSelector.selectedIndex - 1]} ${direction} ${movement} ${stationsSinhala[stationSelector.selectedIndex - 1]} ${time}`;
            break;
    }

    return message;
}
