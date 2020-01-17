class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SLList{
    constructor(){
        this.head = null;
    }
    //all class methods go here
    addFront(val){
        var newNode = new Node(val);
        if(this.head == null){
            this.head = newNode;  //the position at this.head now holds the newNode object
            return this;
        }
        newNode.next = this.head; //the pointer for newNode now goes to the NODE located at this.head
        this.head = newNode;
        return this;
    }

    length(){
        var count = 0;
        var runner = this.head;  //the variable runner is now set to the same Node that exists at this.head position
        while(runner != null){
            count++;
            runner = runner.next;
        }
        return count;
    }

    display(){
        var listValues = "";
        var runner = this.head;
        while(runner != null){
            listValues = listValues+`${runner.value} -> `;
            runner = runner.next;
        }
        return listValues;
    }
}

var myList = new SLList();
console.log(myList);
myList.addFront(5);
myList.addFront(10);
myList.addFront(-3);
console.log(myList);
console.log(myList.length());
console.log(myList.display())