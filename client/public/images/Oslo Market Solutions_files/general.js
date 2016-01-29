$(function () {

    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event){
        $(sideslider).toggleClass('fixed');
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });
    $(document).click(function (event) {
      console.log('event', event);
        var clickover = $(event.target);
        var _opened = $(".side-collapse").hasClass("out");
        console.log('_opened', _opened);
        if (_opened === true && !clickover.hasClass("in")) {
            console.log('hello world');
            $("button.navbar-toggle").click();
        }
    });
});