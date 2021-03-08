 function twoSum(nums, target) {
            for (var i = 0; i < nums.length; i++) {
                for (var j = 0; j < nums.length; j++) {
                    if (nums[i] + nums[j] == target) {
                        return ('[' + i + ',' + j + ']')
                    };
                };
            }
        }
        result = twoSum([2, 11, 7, 15], 9)
        console.log(result)
