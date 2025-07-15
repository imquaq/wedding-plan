$(function () {
    var user = getCookieWithExpiry("user");
    if (user && user !== "") {
        $('#div-login').hide();
        $('#div-content').show();
    } else {
        $('#div-login').show();
        $('#div-content').hide();
    }
    $('.tab-main').first().addClass('active');
    $.get('tab1.html', function (data) {
        $('#content-tab').html(data);
    });

    $('.tab-main').click(function () {
        var id = $(this).attr('data-tabid');
        // $('.nav-item').removeClass('active');
        $('.tab-main').removeClass('active')

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
                "vynnt",
            ];
            if (listPass.includes(password.toLowerCase())) {
                $('#div-login').hide();
                $('#div-content').show();
                setCookieWithExpiry("user", password, 3);
            }
        }
    }

    function setCookie(name, value, hour) {
        let expires = "";
        if (hour) {
            const date = new Date();
            date.setTime(date.getTime() + (hour * 60 * 60 * 1000));
            console.log(date);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let c of cookies) {
            const [key, value] = c.split("=");
            if (key === name) return decodeURIComponent(value);
        }
        return null;
    }

    function setCookieWithExpiry(name, value, hour) {
        const now = new Date();
        const expiryTimestamp = now.getTime() + hour * 60 * 60 * 1000;
        const data = JSON.stringify({ value, expiry: expiryTimestamp });

        document.cookie = name + "=" + encodeURIComponent(data) + "; path=/";
    }

    function getCookieWithExpiry(name) {
        const cookies = document.cookie.split("; ");
        for (let c of cookies) {
            const [key, val] = c.split("=");
            if (key === name) {
                const data = JSON.parse(decodeURIComponent(val));
                if (Date.now() < data.expiry) {
                    return data.value; // Còn hiệu lực
                } else {
                    return null; // Hết hạn
                }
            }
        }
        return null; // Không tồn tại
    }
});