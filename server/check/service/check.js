const check = (req) => {
    const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const word = req.body;
    const wordList = [
        'niger',
        'polak',
        'arbuz',
        'domek',
        'magda',
        'julia',
        'zjawa',
        'widmo',
        'temat',
        'adamy',
        'wojna'
    ]
    // Losowanie hasła po dniu
    const password = wordList[dayOfYear(new Date()) % wordList.length]
    console.log(password)
    // Wygrana
    if( word.word.toLowerCase() === password) {
        return "Wygrałeś";
    }
    // Zmiana na zielony i żółty input
    else {
        returnValueGreen = "";
        returnValueYellow = "";
        for (var i = 0; i < 5; i++) {
            if(word.word.toLowerCase()[i] === password[i]) {
                returnValueGreen +=  i 
            }
            else if(password.indexOf(word.word.toLowerCase()[i])) {
               if(password.indexOf(word.word.toLowerCase()[i]) != -1) {
                   returnValueYellow += i
               }
            }
        }
        return [returnValueGreen, returnValueYellow]
    }
}
module.exports = {
	check: check
};