class Solution {
    public void reverseString(char[] s) {
        int i = 0;
        int j = s.length - 1;
        while (i < j) {
            swapInPlace(s, i, j);
            i++; j--;
        }
        
        /**
        Better Alternative:
        for (int i = 0; i < s.length / 2; i++) {
            int j = s.length - i - 1;
            swapInPlace(s, i, j);
        }
        **/
    }
    
    private void swapInPlace(char[] s, int i, int j) {
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
}

