#include<iostream>
#include<utility> // header class for pair class

using namespace std;

int main(){
	pair<int, char> p1;
	p1 = make_pair(1,'a');
	cout << p1.first<< " " <<p1.second << endl;
	
	pair<int, char> p2(2,'b');
	cout << p2.first << " " << p2.second << endl;
	
	return 0;
}
