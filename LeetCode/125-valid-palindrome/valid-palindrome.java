class Solution {
    static boolean isPalindrome(String s) {
        s = s.toLowerCase();
        int i = 0;
        int j = s.length() - 1;

        while (i <= j) {
            char firstVal = s.charAt(i);
            char lastVal = s.charAt(j);
            if (!isAlphaNumeric(firstVal)) {
                i++;
                continue;
            }
            if (!isAlphaNumeric(lastVal)) {
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

    static private boolean isAlphaNumeric(char c) {
        if ((c >= 97 && c <= 122) || (c >= 48 && c <= 57)) {
            return true;
        }
        return false;
    }
}