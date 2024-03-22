class Solution {
    static Map<Character, Character> complimentMap = Map.of(
        '(', ')',
        '[', ']',
        '{', '}');

    public boolean isValid(String input) {
        
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < input.length(); i++) {
            char testChar = input.charAt(i);

            // Add to the stack closing char when we see opening
            if (complimentMap.containsKey(testChar)) {
                stack.push(complimentMap.get(testChar));
            } else {
                // Closing char. Check if compliment exists on the stack
                if (stack.empty() || !stack.pop().equals(testChar)) {
                    // No Match!
                    return false;
                }
            }
        }

        return stack.empty();
    }
}