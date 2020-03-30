// TESTS don't touch them
export function test(input: number[][][], output: number[][][], gameOfLife: (input: number[][]) => number[][]) {
    if (input.length !== output.length) {
        console.log("Wrong test case. Contact me to fix this error");
        return;
    }

    let allTestsPassed: boolean = true;
    for (let i = 0; i < input.length; i++) {
        let actual: number[][] = gameOfLife(input[i]);
        let expected: number[][] = output[i];

        if (!compare2DArray(expected, actual)) {
            console.log("ERROR: ");
            console.log("Expected: ");
            console.log(expected)
            console.log("Actual  : ");
            console.log(actual);
            allTestsPassed = false;
        } 
    }
    if (allTestsPassed) console.log("All tests passed!");
}

function compare2DArray(arr1: number[][], arr2: number[][]) {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let row: number = 0; row < arr1.length; row++) {
        for (let col: number = 0; col < arr1[0].length; col++) {
            if (arr1[row][col] != arr2[row][col]) {
                return false;
            }
        }
    }
    return true;
}