let stations = [
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
    { engName: "Hunupitiya", sinName: "හුණුපිටිය" },
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

let trains = [
    {
        engName: '03:50 AM (CHL-PND) Udaya Kumari',
        sinName: '03:50 AM (CHL-PND) උදය කුමාරි',
        startStation: 'Chilaw',
        endStation: 'Panadura',
        passingStations: []
    },
    {
        engName: '03:50 AM (ALT-CHL)',
        sinName: '03:50 AM (ALT-CHL)',
        startStation: 'Aluthgama',
        endStation: 'Chilaw',
        passingStations: []
    },
    {
        engName: '04:00 AM (FOT-NOR)',
        sinName: '04:00 AM (FOT-NOR)',
        startStation: 'Colombo Fort',
        endStation: 'Noornagar',
        passingStations: []
    },
    {
        engName: '04:20 AM (CHL-MRT) Moratu Kumari',
        sinName: '04:20 AM (CHL-MRT) මොරටු කුමාරි',
        startStation: 'Chilaw',
        endStation: 'Moratuwa',
        passingStations: []
    },
    {
        engName: '04:30 AM (PTM-MLV) Bange',
        sinName: '04:30 AM (PTM-MLV) බංගෙ',
        startStation: 'Puttalam',
        endStation: 'Mt. Lavania',
        passingStations: [
            'Kurana', 'Katunayaka',
            'Liyanagemulla', 'Alawathupitiya',
            'Kudahakapola', 'Tudella',
            'Kapuwatta', 'Peralanda',
            'Ragama Junction', 'Horape',
            'Enderamulla', 'Hunupitiya',
            'Wanawasala', 'Kelaniya'
        ]
    },
    {
        engName: '04:50 AM (CHL-PND) Muthu Kumari',
        sinName: '04:50 AM (CHL-PND) මුතු කුමාරි',
        startStation: 'Chilaw',
        endStation: 'Panadura',
        passingStations: []
    },
    {
        engName: '05:00 AM (FOT-NGB)',
        sinName: '05:00 AM (FOT-NGB)',
        startStation: 'Colombo Fort',
        endStation: 'Negombo',
        passingStations: []
    },
    {
        engName: '05:30 AM (CHL-FOT) Chilaw Express',
        sinName: '05:30 AM (CHL-FOT) හලාවත එක්ස්ප්‍රස්',
        startStation: 'Chilaw',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '06:15 AM (CHL-FOT) CFS',
        sinName: '06:15 AM (CHL-FOT) CFS',
        startStation: 'Chilaw',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '06:50 AM (NGB-FOT) Mendis',
        sinName: '06:50 AM (NGB-FOT) මෙන්ඩිස්',
        startStation: 'Negombo',
        endStation: 'Colombo Fort',
        passingStations: ['Horape', 'Enderamulla', 'Hunupitiya', 'Wanawasala', 'Kelaniya']
    },
    {
        engName: '07:00 AM (KTS-NGB) Disna',
        sinName: '07:00 AM (KTS-NGB) දිස්නා',
        startStation: 'Kalutara South',
        endStation: 'Negombo',
        passingStations: []
    },
    {
        engName: '07:40 AM (FOT-PTM) PTM Mixed',
        sinName: '07:40 AM (FOT-PTM) පුත්තලම මික්ස්',
        startStation: 'Colombo Fort',
        endStation: 'Puttalam',
        passingStations: []
    },
    {
        engName: '09:10 AM (CHL-FOT)',
        sinName: '09:10 AM (CHL-FOT)',
        startStation: 'Chilaw',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '09:30 AM (NGB-FOT)',
        sinName: '09:30 AM (NGB-FOT)',
        startStation: 'Negombo',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '09:35 AM (FOT-CHL)',
        sinName: '09:35 AM (FOT-CHL)',
        startStation: 'Colombo Fort',
        endStation: 'Chilaw',
        passingStations: []
    },
    {
        engName: '09:50 AM (NOR-FOT)',
        sinName: '09:50 AM (NOR-FOT)',
        startStation: 'Noornagar',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '11:55 AM (FOT-NOR)',
        sinName: '11:55 AM (FOT-NOR)',
        startStation: 'Colombo Fort',
        endStation: 'Noornagar',
        passingStations: []
    },
    {
        engName: '12:40 PM (CHL-FOT)',
        sinName: '12:40 PM (CHL-FOT)',
        startStation: 'Chilaw',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '01:10 PM (FOT-MDP)',
        sinName: '01:10 PM (FOT-MDP)',
        startStation: 'Colombo Fort',
        endStation: 'Madampe',
        passingStations: []
    },
    {
        engName: '01:30 PM (PTM-FOT) PTM Mixed',
        sinName: '01:30 PM (PTM-FOT) පුත්තලම මික්ස්',
        startStation: 'Puttalam',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '02:35 PM (FOT-CHL)',
        sinName: '02:35 PM (FOT-CHL)',
        startStation: 'Colombo Fort',
        endStation: 'Chilaw',
        passingStations: []
    },
    {
        engName: '03:40 PM (FOT-CHL) Saliya (Holiday)',
        sinName: '03:40 PM (FOT-CHL) සාලිය (නිවාඩු දින)',
        startStation: 'Colombo Fort',
        endStation: 'Chilaw',
        passingStations: []
    },
    {
        engName: '04:00 PM (MDP-FOT)',
        sinName: '04:00 PM (MDP-FOT)',
        startStation: 'Madampe',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '04:10 PM (PND-PTM) Bange',
        sinName: '04:10 PM (PND-PTM) බංගෙ',
        startStation: 'Panadura',
        endStation: 'Puttalam',
        passingStations: [
            'Kurana', 'Katunayaka',
            'Liyanagemulla', 'Alawathupitiya',
            'Kudahakapola', 'Tudella',
            'Kapuwatta', 'Peralanda',
            'Ragama Junction', 'Horape',
            'Enderamulla', 'Hunupitiya',
            'Wanawasala', 'Kelaniya'
        ]
    },
    {
        engName: '04:30 PM (FOT-CHL) Saliya',
        sinName: '04:30 PM (FOT-CHL) සාලිය',
        startStation: 'Colombo Fort',
        endStation: 'Chilaw',
        passingStations: []
    },
    {
        engName: '04:30 PM (FOT-CHL) Chilaw Express (Sunday)',
        sinName: '04:30 PM (FOT-CHL) හලාවත එක්ස්ප්‍රස් (ඉරිදා)',
        startStation: 'Colombo Fort',
        endStation: 'Chilaw',
        passingStations: []
    },
    {
        engName: '04:40 PM (NOR-FOT)',
        sinName: '04:40 PM (NOR-FOT)',
        startStation: 'Noornagar',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '04:45 PM (FOT-CHL) Chilaw Express',
        sinName: '04:45 PM (FOT-CHL) හලාවත එක්ස්ප්‍රස්',
        startStation: 'Colombo Fort',
        endStation: 'Chilaw',
        passingStations: []
    },
    {
        engName: '04:45 PM (PND-CHL) Muthu Kumari',
        sinName: '04:45 PM (PND-CHL) මුතු කුමාරි',
        startStation: 'Panadura',
        endStation: 'Chilaw',
        passingStations: []
    },
    {
        engName: '04:55 PM (FOT-NGB) Mendis',
        sinName: '04:55 PM (FOT-NGB) මෙන්ඩිස්',
        startStation: 'Colombo Fort',
        endStation: 'Negombo',
        passingStations: ['Horape', 'Enderamulla', 'Hunupitiya', 'Wanawasala', 'Kelaniya']
    },
    {
        engName: '05:15 PM (CHL-FOT)',
        sinName: '05:15 PM (CHL-FOT)',
        startStation: 'Chilaw',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '05:30 PM (FOT-NGB) Meepura',
        sinName: '05:30 PM (FOT-NGB) මීපුර',
        startStation: 'Colombo Fort',
        endStation: 'Negombo',
        passingStations: []
    },
    {
        engName: '05:45 PM (KTS-CHL) CS',
        sinName: '05:45 PM (KTS-CHL) CS',
        startStation: 'Kalutara South',
        endStation: 'Chilaw',
        passingStations: []
    },
    {
        engName: '06:35 PM (NGB-FOT)',
        sinName: '06:35 PM (NGB-FOT)',
        startStation: 'Negombo',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '07:15 PM (NGB-FOT)',
        sinName: '07:15 PM (NGB-FOT)',
        startStation: 'Negombo',
        endStation: 'Colombo Fort',
        passingStations: []
    },
    {
        engName: '08:20 PM (FOT-CHL) LC',
        sinName: '08:20 PM (FOT-CHL) LC',
        startStation: 'Colombo Fort',
        endStation: 'Chilaw',
        passingStations: []
    }
];

// trains.map(train => train.sinName.split(" ").slice(3)).forEach(nameList => console.log(nameList.join(" ")));
// trains.forEach(train => console.log(train.passingStations.join(", ")));
// stations.forEach(station => console.log(station.sinName));

const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('data.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let i = 0;
    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        if (line === "") {
            i++;
            continue;
        }
        else {
            trains[i].passingStations = line.replace(/(?<=,)\s+/g, "").split(",").map(word => word.trim());
            ++i;
        }
    }
    // return trains;
}

processLineByLine().then(() => console.log(trains));
