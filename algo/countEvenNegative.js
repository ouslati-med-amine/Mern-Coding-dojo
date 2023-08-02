/* 
Given an array of numbers,
return a count of how many are both even and negative.
*/

const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;

const nums2 = [];
const expected2 = 0;

const nums3 = [-4, -2, -6];
const expected3 = 3;

/**
 * Counts how many numbers are both even and negative.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums) { 
    // give a count var
    var count=0
    // loup the function
    for(let i =0; i<nums.lenght; i++){
        // condition if the number is negative or not
        // condition if the number is even or not
        if(nums[i]<0 && nums[i]%2===0){
            // count increase
            count++
        }
        // else print 0
        count=0
    }
}