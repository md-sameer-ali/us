
jQuery(function ($) {
    $(".copy-btn").click(function (event) {
        event.preventDefault();
        CopyToClipboard("This is a testing text when you have a link so you put it here", true, "Value copied");
    });

    var path = window.location.href;
    // because the 'href' property of the DOM element is the absolute path
    $('.nav-ul a').each(function () {
        if (this.href === path) {
            $(this).addClass('active-page');
        }
    });

    $('.bar').on('click', function (event) {
        event.preventDefault();
        $('.mobile-nav-area').toggleClass('nav-active');
        $('.nav-overlay').delay(100).fadeIn();
    });
    $('.cross').on('click', function (event) {
        event.preventDefault();
        $('.mobile-nav-area').removeClass('nav-active');
        $('.nav-overlay').delay(100).fadeOut();
    });
    $('.nav-overlay').on('click', function (event) {
        event.preventDefault();
        $('.mobile-nav-area').removeClass('nav-active');
        $(this).delay(100).fadeOut();
    });

    // $(".dropdown > a").on("click", function (e) {
    //     e.preventDefault();
    //     $(this).parent().find(".sub-menu").toggleClass("sub-menu-active");
    //     $(".dropdown-overlay").toggle();
    // })
    // $(".dropdown2 > a").on("click", function (e) {
    //     e.preventDefault();
    //     $(this).parent().find(".sub-menu").toggleClass("sub-menu-active");
    //     $(".dropdown-overlay").toggle();
    // })
    $(".dropdown-overlay").on("click", function () {
        $(".dropdown").removeClass("active");
        $(this).toggle();
    })


});

function CopyToClipboard(value, showNotification, notificationText) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();

    if (typeof showNotification === 'undefined') {
        showNotification = true;
    }
    if (typeof notificationText === 'undefined') {
        notificationText = "Copied to clipboard";
    }

    var notificationTag = $("div.copy-notification");
    if (showNotification && notificationTag.length == 0) {
        notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
        $("body").append(notificationTag);

        notificationTag.fadeIn("slow", function () {
            setTimeout(function () {
                notificationTag.fadeOut("slow", function () {
                    notificationTag.remove();
                });
            }, 1000);
        });
    }
}

$(document).ready(function () {
    // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content-blog').hide();
    $('.tab-content-blog:first').show();

    // Click function
    $('#tabs-nav li').click(function () {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content-blog').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });


});

$(document).ready(function () {
    $(".mobi-nav-main .dropdown > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).parent().removeClass("active");
            $(this).siblings(".sub-menu").hide();
            
        } else {
            
            $(".mobi-nav-main .dropdown > a").parent().removeClass("active");
            $(this).parent().addClass("active");
            $(".dropdown-overlay").show();
            $(".sub-menu").hide();
            $(this).siblings(".sub-menu").fadeIn(200);
        }
    });
});