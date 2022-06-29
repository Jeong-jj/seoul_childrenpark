// header의 site map
$('.siteBtn').on('click', function() {
    $('.siteList').stop().slideToggle(400)
})


// li에 hover시 확대
$('#part1 .depth1 li a').on('mouseover', function() {
    $(this).parent().css({
        transform: 'scale(1.5)',
        zIndex: 999999
    })
})
$('#part1 .depth1 li a').on('mouseout', function() {
    $(this).parent().css({
        transform: 'scale(1)'
    })
})


// 스크롤시 다음 섹션으로 이동
var offTop = 0;
$('.sect').on('mousewheel', function(e, delta){
    if (delta < 0) {
        offTop = $(this).next().offset().top
    } else if (delta > 0) {
        offTop = $(this).prev().offset().top
    }
    $('html').stop().animate({
        scrollTop:offTop
    }, 500)
})


// 편의시설 슬라이드
$('.slideInner').slick({
    autoplay:true,
    slidesToShow:3,
    speed: 400,
    pauseOnFocus: false,
    prevArrow:'<button class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>',
    centerMode: true,
    centerPadding: '100px',
})
// 슬라이드 클릭시 확대 -> 이미지가 크기 때문에 확대시 깨져서 보류
$('.slide').on('click', function() {
    var tit = $(this).find('h3').text()
    console.log(tit)

    if (tit==="유모차대여소") {
        $('#part2').after(`<div class="mSlide"><div class="bigSlide"><div class="innerBox"><div><img src="./imgs/introduce_facility01.jpg" alt="편의시설정보"></div><div class="explain"><h3>유모차대여소 <span class="alert">(코로나19 감염 예방 관련 운영을 중단하오니 양해 부탁드립니다.)</span></h3><div><p>귀여운 아가들의 공원 나들이에 없어서는 안 될 유모차. 그동안은 힘들게 집에서 가져오셨죠?</p><p>이제는 대공원 정문과 후문에 마련된 유모차를 빌려서 이용하세요. 유모차에 아가를 태우고 천천히 대공원의 풍경과 맑은 공기를 감상해 보세요.</p><p>⊙ 대여료 : 일반 3,000원 / 왜건형 6,000원</p><p>※ 카드미가맹점으로 현금만 징수함을 양해하여 주시기 바라며, 현금영수증은 발급됩니다.</p><p>⊙ 위치 : 정문(정문 들어선 뒤 우측), 후문(후문 들어온 후 좌측)</p><p>⊙ 문의전화 : 010-2304-2819</p><p>⊙ 이용시간 : 성수기(3월~11월) 09:00~19:00 / 비수기(12월~2월) 10:00~18:00</p><p>- (종료 1시간 전, 우천 시에는 대여가 제한됩니다.)</p><p>⊙ 유모차 대여 시 신분증 또는 2만원을 맡기시고 반납 시 찾아가셔야 합니다.</p></div></div><div class="slidebtn"><i class="fa-solid fa-xmark"></i></div></div></div></div>`)
    }
    if (tit==="수유실") {
        $('#part2').after(`<div class="mSlide"><div class="bigSlide"><div class="innerBox"><div><img src="./imgs/introduce_facility02.jpg" alt="편의시설정보"></div><div class="explain"><h3>수유실</h3><div><p>관람 중에 어린아이에게 수유가 필요하시면 이곳을 찾으세요.</p><p>⊙ 위치 : 정문(고객안내센터), 모험의나라 화장실, 버섯화장실, 분수대화장실, 남문화장실, 후문화장실</p><p>⊙ 전화번호 : 02-450-9311</p></div></div><div class="slidebtn"><i class="fa-solid fa-xmark"></i></div></div></div></div>`)
    }
    if (tit==="고객안내센터") {
        $('#part2').after(`<div class="mSlide"><div class="bigSlide"><div class="innerBox"><div><img src="./imgs/introduce_facility03.jpg" alt="편의시설정보"></div><div class="explain"><h3>고객안내센터</h3><div><p>고객안내센터에는 고객안내소 및 미아보호소, 방송실, 의무실을 갖추고 있습니다.</p><p>어린이대공원에는 관람하시는 시간 내내 친절한 간호사분들이 기다리고 있답니다.</p><p>몸 상태가 갑자기 좋지 않다거나, 상처를 입으셨다면 당황하지 마시고 찾아오세요.</p><p>미아가 발생하면 당황하지 마시고 고객 안내센터로 찾아오시거나 연락을 주세요.</p><p>신속하게 안내방송을해 드리며 공원 직원분들의 도움도 받으실 수 있답니다.</p><p>⊙ 위치 : 정문</p><p>⊙ 전화번호 : 02-450-9336~7</p></div></div><div class="slidebtn"><i class="fa-solid fa-xmark"></i></div></div></div></div>`)
    }
    if (tit==="휠체어") {
        $('#part2').after(`<div class="mSlide"><div class="bigSlide"><div class="innerBox"><div><img src="./imgs/introduce_facility04.jpg" alt="편의시설정보"></div><div class="explain"><h3>휠체어</h3><div><p>거동이 불편하신 장애인분 등 시민분들의 원활한 공원이용을 돕고자 휠체어 대여를 운영하고 있습니다.</p><p>⊙ 위치: 정문(7대),후문(8대) 능동문(2대),구의문(2대)</p><p>⊙ 대여시 신분증 제시 및 전화 번호 기재</p></div></div><div class="slidebtn"><i class="fa-solid fa-xmark"></i></div></div></div></div>`)
    }
    if (tit==="음수대") {
        $('#part2').after(`<div class="mSlide"><div class="bigSlide"><div class="innerBox"><div><img src="./imgs/introduce_facility05.jpg" alt="편의시설정보"></div><div class="explain"><h3>음수대</h3><div><p>아 목말라! 2% 부족해! 어린이대공원에는 음수대가 설치되어 있어 여러분의 2%갈증을 해소해드립니다.</p><p>⊙ 동절기엔 동파발생을 방지하기 위해 음수대를 운영하지 않습니다. (단수조치)</p></div></div><div class="slidebtn"><i class="fa-solid fa-xmark"></i></div></div></div></div>`)
    }
    if (tit==="음성안내기 대여소") {
        $('#part2').after(`<div class="mSlide"><div class="bigSlide"><div class="innerBox"><div><img src="./imgs/introduce_facility06.jpg" alt="편의시설정보"></div><div class="explain"><h3>동물원 음성안내기 대여소</h3><div><p>서울어린이대공원에 살고 있는 동물친구들에 대한 이야기가 궁금하신가요? 식물원 맞은편에 위치한 음성안내기 대여소를 이용해보세요. 공원 동물들에 대한 설명을 들으며 동물원을 관람하실 수 있습니다.</p><p>⊙ 대여료 : 일일 3,000원</p><p>※ 단체 30개 이상 대여 시, 개당 2,000원</p><p>⊙ 위치 : 식물원 맞은편</p><p>⊙ 이용시간 : 10:00~17:00</p><p>⊙ 음성안내기 대여 시 신분증 또는 2만원을 맡기시고 반납 시 찾아가셔야 합니다.</p></div></div><div class="slidebtn"><i class="fa-solid fa-xmark"></i></div></div></div></div>`)
    }
})
$('body').on('click', '.slidebtn', function() {
    $('.mSlide').remove()
})



// 지도 클릭 확대
$('.parkMap').on('click', function() {
    $('#part2').after(`<div class="mMap"><div class="bigMap"><img src="./imgs/park-map.jpg" alt="공원지도"><div class="mapbtn"><i class="fa-solid fa-xmark"></i></div></div></div>`)

    return false
})
$('body').on('click', '.mapbtn', function() {
    $('.mMap').remove()
})

