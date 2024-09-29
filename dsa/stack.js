class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek());  // 20
stack.pop();
console.log(stack.peek());  // 10
