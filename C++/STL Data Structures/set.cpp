#include<iostream>
#include<set>   // header class for set class

using namespace std;

/* 
  - set only stores UNIQUE values - called keys of set
  - {1,2,3,4,5}  --> set
  - {1,2,2,3,4,5}  --> not set
  
  * - set is implemented in c++ -> using balance binary search tree
  - to find an element in a set -> T.C = O(logn)
  - all fuctions in set  -> T.C = O(logn)
  
*/

int main(){
	set<int> s;
	
	int arr[] = {1,2,2,3,4,5,5,6};
	
		cout <<"array: " ;
	for (int i =0;i<(sizeof(arr)/sizeof(int));i++) { // inserting elements in set
		s.insert(arr[i]);
		cout << arr[i] << " ";
	}
	
	cout <<endl<< "-----------------------------------------" <<endl<<endl;
	
	set<int> :: iterator ir;
	
	cout <<"set: ";
	for (ir = s.begin(); ir != s.end(); ir++){
		cout << *ir << " ";
	}
	
	cout <<endl<< "-----------------------------------------" <<endl<<endl;
	
	/*
	- searching for an element in set 
	- .find()  --> method is used
	- .find()  --> detrminents an iterator 
	- if set don't have  an element then iterator points to the next element to the last
	*/
	
	if(s.find(5) == s.end()){
		cout << "Element Not FOUND!" <<endl;
	} else {
		cout << "Element 5 is PRESENT in the set!" <<endl;
	}
	
	cout <<endl<< "-----------------------------------------" <<endl<<endl;
	
	if(s.find(8) == s.end()){
		cout << "Element 8 Not FOUND!" <<endl;
	} else {
		cout << "Element 8 is PRESENT in the set!" <<endl;
	}
	
	
	return 0;
}
