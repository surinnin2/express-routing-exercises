const {getMean, getMedian, getMode} = require('./functions')

describe('getMean Test', function() {
    test('returns the average of a set of numbers', function() {
        let mean = getMean([1,2,3,4])
        expect(mean).toEqual(2.5)
    })
})

describe('getMedian Test', function() {
    test('returns median given an even set of numbers', function() {
        let median = getMedian([2,-3,4,5])
        expect(median).toEqual(3)
    })
    test('returns median given an odd set of numbers', function() {
        let median = getMedian([2, 4, 1])
        expect(median).toEqual(2)
    })
})

describe('getMode Test', function() {
    test('returns mode', function() {
        let mode = getMode([5, 2, 5, 6, 6, 6, 5, 5])
        expect(mode).toEqual(5)
    })
})