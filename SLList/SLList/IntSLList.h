#pragma once
#include <iostream>
#include "IntSLLNode.h"

class IntSLList
{
public:
	IntSLList();
	~IntSLList();

	int isEmpty();
	void addToHead(int el);
	void addToTail(int el);
	int deleteFromHead();
	int deleteFromTail();
	void deleteNode(int el);
	bool isInList(int el) const;
	void showList();

private:
	IntSLLNode *head,*tail;
};

