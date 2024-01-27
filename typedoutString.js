function typedoutString(fString, sString) {
    let fStringArr = [];
    let sStringArr = [];
    for (let i=0; i<fString.length; i++) {
        if (fString[i] === "#") {
            fStringArr.pop();
        }
        else {
            fStringArr.push(fString[i]);
        }
    }
    for (let i=0; i<sString.length; i++) {
        if (sString[i] === "#") {
            sStringArr.pop();
        }
        else {
            sStringArr.push(sString[i]);
        }
    }
    if (sStringArr.length !== fStringArr.length) return false;
    else {
        let p = 0;
        for (let i=0; i<sStringArr.length; i++) {
            if (sStringArr[p] !== fStringArr[p]) return false;
            p++;
        }
        return true;
    }
}

const string1 = "dd#";
const string2 = "d";

console.log(typedoutString(string1, string2));

console.log("-------------------------------");

function typedoutStringOptimal(fString, sString) {
    let p1 = fString.length - 1;
    let p2 = sString.length - 1;
    while (p1 >= 0 || p2 >= 0) {
        if (fString[p1] === "#" || sString[p2] === "#") {
            if (fString[p1] === "#") {
                let steps = 2;
                while (steps > 0) {
                    p1--;
                    steps--;
                    if (fString[p1] === "#") {
                        steps = steps + 2;
                    }
                }
            }
            if (sString[p2] === "#") {
                let steps = 2;
                while (steps > 0) {
                    p2--;
                    steps--;
                    if (sString[p2] === "#") {
                        steps = steps + 2;
                    }
                }
            }
        }
        else {
            if (fString[p1] !== sString[p2]) {
                return false;
            }
            else {
                p1--;
                p2--;
            }
        }
    }
    return true;
}

console.log(typedoutStringOptimal(string1, string2));
