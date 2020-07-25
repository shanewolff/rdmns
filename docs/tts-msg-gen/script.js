const stations = [
    { engName: "Noornagar", sinName: "නූර් නගර්" },
    { engName: "Puttalam", sinName: "පුත්තලම" },
    { engName: "Thiladiya", sinName: "තිල්අඩිය" },
    { engName: "Palavi", sinName: "පාලවිය" },
    { engName: "Erukkalampiddy Nagawillu", sinName: "එරුක්කලම්පිඩි නාගවිල්ලු" },
    { engName: "Madurankuliya", sinName: "මදුරන්කුලිය" },
    { engName: "Mangala Eliya", sinName: "මංගල එළිය" },
    { engName: "Mundal", sinName: "මුන්දලම" },
    { engName: "Pulichchakulam", sinName: "පුලිච්චකුලම" },
    { engName: "Baththulu Oya", sinName: "බත්තුළු ඔය" },
    { engName: "Anavilundawa", sinName: "ආනවිලුන්දාව" },
    { engName: "Arachchikattuwa", sinName: "ආරච්චිකට්ටුව" },
    { engName: "Bangadeniya", sinName: "බංගදෙණිය" },
    { engName: "Manuwangama", sinName: "මානුවන්ගම" },
    { engName: "Chilaw", sinName: "හලාවත" },
    { engName: "Sawarana", sinName: "සවරාන" },
    { engName: "Kakkapalliya", sinName: "කාක්කපල්ලිය" },
    { engName: "Madampe", sinName: "මාදම්පෙ" },
    { engName: "Nelumpokuna", sinName: "නෙළුම්පොකුණ" },
    { engName: "Kudawewa", sinName: "කුඩාවැව" },
    { engName: "Walahapitiya", sinName: "වලහපිටිය" },
    { engName: "Nattandiya", sinName: "නාත්තන්ඩිය" },
    { engName: "Thummodara", sinName: "තුම්මෝදර" },
    { engName: "Lunuwila", sinName: "ලුනුවිල" },
    { engName: "Boralessa", sinName: "බොරලැස්ස" },
    { engName: "Bolawatta", sinName: "බෝලවත්ත" },
    { engName: "Waikkala", sinName: "වයික්කාල" },
    { engName: "Kochchikade", sinName: "කොච්චිකඩේ" },
    { engName: "Kattuwa", sinName: "කට්ටුව" },
    { engName: "Negombo", sinName: "මීගමුව" },
    { engName: "Kurana", sinName: "කුරණ" },
    { engName: "Katunayaka", sinName: "කටුනායක" },
    { engName: "I.P. Zone", sinName: "ආයෝජන ප්‍රවර්ධන කලාපය" },
    { engName: "Liyanagemulla", sinName: "ලියනගෙමුල්ල" },
    { engName: "Seeduwa", sinName: "සීදූව" },
    { engName: "Alawathupitiya", sinName: "අලවතුපිටිය" },
    { engName: "Kudahakapola", sinName: "කුඩහකපොල" },
    { engName: "Tudella", sinName: "තුඩැල්ල" },
    { engName: "Ja Ela", sinName: "ජා ඇල" },
    { engName: "Kapuwatta", sinName: "කපුවත්ත" },
    { engName: "Kandana", sinName: "කඳාන" },
    { engName: "Peralanda", sinName: "පේරලන්ද" },
    { engName: "Ragama Junction", sinName: "රාගම හන්දිය" },
    { engName: "Horape", sinName: "හොරපේ" },
    { engName: "Enderamulla", sinName: "එඬේරමුල්ල" },
    { engName: "Hunupitiya", sinName: "හුනුපිටිය" },
    { engName: "Wanawasala", sinName: "වනවාසල" },
    { engName: "Kelaniya", sinName: "කැළණිය" },
    { engName: "Dematagoda", sinName: "දෙමටගොඩ" },
    { engName: "Maradana", sinName: "මරදාන" },
    { engName: "Colombo Fort", sinName: "කොළඹ කොටුව" },
    { engName: "Secretariat Halt", sinName: "මහලේකම් කාර්‍යාලය දුම්රිය නැවතුම්පළ" },
    { engName: "Slave Island", sinName: "කොම්පඤ්ඤවීදිය" },
    { engName: "Kollupitiya", sinName: "කොල්ලුපිටිය" },
    { engName: "Bambalapitiya", sinName: "බම්බලපිටිය" },
    { engName: "Wellawatta", sinName: "වැල්ලවත්ත" },
    { engName: "Dehiwala", sinName: "දෙහිවල" },
    { engName: "Mt. Lavania", sinName: "ගල්කිස්ස" },
    { engName: "Ratmalana", sinName: "රත්මලාන" },
    { engName: "Angulana", sinName: "අඟුලාන" },
    { engName: "Lunawa", sinName: "ලුනාව" },
    { engName: "Moratuwa", sinName: "මොරටුව" },
    { engName: "Koralawella", sinName: "කොරළවැල්ල" },
    { engName: "Egoda Uyana", sinName: "එගොඩ උයන" },
    { engName: "Panadura", sinName: "පානදුර" },
    { engName: "Pinwatta", sinName: "පින්වත්ත" },
    { engName: "Wadduwa", sinName: "වාද්දුව" },
    { engName: "Train Halt No. 1", sinName: "දුම්රිය නැවතුම්පළ නො. 1" },
    { engName: "Kalutara North", sinName: "උතුරු කළුතර" },
    { engName: "Kalutara South", sinName: "දකුණු කළුතර" },
    { engName: "Katukurunda", sinName: "කටුකුරුන්ද" },
    { engName: "Payagala North", sinName: "උතුරු පයාගල" },
    { engName: "Payagala South", sinName: "දකුණු පයාගල" },
    { engName: "Maggona", sinName: "මග්ගොන" },
    { engName: "Beruwela", sinName: "බේරුවෙල" },
    { engName: "Hettimulla", sinName: "හෙට්ටිමුල්ල" },
    { engName: "Aluthgama", sinName: "අලුත්ගම" },
];

const trains = [
    {
        engName: "03:50 AM (CHL-PND) Udaya Kumari",
        sinName: "03:50 AM (CHL-PND) උදය කුමාරි",
        startStation: "Chilaw",
        endStation: "Panadura",
        passingStations: []
    },
    {
        engName: "03:50 AM (ALT-CHL)",
        sinName: "03:50 AM (ALT-CHL)",
        startStation: "Aluthgama",
        endStation: "Chilaw",
        passingStations: []
    },
    {
        engName: "04:00 AM (FOT-NOR)",
        sinName: "04:00 AM (FOT-NOR)",
        startStation: "Colombo Fort",
        endStation: "Noornagar",
        passingStations: []
    },
    {
        engName: "04:20 AM (CHL-MRT) Moratu Kumari",
        sinName: "04:20 AM (CHL-MRT) මොරටු කුමාරි",
        startStation: "Chilaw",
        endStation: "Moratuwa",
        passingStations: []
    },
    {
        engName: "04:30 AM (PTM-MLV) Bange",
        sinName: "04:30 AM (PTM-MLV) බංගෙ",
        startStation: "Puttalam",
        endStation: "Mt. Lavania",
        passingStations: []
    },
    {
        engName: "04:50 AM (CHL-PND) Muthu Kumari",
        sinName: "04:50 AM (CHL-PND) මුතු කුමාරි",
        startStation: "Chilaw",
        endStation: "Panadura",
        passingStations: []
    },
    {
        engName: "05:00 AM (FOT-NGB)",
        sinName: "05:00 AM (FOT-NGB)",
        startStation: "Colombo Fort",
        endStation: "Negombo",
        passingStations: []
    },
    {
        engName: "05:30 AM (CHL-FOT) Express",
        sinName: "05:30 AM (CHL-FOT) එක්ස්ප්‍රස්",
        startStation: "Chilaw",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "06:15 AM (CHL-FOT) CFS",
        sinName: "06:15 AM (CHL-FOT) CFS",
        startStation: "Chilaw",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "06:50 AM (NGB-FOT) Mendis",
        sinName: "06:50 AM (NGB-FOT) මෙන්ඩිස්",
        startStation: "Negombo",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "07:00 AM (KTS-NGB) Disna",
        sinName: "07:00 AM (KTS-NGB) දිස්නා",
        startStation: "Kalutara South",
        endStation: "Negombo",
        passingStations: []
    },
    {
        engName: "07:40 AM (FOT-PTM) PTM Mixed",
        sinName: "07:40 AM (FOT-PTM) පුත්තලම මික්ස්",
        startStation: "Colombo Fort",
        endStation: "Puttalam",
        passingStations: []
    },
    {
        engName: "09:10 AM (CHL-FOT)",
        sinName: "09:10 AM (CHL-FOT)",
        startStation: "Chilaw",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "09:30 AM (NGB-FOT)",
        sinName: "09:30 AM (NGB-FOT)",
        startStation: "Negombo",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "09:35 AM (FOT-CHL)",
        sinName: "09:35 AM (FOT-CHL)",
        startStation: "Colombo Fort",
        endStation: "Chilaw",
        passingStations: []
    },
    {
        engName: "09:50 AM (NOR-FOT)",
        sinName: "09:50 AM (NOR-FOT)",
        startStation: "Noornagar",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "11:55 AM (FOT-NOR)",
        sinName: "11:55 AM (FOT-NOR)",
        startStation: "Colombo Fort",
        endStation: "Noornagar",
        passingStations: []
    },
    {
        engName: "12:40 PM (CHL-FOT)",
        sinName: "12:40 PM (CHL-FOT)",
        startStation: "Chilaw",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "01:10 PM (FOT-MDP)",
        sinName: "01:10 PM (FOT-MDP)",
        startStation: "Colombo Fort",
        endStation: "Madampe",
        passingStations: []
    },
    {
        engName: "01:30 PM (PTM-FOT) PTM Mixed",
        sinName: "01:30 PM (PTM-FOT) පුත්තලම මික්ස්",
        startStation: "Puttalam",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "02:35 PM (FOT-CHL)",
        sinName: "02:35 PM (FOT-CHL)",
        startStation: "Colombo Fort",
        endStation: "Chilaw",
        passingStations: []
    },
    {
        engName: "03:40 PM (FOT-CHL) Saliya (Holiday)",
        sinName: "03:40 PM (FOT-CHL) සාලිය (නිවාඩු දින)",
        startStation: "Colombo Fort",
        endStation: "Chilaw",
        passingStations: []
    },
    {
        engName: "04:00 PM (MDP-FOT)",
        sinName: "04:00 PM (MDP-FOT)",
        startStation: "Madampe",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "04:10 PM (PND-PTM) Bange",
        sinName: "04:10 PM (PND-PTM) බංගෙ",
        startStation: "Panadura",
        endStation: "Puttalam",
        passingStations: []
    },
    {
        engName: "04:30 PM (FOT-CHL) Saliya",
        sinName: "04:30 PM (FOT-CHL) සාලිය",
        startStation: "Colombo Fort",
        endStation: "Chilaw",
        passingStations: []
    },
    {
        engName: "04:30 PM (FOT-CHL) Express (Sunday)",
        sinName: "04:30 PM (FOT-CHL) එක්ස්ප්‍රස් (ඉරිදා)",
        startStation: "Colombo Fort",
        endStation: "Chilaw",
        passingStations: []
    },
    {
        engName: "04:40 PM (NOR-FOT)",
        sinName: "04:40 PM (NOR-FOT)",
        startStation: "Noornagar",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "04:45 PM (FOT-CHL) Express",
        sinName: "04:45 PM (FOT-CHL) එක්ස්ප්‍රස්",
        startStation: "Colombo Fort",
        endStation: "Chilaw",
        passingStations: []
    },
    {
        engName: "04:45 PM (PND-CHL) Muthu Kumari",
        sinName: "04:45 PM (PND-CHL) මුතු කුමාරි",
        startStation: "Panadura",
        endStation: "Chilaw",
        passingStations: []
    },
    {
        engName: "04:55 PM (FOT-NGB) Mendis",
        sinName: "04:55 PM (FOT-NGB) මෙන්ඩිස්",
        startStation: "Colombo Fort",
        endStation: "Negombo",
        passingStations: []
    },
    {
        engName: "05:15 PM (CHL-FOT)",
        sinName: "05:15 PM (CHL-FOT)",
        startStation: "Chilaw",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "05:30 PM (FOT-NGB) Meepura",
        sinName: "05:30 PM (FOT-NGB) මීපුර",
        startStation: "Colombo Fort",
        endStation: "Negombo",
        passingStations: []
    },
    {
        engName: "05:45 PM (KTS-CHL) CS",
        sinName: "05:45 PM (KTS-CHL) CS",
        startStation: "Kalutara South",
        endStation: "Chilaw",
        passingStations: []
    },
    {
        engName: "06:35 PM (NGB-FOT)",
        sinName: "06:35 PM (NGB-FOT)",
        startStation: "Negombo",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "07:15 PM (NGB-FOT)",
        sinName: "07:15 PM (NGB-FOT)",
        startStation: "Negombo",
        endStation: "Colombo Fort",
        passingStations: []
    },
    {
        engName: "08:20 PM (FOT-CHL) LC",
        sinName: "08:20 PM (FOT-CHL) LC",
        startStation: "Colombo Fort",
        endStation: "Chilaw",
        passingStations: []
    },
];

const trainSelector = document.querySelector("#trainSelector");
const stationSelector = document.querySelector("#stationSelector");
const timeInput = document.querySelector("#timepicker");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const generateBtn = document.querySelector("#generateBtn");
let stationOffset = 0;

for (let train of trains) {
    const optionElement = document.createElement("OPTION");
    optionElement.nodeValue = train.engName;
    optionElement.text = train.engName;
    trainSelector.appendChild(optionElement);
}

for (let station of stations) {
    const optionElement = document.createElement("OPTION");
    optionElement.nodeValue = station.engName;
    optionElement.text = station.engName;
    stationSelector.appendChild(optionElement);
}

trainSelector.addEventListener("change", (e) => {
    if (trainSelector.classList.contains("border-danger")) {
        trainSelector.classList.remove("border-danger");
    }

    if (document.querySelector("#trainRequiredMsg")) {
        document.querySelector("#trainRequiredMsg").remove();
    }

    const startStationIndex = stations.map(station => station.engName).indexOf(trains[trainSelector.selectedIndex - 1].startStation);
    const endStationIndex = stations.map(station => station.engName).indexOf(trains[trainSelector.selectedIndex - 1].endStation);

    if (startStationIndex < endStationIndex) {
        stationOffset = startStationIndex;
        filteredStations = stations.slice(startStationIndex, endStationIndex + 1).map(station => station.engName);
        Array.from(stationSelector.querySelectorAll('*')).slice(1).forEach(node => node.remove());
        filteredStations.forEach(station => {
            const optionElement = document.createElement("OPTION");
            optionElement.nodeValue = station;
            optionElement.text = station;
            stationSelector.appendChild(optionElement);
        });
    } else {
        stationOffset = endStationIndex;
        filteredStations = stations.slice(endStationIndex, startStationIndex + 1).map(station => station.engName);
        Array.from(stationSelector.querySelectorAll('*')).slice(1).forEach(node => node.remove());
        filteredStations.forEach(station => {
            const optionElement = document.createElement("OPTION");
            optionElement.nodeValue = station;
            optionElement.text = station;
            stationSelector.appendChild(optionElement);
        });
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

    if (stationSelector.selectedIndex < stationSelector.childElementCount - 1) {
        downBtn.removeAttribute("disabled");
    } else {
        if (!downBtn.hasAttribute("disabled")) {
            downBtn.setAttribute("disabled", "disabled");
        }
    }
});

generateBtn.addEventListener("click", (e) => {
    let trainValidation = validateTrainSelector();
    let stationValidation = validateStationSelector();

    if (!(trainValidation && stationValidation)) {
        return;
    }

    let message = getMessage(getLanguage());
    document.querySelector("#generatedMessage").textContent = message;
    copyText(document.querySelector("#generatedMessage"));
});

upBtn.addEventListener("click", (e) => {
    let trainValidation = validateTrainSelector();
    let stationValidation = validateStationSelector();

    if (!(trainValidation && stationValidation)) {
        return;
    }

    changeStateForUp();

    if (stationSelector.selectedIndex > 1) {
        upBtn.removeAttribute("disabled");
    } else {
        if (!upBtn.hasAttribute("disabled")) {
            upBtn.setAttribute("disabled", "disabled");
        }
    }

    if (stationSelector.selectedIndex < stationSelector.childElementCount - 1) {
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
    let trainValidation = validateTrainSelector();
    let stationValidation = validateStationSelector();

    if (!(trainValidation && stationValidation)) {
        return;
    }

    changeStateForDown();

    if (stationSelector.selectedIndex > 1) {
        upBtn.removeAttribute("disabled");
    } else {
        if (!upBtn.hasAttribute("disabled")) {
            upBtn.setAttribute("disabled", "disabled");
        }
    }

    if (stationSelector.selectedIndex < stationSelector.childElementCount - 1) {
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
        const selectedTimeCompenents = timeInput.value.split(":").map(n => parseInt(n, 10));
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
    let direction;
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
                direction = "අප්";
                break;
            case "DOWN":
                direction = "ඩවුන්";
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
            message = `${trains[trainSelector.selectedIndex - 1].engName} ${direction} ${movement} ${stations[stationSelector.selectedIndex - 1 + stationOffset].engName} ${time}`;
            break;
        case "sin":
            message = `${trains[trainSelector.selectedIndex - 1].sinName} ${direction} ${movement} ${stations[stationSelector.selectedIndex - 1 + stationOffset].sinName} ${time}`;
            break;
    }

    return message;
}

function validateTrainSelector() {
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

        return false;
    }

    return true;
}

function validateStationSelector() {
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

        return false;
    }
    return true;
}

function changeStateForUp() {
    switch (getMovement("eng")) {
        case "in":
            document.querySelector("#inRadio").checked = false;
            document.querySelector("#outRadio").checked = true;
            break;
        case "out":
            document.querySelector("#outRadio").checked = false;
            document.querySelector("#inRadio").checked = true;
            stationSelector.selectedIndex -= 1;
            break;
        case "passing":
            break;
    }
}

function changeStateForDown() {
    switch (getMovement("eng")) {
        case "in":
            document.querySelector("#inRadio").checked = false;
            document.querySelector("#outRadio").checked = true;
            break;
        case "out":
            document.querySelector("#outRadio").checked = false;
            document.querySelector("#inRadio").checked = true;
            stationSelector.selectedIndex += 1;
            break;
        case "passing":
            break;
    }
}