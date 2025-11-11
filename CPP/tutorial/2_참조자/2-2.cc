#include <iostream>
using namespace std;

int main() {
    int a = 3;
    int& a_a = a;

    a_a = 5;
    cout << "a: " << a << endl;
    cout << "a_a: " << a_a << endl;

    return 0;
}