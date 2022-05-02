const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    let current = this.rootNode
    if (!this.rootNode) {
      this.rootNode = new Node(data)
    } else {
      while (current) {
        if (data > current.data) {
          if (!current.right) {
            current.right = new Node(data)
            return
          }
          current = current.right
        } else {
          if (!current.left) {
            current.left = new Node(data)
            return
          }
          current = current.left
        }
      }
    }
  }

  has(data) {
    let current = this.rootNode

    while (current) {
      if (data === current.data) {
        return true
      } else if (data > current.data) {
        if (!current.right) return false
        current = current.right
      } else {
        if (!current.left) return false
        current = current.left
      }
    }
    return false
  }

  find(data) {
    let current = this.rootNode

    while (current) {
      if (data === current.data) {
        return current
      } else if (data > current.data) {
        if (!current.right) return null
        current = current.right
      } else {
        if (!current.left) return null
        current = current.left
      }
    }
    return null
  }

  remove(data) {
    if (!this.rootNode) return null
    this.rootNode = deleteNode(this.rootNode, data)
  }

  min() {
    let current = this.rootNode
    while (current.left) {
      current = current.left
    }
    return current.data
  }

  max() {
    let current = this.rootNode
    while (current.right) {
      current = current.right
    }
    return current.data
  }
}

function deleteNode(curr, value) {
  if (curr.data === value) {
    if (!curr.left && !curr.right) {
      return null
    } else if (!curr.left) {
      return curr.right
    } else if (!curr.right) {
      return curr.left
    } else {
      let rightChild = curr.right

      while (rightChild.left) {
        rightChild = rightChild.left
      }
      curr.data = rightChild.data
      curr.right = deleteNode(curr.right, rightChild.data)
      return curr
    }
  }

  if (value < curr.data) {
    if (curr.left === null) {
      return curr
    }
    curr.left = deleteNode(curr.left, value)
    return curr
  }

  if (value > curr.data) {
    if (curr.right === null) {
      return curr
    }
    curr.right = deleteNode(curr.right, value)
    return curr
  }
}

module.exports = {
  BinarySearchTree,
}
