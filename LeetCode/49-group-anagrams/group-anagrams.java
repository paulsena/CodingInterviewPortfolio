class Solution {
    static public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> groups  = new HashMap<>();

        for (String word : strs) {
            char[] wordArr = word.toCharArray();
            Arrays.sort(wordArr);
            String sortedWord = Arrays.toString(wordArr);
            List<String> group = groups.computeIfAbsent(sortedWord, k -> new ArrayList<>());
            group.add(word);
        }

        return new ArrayList<>(groups.values());
    }
}