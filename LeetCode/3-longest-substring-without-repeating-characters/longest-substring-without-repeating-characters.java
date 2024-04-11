class Solution {
    public int lengthOfLongestSubstring(String s) {

        Set<Character> seenChars = new HashSet<>();
        
        int longestCnt = 0;
        int left = 0, right = 0;

        while (right < s.length()) {
            if (!seenChars.contains(s.charAt(right))) {
                seenChars.add(s.charAt(right++));
                longestCnt = Math.max(longestCnt, seenChars.size());
            } else {
                seenChars.remove(s.charAt(left++));
            }
        }

        return longestCnt;
    }
}