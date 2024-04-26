function smallestMissingPositiveInteger(nums) {

 
    // Implement the function smallest_missing_positive_integer
    
      // Filter out negative numbers and zero
      const positiveNums = nums.filter(num => num > 0);
  
      // Sort the positive numbers
      positiveNums.sort((a, b) => a - b);
  
      let expectedNum = 1;
      for (const num of positiveNums) {
          if (num !== expectedNum) {
              return expectedNum;
          }
          expectedNum++;
      }
  
      // If all positive integers from 1 to n are present, return n + 1
      return expectedNum;
  }
  
 
  
  
  
  module.exports = smallestMissingPositiveInteger;



