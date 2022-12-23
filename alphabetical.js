function string_sort(str) {
    var i = 0, j;
    while (i < str.length) {
        j = i + 1;
        while (j < str.length) {
            if (str[j] < str[i]) {
                var temp = str[i];
                str[i] = str[j];
                str[j] = temp;
            }
            j++;
        }
        i++;
    }
}



var string = ['nyno','sanket','nikesh','atul','djay','akashy'];


console.log("Original String");
console.log(string);

console.log("next");


string_sort(string);

console.log("</br>After sorting</br>");


console.log(string);