
# ArrayReduceTransformation


The purpose of reduce is to take an array, apply a function (fn) to combine all its elements, and return a single result.



Initialize a Variable (res):

```bash
  let res = init;
```
-----------------------   

res starts with the value of init (in this case, 100).


Iterate Through the Array:
```bash
for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
}
```
The loop goes through each number in the array nums ([1, 2, 3, 4]).

At each step:
It calls the function fn (which is sum) with:

1.The current result (res).

2.The current number from the array (nums[i]).

3.The result of fn is stored back in res.

-----------------------------------------------
Return the Final Result:
```bash
return res;
```
After the loop finishes, the final value of res is returned.

---------------------------------
The function sum defines how we combine the numbers:
```bash
function sum(accum, curr) {
    return accum + curr;
}
```
It takes two numbers:

accum (the accumulated total so far).

curr (the current number from the array).

It adds them together and returns the result.

---------------------


Input:

reduce([1, 2, 3, 4], sum, 100);

Initial State:

res = 100


# Hi, I'm saalman! 👋


## 🚀 About Me
I'm a full stack developer from BD.


## Support

For support, leetcode https://leetcode.com/u/saalmanhossain/ or join our @CodeCadence864 YouTube channel.

