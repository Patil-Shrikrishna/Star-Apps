function minPlane(fuelUnits) {
    if (!fuelUnits || fuelUnits.length === 0) {
        return -1;
    }

    let minPlanes = 0;
    let currentFuel = fuelUnits[0];
    let maxReachable = fuelUnits[0];

    for (let i = 1; i < fuelUnits.length; i++) {
        if (currentFuel < i) {
            if (maxReachable === i - 1) {
                return -1;  
            }
            minPlanes++;
            currentFuel = maxReachable;
        }
        maxReachable = Math.max(maxReachable, i + fuelUnits[i]);
    }

    return minPlanes + 1;  
}

// console.log("Minimum planes needed:", minPlane([2, 1, 2, 3, 1]));
console.log("Minimum planes needed:", minPlane([1, 6, 3, 4, 5, 0, 0, 0, 6]));
