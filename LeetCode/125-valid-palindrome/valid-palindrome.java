class Solution {
    static boolean isPalindrome(String s) {
        s = s.toLowerCase();
        int i = 0;
        int j = s.length() - 1;

        while (i <= j) {
            char firstVal = s.charAt(i);
            char lastVal = s.charAt(j);
            if (!Character.isLetterOrDigit(firstVal)) {
                i++;
                continue;
            }
            if (!Character.isLetterOrDigit(lastVal)) {
                j--;
                continue;
            }
            if (firstVal != lastVal) {
                return false;
            }
            i++; j--;
        }
        return true;
    }
}