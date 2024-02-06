class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
function reversedLinkedList(head) {

    let reversed = new LinkedList(null);
    let current_node = head;
    while(current_node) {
        
        let next_node = current_node.next;
        current_node.next = reversed.head;
        reversed.head = current_node;
        current_node = next_node;
    }
    return reversed;
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.printList();
const reversed = reversedLinkedList(list.head);
console.log("------------------------");
reversed.printList();

