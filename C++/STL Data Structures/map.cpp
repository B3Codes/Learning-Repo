#include<iostream>
#include<map>   // header class for map
#include<unordered_map>    // header class for unordered_map

// using namespace std;
/* 
  - map help us to store an element along with its frequency
  - we can store how many time an element is present in an array
  - map has (key,value) pair
  - set only have -> key
  
  - map is based on binary search tree
  - all map operations takes O(logn) time
  
  - unordered_map -> is based on hashtable
  - unordered_map -> T.C = O(1) - in avg. case
                     T.C = O(n) - in worst case
                     
  - here in unordered_map -> order is not maintained

*/

int main(){
	int arr[] ={1,2,2,3,4,5,6,5};
	
	map<int,int> m;
	
	for (int i =0; i<(sizeof(arr)/sizeof(int));i++){
		m[arr[i]] = m[arr[i]] +1;
		/* 
		   - this is how this work:
		   arr[] ={1,2,2,3,4,5,6,5};
		   m[1] = 1
		   m[2] = 1
		   m[2] = m[2] + 1 = 2
		   m[3] = 1
		   m[4] = 1
		   m[5] = 1
		   m[6] = 1
		   m[5] = m[5] + 1 = 2
		   
		   => m = {1:1, 2:2, 3:1, 4:1, 5:2, 6:1}
		*/
	}
	
	map<int,int> :: iterator it;
	
	for(it = m.begin(); it!=m.end(); it++) {
		
		/*
		  - it -> points to a particular item of map i.e (key,value) pair
		  - (it -> first) --> prints the key of the map
		  - (it -> second) --> prints the value of the map
		*/
		
		cout << it->first << " : "<< it->second <<endl;
	}
	cout <<endl;
	
	m.erase(1);   // erase/remove an element from the map
	
	for (it = m.begin();it != m.end();it++){
		cout<< it->first << " : " << it->second << endl;
	}
	
	
	// unordered_map 
	
	cout<< endl<< " unordered_map " << endl;
	
	unordered_map <int,int> un_m;
	for (int i =0 ; i<(sizeof(arr)/sizeof(int));i++) {
		un_m[arr[i]] = un_m[arr[i]] + 1;
	}
	
	unodered_map<int, int> :: iterator it;
	
	for(it = un_m.begin(); it != un_m.end(); it++){
		cout << it->first << " : " << it->second << endl;
	}
	
	
	
	
	
	
	return 0;
}
