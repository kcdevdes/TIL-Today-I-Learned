#include <ctime>   
#include <iostream>  
  
  
using namespace std;  
  
int main()  
{  
  
    time_t now = time(0); // get current dat/time with respect to system  
  
    char* dt = ctime(&now); // convert it into string  
  
    cout << "==> " << dt ; // print local date and time  
  
    return 0;
}  
