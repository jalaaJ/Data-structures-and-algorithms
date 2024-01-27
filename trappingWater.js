function trappingWater(heights) {
    let trappedWater = 0;
    for (let p=0; p<heights.length; p++) {
        let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;
        while(leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        }
        while(rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        }
        const currentWater = Math.min(maxLeft, maxRight) - heights[p];
        if (currentWater >= 0) {
            trappedWater += currentWater;
        }
    }
    return trappedWater;
}

console.log(trappingWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

console.log("-------------------------------");

function trappingWaterOptimal(heights) {
    let trappedWater = 0;
    let maxLeft = 0, maxRight = 0;
    let leftP = 0, rightP = heights.length - 1;
    while (leftP < rightP) {
        if (heights[leftP] <= heights[rightP]) {
            if (heights[leftP] < maxLeft) {
                const currentWater = maxLeft - heights[leftP];
                trappedWater += currentWater;
            }
            else {
                maxLeft = heights[leftP];
            }
            leftP++;
        }
        else {
            if (heights[rightP] < maxRight) {
                const currentWater = maxRight - heights[rightP];
                trappedWater += currentWater;
            }
            else {
                maxRight = heights[rightP];
            }
            rightP--;
        }
    } 
    return trappedWater;
}

console.log(trappingWaterOptimal([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
