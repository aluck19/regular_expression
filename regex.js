/*1. Write a JavaScript	program to validate	cell phone number.*/
function check_phone(phone_number){
    var patt = /^(98)[0-9]$/; //number beginning with 98 and ends with number between 0-9
    if (phone_number.match(patt)) {
        if(phone_number.length == 10){ //length of the number must be 10
            document.write("Valid phone number: " + phone_number)
        }
        else{
            document.write("Wrong")
        }
    }
    else{
        document.write("Wrong")
    }
}

/*2. Write a JavaScript function to check whether a given value represents a domain or not.*/
function is_domain(str)
{
    regexp = /^(w{3}[\.])?([a-z0-9\-])+\.((com)|(org)|(net))$/i; //regex for domain, starting with www and ends with either .com, .net or .org

    if (regexp.test(str)) 
    {
        alert("correct domain name");
    }
    else
    {
        alert("incorrect domain name");
    }
}
/*3. Write a JavaScript function to check a given value contains alpha, dash and underscore.*/
function is_alphaDash(str)
{
    regexp = /[a-zA-Z_\-]/; //regex to check value contains dash, alpha and uderscore

    if (regexp.test(str))
    {
        alert("correct ");
    }
    else
    {
        alert("incorrect");
    }
}
/*4. Write a JavaScript program to check if a given string is a date.*/
function check_Date(str){

    var patt = /^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/; //regex for input should be in mm/dd/yyyy
    var t = str.match(patt);

    if(t){
        alert("data string is correct");
    }
    else{
        alert("data string is incorrect");
    }
}

/*5. Write a JavaScript function to check whether a given value is time string or not.*/
function is_timeString(str)
{
    regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/; //regex to check value is time string

    if (regexp.test(str))
    {
        return true;
    }
    else
    {
        return false;
    }
}

/*6. Write a JavaScript function to check whether a given value is hexcolor value or not.*/
function check_hex(inp){

    var hexPatt  = /^#[0-9A-F]{6}$/i; //regex code of hexcolor
    if(hexPatt.test(inp)){
        alert("correct hex color code");
    }
    else{
        alert("incorrect hex color code");
    }
}


