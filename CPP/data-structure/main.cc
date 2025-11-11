#include <iostream>

class Node {
  public:
    int data;
    Node *left;
    Node *right;
    Node(int d) {
      data = d;
      left = NULL;
      right = NULL;
    }
};

class Tree {
  private:
    Node *root;
  public:
    Tree(int data) {
      root = new Node(data);
    }

    void insert(int data) {
      Node *newNode = new Node(data);
      Node *cursor = root;

      while (cursor != NULL) {
        if (data < cursor->data) {
          if (cursor->left == NULL) {
            cursor->left = newNode;
            break;
          } else {
            cursor = cursor->left;
          }
        } else {
          if (cursor->right == NULL) {
            cursor->right = newNode;
            break;
          } else {
            cursor = cursor->right;
          }
        }
      }
    }
};

int main() {
  Tree tree;
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(13);
  tree.insert(17);
  tree.print();
  return 0;
}
