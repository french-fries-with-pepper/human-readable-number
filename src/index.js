module.exports = function toReadable(number) {
    const hrNames = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let res = [];
    const hundreds = (number - (number % 100)) / 100;
    const back = number % 100;
    if (hundreds > 0) res.push(`${hrNames[hundreds]} hundred`);
    if (number === 0) return "zero";
    if (back === 0) return res.join(" ");
    if (back <= 20 || back % 10 === 0) {
        res.push(`${hrNames[back]}`);
    } else {
        const t = back - (back % 10);
        const b = back % 10;
        res.push(`${hrNames[t]} ${hrNames[b]}`);
    }
    return res.join(" ");
};
