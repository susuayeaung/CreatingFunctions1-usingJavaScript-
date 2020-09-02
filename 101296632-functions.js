//Function 1
function _one(){
let intro;
let fName = "Su Su Aye";
let lName = "Aung";
const studentId = 101296632;
let favColor = "Blue";
let favGame = "FarmVille";
let numberOfCourses = 7;
let value;
if (numberOfCourses > 3){
    value = "full";
} else{
    value = "part";
}
intro = `My name is ${fName} ${lName}, student ID: ${studentId}.
My favorite color is ${favColor} and favorite game is ${favGame}.
I am currently taking ${numberOfCourses} courses, so I am a ${value}-time student.`;
console.log(intro);
}

//Function 2
function _two(price, qty, taxRate){
let subTotal, tax, totalCost;
subTotal = price * qty;
tax = subTotal * taxRate;
totalCost = subTotal + tax;
total = `Sub total: $${subTotal.toFixed(2)}, Tax: $${tax.toFixed(2)}, Total: $${totalCost.toFixed(2)}`;
console.log(total);
}

//Function 3
function _three(num, multiplyBy){
total = num * multiplyBy;
let arr = total.toString(), result = "";
for(let i = 0; i < arr.length; i++){
    if(i < arr.length - 1){
        result += arr[i] + ", ";
    }else{
        result += arr[i];
    }        
}
console.log(result);
}

//Function 4
function _four(date){
let todayDate = 0, subDay = 0, subTime = 0, result;
todayDate = new Date();
if (date.getTime() < todayDate.getTime()){
    subTime = parseInt(todayDate.getTime()) - parseInt(date.getTime());
    subDay = parseInt(subTime) / (1000 * 3600 * 24);
    result = `That day was ${subDay.toFixed()} days ago.`;
} else if(date.getTime() === todayDate.getTime()){
    result = `That day is today.`;
} else{
    subTime = parseInt(date.getTime()) - parseInt(todayDate.getTime());
    subDay = parseInt(subTime) / (1000 * 3600 * 24);
    result = `There is ${subDay.toFixed()} days left to that date.`;
}
console.log(result);
}

//Function 5
function _five(str){
let evenSum = 0, num = 0, result;
for( let i = 0; i < str.length; i++){
    if(!isNaN(str.charAt(i))){
        num = parseInt(str.charAt(i));
        if(num % 2 == 0){
            evenSum += num;
        }else{
            continue;
        }
    }else{
        continue;
    }
}
    result = `The sum of all even numbers: ${evenSum}`;
    console.log(result);
}

//Function 6
function _six(str){
    let num = "", letter = "", specialChar = "", result;
    for(let i = 0; i < str.length; i++){
        if(str[i] >= 0 && str[i] <= 9){
            num += str[i];
        }
        else if(str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z'){
            letter += str[i];   
        }
        else{
            specialChar += str[i];
        }
}
    result = num + letter + specialChar;
    console.log(result);
}

//Function 7
function _seven(num, str){
    let sum = 0, product = 1, numSum = 0, numProd = 0, result;
    let arr = num.toString();
    if(str === "add"){
        for(let i = 0; i < arr.length; i++){
            numSum = parseInt((arr[i] - 1) % 9 + 1);
            sum += parseInt(numSum);
    
        }
        result = `The sum of ${num} is ${sum}.`;
    }else{
        for(let i = 0; i < arr.length; i++){
            numProd = parseInt((arr[i] - 1) % 9 + 1);
            product *= parseInt(numProd);
    
        }
        result = `The product of ${num} is ${product}.`;
    }
    console.log(result);
}

//Function 8
function _eight(list){
    let output;
    output = "<ul>";
    for(let i = 0; i < list.length; i++){
        output += "<li>" + list[i] + "</li>";
    } 
    output += "</ul>";
    console.log(output);
}

//Function 9
function _nine(str){
    let word = "", result;
    if(str.length !== 3){
        result = `Number value of zero.`;
    }else{
        for(let i = 0; i < 3; i++){
            if (i === 0){
                word += "\[\"" + str[i];
                word += str[i + 1];
                word += str[i + 2] + "\"" + ", ";
                word += "\"" + str[i];
                word += str[i + 2];
                word += str[i + 1] + "\"" + ", ";
            }else if(i === 1){
                word += "\"" + str[i];
                word += str[i + 1];
                word += str[i - 1] + "\"" + ", ";
                word += "\"" + str[i];
                word += str[i - 1];
                word += str[i + 1] + "\"" + ", ";
            }else{
                word += "\"" + str[i];
                word += str[i - 2];
                word += str[i - 1] + "\"" + ", ";
                word += "\"" + str[i];
                word += str[i - 1];
                word += str[i - 2] + "\"\]";
            }
        }
        result = word;
    }
    console.log(result);
}

//Function 10
function _ten(str){
    let total = 0, count = 1, prev, num, value = 0, subTotal = 0, consecutive = "", result = "= ";
    for(let i = 0; i < str.length; i++){
        if(prev === str[i]){
            count++;
            subTotal = parseInt(((value * count) * count) - value);
            if(i === 0){
                consecutive = value + " + ";
                result += "(" + consecutive.repeat(count) + ") x " + count;
            }else{
                consecutive = value + " + ";
                result = result.slice(0, -count);
                result += " (" + consecutive.repeat(count) + ") x " + count;   
            }
        }else{
            total += subTotal;
            subTotal = 0;
            if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" ||
               str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U"){
                num = 2;
                count = 1;
                total += 2;
                total = parseInt(total);
                prev = str[i];
                if(i === 0){
                    result += num;
                }else{
                    result += " + " + num;
                }
            }else if(str[i] === "J" || str[i] === "Q" || str[i] === "Z" || str[i] === "X" || str[i] === "Y" ||
                     str[i] === "j" || str[i] === "q" || str[i] === "z" || str[i] === "x" || str[i] === "y"){
                num = 5;
                count = 1;
                total += 5;
                total = parseInt(total);
                prev = str[i];
                if(i === 0){
                    result += num;
                }else{
                    result += " + " + num;
                }
            }else{
                num = 3
                count = 1;
                total += 3;
                total = parseInt(total);
                prev = str[i];
                if(i === 0){
                    result += num;
                }else{
                    result += " + " + num;
                }
            }  
        }
         
        value = num;
    }
    total += subTotal;
    result += " = " + total;
    console.log(result);
}