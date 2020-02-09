/*
Bill Boysen
boysen_a08b.js
INFO_2124_WW
Thoendel
2/9/2020
*/

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
//The math utility object is declared using object literal syntax
const MathUtility = {
//The get area of circle function is declared    
    getAreaOfCircle : function (r) {
/*Declares variable 'a', then uses the Math Pi and Power functions to 
set 'a' to the area of circle 'r' */
        let a = Math.PI * Math.pow(r, 2);
//Returns 'a' to be used in the string literal
        return a;
    },
//The get area of square function is declared
    getAreaOfSquare : function (s) {
/*Declares variable 'a', then uses the Math Power function to set 'a'
equal to the area of a square where one side is equal to 's' */
        let a = Math.pow(s, 2);
//Returns 'a' to be used in the string literal
        return a;        
    },
//The get area of triangle is declared
    getAreaOfTriangle : function (b, h) {
/* Declares variable 'a', then multiplies 'b' times 'h' and divides the
result by 2 to find the area of a triangle with a base of 'b' and height
of 'h', then sets the result to 'a' */  
        let a = (b * h) / 2;
// Returns 'a' to be used in the string literal
        return a;

    }
};


/* AND THIS LINE */

//Test code
const outMsg = 
`
The area of a circle that is has a radius of 5 units is ${MathUtility.getAreaOfCircle(5)} units.
The area of a square whose side measures 13 units is ${MathUtility.getAreaOfSquare(13)} units.
The area of a triangle with a base of 3 units and height of 2 units is ${MathUtility.getAreaOfTriangle(3, 2)} units.

`
console.log(outMsg);