/*************************************************************************
> File Name: thp.cpp
> Author: Lihansunbai
> Mail: lihansunbai@163.com
> Created Time: 2015年04月07日 星期二 22时41分30秒
************************************************************************/

#include <iostream>
#include <math.h>
#include <algorithm>
#include <vector>
#include <time.h>
#include <fstream>
#include <string>

using namespace std;

//length and width are the argument of grid
const static int length = 100;
const static int width = 100;

//point is the center to proccess
const static int point = 10;

//declare function sort
int dsort();

//here is the background grid unit.
//when it actually proccess we use is as a double dimeonsions array.
struct grid{
    int x;
    int y;
    int value;
};

//here is the center
struct center{
    int x;
    int y;
    int num;
};

//here is distance
struct dist{
    double dist;
    center cen;
};

//initialize the argument
grid background[length][width];
center centers[point];
vector<dist> dis;

//fill random number in centers
void centerInitial(){
    srand((unsigned)time(NULL));

    for(int i = 0;i<point;i++){
        centers[i].x = rand()%(width+1);
        centers[i].y = rand()%(length+1);
        centers[i].num = i;
    }

}

//override compare function to suit sort function
bool compare(dist dis1,dist dis2){
    return dis1.dist < dis2.dist;
}

//distance of grid unit to centers
void distance(){
    //first initialize center points
    centerInitial();

    //calculate distance
    for(int i = 0;i<length;i++){
        for(int j = 0;j<width;j++){
            for(int k = 0;k < point;k++){
                //if is center points do not calculate distance.
                //and make it value equals 0.
                if(i != centers[k].y && j != centers[k].x){
                    dist temp;
                    temp.cen = centers[k];
                    temp.dist = sqrt((centers[k].x - j)*(centers[k].x - j)
                                     +(centers[k].y - i)*(centers[k].y - i));
                    dis.push_back(temp);
                }else{
                    background[j][i].value = -1;
                }
            }
            background[j][i].value = dsort();
        }
    }
    //return 0;
}

//sort of distance
//it will return a int represent center
int dsort(){
    sort(dis.begin(),dis.end(),compare);
    return dis[0].cen.num;
}

//output files
bool fileOutput(){
    string fileName = "/home/lee/CODE/CPP/THP/THPoutput.txt";

    fstream file(fileName.c_str());
    if(!file.is_open()){
        cout << "Cant open output file!" << endl;
        return false;
    }

    //output format taxt
    for(int i = 0;i<length;i++){
        for(int j = 0;j<width;j++){
//               if(i != centers[k].y && j != centers[k].x){
                    file << background[j][i].value << "\t";
//                }else{
//                   file << "-1" << "\t";
//                }
        }
        file << endl;
    }
    return true;

}

int main(int argc,char** argv){
    distance();
    cout << "End of calculate THPolygon!" << endl;
    fileOutput();
    cout << "End of data print!" << endl;
    return 0;
}
