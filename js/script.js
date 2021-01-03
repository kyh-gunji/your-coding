// ナビトグル
$(function() {
    $(".header-toggle").click(function() {
        $(".header-toggle-lines-line").toggleClass("active", 1000);
        $(".header-nav").toggleClass("active", 1000);
        $(".header-nav-lists-list-link").toggleClass("active", 1000);
        $(".header-nav-lists-list-link").click(function() {
            $(".header-toggle-lines-line").removeClass("active");
            $(".header-toggle").removeClass("active");
            $(".header-nav").removeClass("active");
            $(".header-nav-lists-list-link").removeClass("active");
        });
    });

});


// ブログの高さ統一
$(function() {
    var $maxHeight = 0;
    $(".blog-lists-list-contents").each(function() {
        var $height = $(this).height();
        if ($height > $maxHeight) {
            $maxHeight = $height;
        }
    });
    $(".blog-lists-list-contents").css("height", $maxHeight + 11 + "px");
});


// // ナビからのスクロール
// $(function() {
//     $(".header-nav-lists-list-link").click(function() {
//         var $scroll = $($(this).attr("href")).offset().top;
//         var $height = $(".header").height();
//         $("html, body").stop().animate({"scrollTop": $scroll - $height}, 300);
//         return false;
//     });
// });

// // お問い合わせボタンからのスクロール
// $(function() {
//     $(".contact-btn").click(function() {
//         var $scroll = $($(this).attr("href")).offset().top;
//         var $height = $(".header").height();
//         $("html, body").stop().animate({"scrollTop": $scroll - $height}, 300);
//         return false;
//     });
// });

// 上２つのミックス
$(function() {
    $('a[href^="#"]:not([href="#"])').click(function() {
        var $scroll = $($(this).attr("href")).offset().top;
        var $height = $(".header").height();
        $("html, body").stop().animate({"scrollTop": $scroll - $height}, 300);
        return false;
    });
});



// アコーディオン
$(function() {
    $(".faq-def-list-group:not(:first-of-type)").children(".faq-def-list-d").hide();
    $(".faq-def-list-group:first-of-type").children(".faq-def-list-d").addClass("open");
    $(".faq-def-list-group").click(function() {
        if ($(this).children(".faq-def-list-d").hasClass("open")) {
            $(this).children(".faq-def-list-d").removeClass("open").stop().slideUp();
        } else {
            $(this).children(".faq-def-list-d").addClass("open").stop().slideDown();
        }
    });
});

// お問い合わせフォームのバリデーション
$(function() {
    $(".contact-form-alert").hide();

    $(".contact-form-btn").click(function() {
    
        var $sendFlag = true;

        // name
        if (!$(".contact-form-name-input").val()) {
            $(".contact-form-name-alert").show();
            $sendFlag = false;
        } else {
            $(".contact-form-name-alert").hide();
        }
        
        // email
        if (!$(".contact-form-email-input").val()) {
            $(".contact-form-email-alert").show();
            $sendFlag = false;
        } else {
            $(".contact-form-email-alert").hide();
        }
        
        // content
        if (!$(".contact-form-content-textarea").val()) {
            $(".contact-form-content-alert").show();
            $sendFlag = false;
        } else {
            $(".contact-form-content-alert").hide();
        }
        
        // privacy
        var $length = $(".contact-form-privacy-input:checked").length;
        if ($length == 0) {
            $(".contact-form-privacy-alert").show();
            $sendFlag = false;
        } else {
            $(".contact-form-privacy-alert").hide();
        }
        
        
        
        // sendFlag
        if ($sendFlag == false) {   
            return false;
        }
    });
});

// お問い合わせフォーム　Googleフォーム
$(function() {
    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/hogehoge",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              $(".contact-end-message").slideDown();
              $(".contact-form-btn").fadeOut();
              window.location.href = "thanks.html";
            },
            200: function () {
              $(".contact-false-message").slideDown();
            }
          }
        });
        event.preventDefault();
      });

});