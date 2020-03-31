// ------------------- Example 1 with button click -------------------- //

var sayHello = (name) => {
    console.log("Hello ", name, " with button click")
}

//ATTENTION:  use jquery debounc, which is very easy. please see the html for used js files
// this method only trigger once within given seconds even user clicked more then one time. 
// try clicking more than one time 
//ATTENTION: please see the console.log
$(document).ready(function () {
    $('#button1').click(_.debounce(function() {
        sayHello("Menuka");
    }, 5000))
});


// ------------------- Example 2 with Text Field, keyup -------------------- //

var serchItem = (searchtext) => {
    console.log("Trigger your search function with search text get from key up :", searchtext);
}

//ATTENTION: you don't have to use keyup unless you are calling to web service 
//ATTENTION: please see the console.log
$(document).ready(function () {
    $("#search1").keyup(_.debounce(function() {
        let text = this.value;
        let charactercount = text.length;

        //check for character count 
        if (charactercount >= 4) {
            serchItem(text);
        }

    }, 5000));
});


// ------------------- Example 3: check if one string contains other ------------------------- //
var checkExistency = (titletext, highilitedtext) => {
    console.log(highilitedtext.replace(/<\/?[^>]+(>|$)/g, ""))
    // use this if you want to replace html tags and then check if existency
    return highilitedtext.replace(/<\/?[^>]+(>|$)/g, "").includes(titletext);
    // use this if you do not want to replace html tags from highilited text
    // return highilitedtext.includes(titletext);
}

$(document).ready(function () { 
    $("#button2").click(function (e) { 
        let isexists = checkExistency("diaverum","<em>Understanding</em><em>diaverum</em>");
        console.log(isexists);
    });
 });