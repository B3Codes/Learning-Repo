#include<iostream>
#include<vector>
#include<string>

using namespace std;

int main(){
	string str = "Hello! This is a string";
	cout<< "str: "+ str << endl;
	
	string str2(str);       // copying str to str2
	cout<< "str2: "+ str2 << endl;
	
	string str3(str, 2,4);   // copying str to str3 - starting from position 2 to next 4 char
	cout<< "str3: "+ str3 << endl;
	
	string str4 = str.substr(1,4);  // subsrting: storing subsrting of str in str4 - strating from pos 1 + next 4 char
	cout<< "substring: "<< str4 <<endl;
	
	
	if(str.compare(str2) == 0 ) {        // comparing two strings
	cout<< "Str" << " is equal to "<< "str2"<<endl;
	} else {
		cout<< str << " is not equal to "<< str2<<endl;
	}
	
	
	if(str.compare(str3) == 0 ) { // comparing two strings
	cout<< "Str" << " is equal to "<< "str3"<<endl;
	} else {
		cout<< "str" << " is not equal to "<< "str3"<<endl;
	}
	
	
return 0;
}
