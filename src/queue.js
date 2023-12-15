const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.firstElement = null;
    this.lastElement = null;
  }

  getUnderlyingList() {
    return this.firstElement;
  }

  enqueue(value) {
    const nodeElement = new ListNode(value);
    if (!this.firstElement) {
      this.firstElement = nodeElement;
      this.lastElement = nodeElement;
    }
    else {
      this.lastElement.next = nodeElement;
      this.lastElement = nodeElement;
    }
  }

  dequeue() {
    const currentElement = this.firstElement;
    this.firstElement = this.firstElement.next;
    return currentElement.value;
  }
}

module.exports = {
  Queue
};