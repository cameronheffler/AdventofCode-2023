const fs = require('fs');

const dict = {  "one": "1","two": "2","three": "3","four": "4",
                "five": "5","six": "6","seven": "7","eight": "8","nine": "9"
};

const fileContent = fs.readFileSync("input.txt", 'utf8');
const lines = fileContent.split(/\r?\n/);

function partOne() {
    let total = 0;

    lines.forEach((line) => {
        let n1 = "", n2 = "", str = "", comb = "";

        if (line.length == 0) {
            return
        }
        for (const char of line) {
            if (/\d/.test(char)) {
                str = "";

                if (n1.length === 0) {
                    n1 = char;
                    n2 = char;

                    continue
                }
                n2 = char;
            }
        }

        if (n1.length === 0) {
            return
        }
        comb = n1 + n2;
        total += parseInt(comb, 10);
    });

    console.log(total)
}

function partTwo() {
    let total = 0;

    lines.forEach((line) => {
        let n1 = "", n2 = "", str = "", comb = "";

        if (line.length == 0) {
            return
        }
        for (const char of line) {
            if (/\d/.test(char)) {
                str = "";

                if (n1.length === 0) {
                    n1 = char;
                    n2 = char;

                    continue
                }
                n2 = char;
                continue
            }
            str += char;

            for (let key in dict) {
                if (!str.includes(key)) {
                    continue
                }
                if (n1.length === 0) {
                    n1 = dict[key];
                    n2 = dict[key];

                    continue
                }
                n2 = dict[key];
                str = str.substring(str.length - 1, str.length)
            }
        }

        if (n1.length === 0) {
            return
        }
        comb = n1 + n2;
        total += parseInt(comb, 10);
    });

    console.log(total)
}

partOne();
partTwo();