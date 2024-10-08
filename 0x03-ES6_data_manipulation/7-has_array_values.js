export default function hasValuesFromArray(set, arr) {
    let result = false;
    for (const elem of arr){
        if (set.has(elem)){
            result = true;
        } else {
            result = false;
        }
        
    }
    return result;
}