$(document).ready(function(){

    /*
    var chr_arr = [
        {
            $img : `cha_01.jpg`,
            $name : `대위 이명준 역 (김명민)`,
            $ment : `만약 그들이 전쟁터에 가지 않았더라면,
            아마 지금쯤 살아서 멋지게 인생을 살았을 청춘들입니다!
            제 목숨을 바꿔서라도! 사람들이, 죽은 그 학도병들을
            기억하게 할수 있도록 제가 꼭 만들고 싶습니다!`,
        },
        {
            $img : `cha_02.jpg`,
            $name : `학도병 최성필 역 (최민호)`,
            $ment : `같이 집에 가야지!`,
        },
        {
            $img : `cha_04.jpg`,
            $name : `중대장 박찬년 역 (곽시양)`,
            $ment : `기간병은 남고 학도병은 퇴각해!`,
        },
        {
            $img : `cha_05.jpg`,
            $name : `종군기자 매기 역 (매간폭스)`,
            $ment : `하지만 구할 수 있는 사람을 못 구하면 우리는 뭐가 될까요?`,
        },
    ];

    
    for(i in chr_arr){
        $(".character").append(`
            <div class="box">
                <div class="img"></div>
                <div class="txt">
                    <p class="name">대위 이명준 역 (김명민)</p>
                    <div class="ment">
                        <p></p>
                    </div>
                </div>
            </div>
        `);
    }

    $(".character .box").each(function(n){
        $(this).find(".img").css("background-image", `url(./img/${chr_arr[n].$img})`);
        $(this).find(".name").text(chr_arr[n].$name);
        var $sub = $(this).find(".ment > p").text(chr_arr[n].$ment);
        $sub.html($sub.html().replace(/\n/g, '<br/>'));
    });
    */

    //#1. 배열 데이터 구성
    //2차 배열의 패턴 = ["이미지", "이름 및 배역", "명대사"]
    $ch_arr = [
        ["cha_01.jpg", "대위 이명준 역 (김명민)", "만약 그들이 전쟁터에 가지 않았더라면, <br>아마 지금쯤 살아서 멋지게 인생을 살았을 청춘들입니다! <br>제 목숨을 바꿔서라도! 사람들이, 죽은 그 학도병들을 <br>기억하게 할수 있도록 제가 꼭 만들고 싶습니다!"],
        ["cha_02.jpg", "학도병 최성필 역 (최민호)", "같이 집에 가야지!"],
        ["cha_04.jpg", "중대장 박찬년 역 (곽시양)", "기간병은 남고 학도병은 퇴각해!"],
        ["cha_05.jpg", "종군기자 매기 역 (매간폭스)", "하지만 구할 수 있는 사람을 못 구하면 우리는 뭐가 될까요?"],
    ];

    for(v of $ch_arr){
        //v : 배열의 0번 인덱스부터 추출된 실제 데이터를 가리킨다. 
        $(".character .frame").append(`
        <div class="box">
            <div class="img" style="background-image:url(./img/${v[0]})"></div>
            <div class="cont">
                <h4>${v[1]}</h4>
                <div class="txt">
                    <div>
                        <span><i class="fas fa-quote-left"></i></span>
                        <p>${v[2]}</p>
                        <span><i class="fas fa-quote-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
        `);
    }





});