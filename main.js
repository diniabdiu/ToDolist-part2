//check off specific todos by clicking
$('ul').on('click', 'li', function () {
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
$('ul').on('click', 'span', function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});
$('input[type=text]').keypress(function (e) {
    if (e.which === 13) {
        e.preventDefault();

        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val('');
        
        if(todoText === ''){
            console.log(this);
            $(this).attr('placeholder', 'Fill the text');
            $(this).css({
                'border-color': 'red'
            });
                
        };

        if(todoText !== '') {
            //create a new li and add to ul
            $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>');
        }
    }

});
$('.fa-plus').click(function() {
    $('input[type=text]').fadeToggle();
    // $(this).remove();
});
