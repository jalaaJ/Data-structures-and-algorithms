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

function m_n_reversals(head, m, n) {

    let current_position = 1;
    let current_node = head;
    let node_before_reversed = head;
    while (current_position < m) {
        node_before_reversed = current_node;
        current_node = current_node.next;
        current_position++;
    }
    let new_list = null;
    let reversed_part_tail = current_node;
    while (current_position >= m && current_position <= n) {
        const next_node = current_node.next;
        current_node.next = new_list;
        new_list = current_node;
        current_node = next_node;
        current_position++;
    }
    node_before_reversed.next = new_list;
    reversed_part_tail.next = current_node;
    if (m > 1) return head;
    else return new_list;
}

function printNode(head) {
    while(head) {
        console.log(head);
        head = head.next;
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.printList();
const reversed = m_n_reversals(list.head, 2, 4);
console.log("------------------------");
printNode(reversed);
