//check off specific todos by clicking
$('li').click(function () {
    // if ($(this).css('color') === 'rgb(128, 128, 128)') {
    //     $(this).css({
    //         color: 'black',
    //         textDecoration: 'none'
    //     });
    // } else {
    //     $(this).css({
    //         color: 'gray',
    //         textDecoration: 'line-through'
    //     });
    // }
    $(this).toggleClass('completed');
});

//click on X to delete Todo
$('span').click(function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});