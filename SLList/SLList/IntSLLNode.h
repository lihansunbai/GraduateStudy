#pragma once
class IntSLLNode
{
public:
	IntSLLNode();
	IntSLLNode(int el,IntSLLNode *ptr = 0);
	~IntSLLNode();
	int info;
	IntSLLNode *next;
};

