
function getMean(nums) {
    let sum = 0
    nums.forEach((num) => {
        sum += Number(num)
    
})
	let mean = sum/(nums.length)
    return mean
}

function getMedian(nums) {
    let orderedNums = nums.sort((a,b) => a - b)
    if (nums.length % 2 == 0) {
        let median = (nums[nums.length/2] + nums[(nums.length/2) - 1])/2
        return median
    } else {
        let median = nums[(nums.length-1)/2]
        return median
    }
}

function getMode(nums) {
    let count = new Map()
    nums.forEach((num) => {
        if (!count.get(num)) {
            count.set(num, 1)
        } else{
            count.set(num, count.get(num) + 1)
        }
    })
    let max = Math.max(...count.values())
    let mode = [...count.entries()].filter(({ 1:val }) => val === max).map(([key]) => key)
    console.log(mode)
    
    mode = mode[0]
    return mode
}

function checkNums(nums) {
    let arr = nums.split(',')
    let res = []

    for (let i = 0;i < arr.length;i++) {
        let stringNum = Number(arr[i])
        if (isNaN(stringNum)) {
            return new Error(`${arr[i]} is not a valid number!`)
        } 
        res.push(Number(arr[i]))
    }
    return res
}



module.exports = {getMean, getMedian, getMode, checkNums}