const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.replace(/\*{10}/g, ' ').split(' ');

    const newArr = [];

    for (let i of expr) {
        for (let j = 0; j < i.length; j += 10) {
            let char = i.slice(j, j + 10).replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '');
            newArr.push(MORSE_TABLE[char]);
        }
        newArr.push(' ');
    }

    return newArr.join('').slice(0, -1);
}

module.exports = {
    decode
}