
//section.services
//blue and scale selected or active col-1 '//works on hover'

$(function () {
        var $container = $('.col-wrapper'),
            $articles = $container.children('.hover'),
            timeout;

        $articles.on('mouseenter', function (event) {
            var $article = $(this);
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                if ($article.hasClass('active')) return false;
                $articles.not($article.removeClass('blur').addClass('active'))
                         .removeClass('active')
                         .addClass('blur');
            }, 65);
        });
        $container.on('mouseleave', function (event) {
            clearTimeout(timeout);
            $articles.removeClass('active blur');
        });
    });
