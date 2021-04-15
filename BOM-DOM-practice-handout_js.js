$(document).ready(function() {


//TODO: When the #changeBoxSize button is clicked the box should double in size from what it was!

    $("#changeBoxSize").click(function () {
        $("#box").css("height", "500px")

        $("#box").css("width", "500px")
    })

//TODO: I have two CSS classes - toggleClass1 and toggleClass1 - that are currently unused. When the #toggleClass button is clicked, program a bit of JavaScript to toggle between those classes to see the background-color switch back and forth with each click. Bonus: Write your callback function in a variable and use it instead!

    var instructions = function (e) {
        if ($("#box").hasClass("toggleClass1")) {
            $("#box").toggleClass("toggleClass2")
        } else {
            $("#box").toggleClass("toggleClass1")
        }
    }

    $("#toggleClass").click(instructions)

//TODO: In the #boxInfo element, when the BOX is hovered over the HEIGHT and WIDTH of the box would appear in that HTML area [div]

    $("#box").hover(function () {
        var printInfo = $("#box").css("width") + " " + $("#box").css("height");
        $("#boxInfo").html(printInfo);
    }, function () {
        $("#boxInfo").html("");
    })

//TODO: When the user types in to our #input and then clicks #inputBtn, what they typed into the box should replace what was inside of the span #userName with the input's contents

    $("#inputBtn").click(function () {
        $("#userName").html($("#input").val())
    })

//TODO: Refactor the above work - after 5 seconds have passed from the user clicking #inputBtn and seeing #userName change, change the entire div of #helloUser to say "Let me know if you want to play a game. ."

    $("#inputBtn").click(function () {
        $("#userName").html($("#input").val())
        setTimeout(function () {
            $("#helloUser").html("Let me know if you want to play a game . .")
        }, 5000)
    })

//TODO:When a user hits the "g" key, the background of the page should turn purple.

//attempt1
//$(document).on("keydown", function(e){
    //  var keyCode = e.keyCode;
    //switch(keyCode) {
    //  case 71:

//attempt2 trying a diff way
    //$(this).css({"background": "purple"});
    //}
    //console.log(e.key);
    // keysPressed.push(event.key);
    //  if(keysPressed === 71){
    //  keysPressed.shift()
    //  }


    //attempt 3 trying another way
    //  $(document).keypress(function (event) {
    //  if (event.which === 71) {
    // $(this).css('background-color',"purple");
    //}
    //});
    //});


//TODO: Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.


    //$(document).keydown(function() {
    //  var keysPressed = $(document).keydown(function (){});
    ////  if(keysPressed === '13') {
    // $('#counter').html(function() {
    //   var $this= $(this),
    //    count = $this.
    // return +val + 1
    //  });
    //    }
    // });
//});


//TODO:When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".


//     When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".


    var counter = 0;
    var arr = [];
    var solution = [49, 50, 51];
    $(document).keyup(function (event) {
        console.log(event.keyCode);
        arr.push(event.keyCode)
        if (event.keyCode === 71) {
            $("body").css("background-color", "purple");
        }
        if (event.keyCode === 13) {
            counter += 1;
            console.log(counter);
        }
        if (arr.join(",") === solution.join(",")) {
            alert("You get a 50% discount");
        }
    })
});

