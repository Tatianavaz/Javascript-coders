
/**
 * A good example of avoiding functions with many parameters
 */

//u need to pass all the parameters that will be used in the function one by one
function badWay(a, b, c, d) {
    return a + b + c + d;
}
badWay(1,2,3,4)

//u dont need to enter the number of parameters that will be used in the function
function goodWay(...hits) {
    return hits.reduce((a, b) => a + b);
}
goodWay(1,2,3,4,5,6,7)
