/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    long lastSeenVal = Long.MIN_VALUE;

    public boolean isValidBST(TreeNode node) {
        //Base case
        if (node == null) {
            return true;
        }
        
        boolean left = isValidBST(node.left);

        if (lastSeenVal >= node.val) {
            return false;
        } else {
            this.lastSeenVal = node.val;
        }

        boolean right = isValidBST(node.right);

        return left && right;
    }
}