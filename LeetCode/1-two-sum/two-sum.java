class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> complMap = new HashMap<>(nums.length);

        for (int i = 0; i < nums.length; i++) {
            int compl = target - nums[i];
            Integer complIdx = complMap.get(compl);
            
            if (complIdx != null) {
                return new int[] {i, complIdx};
            }
            
            complMap.put(nums[i], i);
        }
 
        return new int[0];
    }
}


/**
[2,7,11,15]
    Comp 7 
    
 */