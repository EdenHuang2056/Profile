function maxProduct(nums){
    var each = 0;
    var sum = [];
    for(i=0; i<num.length; i++){
        for(j=i+1; j<num.length; j++){
            each=nums[i]*nums[j];
            sum.push(each)
        }
    }
    console.log(Math.max.apply(null, sum))
}
maxProduct([5, 20, 2, 6]);
maxProduct([10, -20, 0, 3]);