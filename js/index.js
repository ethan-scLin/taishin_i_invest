$('#dropdown').on('click', function(e) {
    $(this).toggleClass('open');
});

var sliderTooltip = function (event, ui ,unit) {
    var curValue = ui.value || 2;
    var target = ui.handle || $('.ui-slider-handle');
    var tooltip_min = '<div class="tooltip">最低：' + curValue + unit + '</div>';
    var tooltip_max = '<div class="tooltip">最高：' + curValue + unit +'</div>';

    if($(ui.handle).index() == 1){
        $(target).html(tooltip_min).find('.tooltip').show();
    }else{
        $(target).html(tooltip_max).find('.tooltip').show();
    }
}


$(function() {

    // 改寫Slider以鄰近的INPUT PLACEHOLD 欄位做上下限

    $("#slider-range1").slider({
        range: true,
        step:0.1,
        min: parseInt($("#slider-range1").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range1").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range1").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range1").parent().find('input').eq(1).attr('placeholder'))],
        slide: function( event, ui ) {
            $("#slider-range1").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range1").parent().find('input').eq(1).val(ui.values[1]);
            if(ui.values[0] == parseInt($("#slider-range1").parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($("#slider-range1").parent().find('input').eq(1).attr('placeholder'))  ){
                $('.unlimited_rate').prev().text('預設');
                $('.unlimited_rate').prev().removeClass('active');
                $('.unlimited_rate').hide();
            }else{
                $('.unlimited_rate').prev().text(ui.values[0] + '% ~ ' + ui.values[1] + '%');
                $('.unlimited_rate').prev().addClass('active');
                $('.unlimited_rate').show();
            }

            sliderTooltip(event,ui,'%');

        },
        change: function( event, ui ) {
            $(ui.handle).find('.tooltip').hide();
        }

    });

    $("#slider-range1").parent().find('input').eq(0).on('change', function(event) {
        event.preventDefault();
        var $slider = $("#slider-range1");

        // 不在範圍清空
        if(this.value  > $slider.slider("values")[1]){
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        }else if(this.value < $slider.slider("option", "min")){
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        }else{

            $slider.slider("values", 0, this.value);
        }

        if($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max") ){
            $('.unlimited_rate').prev().text('預設');
            $('.unlimited_rate').prev().removeClass('active');
            $('.unlimited_rate').hide();
        }else{
            $('.unlimited_rate').prev().text($slider.slider('values')[0] + '% ~ ' + $slider.slider('values')[1] + '%');
            $('.unlimited_rate').prev().addClass('active');
            $('.unlimited_rate').show();
        }
    });

    $("#slider-range1").parent().find('input').eq(1).on('change', function(event) {
        event.preventDefault();

        var $slider = $("#slider-range1");

        // 不在範圍清空
        if(this.value == ''){
            $slider.slider("values", 1, $slider.slider("option", "max"));
        }else if(this.value  < $slider.slider("values")[0]){
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        }else if( this.value > $slider.slider("option", "max")){
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        }else{
            $slider.slider("values", 1, this.value);
        }

        if($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max") ){
            $('.unlimited_rate').prev().text('預設');
            $('.unlimited_rate').prev().removeClass('active');
            $('.unlimited_rate').hide();
        }else{
            $('.unlimited_rate').prev().text($slider.slider('values')[0] + '% ~ ' + $slider.slider('values')[1] + '%');
            $('.unlimited_rate').prev().addClass('active');
            $('.unlimited_rate').show();
        }
    });


    $("#slider-range2").slider({
        range: true,
        min: parseInt($("#slider-range2").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range2").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range2").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range2").parent().find('input').eq(1).attr('placeholder'))],
        slide: function( event, ui ) {
            $("#slider-range2").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range2").parent().find('input').eq(1).val(ui.values[1]);
            if(ui.values[0] == parseInt($("#slider-range2").parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($("#slider-range2").parent().find('input').eq(1).attr('placeholder'))  ){
                $('.unlimited_year').prev().text('預設');
                $('.unlimited_year').prev().removeClass('active');
                $('.unlimited_year').hide();
            }else{
                $('.unlimited_year').prev().text(ui.values[0] + '年 ~ ' + ui.values[1] + '年');
                $('.unlimited_year').prev().addClass('active');
                $('.unlimited_year').show();
            }
            sliderTooltip(event,ui,'年');

        },
        change: function( event, ui ) {
            $(ui.handle).find('.tooltip').hide();
        }
    });

    $("#slider-range2").parent().find('input').eq(0).on('change', function(event) {
        event.preventDefault();
        var $slider = $("#slider-range2");

        // 不在範圍清空
        if(this.value  > $slider.slider("values")[1]){
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        }else if(this.value < $slider.slider("option", "min")){
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        }else{

            $slider.slider("values", 0, this.value);
        }

        if($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max") ){
            $('.unlimited_year').prev().text('預設');
            $('.unlimited_year').prev().removeClass('active');
            $('.unlimited_year').hide();
        }else{
            $('.unlimited_year').prev().text($slider.slider('values')[0] + '年 ~ ' + $slider.slider('values')[1] + '年');
            $('.unlimited_year').prev().addClass('active');
            $('.unlimited_year').show();
        }
    });

    $("#slider-range2").parent().find('input').eq(1).on('change', function(event) {
        event.preventDefault();

        var $slider = $("#slider-range2");

        // 不在範圍清空
        if(this.value == ''){
            $slider.slider("values", 1, $slider.slider("option", "max"));
        }else if(this.value  < $slider.slider("values")[0]){
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        }else if( this.value > $slider.slider("option", "max")){
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        }else{
            $slider.slider("values", 1, this.value);
        }

        if($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max") ){
            $('.unlimited_year').prev().text('預設');
            $('.unlimited_year').prev().removeClass('active');
            $('.unlimited_year').hide();
        }else{
            $('.unlimited_year').prev().text($slider.slider('values')[0] + '年 ~ ' + $slider.slider('values')[1] + '年');
            $('.unlimited_year').prev().addClass('active');
            $('.unlimited_year').show();
        }
    });



    $("#slider-range3").slider({
        range: true,
        min: parseInt($("#slider-range3").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range3").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range3").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range3").parent().find('input').eq(1).attr('placeholder'))],
        slide: function( event, ui ) {
            $("#slider-range3").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range3").parent().find('input').eq(1).val(ui.values[1]);
            if(ui.values[0] == parseInt($("#slider-range3").parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($("#slider-range3").parent().find('input').eq(1).attr('placeholder'))  ){
                $('.unlimited_min_denomination').prev().text('預設');
            }else{
                $('.unlimited_min_denomination').prev().text(ui.values[0] + '仟元 ~ ' + ui.values[1] + '仟元');
            }
            sliderTooltip(event,ui,'仟元');

        },
        change: function( event, ui ) {
            $(ui.handle).find('.tooltip').hide();
        }
    });

    $("#slider-range3").parent().find('input').eq(0).on('change', function(event) {
        event.preventDefault();
        var $slider = $("#slider-range3");

        // 不在範圍清空
        if(this.value  > $slider.slider("values")[1]){
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        }else if(this.value < $slider.slider("option", "min")){
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        }else{

            $slider.slider("values", 0, this.value);
        }

        if($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max") ){
            $('.unlimited_min_denomination').prev().text('預設');
        }else{
            $('.unlimited_min_denomination').prev().text($slider.slider('values')[0] + '仟元 ~ ' + $slider.slider('values')[1] + '仟元');
        }
    });

    $("#slider-range3").parent().find('input').eq(1).on('change', function(event) {
        event.preventDefault();

        var $slider = $("#slider-range3");

        // 不在範圍清空
        if(this.value == ''){
            $slider.slider("values", 1, $slider.slider("option", "max"));
        }else if(this.value  < $slider.slider("values")[0]){
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        }else if( this.value > $slider.slider("option", "max")){
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        }else{
            $slider.slider("values", 1, this.value);
        }

        if($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max") ){
            $('.unlimited_min_denomination').prev().text('預設');
        }else{
            $('.unlimited_min_denomination').prev().text($slider.slider('values')[0] + '仟元 ~ ' + $slider.slider('values')[1] + '仟元');
        }
    });

    $("#slider-range4").slider({
        range: true,
        step:0.1,
        min: parseInt($("#slider-range4").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range4").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range4").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range4").parent().find('input').eq(1).attr('placeholder'))],
        slide: function( event, ui ) {
            $("#slider-range4").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range4").parent().find('input').eq(1).val(ui.values[1]);
            if(ui.values[0] == parseInt($("#slider-range4").parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($("#slider-range4").parent().find('input').eq(1).attr('placeholder'))  ){
                $('.unlimited_yield').prev().text('預設');
                $('.unlimited_yield').prev().removeClass('active');
                $('.unlimited_yield').hide();
            }else{
                $('.unlimited_yield').prev().text(ui.values[0] + '% ~ ' + ui.values[1] + '%');
                $('.unlimited_yield').prev().addClass('active');
                $('.unlimited_yield').show();
            }
            sliderTooltip(event,ui,'%');

        },
        change: function( event, ui ) {
            $(ui.handle).find('.tooltip').hide();
        }
    });

    $("#slider-range4").parent().find('input').eq(0).on('change', function(event) {
        event.preventDefault();
        var $slider = $("#slider-range4");

        // 不在範圍清空
        if(this.value  > $slider.slider("values")[1]){
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        }else if(this.value < $slider.slider("option", "min")){
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        }else{

            $slider.slider("values", 0, this.value);
        }

        if($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max") ){
            $('.unlimited_yield').prev().text('預設');
            $('.unlimited_yield').prev().removeClass('active');
            $('.unlimited_yield').hide();
        }else{
            $('.unlimited_yield').prev().text($slider.slider('values')[0] + '% ~ ' + $slider.slider('values')[1] + '%');
            $('.unlimited_yield').prev().addClass('active');
            $('.unlimited_yield').show();
        }
    });

    $("#slider-range4").parent().find('input').eq(1).on('change', function(event) {
        event.preventDefault();

        var $slider = $("#slider-range4");

        // 不在範圍清空
        if(this.value == ''){
            $slider.slider("values", 1, $slider.slider("option", "max"));
        }else if(this.value  < $slider.slider("values")[0]){
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        }else if( this.value > $slider.slider("option", "max")){
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        }else{
            $slider.slider("values", 1, this.value);
        }

        if($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max") ){
            $('.unlimited_yield').prev().text('預設');
            $('.unlimited_yield').prev().removeClass('active');
            $('.unlimited_yield').hide();
        }else{
            $('.unlimited_yield').prev().text($slider.slider('values')[0] + '% ~ ' + $slider.slider('values')[1] + '%');
            $('.unlimited_yield').prev().addClass('active');
            $('.unlimited_yield').show();
        }
    });


});

/* 修改選取狀態 - 除Slider外 */
$('.keyword').on('input', function(event) {
    event.preventDefault();
    /* Act on the event */
    if(this.value.length != 0){
        $('.unlimited_keyword').prev().text(this.value);
        $('.unlimited_keyword').prev().addClass('active');
        $('.unlimited_keyword').show();
    }else{
        $('.unlimited_keyword').prev().removeClass('active');
        $('.unlimited_keyword').hide();
        $('.unlimited_keyword').prev().text('預設');

    }
});

$('.urrency').on('change', function(event) {
    event.preventDefault();
    /* Act on the event */

    if($('.urrency:eq(0):checked').length && $('.urrency:eq(1):checked').length && $('.urrency:eq(2):checked').length && $('.urrency:eq(3):checked').length && !$('.urrency:eq(4):checked').length && !$('.urrency:eq(5):checked').length && !$('.urrency:eq(6):checked').length && !$('.urrency:eq(7):checked').length ){
        $('.unlimited_urrency').prev().text('預設');
        $('.unlimited_urrency').prev().removeClass('active');
        $('.unlimited_urrency').hide();
    }else{
        $('.unlimited_urrency').prev().text('自訂');
        $('.unlimited_urrency').prev().addClass('active');
        $('.unlimited_urrency').show();
    }

});

$('.frequency').on('change', function(event) {
    event.preventDefault();
    /* Act on the event */
    if($('.frequency:checked').length != $('.frequency').length){
        $('.unlimited_frequency').prev().text('自訂');
        $('.unlimited_frequency').prev().addClass('active');
        $('.unlimited_frequency').show();
    }else{
        $('.unlimited_frequency').prev().text('預設');
        $('.unlimited_frequency').prev().removeClass('active');
        $('.unlimited_frequency').hide();
    }

});



/* 預設 [click] 事件 */
// 預設 - TEXT 清空
$('.unlimited_keyword').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $(this).parent().parent().find('input').val('');
    $(this).prev().removeClass('active');
    $(this).hide();
    $(this).prev().text('預設');
});


// 預設 - 捲軸式
$('.unlimited_rate').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    var $slider = $("#slider-range1");
    $slider.slider("values", 0, $slider.parent().find('input').eq(0).attr('placeholder'));
    $slider.slider("values", 1, $slider.parent().find('input').eq(1).attr('placeholder'));
    $slider.parent().find('input').eq(0).val('');
    $slider.parent().find('input').eq(1).val('');
    $(this).prev().text('預設');
    $(this).hide();
    $(this).prev().removeClass('active');

});

$('.unlimited_year').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    var $slider = $("#slider-range2");
    $slider.slider("values", 0, $slider.parent().find('input').eq(0).attr('placeholder'));
    $slider.slider("values", 1, $slider.parent().find('input').eq(1).attr('placeholder'));
    $slider.parent().find('input').eq(0).val('');
    $slider.parent().find('input').eq(1).val('');
    $(this).prev().text('預設');
    $(this).hide();
    $(this).prev().removeClass('active');
});

$('.unlimited_min_denomination').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    var $slider = $("#slider-range3");
    $slider.slider("values", 0, $slider.parent().find('input').eq(0).attr('placeholder'));
    $slider.slider("values", 1, $slider.parent().find('input').eq(1).attr('placeholder'));
    $slider.parent().find('input').eq(0).val('');
    $slider.parent().find('input').eq(1).val('');
    $(this).prev().text('預設');
    $(this).hide();
    $(this).prev().removeClass('active');
});

$('.unlimited_yield').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    var $slider = $("#slider-range4");
    $slider.slider("values", 0, $slider.parent().find('input').eq(0).attr('placeholder'));
    $slider.slider("values", 1, $slider.parent().find('input').eq(1).attr('placeholder'));
    $slider.parent().find('input').eq(0).val('');
    $slider.parent().find('input').eq(1).val('');
    $(this).prev().text('預設');
    $(this).hide();
    $(this).prev().removeClass('active');
});

// 預設 - CHECKBOX要全選的格式
$('.unlimited_frequency , .unlimited_identity').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $(this).parent().parent().find('input[type=checkbox]').prop('checked','checked');
    $(this).prev().text('預設');
    $(this).prev().removeClass('active');
    $(this).hide();
});


$('.unlimited_issued').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $(this).parent().parent().find('input[type=checkbox]').prop('checked','checked');
    $('.unlimited_issued').hide();
    $('.unlimited_issued_word').removeClass('active');
    $('.unlimited_issued_word').text('預設');
});

$('.unlimited_guarantee').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $(this).parent().parent().find('input[type=checkbox]').prop('checked','checked');
    $('.unlimited_guarantee').hide();
    $('.unlimited_guarantee_word').removeClass('active');
    $('.unlimited_guarantee_word').text('預設');
});


$('.unlimited_urrency').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $(this).parent().parent().find('input[type=checkbox]').prop('checked','');
    $(this).parent().parent().find('input[type=checkbox]').eq(0).prop('checked','checked');
    $(this).parent().parent().find('input[type=checkbox]').eq(1).prop('checked','checked');
    $(this).parent().parent().find('input[type=checkbox]').eq(2).prop('checked','checked');
    $(this).parent().parent().find('input[type=checkbox]').eq(3).prop('checked','checked');
    $(this).hide();
    $(this).prev().removeClass('active');
    $(this).prev().text('預設');
});

$('.unlimited_trade').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $(this).parent().parent().find('input[type=checkbox]').prop('checked','');
    $(this).parent().parent().find('input[type=checkbox]').eq(0).prop('checked','checked');
    $(this).hide();
    $(this).prev().removeClass('active');
    $(this).prev().text('預設');
});

// 半年的預設
$('.unlimited_sub_frequency').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('.sub_frequency').prop('checked',true);
    $('.special_checkbox').prop('checked',true);

    // 程式改值無法觸發onchange 需額外處理
    if($('.frequency:checked').length != $('.frequency').length){
        $('.unlimited_frequency').prev().text('自訂');
        $('.unlimited_frequency').prev().addClass('active');
        $('.unlimited_frequency').show();
    }else{
        $('.unlimited_frequency').prev().text('預設');
        $('.unlimited_frequency').prev().removeClass('active');
        $('.unlimited_frequency').hide();
    }
});


$('.form .item #more').on('click', function(e) {
    $('.form .item .more').toggleClass('open');
    $(this).toggleClass('open');
    $('.form .item .more').css('overflow', 'hidden');

    if ($('.form .item .more').hasClass('open')) {
        setTimeout(function() {
            $('.form .item .more').css('overflow', 'visible');
        }, 1000);
    }
});

// 配息頻率 - 選取 & 取消選取操作
$('.special_checkbox').change(function(event) {
    /* Act on the event */

    if(!$('.special_dividend .select').hasClass('open')){
            $('.special_dividend .select').addClass('open');
    }

    if($(this).prop('checked')){
        $('.special_dividend .select').find('input[type=checkbox]').prop('checked',true);
    }else{
        $('.special_dividend .select').find('input[type=checkbox]').prop('checked',false);
    }

    // 程式改值無法觸發onchange 需額外處理
    if($('.frequency:checked').length != $('.frequency').length){
        $('.unlimited_frequency').prev().text('自訂');
        $('.unlimited_frequency').prev().addClass('active');
        $('.unlimited_frequency').show();
    }else{
        $('.unlimited_frequency').prev().text('預設');
        $('.unlimited_frequency').prev().removeClass('active');
        $('.unlimited_frequency').hide();
    }

});

$('.sub_frequency').change(function(event) {
    /* Act on the event */

    if($('.sub_frequency:checked').length > 0){
        $('.special_checkbox').prop('checked',true);
    }else{
        $('.special_checkbox').prop('checked',false);
    }

    // 程式改值無法觸發onchange 需額外處理
    if($('.frequency:checked').length != $('.frequency').length){
        $('.unlimited_frequency').prev().text('自訂');
        $('.unlimited_frequency').prev().addClass('active');
        $('.unlimited_frequency').show();
    }else{
        $('.unlimited_frequency').prev().text('預設');
        $('.unlimited_frequency').prev().removeClass('active');
        $('.unlimited_frequency').hide();
    }

});

$('.identity').change(function(event) {
    /* Act on the event */


    // 程式改值無法觸發onchange 需額外處理
    if($('.identity:checked').length != $('.identity').length){
        $('.unlimited_identity').prev().text('自訂');
        $('.unlimited_identity').prev().addClass('active');
        $('.unlimited_identity').show();
    }else{
        $('.unlimited_identity').prev().text('預設');
        $('.unlimited_identity').prev().removeClass('active');
        $('.unlimited_identity').hide();
    }

});

$('.trade').change(function(event) {
    /* Act on the event */


    // 程式改值無法觸發onchange 需額外處理
    if($('.trade:eq(0):checked').length && !$('.trade:eq(1):checked').length){
        $('.unlimited_trade').prev().text('預設');
        $('.unlimited_trade').prev().removeClass('active');
        $('.unlimited_trade').hide();
    }else{
        $('.unlimited_trade').prev().text('自訂');
        $('.unlimited_trade').prev().addClass('active');
        $('.unlimited_trade').show();
    }

});

$('.issued').change(function(event) {
    /* Act on the event */


    // 程式改值無法觸發onchange 需額外處理
    if($('.issued:checked').length != $('.issued').length){
        $('.unlimited_issued').prev().text('自訂');
        $('.unlimited_issued').prev().addClass('active');
        $('.unlimited_issued').show();
    }else{
        $('.unlimited_issued').prev().text('預設');
        $('.unlimited_issued').prev().removeClass('active');
        $('.unlimited_issued').hide();
    }

});

$('.guarantee').change(function(event) {
    /* Act on the event */


    // 程式改值無法觸發onchange 需額外處理
    if($('.guarantee:checked').length != $('.guarantee').length){
        $('.unlimited_guarantee').prev().text('自訂');
        $('.unlimited_guarantee').prev().addClass('active');
        $('.unlimited_guarantee').show();
    }else{
        $('.unlimited_guarantee').prev().text('預設');
        $('.unlimited_guarantee').prev().removeClass('active');
        $('.unlimited_guarantee').hide();
    }

});




// 其它的POPUP
$('.select b').on('click', function(e) {
    event.stopPropagation();
    $(this).parent().toggleClass('open');

    //只能打開一個下拉
    $.each($('.select').not($(this).parent()), function(index, el) {
         /* iterate through array or object */
         if($(el).hasClass('open')){
            $(el).removeClass('open');
         }
    });


    //移到可視範圍
    if(!$(this).parent().hasClass('without_move')){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(this).offset().top - 30
        }, 500);
    }
});

// 手機版展開幣別
$('.urrency_open').click(function(event) {
    /* Act on the event */
    if($(this).hasClass('open')){
        $(this).removeClass('open');
        $(this).parent().find('.pad').hide();
    }else{
        $(this).addClass('open');
        $(this).parent().find('.pad').css('display','block');
    }
});

// Search功能
$('.search_issued').on('input', function(event) {
    event.preventDefault();
    /* Act on the event */
    if(this.value != ''){
        var temp_value = this.value;
        $.each($('.issued'), function(index, el) {
             /* iterate through array or object */
             if(this.value.indexOf(temp_value) == -1){
                $(this).parent().hide();
             }else{
                $(this).parent().show();
             }

        });
    }else{
        $('.issued').parent().show();
    }
});

$('.search_guarantee').on('input', function(event) {
    event.preventDefault();
    /* Act on the event */
    if(this.value != ''){
        var temp_value = this.value;
        $.each($('.guarantee'), function(index, el) {
             /* iterate through array or object */
             if(this.value.indexOf(temp_value) == -1){
                $(this).parent().hide();
             }else{
                $(this).parent().show();
             }

        });
    }else{
        $('.guarantee').parent().show();
    }
});

// 排除POPUP 裡的內容點擊後被關閉
$('.select').on('click', function(e) {
    event.stopPropagation();

});

// 點擊任何一個地方關閉 POPUP
$(document).click(function(event) {
    /* Act on the event */
    $.each($('.select'), function(index, el) {
         /* iterate through array or object */
         if($(el).hasClass('open')){
            $(el).removeClass('open');
         }
    });
});



// POPUP 按確認時關閉
$('.select .popup .primary').on('click', function(e) {
    $('.select').removeClass('open');
});

$('#alert .primary').on('click', function(e) {
    $('#alert').removeClass('open');
});

var form = document.querySelector('form');
form.addEventListener('change', function() {
    $('.foot .primary').addClass('loading');
    setTimeout(function() {
        $('.foot .primary').removeClass('loading');
    }, 100);
});