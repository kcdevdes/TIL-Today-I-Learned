#include <iostream>
#include <string.h>

class MyString {
    char* sContent;
    int sLength;
    int sCapacity;

public:
    MyString(char c);
    MyString(const char* str);
    MyString(const MyString& str);
    ~MyString();

    int length() const;
    int capacity() const;
    void reserve(int size);

    void print() const;
    void println() const;

    MyString& assign(const MyString& str);
    MyString& assign(const char* str);

    char at(int i ) const;

    MyString& insert(int loc, const MyString& str);
    MyString& insert(int loc, const char* str);
    MyString& insert(int loc, char c);

    MyString& erase(int loc, int num);

    int find(int from, const MyString& str) const;
    int find(int from, const char* str) const;
    int find(int from, char c) const;

    int compare(const MyString& str) const;
};

MyString::MyString(char c) {
    sContent = new char[1];
    sContent[0] = c;
    sLength = 1;
    sCapacity = 1;
}

MyString::MyString(const char* str) {
    sLength = strlen(str);
    sCapacity = sLength;
    sContent = new char[sLength];

    for (int i = 0; i < sLength; i++) {
        sContent[i] = str[i];
    }
}

MyString::MyString(const MyString& str) {
    sLength = str.sLength;
    sCapacity = str.sLength;
    sContent = new char[sLength];

    for (int i = 0; i < sLength; i++) {
        sContent[i] = str.sContent[i];
    }
}

MyString::~MyString() {
    delete[] sContent;
}

int MyString::length() const {
    return sLength;
}

void MyString::print() const {
    for (int i = 0; i < sLength; i++) {
        std::cout << sContent[i];
    }
}

void MyString::println() const {
    for (int i = 0; i < sLength; i++) {
        std::cout << sContent[i];
    }
    std::cout << std::endl;
}

MyString& MyString::assign(const MyString& str) {
    if (str.sLength > sCapacity) {
        delete[] sContent;
        sContent = new char[str.sLength];
        sCapacity = str.sLength;
    }

    for (int i = 0; i < str.sLength; i++) {
        sContent[i] = str.sContent[i];
    }

    sLength = str.sLength;
    return *this;
}

MyString& MyString::assign(const char* str) {
    if (strlen(str) > sCapacity) {
        delete[] sContent;
        sContent = new char[sLength];
        sCapacity = strlen(str);
    }

    for (int i = 0; i < strlen(str); i++) {
        sContent[i] = str[i];
    }

    sLength = strlen(str);
    return *this;
}

int MyString::capacity() const {
    return sCapacity;
}

void MyString::reserve(int size) {
    if (size > sCapacity) {
        char* prevContent = sContent;
        sContent = new char[size];
        sCapacity = size;

        for (int i = 0; i < sLength; i++) {
            sContent[i] = prevContent[i];
        }

        delete[] prevContent;
    }
}

char MyString::at(int i) const {
    if (i >= sLength || i < 0) {
        return 0;
    } else {
        return sContent[i];
    }
}

MyString& MyString::insert(int loc, const MyString& str) {
    if (loc < 0 || loc > sLength) {
        return *this;
    } 

    if (sLength + str.sLength > sCapacity) {
        if (sCapacity * 2 > sLength + str.sLength) {
            sCapacity *= 2;
        } else {
            sCapacity = sLength + str.sLength;
        }

        char* prevContent = sContent;
        sContent = new char[sCapacity];

        int i;
        for (i = 0; i < loc; i++) {
            sContent[i] = prevContent[i];
        }

        for (int j = 0; j < str.sLength; j++) {
            sContent[i + j] = str.sContent[j];
        }

        for (; i < sLength; i++) {
            sContent[i + str.sLength] = prevContent[i];
        }

        delete[] prevContent;

        sLength = sLength + str.sLength;
        return *this;
    }

    for (int i = sLength - 1; i >= loc; i--) {
        sContent[i + str.sLength] = sContent[i];
    }

    for (int i = 0; i < str.sLength; i++) {
        sContent[loc + i] = str.sContent[i];
    }

    sLength = sLength + str.sLength;    
    return *this;
}

MyString& MyString::insert(int loc, const char* str) {
    MyString temp(str);
    return insert(loc, temp);
}

MyString& MyString::insert(int loc, char c) {
    MyString temp(c);
    return insert(loc, temp);
}

MyString& MyString::erase(int loc, int num) {
    if (num < 0 || loc < 0 || loc > sLength) {
        return *this;
    }

    for (int i = loc + num; i < sLength; i++) {
        sContent[i - num] = sContent[i];
    }

    sLength -= num;
    return *this;
}

int MyString::find(int from, const MyString& str) const {
    int i, j;
    
    if (str.sLength == 0) {
        return -1;
    }

    for (int i = from; i <= sLength - str.sLength; i++) {
        for (j = 0; j < str.sLength; j++) {
            if (sContent[i + j] != str.sContent[j]) {
                break;
            }
        }

        if (j == str.sLength) {
            return i;
        }      
    }

    return -1;
 }

 int MyString::find(int from, const char* str) const {
    MyString temp(str);
    return find(from, temp);
 }

 int MyString::find(int from, char c) const {
    MyString temp(c);
    return find(from, temp);
 }

 int MyString::compare(const MyString& str) const {
    int i;
    for (i = 0; i < sLength && i < str.sLength; i++) {
        if (sContent[i] != str.sContent[i]) {
            return sContent[i] - str.sContent[i];
        }
    }

    if (i == sLength && i == str.sLength) {
        return 0;
    } else if (i == sLength) {
        return -1;
    } else {
        return 1;
    }
 }

 int main() {
    MyString str1("Hello");
    MyString str2("World");

    str1.println();
    str2.println();

    std::cout << "str1 length:" << str1.compare(str2) << std::endl;
 }