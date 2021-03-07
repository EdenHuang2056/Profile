function twoSum(nums, target){
    for(i=0; i<nums.lenght; i++){
        for(j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                return('['+i+', '+j+']')
            }
        }
    }
}
result=twoSum([2, 11, 7, 15], 9)
console.log(result)