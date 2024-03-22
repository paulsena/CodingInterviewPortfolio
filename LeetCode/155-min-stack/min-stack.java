class MinStack {
    ArrayList<Integer> stack;
    public MinStack() {
        stack = new ArrayList<>();
    }

    public void push(int val) {
        stack.add(val);
    }

    public void pop() {
        stack.removeLast();
    }

    public int top() {
        return stack.getLast();
    }

    public int getMin() {
        List<Integer> list = new ArrayList<>(stack);
        if (list.isEmpty()) {
            return -1;
        }
        list.sort(null);
        return list.getFirst();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */