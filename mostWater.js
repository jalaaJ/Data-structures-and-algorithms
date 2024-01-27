function containerWithMostWater(heights) {
    let maxWater  = 0;
    if (heights.length < 2) {
        maxWater = 0;
        return maxWater;
    }
    for (let p1=0; p1<heights.length; p1++) {
        for (let p2=p1+1; p2<heights.length; p2++) {
            if(heights[p1] < heights[p2]) {
                currWater = heights[p1] * (p2 - p1);
            }
            else {
                currWater = heights[p2] * (p2 -p1);
            }
            if(currWater > maxWater) {
                maxWater = currWater;
            }
        }
    }
    return maxWater;
}

console.log(containerWithMostWater([1, 18, 6, 20, 9, 4]));

console.log("-------------------------------");

function containerWithMostWaterOptimal(heights) {
    let maxWater  = 0;
    if (heights.length < 2) {
        maxWater = 0;
        return maxWater;
    }
    let p1 = 0;
    let p2 = heights.length -1;
    for(let i=0; i<heights.length; i++) {
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        currWater = height * width;
        maxWater = Math.max(maxWater, currWater);
        if (heights[p1] < heights[p2]) p1++;
        else p2--;
    }
    return maxWater;
}

console.log(containerWithMostWaterOptimal([1, 18, 6, 20, 9, 4]));