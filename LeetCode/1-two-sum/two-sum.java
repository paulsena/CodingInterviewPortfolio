class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {
            numMap.put(nums[i], i);
        }

        for (int i = 0; i < nums.length; i++) {
            int compliment = target - nums[i];
            if (numMap.containsKey(compliment) && (i != numMap.get(compliment))) {
                return new int[]{i, numMap.get(compliment)};
            }
        }

        return null;
    }
}
