
// Time complexity: O(N^2)
// Space complexity: O(N) - because the map is getting reset at each iteration ( so it's not O(N^2) )

function longestSubstring(s) {

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
console.log(longestSubstring(s));

console.log("-----------------------------------")

function longestSubstringOptimal(s) {

    if (s.length <= 1) return s.length;

    // This hashmap will hold the key as the char we've seen, and the value to be the index of that char 
    const seen_chars = {};

    let longest = 0;
    let left = 0;
    for (let right = 0; right<s.length; right++) {
        const current_char = s[right];
        const prevSeen_char = seen_chars[current_char];
        if (prevSeen_char >= left) {
            left = prevSeen_char + 1;
        }

        // Here, in the hashmap, we update the index of the char that we've seen till this point
        seen_chars[current_char] = right;

        // We can get the length of the current substring by (right - left + 1)
        longest = Math.max(longest, right - left + 1);

    }
    return longest;
}

let s2 = "abcbdaac";
console.log(longestSubstringOptimal(s2));
