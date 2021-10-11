$(document).ready(function(){


    var ep_arr = [
        {
            $img : `ep_top_01.png`,
            $txt : `“당시 무참히 희생된 어린 영혼들에 대한 미안함이 가장 컸다.”`,
        },
        {
            $img : `ep_top_02.png`,
            $txt : `“학도병들은 군번 없는 용사였다.
            싸우는 줄은 알았지만, 단체로 가서 어려운 작전을 수행한 줄은 몰랐다.”`,
        },
        {
            $img : `ep_top_03.png`,
            $txt : `“화려한 영웅의 이야기가 아니라 마이너리티의 희생을 다뤄야 해
            무엇보다 진정성을 담고자 했다”`,
        },
    ];

    
    for(i in ep_arr){
        $(".epilogue").append(`
            <div class="box">
                <div class="img"></div>
                <p class="txt"></p>
            </div>
        `);
    }

    $(".epilogue .box").each(function(n){
        $(this).find(".img").css("background-image", `url(./img/${ep_arr[n].$img})`);
        var $sub = $(this).find(".txt").text(ep_arr[n].$txt);
        $sub.html($sub.html().replace(/\n/g, '<br/>'));
    });

    $(".epilogue").append(`<img class="last" src="./img/ep_bottom.png" alt="">`);


});