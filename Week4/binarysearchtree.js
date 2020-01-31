class BSTNode{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    addNode(val, position = this.root){
        if(this.root == null){  //edge case - is tree empty
            this.root = new BSTNode(val);
        }
        else if(val < position.value){
            if(position.left == null){
                position.left = new BSTNode(val);
            }
            else{
                return this.addNode(val, position.left);
            }
        }
        else{ //val >= position.value
            if(position.right == null){
                position.right = new BSTNode(val);
            }
            else{
                return this.addNode(val, position.right);
            }
        }
        return;
    } 
    
    size(position = this.root){
        if(position == null){
            return 0;
        }
        return 1+this.size(position.left)+this.size(position.right);
    }   // return 1 plus left child plus right child
}

var tree = new BinarySearchTree();
tree.addNode(25);
tree.addNode(17);
tree.addNode(42);
tree.addNode(20);
console.log(tree.size())