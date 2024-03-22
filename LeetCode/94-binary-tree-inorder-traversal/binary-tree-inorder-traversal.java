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
    
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();
        inorderRecursion(root, result);
        return result;
    }

    private void inorderRecursion(TreeNode root, List<Integer> seen) {
        if (root == null) {
            return;
        }

        inorderRecursion(root.left, seen);

        seen.add(root.val);

        inorderRecursion(root.right, seen);
    }
}