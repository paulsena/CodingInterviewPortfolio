class Solution {
    public boolean isAnagram(String s, String t) {
        char[] word1 = s.toLowerCase().toCharArray();
        char[] word2 = t.toLowerCase().toCharArray();

        Arrays.sort(word1);
        Arrays.sort(word2);

        return Arrays.equals(word1, word2);
    }
}