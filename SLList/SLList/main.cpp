#include <iostream>
#include "IntSLList.h"
#include "IntSLLNode.h"

int main(int argc,char** atgv){
	IntSLList list;
	list.addToHead(1);
	for(int i = 2; i < 20;i++){
		list.addToTail(i);
	}
	list.showList();
	std::cout << std::endl;

	list.deleteFromHead();
	list.showList();
	std::cout << std::endl;

	list.deleteFromTail();
	list.showList();
	std::cout << std::endl;

	list.deleteNode(13);
	list.showList();
	std::cout << std::endl;

	return 0;
}