class Solution {
    static public int maxProfit(int[] prices) {
        if (prices.length == 0) return 0;

        int profit = 0;
        int profitEval = 0;
        int lowestPrice = prices[0];

        for (int i = 1; i < prices.length; i++) {
            if (prices[i] < lowestPrice) {
                lowestPrice = prices[i];
            } else {
                profitEval = prices[i] - lowestPrice;
                profit = Math.max(profitEval, profit);
            }            
        }

        return profit;
    }
}