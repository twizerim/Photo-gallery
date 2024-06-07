
function hasSubarrayWithSum(arr, target) {
    let number = 0;
    let currentSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        
        while (currentSum > target && number <= i) {
            currentSum -= arr[number];
            number++;
        }
        
        if (currentSum === target) {
            return true;
        }
    }
    
    return false;
}


let arr = [4, 2, 7, 1, 9, 5];
let target = 17;
console.log(hasSubarrayWithSum(arr, target));  
