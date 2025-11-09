const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }

    const attachNode = (nodeToAttach, branchNode) => {
      if (branchNode.data < nodeToAttach.data) {
        if (branchNode.left === null) {
          branchNode.left = nodeToAttach;
        } else {
          attachNode(nodeToAttach, branchNode.left);
        }
      } else {
        if (branchNode.right === null) {
          branchNode.right = nodeToAttach;
        } else {
          attachNode(nodeToAttach, branchNode.right);
        }
      }
    };

    attachNode(newNode, this.rootNode);
  }

  find(data) {
    if (this.rootNode === null) return null;

    const findNode = (dataToFind, branchNode) => {
      if (branchNode.data === dataToFind) return branchNode;

      if (branchNode.data < dataToFind) {
        if (branchNode.left === null) return null;
        findNode(dataToFind, branchNode.left);
      } else {
        if (branchNode.right === null) return null;
        findNode(dataToFind, branchNode.right);
      }
    };

    return findNode(data);
  }

  has(data) {
    return find(data) !== null;
  }

  remove(data) {
    if (this.rootNode === null) return;

    const deleteNode = (dataToDelete, branchNode, branchNodeParent) => {
      if (branchNode.data === dataToDelete) {
        if (branchNodeParent === null) {
          this.rootNode = null;
          return;
        } else if (branchNodeParent.left === branchNode) {
          branchNodeParent.left = null;
        } else {
          branchNodeParent.right = null;
        }
      }

      if (branchNode.data < dataToDelete) {
        if (branchNode.left === null) return;
        findNode(dataToDelete, branchNode.left, branchNode);
      } else {
        if (branchNode.right === null) return;
        findNode(dataToDelete, branchNode.right, branchNode);
      }
    };

    deleteNode(data, this.rootNode, null);
  }

  min() {
    if (this.rootNode === null) return null;

    let focusNode = this.rootNode;
    while (focusNode.left) {
      focusNode = focusNode.left;
    }

    return focusNode.data;
  }

  max() {
    if (this.rootNode === null) return null;

    let focusNode = this.rootNode;
    while (focusNode.right) {
      focusNode = focusNode.right;
    }

    return focusNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
