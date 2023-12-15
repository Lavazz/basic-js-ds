const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootPoint = null;
  }

  root() {
    return this.rootPoint;
  }

  add(data) {
    this.rootPoint = insertValue(this.rootPoint, data);

    function insertValue(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return findData(this.rootPoint, data);

    function findData(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    }
  }

  find(data) {
   
    return findNode(this.rootPoint, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
   
    this.rootPoint = removeNode(this.rootPoint, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }

        node.data = maxLeft.data;
        node.left = removeNode(node.left, maxLeft.data);

        return node;

      }
    }

  }

  min(root = this.rootPoint) {
    if(root.left===null){
      return root.data
    }
    else{
      return this.min(root.left)
    }
  }

  max(root = this.rootPoint) {
    if(root.right===null){
      return root.data
    }
    else{
      return this.max(root.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};