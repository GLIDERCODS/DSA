class Stack {
    constructor(){
        this.stack = []
    }

    push(string){
        for (let i = 0; i < string.length; i++) {
            if(string[i]=='(' || string[i]=='{' || string[i]=='['){
                this.stack.push(string[i])
                continue;
            }
            let check;
            switch(string[i]){
                case ')':
                    check = this.stack.pop();
                    if(check !== '(') {
                        return false;
                    }
                    break;
                case '}':
                    check = this.stack.pop();
                    if(check !== '{') {
                        return false;
                    }
                    break;
                case ']':
                    check = this.stack.pop();
                    if(check !== '[') {
                        return false;
                    }
                    break;
                default:
                    break;
            }
        }
        // Check if there are any unclosed brackets left in the stack
        return this.stack.length === 0;
    }
}

const stack1 = new Stack();
console.log(stack1.push('({[]})')); // true
console.log(stack1.push('({[]))')); // false
console.log(stack1.push('({[{}[)}]]))'))

