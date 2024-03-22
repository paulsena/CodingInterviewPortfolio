class Solution {
    static public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        Set<List<Integer>> answer = new HashSet<>();

        for (int i = 0; i < nums.length -2; i++) {

            int j = i + 1;
            int k = nums.length -1;

            // Assumes sorted array
            while (j < k) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    // Add solution
                    answer.add(Arrays.asList(nums[i], nums[j], nums[k]));
                    j++;
                    k--;
                } else if (nums[i] + nums[j] + nums[k] < 0) {
                    // increase left side
                    j++;
                } else {
                    // decrement right side
                    k--;
                }
            }
        }

        return List.copyOf(answer);
    }
}