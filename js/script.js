
$(document).ready(function(){
    $(".navigation-menu-li").on("click", function(){
        $(".navigation-menu-li").removeClass("active");
        $(".navigation-menu-a").removeClass("active");
		$(this).addClass("active");
        $(this).find(".navigation-menu-a").addClass("active");
        console.log("1");
	});

    $(".item-menu-img-li").on("click", function(){
        $(".item-menu-img-li").removeClass("active");
        $(this).addClass("active");
    });

    $('#navigation-menu-a-1').on("click", function(){
        $(".item-menu-img-li").removeClass("active");
        $(this).addClass("active");
        $('.item-block-2.active').removeClass("active");
        $('.item-block').addClass("active");
        $('.description-item').addClass("active");
        $('.feedback-item').addClass("active");
    });

    $('#navigation-menu-a-2').on("click", function(){
        $(".item-menu-img-li").removeClass("active");
        $(this).addClass("active");
        $('.item-block-2').addClass("active");
        $('.item-block.active').removeClass("active");
        $('.description-item.active').removeClass("active");
        $('.feedback-item.active').removeClass("active");
    });

    $('#navigation-menu-a-3').on("click", function(){
        $(".item-menu-img-li").removeClass("active");
        $(this).addClass("active");
        $('.item-block-2.active').removeClass("active");
        $('.item-block.active').removeClass("active");
        $('.description-item').addClass("active");
        $('.feedback-item.active').removeClass("active");
        $('.description-and-feedback').css("margin-left", "0px");
        console.log("WOOOOOOOOOOORK");
    });

    $('#navigation-menu-a-4').on("click", function(){
        $(".item-menu-img-li").removeClass("active");
        $(this).addClass("active");
        $('.item-block-2.active').removeClass("active");
        $('.item-block.active').removeClass("active");
        $('.description-item.active').removeClass("active");
        $('.feedback-item').addClass("active");
        $('.description-and-feedback').css({"margin-left": "0px", "margin-right":"0px", "width":"1430px"});
        $('.feedback-item.active').css("width", "100%");
    });

        //accordeons
    $('.div-li-list-garant').on("click", function(event){
        $('.div-li-list-garant').not($(this)).removeClass('active');
        $('.div-li-list-garant').not($(this)).next().slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
        console.log("Работает");
    });

    //rate
    const ratingItemsList = document.querySelectorAll('.star');
    const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
    ratingItemsArray.forEach(item => {
        item.addEventListener('click', ()=>{
            const {itemValue} = item.dataset;
            item.closest(".rating").dataset.totalValue =  item.dataset.itemValue;
        })
    });




    //slick-sliders
    $('.item-menu-img-ul').slick({
        arrows: true,
        infinite: false,
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 4,
        vertical: true,
        focusOnSelect: true,
        asNavFor: ".slider-2",
        responsive:[
            {
                breakpoint: 360,
                settings: {
                    vertical: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 411,
                settings: {
                    vertical: false,
                    slidesToShow: 3
                }
            }
        ]
    });
    
    $('.slider-2').slick({
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: ".item-menu-img-ul"
    });

    $('.ul-list-of-product').slick({
        arrows: true,
        slidesToShow: 5,
        responsive:[
            {
                breakpoint: 375,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
    })

})