#include <iostream>
using namespace std;

int change_value(int &p) {
    p = 3;

    return 0;
}

int main() {
    int number = 5;
    cout << number << endl;

    change_value(number);
    cout << number << endl;

    return 0;
}