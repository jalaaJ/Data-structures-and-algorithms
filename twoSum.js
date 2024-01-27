// Brute force solution
function twoSum(nums, t) {
    for (let p1 = 0; p1 < nums.length; p1++) {
        numToFind = t - nums[p1];
        for (let p2 = p1+1; p2 < nums.length; p2++) {
            if (numToFind === nums[p2]) {
                return [p1, p2];
            }
        }
    }
    return null;
}

console.log(twoSum([1, 3, 7, 9, 2], 11));
console.log(twoSum([1, 3, 7, 9, 2], 25));
console.log(twoSum([1, 6], 7));
console.log(twoSum([1, 6], 6));
console.log(twoSum([], 6));
console.log(twoSum([5], 5));

console.log("-------------------------------");

// Optimal solution using a hashmap or an object, to keep track
// of the nTF and the index of the number that gave us the nTF value.
function twoSumOptimal(nums, t) {
    const nTFobj = {};
    for (let p=0; p<nums.length; p++) {
        const currentObjVal = nTFobj[nums[p]];
        if (currentObjVal >= 0) {
            return [currentObjVal, p];
        }
        const ntf = t - nums[p];
        nTFobj[ntf] = p;
    }
    return null;
}

console.log(twoSumOptimal([1, 3, 7, 9, 2], 11));
console.log(twoSumOptimal([1, 3, 7, 9, 2], 25));
console.log(twoSumOptimal([1, 6], 7));
console.log(twoSumOptimal([1, 6], 6));
console.log(twoSumOptimal([], 6));
console.log(twoSumOptimal([5], 5));

