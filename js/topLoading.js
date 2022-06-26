window.onload = jQuery(function () {
    $('#l-sideMenu').css("display", "none");
    $('.topLoading').css("opacity", "0");
    setTimeout(function () {
        $('.topLoading').css("opacity", "1");
    }, 1)

    $("#wrapper").css("visibility", "hidden");//アニメーション中は非表示
    $("body").css("position", "fixed");//アニメーション中は非表示


    setTimeout(function () {
        $('.topLoading').fadeOut();
        $('#l-sideMenu').css("display", "block");
        $("body").css("position", "relative");
        $("#wrapper").css("visibility", "visible");
        $(".view_timer").css("overflow", "visible");
        $("#wrapper").stop().animate({ opacity: '1' }, 1000);//1秒かけてコンテンツを表示
    }, 3700);//約4秒後に
});