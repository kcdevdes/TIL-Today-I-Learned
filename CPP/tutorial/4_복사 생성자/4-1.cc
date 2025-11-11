#include <iostream>
#include <cstring>
using namespace std;

class String {
    char* str;
    int len;

    public:
    String(char c, int n);
    String(const char *s);
    String(const String &s);
    ~String();

    void Add(const String &s);
    void Copy(const String &s);
    void Print();

    int GetLength();
};

String::String(char c, int n) {
    str = new char[n + 1];

    for (int i = 0; i < n; i++) str[i] = c;
    str[n] = '\0';
}

String::String(const char *s) {
    len = strlen(s);
    str = new char[len + 1];
    
    for (int i = 0; i < len; i++) str[i] = s[i];
    str[len] = '\0';
}

String::String(const String &s) {
    len = s.len;
    str = new char[len + 1];

    for (int i = 0; i < len; i++) str[i] = s.str[i];
    str[len] = '\0';
}

void String::Add(const String &s) {
    len += s.len;
    char * new_str = new char[len + 1];

    for (int i = 0; i < len; i++) {
        if (i < len - s.len) {
            new_str[i] = str[i];
        } else {
            new_str[i] = s.str[i - (len - s.len)];
        }
    }
    new_str[len] = '\0';
    strcpy(str, new_str);

    delete[] new_str;
}

void String::Copy(const String& s) {
    len = s.len;
    str = new char[len + 1];

    for (int i = 0; i < len; i++) {
        str[i] = s.str[i];
    }
    str[len] = '\0';
}

void String::Print() {
    cout << str << endl;
}

int String::GetLength() {
    return len;
}

String::~String() {
    if (str) {
        delete[] str;
    }

    len = 0;
}

int main() {
    String str1('A', 4);
    str1.Print();

    String str2("ABCD");
    str2.Print();

    String str3(str2);
    str3.Print();

    str3.Add(str2);
    str3.Print();

    String str4('A', 1);
    str4.Copy(str3);
    str4.Print();

    return 0;
}