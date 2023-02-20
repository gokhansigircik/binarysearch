/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     *
     * @type {BSTNode|null}
     */
    this.left = null;
    /** @type {BSTNode|null} */
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     *
     * @type {BSTNode|null}
     */
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    if(this.root = null){
      return true;
    }else return false;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if(this.isEmpty()){
      return null
    }
    while(current.left){
      current = current.left
    }
    return current.data
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    if(current === null){
      return null
    }
    if(current.left === null){
      return current.data
    }
    return this.minRecursive(current.left)
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    if(this.isEmpty()){
      return null
    }
    while(current.right){
       current = current.right
    }
    return current.right
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    if(current === null){
      return null
  }
  if(current.right === null){
      return current.data
  }
  return this.maxRecursive(current.right)
}


  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }

// *****************WEDNESDAY*************************************
 /**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
 contains(searchVal) {
  if (this.isEmpty()) return false;

  let runner = this.root;
  while (runner) {
    if ( runner.data == searchVal){
      return true;
    }
    if (runner.data > searchVal) {
      runner = runner.left;
      // console.log(runner.data)
    } else if (runner.data < searchVal) {
      runner = runner.right;
      // console.log(runner.data)
    }
  }
  return false;
}

 /**
  * Determines if this tree contains the given searchVal.
  * - Time: O(?).
  * - Space: O(?).
  * @param {number} searchVal The number to search for in the node's data.
  * @returns {boolean} Indicates if the searchVal was found.
  */
 containsRecursive(searchVal, current = this.root) {
  if (this.isEmpty()) return false;
  if (current === null) return false;
  if (current.data === searchVal){
    return true;
  }
  if (current.data > searchVal) {
    return this.containsRecursive(searchVal, current.left);
  } else if (current.data < searchVal) {
    return this.containsRecursive(searchVal, current.right);
  }
}
 /**
  * Calculates the range (max - min) from the given startNode.
  * - Time: O(?).
  * - Space: O(?).
  * @param {Node} startNode The node to start from to calculate the range.
  * @returns {number|null} The range of this tree or a sub tree depending on if the
  *    startNode is the root or not.
  */
 range(startNode = this.root) {
  let max = this.max();
  let min = this.min();
  if (this.isEmpty()) return false;
  return (max - min);

}

///! THURSDAY //////////////////

/**
 * Inserts a new node with the given newVal in the right place to preserver
 * the order of this tree.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} newVal The data to be added to a new node.
 * @returns {BinarySearchTree} This tree.
 */
insert(newVal) {
  if(this.isEmpty()){
      this.root = new BSTNode(newVal);
      return this
  }
  let current = this.root
  while(current){
      if(current.data < newVal){
          if(current.right){
              current = current.right
          }else{
              current.right = new BSTNode(newVal);
              return this
          }
      }
      else if(current.data >= newVal){
          if(current.left){
              current = current.left
          }else{
              current.left = new BSTNode(newVal);
              return this
          }
      }
  }
  return this
}

// **********second solution***************
// insert(newVal) {
//   const newNode = new BSTNode(newVal);
  
//   // checks if the tree is empty
//   // if so, insert the node as the root
//   if (this.isEmpty()){
//       this.root = newNode;
//       return this;
//   }

//   // declare the runner
//   let runner = this.root;
//   while (runner) {
//       if (newVal >= runner.data) {
//           // if there is nothing to the right
//           // set the right as our node
//           if(!runner.right){
//               runner.right = newNode;
//               return this;
//           }
//           // otherwise, go to next node
//           runner = runner.right;
//       }
//       else {
//           // set the left as our node if nothing to the left
//           if(!runner.left){
//               runner.left = newNode;
//               return this;
//           }
//           // otherwise, go to next node
//           runner = runner.left;
//       }
//   }
// }

/**
 * Inserts a new node with the given newVal in the right place to preserver
 * the order of this tree.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} newVal The data to be added to a new node.
 * @param {Node} curr The node that is currently accessed from the tree as
 *    the tree is being traversed.
 * @returns {BinarySearchTree} This tree.
 */
insertRecursive(newVal, curr = this.root) {
  //If tree is empty, node with value is inserted at the root.
  if (this.isEmpty()) {
    this.root = new BSTNode(newVal);
    return this;
  }
  //Checks if value is lower or equal than current node's value.
  if (newVal <= curr.data) {
    //If it is, and its left has no data, node is created and inserted.
    if (!curr.left) {
      curr.left = new BSTNode(newVal);
      return this;
    }
    //If there is something to its left, recursively call
    //itself by going to the left and re-check.
    return this.insertRecursive(newVal, curr.left);
  }
  //Value is higher than current node's value.
  else {
    //If its right has no data, node is created and inserted.
    if (!curr.right) {
      curr.right = new BSTNode(newVal);
      return this;
    }
    //If there is something to its right, recursively call
    //itself by going to the right and re-check.
    return this.insertRecursive(newVal, curr.right);
  }
}
}
// ************second solution  
// insertRecursive(newVal, curr = this.root) {
//   if(this.isEmpty()){
//       this.root = new BSTNode(newVal);
//       return this    
//   }
//   if(curr.data < newVal){
//       if(curr.right){
//           return this.insertRecursive(newVal,curr.right)
//       }
//       curr.right = new BSTNode(newVal)
//       return(this)
//   }else{
//       if(curr.left){
//           return this.insertRecursive(newVal,curr.left)
//       }
//       curr.left = new BSTNode(newVal)
//       return(this)
//   }
// }
// }

///! FRIDAY ////////////

  /* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */

/**
 * DFS Preorder: (CurrNode, Left, Right)
 * Converts this BST into an array following Depth First Search preorder.
 * Example on the fullTree var:
 * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
// Pre-Order Traversal
toArrPreorder(node = this.root, vals = []) {
    //Whenever traversal reaches the end it goes back up
    if (node === null) return;

    //Always pushes the current node first before traversing
    vals.push(node.data);
    //Traverses to left side first then pushes that node
    this.toArrPreorder(node.left, vals);
    //As it comes back up it checks if there are nodes on the right side to fill up
    this.toArrPreorder(node.right, vals);

    return vals;
  }

  /* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */

/**
 /**
  * DFS Inorder: (Left, CurrNode, Right)
  * Converts this BST into an array following Depth First Search inorder.
  * See debugger call stack to help understand the recursion.
  * Example on the fullTree var:
  * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
  * @param {Node} node The current node during the traversal of this tree.
  * @param {Array<number>} vals The data that has been visited so far.
  * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
//  In-Order Traversal
toArrInorder(node = this.root, vals = []) {
     //Whenever traversal reaches the end it goes back up
    if (node === null) return;

     //Traverses all the way to bottom left first
    this.toArrInorder(node.left, vals);
     //Pushes current node after going all the way to the bottom left
    vals.push(node.data);
     //Checks if there are any following nodes on right before going back up
    this.toArrInorder(node.right, vals);

    return vals;
  }

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/

/**
/**
 * DFS Postorder (Left, Right, CurrNode)
 * Converts this BST into an array following Depth First Search postorder.
 * Example on the fullTree var:
 * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
// Post-Order Traversal
toArrPostorder(node = this.root, vals = []) {
    //Whenever traversal reaches the end it goes back up
    if (node === null) return;
    
    //Goes all the way to the bottom left first
    this.toArrPostorder(node.left, vals);
    //Then checks if that left has right nodes attached
    this.toArrPostorder(node.right, vals);
    //When it reaches all the way to the bottom, pushes that node and goes back up
    vals.push(node.data);

    return vals;
  }

  //! MONDAY

/**
 * BFS order: horizontal rows top-down left-to-right.
 * Converts this BST into an array following Breadth First Search order.
 * Example on the fullTree var:
 * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
 * @param {Node} current The current node during the traversal of this tree.
 * @returns {Array<number>} The data of all nodes in BFS order.
 */
toArrLevelorder(current = this.root) {
  if (this.isEmpty()) return;
  //Sets a queue that will work as First In First Out.
  const order = [current];
  //Keeps track of values inserted as the queue is shifted.
  const vals = [];

  //Loop that keeps going while the queue isn't empty.
  while (order.length > 0) {
    //Sets current to whatever's been shifted from the start the queue.
    let current = order.shift();
    //Pushes current's data to vals.
    vals.push(current.data);
    //Checks if current has nodes to the left or right,
    //then repopulates the queue
    if (current.left) order.push(current.left);
    if (current.right) order.push(current.right);
  }

  return vals;
}

/**
 * Recursively counts the total number of nodes in this tree.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} node The current node during the traversal of this tree.
 * @returns {number} The total number of nodes.
 */
size(node = this.root) {
  if(node === null) return 0;

  //Calls itself recursively for every single instance of a node found,
  //Then adds 1 to the total number for every node found in total.
  return this.size(node.left) + this.size(node.right) + 1;
}

/**
 * Calculates the height of the tree which is based on how many nodes from
 * top to bottom (whichever side is taller).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} node The current node during traversal of this tree.
 * @returns {number} The height of the tree.
 */
height(node = this.root) {
  if(node === null) return 0;

  //Calls itself recursively for every single instance of a node found,
  //Then adds 1 coming up back when it compares which instance called
  //itself recursively the most times.
  return Math.max(this.height(node.left), this.height(node.right)) +1;
}

/**
 * Determines if this tree is a full tree. A full tree is a tree where every
 * node has both a left and a right except for the leaf nodes (last nodes)
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} node The current node during traversal of this tree.
 * @returns {boolean} Indicates if this tree is full.
 */
isFull(node = this.root) {
  //Checks the maximum allowed size for current height against
  //current size of tree. If they're the same, returns true.
  return Math.pow(2, this.height())-1 === this.size();
}


  const emptyTree = new BinarySearchTree();
  const oneNodeTree = new BinarySearchTree();
  oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// console.log(twoLevelTree.root.min());

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
// threeLevelTree.root.right.left = new BSTNode(13);
// console.log(threeLevelTree.minRecursive());
// console.log(threeLevelTree.max());
// console.log(threeLevelTree.maxRecursive());

// console.log(threeLevelTree.contains(15))
// console.log(threeLevelTree.contains(42))
// console.log(threeLevelTree.range());

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree
  .insert(25)
  .insert(15)
  .insert(10)
  .insert(22)
  .insert(4)
  .insert(12)
  .insert(18)
  .insert(24)
  .insert(50)
  .insert(35)
  .insert(70)
  .insert(31)
  .insert(44)
  .insert(66)
  .insert(90);
  console.log(fullTree.insert(44));

