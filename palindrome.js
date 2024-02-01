function isValid_palindrome(s) {

    const alphanumeric_Regex = /[^a-zA-Z0-9]/g;
    s = s.replace(alphanumeric_Regex, '').toLowerCase();

    if (s.length <= 1) return true;

    if (s.length % 2 === 0) {
        let left = 0, right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) return false;
            else {
                left++;
                right--;
            }
        }
        return true;
    }
    else {
        let left = Math.floor(s.length / 2), right = Math.floor(s.length / 2);
        while (left > 0 && right < s.length) {
            left--;
            right++;
            if (s[left] !== s[right]) return false;
        }
        return true;
    }
}

// Helper function to skip either one of the characters and continue to check
function validSubPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        else {
            left++;
            right--;
        }
    }
    return true;
}

function isAlmostPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return validSubPalindrome(s, left + 1, right) || validSubPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
}

const some_string = "A man, a plan, a canal: Panama";
console.log(isValid_palindrome(some_string));
