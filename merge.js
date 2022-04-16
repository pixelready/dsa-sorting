function merge(arr1, arr2) {
    let length = arr1.length > arr2.length ? arr1.length : arr2.length;
    let merged = [];
    for (let i=0; i < length; i++){
        if (arr1[i] > arr2[i]){
            merged.push(arr1[i], arr2[i]);
        }
    }
}

function mergeSort(arr) {

}

module.exports = { merge, mergeSort};