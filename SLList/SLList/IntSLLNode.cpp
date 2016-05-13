#include "IntSLLNode.h"


IntSLLNode::IntSLLNode(){
	next = 0;
}

IntSLLNode::IntSLLNode(int el,IntSLLNode *ptr){
	info = el;
	next = ptr;
}

IntSLLNode::~IntSLLNode(){
}
