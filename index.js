function showbtn1() {
	$("#box1").fadeIn()

}


function showbtn2() {
	$("#box2").fadeIn()

}

$(function() {
    $("#closebtn1").click(function() {
        $("#box1").fadeOut();
    })
  

});

$(function() {
    $("#closebtn2").click(function() {
        $("#box2").fadeOut();
    })
  

});

    $(function() {
    $("#personaldetails").hover(function() {

        $("#detailslist").slideDown(3000);

    })
});

   $(function() {
    $("#colselist1").click(function() {

        $("#detailslist").slideUp(3000);

    })
});


    $(function() {
    $("#webdevskills").hover(function() {

        $("#webdevskillslist").slideDown(3000);

    })
});

   $(function() {
    $("#colselist2").click(function() {

        $("#webdevskillslist").slideUp(3000);

    })
});

   $(function() {
    $("#designskills").hover(function() {

        $("#designskillslist").slideDown(3000);

    })
});

   $(function() {
    $("#colselist3").click(function() {

        $("#designskillslist").slideUp(3000);

    })
});



