const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  pop() {
    if (!this.head) {
      return -1;
    }
    const removeNode = this.head;
    this.head = this.head.next;
    
    if (!this.head) {
      this.tail = null;
    }
    
    this.size--;
    return removeNode.item;
  }

  getSize() {
    return this.size;
  }

  empty() {
    return this.size === 0 ? 1 : 0;
  }

  front() {
    return this.head ? this.head.item : -1;
  }

  back() {
    return this.tail ? this.tail.item : -1;
  }
}
const queue = new Queue();
const commands = input.slice(1);
const output = [];

commands.forEach(line => {
  const commandLine = line.trim().split(' '); 
  const cmd = commandLine[0];

  switch (cmd) {
    case 'push':
      queue.push(parseInt(commandLine[1]));
      break;
    case 'pop':
      output.push(queue.pop());
      break;
    case 'size':
      output.push(queue.getSize());
      break;
    case 'empty':
      output.push(queue.empty());
      break;
    case 'front':
      output.push(queue.front());
      break;
    case 'back':
      output.push(queue.back());
      break;
  }
});

console.log(output.join('\n'));