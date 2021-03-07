def main():
    def twoSum(nums, target):
        for i in range(len(nums)):
            a = nums[i]
            b = target - a
            for j in range(i+1, len(nums)):
               if b == nums[j]:
                  return (i, j)
    result=twoSum([2, 11, 7, 15], 9)
    print(result)


if __name__ == '__main__':
    main()