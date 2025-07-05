$(function () {
    $('.nav-link').first().addClass('active');
    $.get('tab1.html', function (data) {
        $('#content-tab').html(data);
    });

    $('.nav-link').click(function () {
        var id = $(this).attr('data-tabid');
        // $('.nav-item').removeClass('active');
        $('.nav-link').removeClass('active')

        $('#content-tab').html('');
        if (id) {
            $(this).addClass('active');
            // $('#navItem' + id).addClass('active');
            $.get('tab' + id + '.html', function (data) {
                $('#content-tab').html(data);
            });
        }
    });

    // $('.nav-link').click(function () {
    //     var id = $(this).attr('data-tabid');
    //     $('.nav-link').removeClass('active');

    //     $('#content-tab').html('');
    //     if (id) {
    //         $(this).addClass('active');
    //         $.get('tab' + id + '.html', function (data) {
    //             $('#content-tab').html(data);
    //         });
    //     }
    // });
});