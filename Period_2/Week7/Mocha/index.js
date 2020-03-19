
const calculator = () => {
    return {
        add: function(first, second){
            total = first + second
            return total
        },
        subtract: function(first, second){
            total = first - second
            return total
        },
        divide: function(first, second){
            total = first/second
            return total
        },
        multiply: function(first, second){
            total = first*second
            return total
        },
        total: function () {
            return total;
        }
    }
}

module.exports = calculator()