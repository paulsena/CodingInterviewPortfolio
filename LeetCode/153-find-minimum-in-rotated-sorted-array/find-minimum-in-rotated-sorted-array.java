class Solution {
    static public int findMin(int[] nums) {

        if (nums.length > 2) {
            int mid = nums.length / 2;
            return Math.min(
                findMin(Arrays.copyOfRange(nums, 0, mid)),
                findMin(Arrays.copyOfRange(nums, mid, nums.length))
                );
        } else if (nums.length == 2) {
            return Math.min(nums[0], nums[1]);
        }

        return nums[0];

    }
}