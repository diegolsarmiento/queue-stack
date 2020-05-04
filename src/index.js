// Queues
class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        // Add first record
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        let last = this.data.length - 1;
        return this.data[last];
    }
}

// Stacks
class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop(){
        return this.data.pop();
    }
}


class StackBuild {
    constructor(){
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record){
        this.first.push(record);
    }

    remove(){
        while(this.first.peek()){
            this.second.push(this.first.pop());
        };

        const record = this.second.pop();

        while(this.second.push()){
            this.first.push(this.second.pop());
        }
        return record;
    }

    peek() {
        while(this.first.peek()){
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

         while(this.second.peek()){
            this.first.push(this.second.pop());
         }

         return record;
    }
}

// Compare
function wave(sourceOne, sourceTwo){
    const q = new Queue();

    while(sourceOne.peek() || sourceTwo.peek()){
        if(sourceOne.peek()){
            q.add(sourceOne.remove());
        }
        if(sourceTwo.peek()){
            q.add(sourceTwo.remove());
        }
    }
    return q;
}