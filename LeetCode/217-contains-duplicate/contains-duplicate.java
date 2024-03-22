class Solution {
    static public boolean containsDuplicate(int[] nums) {
        Set<Integer> seenMap = new HashSet<>(nums.length);
        for (int num : nums) {
            if (!seenMap.add(num)) {
                // Add on set failed b/c exists already
                return true;
            }
        }
        return false;
    }
}