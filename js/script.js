// ヘッダー
$(function () {
  $(window).on('load scroll', function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var scrollPos = scroll + (height * 1);

    $("header").each(function () {
      if ($(this).offset().top < scrollPos) {
        $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
      }
    });
  });
});

$(function () {
  $(window).on('load scroll', function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var scrollPos = scroll + (height * 1);

    $(".header-text h1").each(function () {
      if ($(this).offset().top < scrollPos) {
        $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
      }
    });
  });
});

// TOPへスクロール
$(function () {
  var top = $('#top');
  top.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      top.fadeIn();
    } else {
      top.fadeOut();
    }
  });
  top.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// topコンテンツ
$(function () {
  $(window).on('load scroll', function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var scrollPos = scroll + (height * 1);

    $(".top__left").each(function () {
      if ($(this).offset().top < scrollPos) {
        $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
      }
    });
  });
});

$(function () {
  $(window).on('load scroll', function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var scrollPos = scroll + (height * 1);

    $(".top__right").each(function () {
      if ($(this).offset().top < scrollPos) {
        $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
      }
    });
  });
});

// middleコンテンツ
$(function () {
  $(window).on('load scroll', function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var scrollPos = scroll + (height * 1);

    $(".middle__left").each(function () {
      if ($(this).offset().top < scrollPos) {
        $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
      }
    });
  });
});

$(function () {
  $(window).on('load scroll', function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var scrollPos = scroll + (height * 1);

    $(".middle__right").each(function () {
      if ($(this).offset().top < scrollPos) {
        $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
      }
    });
  });
});

// bottomコンテンツ

$(function () {
  $(window).on('load scroll', function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var scrollPos = scroll + (height * 1);

    $(".bottom__left").each(function () {
      if ($(this).offset().top < scrollPos) {
        $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
      }
    });
  });
});

$(function () {
  $(window).on('load scroll', function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var scrollPos = scroll + (height * 1);

    $(".bottom__images").each(function () {
      if ($(this).offset().top < scrollPos) {
        $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
      }
    });
  });
});
