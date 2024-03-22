class Solution {
    public String reverseWords(String s) {
        // Split into array of strings
        // Trim extra spaces
        // Reverse array (loop backwards)
        // Re-assemble into one string
        // Possibly use streams to simplify
        
        return reverseUsingLoop(s);
    }
    
    /**
     * Reverse A Sentence Using Stream
     **/
    private String reverseUsingStreams(String s) {
        List<String> words = Arrays.asList(s.split(" "));
        Collections.reverse(words);
        return words.stream().reduce((a, b) -> a.trim() + " " + b.trim()).get().trim();
    }
    
    /**
     * Reverse A Sentence Using A For Loop
     **/
    private String reverseUsingLoop(String s) {
        List<String> words = Arrays.asList(s.split(" "));
        
        StringBuilder result = new StringBuilder();
        for (int i = words.size() - 1; i >= 0; i--) {
            if (!words.get(i).isBlank()) {
                result.append(words.get(i).trim()).append(" ");
            }
        }
        
        return result.toString().trim();
    }
}