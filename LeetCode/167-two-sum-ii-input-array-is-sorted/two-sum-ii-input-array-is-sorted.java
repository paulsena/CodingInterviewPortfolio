class Solution {
    public int[] twoSum(int[] numbers, int target) {
        Map<Integer, Integer> numMap = new HashMap<Integer, Integer>();

        for (int i = 0; i < numbers.length; i++) {           
            int compliment = target - numbers[i];
            if (numMap.containsKey(compliment)) {
                return new int[]{numMap.get(compliment), i + 1};
            }

            numMap.put(numbers[i], i + 1);
        }

        return null;
    }
}