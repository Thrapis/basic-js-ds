const { NotImplementedError } = require('../lib/errors');
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
    this.queueHeadNode = null;
  }

  getUnderlyingList() {
    return this.queueHeadNode;
  }

  enqueue(value) {
    const newNode = { ...new ListNode(value) };

    if (this.queueHeadNode === null) {
      this.queueHeadNode = newNode;
      return;
    }

    let focusNode = this.queueHeadNode;
    while (focusNode.next !== null) {
      focusNode = focusNode.next;
    }

    focusNode.next = newNode;
  }

  dequeue() {
    const result = this.queueHeadNode;

    if (result === null) return undefined;

    this.queueHeadNode = this.queueHeadNode.next;
    return result.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log();

module.exports = {
  Queue,
};
