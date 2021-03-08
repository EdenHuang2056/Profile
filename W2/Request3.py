def main():
    def maxProduct(nums):
        max = 0
        num = 0
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                num = nums[i]*nums[j]
                if i==0 and j==1:
                    max = num
                if num > max:
                    max = num
        print(max)


if __name__ == '__main__':
    main()