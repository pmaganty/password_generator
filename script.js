var password_length = 8;
var character_split;
var special_char;
var numeric_char;
var uppercase_char;
var lowercase_char;
var type_arr = [];
var special_char_str = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var uppercase_char_str = "abcdefghijklmnopqrstuvwxyz";
var lowercase_char_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number_char_str = "0123456789";
var password = "";

password_length = prompt("Please enter a password length between 8 and 128 characters.");

while (password_length < 8 || password_length > 128) {
    password_length = prompt("The length you entered is invalid. Please enter a password length between 8 and 128 characters.");
}

character_split = Math.floor(password_length / 4);

special_char = confirm("Would you like your password to contain special characters?");
numeric_char = confirm("Would you like your password to contain numeric characters?");
uppercase_char = confirm("Would you like your password to contain uppercase letters?");
lowercase_char = confirm("Would you like your password to contain lowercase letters?");

while (special_char == false && numeric_char == false && uppercase_char == false && lowercase_char == false) {
    confirm("You have not chosen any password preferences. Please press OK to specify your preferences.");
    special_char = confirm("Would you like your password to contain special characters?");
    numeric_char = confirm("Would you like your password to contain numeric characters?");
    uppercase_char = confirm("Would you like your password to contain uppercase letters?");
    lowercase_char = confirm("Would you like your password to contain lowercase letters?");
}

if (special_char == true) {
    type_arr.push("s");
}
if (numeric_char == true) {
    type_arr.push("n");
}
if (uppercase_char == true) {
    type_arr.push("u");
}
if (lowercase_char == true) {
    type_arr.push("l");
}

/*PRINTING ARRAY FOR DEBUG CODE*/
for (var i = 0; i < type_arr.length; i++) {
    console.log(type_arr[i]);
}
/*-----------------------------*/

for (var j = 0; j < password_length; j++) {
    //console.log(j); //FOR DEBUG

    var rand_val;
    var rand_char_type;

    if (j == 0 && special_char == true) {
        rand_val = Math.floor(Math.random() * special_char_str.length);
        //console.log(rand_val); //FOR DEBUG
        password += special_char_str[rand_val];
        //console.log(password); //FOR DEBUG
    } else if (j == 1 && uppercase_char == true) {
        rand_val = Math.floor(Math.random() * uppercase_char_str.length);
        //console.log(rand_val) //FOR DEBUG
        password += uppercase_char_str[rand_val];
        //console.log(password); //FOR DEBUG
    } else if (j == 2 && lowercase_char == true) {
        rand_val = Math.floor(Math.random() * lowercase_char_str.length);
        //console.log(rand_val) //FOR DEBUG
        password += lowercase_char_str[rand_val];
        //console.log(password); //FOR DEBUG
    } else if ( j == 3 && numeric_char == true) {
        rand_val = Math.floor(Math.random() * number_char_str.length);
        //console.log(rand_val) //FOR DEBUG
        password += number_char_str[rand_val];  
        //console.log(password); //FOR DEBUG     
    } else {
        rand_char_type = Math.floor(Math.random() * type_arr.length);
        if (type_arr[rand_char_type] == "s") {
            rand_val = Math.floor(Math.random() * special_char_str.length);
            //console.log(rand_val) //FOR DEBUG
            password += special_char_str[rand_val];
            //console.log(password); //FOR DEBUG
        } else if (type_arr[rand_char_type] == "n") {
            rand_val = Math.floor(Math.random() * number_char_str.length);
            //console.log(rand_val) //FOR DEBUG
            password += number_char_str[rand_val];
            //console.log(password); //FOR DEBUG
        } else if (type_arr[rand_char_type] == "l") {
            rand_val = Math.floor(Math.random() * lowercase_char_str.length);
            //console.log(rand_val) //FOR DEBUG
            password += lowercase_char_str[rand_val];
            //console.log(password); //FOR DEBUG
        } else {
            rand_val = Math.floor(Math.random() * uppercase_char_str.length);
            //console.log(rand_val) //FOR DEBUG
            password += uppercase_char_str[rand_val];
            //console.log(password); //FOR DEBUG
        }
    }
}

alert("Your generated PASSWORD is: " + password);