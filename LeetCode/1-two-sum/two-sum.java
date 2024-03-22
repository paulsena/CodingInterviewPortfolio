import java.util.Arrays;

class Solution {
    public int[] twoSum(int[] nums, int target) {

        Map<Integer,Integer> numMap = new HashMap(nums.length);
        
        for (int i = 0; i < nums.length; i++) {
            int compliment = target - nums[i];

            if (numMap.containsKey(compliment) && numMap.get(compliment) != i) {
                return new int[]{i, numMap.get(compliment)};
            }

            numMap.put(nums[i], i);

        }
        return null;
    }
}