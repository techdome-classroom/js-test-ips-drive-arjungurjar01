function longestSubstring(s) {


    // Implementation of longestSubstring function
  
        if (!s) return 0; // Return 0 for an empty string
    
        let left = 0;
        let maxSubstringLength = 0;
        const seen = new Set();
    
        for (let right = 0; right < s.length; right++) {
            const currentChar = s[right];
            while (seen.has(currentChar)) {
                // If current character is repeating, move the left pointer
                seen.delete(s[left]);
                left++;
            }
            // Add current character to the set
            seen.add(currentChar);
            // Update maxSubstringLength if needed
            maxSubstringLength = Math.max(maxSubstringLength, right - left + 1);
        }
    
        return maxSubstringLength;
   
    
}

module.exports = { longestSubstring };

