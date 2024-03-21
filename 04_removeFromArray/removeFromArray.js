const removeFromArray = function(array, ...theArgs) {
    for (let i=0;i<theArgs.length;i++) {
        let index = 0;

        while (index >= 0){
            index = array.indexOf(theArgs[i]);

            if (index > -1){
                array.splice(index,1);
            }
        }
    };

    return array;
        
}
// Do not edit below this line
module.exports = removeFromArray;
