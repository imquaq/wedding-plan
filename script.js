$(function () {
    $('#div-login').show();
    $('#div-content').hide();

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

    $('#submit-login').click(function () {
        login();
    });
    $('#txtPassword').on('keyup', function (e) {
        if (e.key === "Enter" || e.keyCode === 13) {
            login();
        }
    });


    function login() {
        var password = $('#txtPassword').val();
        if (password !== "") {
            var listPass = [
                "phucnv",
                "cuongnp",
                "quangnp",
                "vynnt",
            ];
            if (listPass.includes(password.toLowerCase())) {
                $('#div-login').hide();
                $('#div-content').show();
            }
        }
    }
});