const palindromes = function (str) {
    let noRev = str.toLowerCase().split('').filter(elem => ((!isNaN(elem) && elem !== " ") || (elem.charCodeAt(0) >= 97 && elem.charCodeAt(0) <= 122)));
    let rev = noRev.slice();
    rev.reverse();

    rev = rev.join('');
    noRev = noRev.join('');

    return noRev === rev;
    
};

// Do not edit below this line
module.exports = palindromes;
