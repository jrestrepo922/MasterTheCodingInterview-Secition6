/**********************************
 * 66 implementing an Array
 *********************************/
class MyArray {
    constructor(){
        this.length = 0; 
        this.data={};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
        this.pop(); 
        this.length--;
    }

}

// const newArray = new MyArray(); 
// newArray.push('hi')
// newArray.push('you')
// newArray.push('!')
// newArray.push('good')
// newArray.push('bye')
// newArray.delete(1)
// console.log(newArray)


/**********************************
 * 66 Reversing a String
 *********************************/
function reverseStr1(str){
    if(!str || str.length < 2 || typeof str !=='string'){
        return 'hmm that is not good'
    }
    // split the string and turn it into an array
    return str.split('').reverse().join('');
}

// TC is O(N), Transversing an array; 
// TS is O(N), Create a reverse array with the same number of elements as the string pass 
function reverseStr2(str){
    // check input 
    if(!str || str.length < 2 || typeof str !=='string'){
        return 'hmm that is not good'
    }
    let reverseArray = []
    for(let i = str.length - 1; i >= 0; i--){
        reverseArray.push(str[i])
    }
    return reverseArray.join('')
}

const reverseStr3 = str => str.split('').reverse().join('');
// deconstruction
const reverseStr4 = str => [...str].reverse().join('');


// console.log(reverseStr3('Hi my name is Juan'))




/**********************************
 * 70 MergeSortedArrays
 *********************************/

 function MergeSortedArrays1(arr1, arr2){
    // things that could break the code empty arrays, (returns an empty array)
    if(arr1.length === 0 && arr2.length > 0) return arr2
    if(arr2.length === 0 && arr1.length > 0) return arr1
    // Array.isArray(arr1) 
    // arr1 is undefined return error. 
    // create a variable to hold the combine arrays
    const combinedArray = [];
    // iterates all the way to the end of both arrays
    let i = 0;
    let j = 0; 
    while(i < arr1.length && j < arr2.length){
        // need to  check witch of the two elements in the array is bigger and increment the counters accordenly
        if(arr1[i] <= arr2[j]){
            combinedArray.push(arr1[i]);
            i++; 
        } else {
            combinedArray.push(arr2[j]);
            j++;
        }
    }
    if(arr2[j] !==undefined){
        while(j < arr2.length){
            combinedArray.push(arr2[j])
            j++
        }
    }

    if(arr1[i] !==undefined){
        while(i < arr1.length){
            combinedArray.push(arr1[i])
            i++
        }
    }
    

    // return the combine array;
    return combinedArray;
 }



//  console.log(MergeSortedArrays([0,3,4,31, 32, 33], [4,6,30]))




/**********************************
 * 72 Interview Questions: Array
 *********************************/

 // ------------------Two Sum----------------//
    // TC O(N)
    // SC O(N) 

 function twoSum(nums, target){
    let potentialMatch;
    let numsObj = {};
    for(let i = 0; i < nums.length; i++){
        potentialMatch = target - nums[i];
        if(numsObj[nums[i]]) {
            return [ nums.indexOf(potentialMatch), i]
        } 
        numsObj[potentialMatch] = true;
    }

    return -1 
 }

//  console.log(twoSum([3,3], 6))


 // ------------------Maximun SubArray----------------//
 // TC O(N^2)
 // SP O(1)
 var maxSubArray = function(nums) {
    // need a variable that holds the largerst sum 
    let largestSum = -Infinity;
    // need a loop that iterates over all items in the array
    for(var left = 0; left < nums.length; left++){
        // need a varable that hold the current sum for comparison
        // needs to reset to zero ones the left value increases.
        let currentSum = 0;
      // need a inner loop that iterates all items in the array 
      for(var right = left; right < nums.length; right++ ){
        // some logic to compare the currentSum with LargestSum 
        if(left === right) {
            currentSum = nums[left];
            largestSum = Math.max(currentSum, largestSum)
            continue;
        }
        currentSum =  currentSum + nums[right];
        largestSum = Math.max(currentSum, largestSum)
      }
        
    }
    return largestSum

    // return largest sum 
};

//   console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


 // ------------------Move Zeros----------------//

 // TC = O(N) only one while loop
 // SC = O(1) creating variables holding primities so constant time
 function moveZeroes(nums){
    // safe guarding agains error: non integer values, not passing an array, passing nothing
    if(!Array.isArray(nums) || !nums){
        return 'please provide an array as an input holding integers'
    }
    // create the pointer variables 
    let i = 0; 
    let j = 1; 
    let numI;
    let numJ;
     // create while loop that iterates until j is out of bounds 
    while(nums.length >  j){
        numI = nums[i];
        numJ = nums[j];
        // create a helper function that swaps values
        if(numI === 0 && numJ !== 0){
            swap(nums, i, j)
            i++;
            j++;
        } else if( numI === 0 && numJ === 0){
            j++;
        } else if(numI !==0 && numJ === 0){
            i++; 
            j++; 
        } else if(numI !==0 && numJ !== 0){
            i++; 
            j++;
        }
    }
    // return the nums array
    return nums
 }

 function swap(arr, index1, index2){
     let temp = arr[index1];
     arr[index1] = arr[index2];
     arr[index2] = temp;
 }

//  console.log(moveZeroes([0,1,0,3,12]))


 // ------------------Contains Duplicates----------------//

 function containsDuplicates1(nums){
     // create an empty hash to hold the values
        let frequencyCounter = {};
     // iterate throught the array and add to the hash 
        for(let num of nums){
            frequencyCounter[num] = (frequencyCounter[num] || 0 ) + 1;
        }
     // iterate over the hash and check to see if there is any value in a specific key greater than 1
        for(let num in frequencyCounter){
            if(frequencyCounter[num] > 1) return true; 
        }
        // return true if found 
    
    return false; 
 }

 function containsDuplicates2(nums){
    let newSet = new Set(nums)
    if (newSet.size !== nums.length) return true 
    return false; 
}
//  console.log(containsDuplicates2([1,2,3,1]))


// ------------------Rotates Array----------------//
// TC O(N)
// SC O(1)
function rotate1(nums, k){
    const repetion = nums.length - 1 - k;
    // create a while loop that runs as manytimes as the repetion 
    let removedEle; 
    // if(repetion === 1){
    //     for(var j = 0; j < 2; j++){
    //         removedEle = nums.pop(); 
    //         nums.unshift(removedEle) 
    //     }
    //     return nums;
    // }

    // if(repetion === 0 || k >= nums.length ){
    //     removedEle = nums.pop();
    //     nums.unshift(removedEle)
    //     return nums;
    // }

    let i = 0;
    
    while(repetion > i){
        removedEle = nums.pop(); 
        nums.unshift(removedEle)
        i++
    }

    // return the mutated nums array
    return nums
}

var rotate2 = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - k));
};

// console.log(rotate([1,2,3,4,5,6,7], 5))

// ------------------Longest Word----------------//
//TC O(N)
//SC O(N)
function longestWord(sen){
    // remove none alphabetical characters and turn into an array
    let stringArray = sen.match(/[a-zA-Z]+/g);
    // iterate over the created array 
    let i = 0; 
    let largestWord = stringArray[i];
    while((stringArray.length - 1) > i){
        if(largestWord.length < stringArray[i + 1].length){
            largestWord = stringArray[i + 1];
        }
        i++
    }
    return largestWord;
}

console.log(longestWord("Argument goes here"))