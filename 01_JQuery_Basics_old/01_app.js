/*
    1) Inline JQuery with a paragraph
    2) Internal JQuery with a Card
    3) External JQuery with a Card
 */


//External Jquery
$('#lightbtn').click(function () {
    let btntext=$(this).text();
    if(btntext==='Hide'){

    }
    $('#card').toggle();
})



//ex 1

$('.btn-outline-danger').click(function () {
    $('#message').text("Good Morning")
});
$('.btn-success').click(function () {
    $('#message').text("Good AfterNoon")
});
$('.btn-blue-grey').click(function () {
    $('#message').text("Good Evening")
});

$('.btn-outline-secondary').click(function () {
    $('#message').text(reverse("Good NIGHT"));
});


//reverse
let reverse=()=>{
    for (let i=str.length-1; i>=0; i--){
        temstr += str.charAt(i);

    }
    return temstr;

};





