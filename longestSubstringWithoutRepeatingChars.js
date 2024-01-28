// abcbda
function longestSunstring(s) {
    if (s.length <= 1) return s.length;

    let longest = 0;
    for (let left=0; left<s.length; left++) {
        let seen_chars = {}, current_length = 0;
        for (let right=left; right<s.length; right++) {
            const current_char = s[right];
            if(!seen_chars[current_char]) {
                current_length++;
                seen_chars[current_char] = true;
                longest = Math.max(longest, current_length);
            } else {
                break;
            }
        }
    }
    return longest;
}

let s = "abcbda";
console.log(longestSunstring(s));