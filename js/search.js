var sliderTooltip = function (event, ui, unit) {
    var curValue = ui.value || 2;
    var target = ui.handle || $('.ui-slider-handle');
    var tooltip_min = '<div class="tooltip">最低：' + curValue + unit + '</div>';
    var tooltip_max = '<div class="tooltip">最高：' + curValue + unit + '</div>';

    if ($(ui.handle).index() == 1) {
        $(target).html(tooltip_min).find('.tooltip').show();
    } else {
        $(target).html(tooltip_max).find('.tooltip').show();
    }
}

$(function () {

    // 改寫Slider以鄰近的INPUT PLACEHOLD 欄位做上下限

    $("#slider-range1").slider({
        range: true,
        step: 0.1,
        min: parseInt($("#slider-range1").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range1").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range1").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range1").parent().find('input').eq(1).attr('placeholder'))],
        slide: function (event, ui) {
            $("#slider-range1").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range1").parent().find('input').eq(1).val(ui.values[1]);
            sliderTooltip(event, ui, '%');

            if (ui.values[0] == parseInt($("#slider-range1").parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($("#slider-range1").parent().find('input').eq(1).attr('placeholder'))) {
                $('.unlimited_rate').hide();
            } else {
                $('.unlimited_rate').show();
            }

        },
        change: function (event, ui) {
            $(ui.handle).find('.tooltip').hide();
        }

    });

    $("#slider-range1").parent().find('input').eq(0).on('change', function (event) {
        event.preventDefault();
        var $slider = $("#slider-range1");

        // 不在範圍清空
        if (this.value > $slider.slider("values")[1]) {
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        } else if (this.value < $slider.slider("option", "min")) {
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        } else {

            $slider.slider("values", 0, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $('.unlimited_rate').hide();
        } else {
            $('.unlimited_rate').show();
        }

    });

    $("#slider-range1").parent().find('input').eq(1).on('change', function (event) {
        event.preventDefault();

        var $slider = $("#slider-range1");

        // 不在範圍清空
        if (this.value == '') {
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else if (this.value < $slider.slider("values")[0]) {
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        } else if (this.value > $slider.slider("option", "max")) {
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else {
            $slider.slider("values", 1, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $('.unlimited_rate').hide();
        } else {
            $('.unlimited_rate').show();
        }

    });

    $("#slider-range2").slider({
        range: true,
        min: parseInt($("#slider-range2").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range2").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range2").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range2").parent().find('input').eq(1).attr('placeholder'))],
        slide: function (event, ui) {
            $("#slider-range2").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range2").parent().find('input').eq(1).val(ui.values[1]);
            sliderTooltip(event, ui, '年');

            if (ui.values[0] == parseInt($("#slider-range2").parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($("#slider-range2").parent().find('input').eq(1).attr('placeholder'))) {
                $('.unlimited_year').hide();
            } else {
                $('.unlimited_year').show();
            }
        },
        change: function (event, ui) {
            $(ui.handle).find('.tooltip').hide();
        }

    });

    $("#slider-range2").parent().find('input').eq(0).on('change', function (event) {
        event.preventDefault();
        var $slider = $("#slider-range2");

        // 不在範圍清空
        if (this.value > $slider.slider("values")[1]) {
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        } else if (this.value < $slider.slider("option", "min")) {
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        } else {

            $slider.slider("values", 0, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $('.unlimited_year').hide();
        } else {
            $('.unlimited_year').show();
        }
    });

    $("#slider-range2").parent().find('input').eq(1).on('change', function (event) {
        event.preventDefault();

        var $slider = $("#slider-range2");

        // 不在範圍清空
        if (this.value == '') {
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else if (this.value < $slider.slider("values")[0]) {
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        } else if (this.value > $slider.slider("option", "max")) {
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else {
            $slider.slider("values", 1, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $('.unlimited_year').hide();
        } else {
            $('.unlimited_year').show();
        }

    });



    $("#slider-range2_").slider({
        range: true,
        min: parseInt($("#slider-range2_").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range2_").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range2_").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range2_").parent().find('input').eq(1).attr('placeholder'))],
        slide: function (event, ui) {
            $("#slider-range2_").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range2_").parent().find('input').eq(1).val(ui.values[1]);
            sliderTooltip(event, ui, '年');
            if (ui.values[0] == parseInt($("#slider-range2_").parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($("#slider-range2_").parent().find('input').eq(1).attr('placeholder'))) {
                $('.unlimited_year').hide();
            } else {
                $('.unlimited_year').show();
            }
        },
        change: function (event, ui) {
            $(ui.handle).find('.tooltip').hide();
        }

    });

    $("#slider-range2_").parent().find('input').eq(0).on('change', function (event) {
        event.preventDefault();
        var $slider = $("#slider-range2_");

        // 不在範圍清空
        if (this.value > $slider.slider("values")[1]) {
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        } else if (this.value < $slider.slider("option", "min")) {
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        } else {

            $slider.slider("values", 0, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $('.unlimited_year').hide();
        } else {
            $('.unlimited_year').show();
        }

    });

    $("#slider-range2_").parent().find('input').eq(1).on('change', function (event) {
        event.preventDefault();

        var $slider = $("#slider-range2_");

        // 不在範圍清空
        if (this.value == '') {
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else if (this.value < $slider.slider("values")[0]) {
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        } else if (this.value > $slider.slider("option", "max")) {
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else {
            $slider.slider("values", 1, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $('.unlimited_year').hide();
        } else {
            $('.unlimited_year').show();
        }

    });

    $("#slider-range3").slider({
        range: true,
        min: parseInt($("#slider-range3").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range3").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range3").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range3").parent().find('input').eq(1).attr('placeholder'))],
        slide: function (event, ui) {
            $("#slider-range3").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range3").parent().find('input').eq(1).val(ui.values[1]);
            sliderTooltip(event, ui, '仟元');

            if (ui.values[0] == parseInt($("#slider-range3").parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($("#slider-range3").parent().find('input').eq(1).attr('placeholder'))) {
                $('.unlimited_min_denomination').hide();
            } else {
                $('.unlimited_min_denomination').show();
            }
        },
        change: function (event, ui) {
            $(ui.handle).find('.tooltip').hide();
        }

    });

    $("#slider-range3").parent().find('input').eq(0).on('change', function (event) {
        event.preventDefault();
        var $slider = $("#slider-range3");

        // 不在範圍清空
        if (this.value > $slider.slider("values")[1]) {
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        } else if (this.value < $slider.slider("option", "min")) {
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        } else {

            $slider.slider("values", 0, this.value);
        }


        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $('.unlimited_min_denomination').hide();
        } else {
            $('.unlimited_min_denomination').show();
        }

    });

    $("#slider-range3").parent().find('input').eq(1).on('change', function (event) {
        event.preventDefault();

        var $slider = $("#slider-range3");

        // 不在範圍清空
        if (this.value == '') {
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else if (this.value < $slider.slider("values")[0]) {
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        } else if (this.value > $slider.slider("option", "max")) {
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else {
            $slider.slider("values", 1, this.value);
        }


        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $('.unlimited_min_denomination').hide();
        } else {
            $('.unlimited_min_denomination').show();
        }
    });

    $("#slider-range4").slider({
        range: true,
        min: parseInt($("#slider-range4").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range4").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range4").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range4").parent().find('input').eq(1).attr('placeholder'))],
        slide: function (event, ui) {
            $("#slider-range4").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range4").parent().find('input').eq(1).val(ui.values[1]);
            sliderTooltip(event, ui, '%');

            if (ui.values[0] == parseInt($("#slider-range4").parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($("#slider-range4").parent().find('input').eq(1).attr('placeholder'))) {
                $('.unlimited_yield').hide();
            } else {
                $('.unlimited_yield').show();
            }
        },
        change: function (event, ui) {
            $(ui.handle).find('.tooltip').hide();
        }

    });

    $("#slider-range4").parent().find('input').eq(0).on('change', function (event) {
        event.preventDefault();
        var $slider = $("#slider-range4");

        // 不在範圍清空
        if (this.value > $slider.slider("values")[1]) {
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        } else if (this.value < $slider.slider("option", "min")) {
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        } else {

            $slider.slider("values", 0, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $('.unlimited_yield').hide();
        } else {
            $('.unlimited_yield').show();
        }

    });

    $("#slider-range4").parent().find('input').eq(1).on('change', function (event) {
        event.preventDefault();

        var $slider = $("#slider-range4");

        // 不在範圍清空
        if (this.value == '') {
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else if (this.value < $slider.slider("values")[0]) {
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        } else if (this.value > $slider.slider("option", "max")) {
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else {
            $slider.slider("values", 1, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $('.unlimited_yield').hide();
        } else {
            $('.unlimited_yield').show();
        }

    });

    $("#slider-range0_1").slider({
        range: true,
        min: parseInt($("#slider-range0_1").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range0_1").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range0_1").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range0_1").parent().find('input').eq(1).attr('placeholder'))],
        slide: function (event, ui) {
            $("#slider-range0_1").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range0_1").parent().find('input').eq(1).val(ui.values[1]);

            if (ui.values[0] == parseInt($(this).parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($(this).parent().find('input').eq(1).attr('placeholder'))) {
                $(this).parents('fieldset').find('button').eq(0).text('預設');
                $(this).parents('fieldset').find('button').eq(0).removeClass('active');
                $(this).parents('fieldset').find('button').eq(1).hide();
            } else {
                $(this).parents('fieldset').find('button').eq(0).text(ui.values[0] + '% ~ ' + ui.values[1] + '%');
                $(this).parents('fieldset').find('button').eq(0).addClass('active');
                $(this).parents('fieldset').find('button').eq(1).show();
            }
            sliderTooltip(event, ui, '%');

        },
        change: function (event, ui) {
            $(ui.handle).find('.tooltip').hide();
        }

    });

    $("#slider-range0_1").parent().find('input').eq(0).on('change', function (event) {
        event.preventDefault();
        var $slider = $("#slider-range0_1");

        // 不在範圍清空
        if (this.value > $slider.slider("values")[1]) {
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        } else if (this.value < $slider.slider("option", "min")) {
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        } else {

            $slider.slider("values", 0, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $slider.parents('fieldset').find('button').eq(0).text('預設');
            $(this).parents('fieldset').find('button').eq(0).removeClass('active');
            $(this).parents('fieldset').find('button').eq(1).hide();
        } else {
            $slider.parents('fieldset').find('button').eq(0).text($slider.slider('values')[0] + '% ~ ' + $slider.slider('values')[1] + '%');
            $(this).parents('fieldset').find('button').eq(0).addClass('active');
            $(this).parents('fieldset').find('button').eq(1).show();
        }
    });

    $("#slider-range0_1").parent().find('input').eq(1).on('change', function (event) {
        event.preventDefault();

        var $slider = $("#slider-range0_1");

        // 不在範圍清空
        if (this.value == '') {
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else if (this.value < $slider.slider("values")[0]) {
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        } else if (this.value > $slider.slider("option", "max")) {
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else {
            $slider.slider("values", 1, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $slider.parents('fieldset').find('button').eq(0).text('預設');
            $(this).parents('fieldset').find('button').eq(0).removeClass('active');
            $(this).parents('fieldset').find('button').eq(1).hide();
        } else {
            $slider.parents('fieldset').find('button').eq(0).text($slider.slider('values')[0] + '% ~ ' + $slider.slider('values')[1] + '%');
            $(this).parents('fieldset').find('button').eq(0).addClass('active');
            $(this).parents('fieldset').find('button').eq(1).show();
        }
    });

    $("#slider-range0_2").slider({
        range: true,
        min: parseInt($("#slider-range0_2").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range0_2").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range0_2").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range0_2").parent().find('input').eq(1).attr('placeholder'))],
        slide: function (event, ui) {
            $("#slider-range0_2").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range0_2").parent().find('input').eq(1).val(ui.values[1]);
            if (ui.values[0] == parseInt($(this).parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($(this).parent().find('input').eq(1).attr('placeholder'))) {
                $(this).parents('fieldset').find('button').eq(0).text('預設');
                $(this).parents('fieldset').find('button').eq(0).removeClass('active');
                $(this).parents('fieldset').find('button').eq(1).hide();

            } else {
                $(this).parents('fieldset').find('button').eq(0).text(ui.values[0] + '年 ~ ' + ui.values[1] + '年');
                $(this).parents('fieldset').find('button').eq(0).addClass('active');
                $(this).parents('fieldset').find('button').eq(1).show();

            }
            sliderTooltip(event, ui, '年');
        },
        change: function (event, ui) {
            $(ui.handle).find('.tooltip').hide();
        }

    });

    $("#slider-range0_2").parent().find('input').eq(0).on('change', function (event) {
        event.preventDefault();
        var $slider = $("#slider-range0_2");

        // 不在範圍清空
        if (this.value > $slider.slider("values")[1]) {
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        } else if (this.value < $slider.slider("option", "min")) {
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        } else {

            $slider.slider("values", 0, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $slider.parents('fieldset').find('button').eq(0).text('預設');
            $(this).parents('fieldset').find('button').eq(0).removeClass('active');
            $(this).parents('fieldset').find('button').eq(1).hide();
        } else {
            $slider.parents('fieldset').find('button').eq(0).text($slider.slider('values')[0] + '年 ~ ' + $slider.slider('values')[1] + '年');
            $(this).parents('fieldset').find('button').eq(0).addClass('active');
            $(this).parents('fieldset').find('button').eq(1).show();
        }
    });

    $("#slider-range0_2").parent().find('input').eq(1).on('change', function (event) {
        event.preventDefault();

        var $slider = $("#slider-range0_2");

        // 不在範圍清空
        if (this.value == '') {
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else if (this.value < $slider.slider("values")[0]) {
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        } else if (this.value > $slider.slider("option", "max")) {
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else {
            $slider.slider("values", 1, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $slider.parents('fieldset').find('button').eq(0).text('預設');
            $(this).parents('fieldset').find('button').eq(0).removeClass('active');
            $(this).parents('fieldset').find('button').eq(1).hide();
        } else {
            $slider.parents('fieldset').find('button').eq(0).text($slider.slider('values')[0] + '年 ~ ' + $slider.slider('values')[1] + '年');
            $(this).parents('fieldset').find('button').eq(0).addClass('active');
            $(this).parents('fieldset').find('button').eq(1).show();
        }
    });

    // $("#slider-range0_3").slider({
    //     range: true,
    //     min: parseInt($("#slider-range0_3").parent().find('input').eq(0).attr('placeholder')),
    //     max: parseInt($("#slider-range0_3").parent().find('input').eq(1).attr('placeholder')),
    //     values: [parseInt($("#slider-range0_3").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range0_3").parent().find('input').eq(1).attr('placeholder'))],
    //     slide: function( event, ui ) {
    //         $("#slider-range0_3").parent().find('input').eq(0).val(ui.values[0]);
    //         $("#slider-range0_3").parent().find('input').eq(1).val(ui.values[1]);
    //         if(ui.values[0] == parseInt($(this).parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($(this).parent().find('input').eq(1).attr('placeholder'))  ){
    //             $(this).parents('fieldset').find('button').eq(0).text('不限');
    //         }else{
    //             $(this).parents('fieldset').find('button').eq(0).text(ui.values[0] + '仟元 ~ ' + ui.values[1] + '仟元');
    //         }
    //         sliderTooltip(event,ui,'仟元');
    //     },
    //     change: function( event, ui ) {
    //         $(ui.handle).find('.tooltip').hide();
    //     }

    // });

    // $("#slider-range0_3").parent().find('input').eq(0).on('change', function(event) {
    //     event.preventDefault();
    //     var $slider = $("#slider-range0_3");

    //     // 不在範圍清空
    //     if(this.value  > $slider.slider("values")[1]){
    //         this.value = $slider.slider("values")[1];
    //         $slider.slider("values", 0, this.value);
    //     }else if(this.value < $slider.slider("option", "min")){
    //         this.value = '';
    //         $slider.slider("values", 0, $slider.slider("option", "min"));
    //     }else{

    //         $slider.slider("values", 0, this.value);
    //     }

    //     if($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max") ){
    //         $(this).parents('fieldset').find('button').eq(0).text('不限');
    //     }else{
    //         $(this).parents('fieldset').find('button').eq(0).text($slider.slider('values')[0] + '仟元 ~ ' +$slider.slider('values')[1] + '仟元');
    //     }
    // });

    // $("#slider-range0_3").parent().find('input').eq(1).on('change', function(event) {
    //     event.preventDefault();

    //     var $slider = $("#slider-range0_3");

    //     // 不在範圍清空
    //     if(this.value == ''){
    //         $slider.slider("values", 1, $slider.slider("option", "max"));
    //     }else if(this.value  < $slider.slider("values")[0]){
    //         this.value = $slider.slider("values")[0];
    //         $slider.slider("values", 1, this.value);
    //     }else if( this.value > $slider.slider("option", "max")){
    //         this.value = '';
    //         $slider.slider("values", 1, $slider.slider("option", "max"));
    //     }else{
    //         $slider.slider("values", 1, this.value);
    //     }

    //     if($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max") ){
    //         $(this).parents('fieldset').find('button').eq(0).text('不限');
    //     }else{
    //         $(this).parents('fieldset').find('button').eq(0).text($slider.slider('values')[0] + '仟元 ~ ' +$slider.slider('values')[1] + '仟元');
    //     }
    // });

    $("#slider-range0_4").slider({
        range: true,
        min: parseInt($("#slider-range0_4").parent().find('input').eq(0).attr('placeholder')),
        max: parseInt($("#slider-range0_4").parent().find('input').eq(1).attr('placeholder')),
        values: [parseInt($("#slider-range0_4").parent().find('input').eq(0).attr('placeholder')), parseInt($("#slider-range0_4").parent().find('input').eq(1).attr('placeholder'))],
        slide: function (event, ui) {
            $("#slider-range0_4").parent().find('input').eq(0).val(ui.values[0]);
            $("#slider-range0_4").parent().find('input').eq(1).val(ui.values[1]);
            if (ui.values[0] == parseInt($(this).parent().find('input').eq(0).attr('placeholder')) && ui.values[1] == parseInt($(this).parent().find('input').eq(1).attr('placeholder'))) {
                $(this).parents('fieldset').find('button').eq(0).text('預設');
                $(this).parents('fieldset').find('button').eq(0).removeClass('active');
                $(this).parents('fieldset').find('button').eq(1).hide();
            } else {
                $(this).parents('fieldset').find('button').eq(0).text(ui.values[0] + '% ~ ' + ui.values[1] + '%');
                $(this).parents('fieldset').find('button').eq(0).addClass('active');
                $(this).parents('fieldset').find('button').eq(1).show();
            }
            sliderTooltip(event, ui, '%');

        },
        change: function (event, ui) {
            $(ui.handle).find('.tooltip').hide();
        }

    });

    $("#slider-range0_4").parent().find('input').eq(0).on('change', function (event) {
        event.preventDefault();
        var $slider = $("#slider-range0_4");

        // 不在範圍清空
        if (this.value > $slider.slider("values")[1]) {
            this.value = $slider.slider("values")[1];
            $slider.slider("values", 0, this.value);
        } else if (this.value < $slider.slider("option", "min")) {
            this.value = '';
            $slider.slider("values", 0, $slider.slider("option", "min"));
        } else {

            $slider.slider("values", 0, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $(this).parents('fieldset').find('button').eq(0).text('預設');
            $(this).parents('fieldset').find('button').eq(0).removeClass('active');
            $(this).parents('fieldset').find('button').eq(1).hide();
        } else {
            $(this).parents('fieldset').find('button').eq(0).text($slider.slider('values')[0] + '% ~ ' + $slider.slider('values')[1] + '%');
            $(this).parents('fieldset').find('button').eq(0).addClass('active');
            $(this).parents('fieldset').find('button').eq(1).show();
        }
    });

    $("#slider-range0_4").parent().find('input').eq(1).on('change', function (event) {
        event.preventDefault();

        var $slider = $("#slider-range0_4");

        // 不在範圍清空
        if (this.value == '') {
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else if (this.value < $slider.slider("values")[0]) {
            this.value = $slider.slider("values")[0];
            $slider.slider("values", 1, this.value);
        } else if (this.value > $slider.slider("option", "max")) {
            this.value = '';
            $slider.slider("values", 1, $slider.slider("option", "max"));
        } else {
            $slider.slider("values", 1, this.value);
        }

        if ($slider.slider('values')[0] == $slider.slider("option", "min") && $slider.slider('values')[1] == $slider.slider("option", "max")) {
            $(this).parents('fieldset').find('button').eq(0).text('預設');
            $(this).parents('fieldset').find('button').eq(0).removeClass('active');
            $(this).parents('fieldset').find('button').eq(1).hide();
        } else {
            $(this).parents('fieldset').find('button').eq(0).text($slider.slider('values')[0] + '% ~ ' + $slider.slider('values')[1] + '%');
            $(this).parents('fieldset').find('button').eq(0).addClass('active');
            $(this).parents('fieldset').find('button').eq(1).show();
        }
    });

});


// 其它的POPUP
$('.select b').on('click', function (e) {
    event.stopPropagation();

    if ($(this).parent().hasClass('without_move')) {
        return false;
    }

    $(this).parent().toggleClass('open');

    //只能打開一個下拉
    $.each($('.select').not($(this).parent()), function (index, el) {
        /* iterate through array or object */
        if ($(el).hasClass('open')) {
            $(el).removeClass('open');
        }
    });

    if ($(this).parent().hasClass('special_m_dividend')) {
        return false;
    }


    if ($(this).parents('.mobile').length == 1) {

        //移到可視範圍
        $(this).parents('.scrollbar').animate({
            scrollTop: $(this).parents('.scrollbar').prop('scrollHeight')
        }, 500);
    } else {
        //移到可視範圍
        $([document.documentElement, document.body]).animate({
            scrollTop: $(this).offset().top - 30
        }, 500);
    }

});

// 排除POPUP 裡的內容點擊後被關閉
$('.select').on('click', function (e) {
    event.stopPropagation();

});

// 點擊任何一個地方關閉 POPUP
$(document).click(function (event) {
    /* Act on the event */
    $.each($('.select'), function (index, el) {
        /* iterate through array or object */
        if ($(el).hasClass('open')) {
            $(el).removeClass('open');
        }
    });
});

// 半年展開 - 桌機版
$('.rate_select a i').on('click', function (e) {

    $(this).parent().parent().parent().toggleClass('open');

});


// 配息頻率 - 選取 & 取消選取操作 - 桌機版
$('.special_checkbox ').change(function (event) {
    /* Act on the event */

    if (!$('.special_dividend ').hasClass('open')) {
        $('.special_dividend ').addClass('open');
    }

    if ($(this).prop('checked')) {
        $('.special_dividend ').find('input[type=checkbox]').prop('checked', true);
    } else {
        $('.special_dividend ').find('input[type=checkbox]').prop('checked', false);
    }


});

$('.special_m_checkbox ').change(function (event) {
    /* Act on the event */
    if ($(this).prop('checked')) {
        if (!$('.special_m_dividend').hasClass('open')) {
            $('.special_m_dividend').addClass('open');
        }
        $('.special_m_dividend').find('input[type=checkbox]').prop('checked', true);

    } else {
        if ($('.special_m_dividend').hasClass('open')) {
            $('.special_m_dividend').removeClass('open');
        }
        $('.special_m_dividend').find('input[type=checkbox]').prop('checked', false);
    }

    // 程式改值無法觸發onchange 需額外處理
    if ($(this).parents('.special').find('input:checked').length == 0) {
        $(this).parents('fieldset').find('button').eq(2).text('預設');
    } else if ($(this).parents('.special').find('input:checked').length != $(this).parents('.special').find('input').length) {
        $(this).parents('fieldset').find('button').eq(2).text('自訂');
    } else {
        $(this).parents('fieldset').find('button').eq(2).text('預設');
    }
});

$('.identity ').on('change', function (event) {
    event.preventDefault();
    /* Act on the event */
    // console.log($(this).parents('fieldset').find('button'));
    if ($(this).parents('fieldset').find('input:checked').length != $(this).parents('fieldset').find('input').length) {
        $(this).parents('fieldset').find('button').eq(0).text('自訂');
        $(this).parents('fieldset').find('button').eq(0).addClass('active');
        $(this).parents('fieldset').find('button').eq(1).show();
    } else {
        $(this).parents('fieldset').find('button').eq(0).text('預設');
        $(this).parents('fieldset').find('button').eq(0).removeClass('active');
        $(this).parents('fieldset').find('button').eq(1).hide();
    }

});

$('.trade').on('change', function (event) {
    event.preventDefault();
    /* Act on the event */
    // console.log($(this).parents('fieldset').find('button'));
    if ($(this).parents('fieldset').find('input:eq(0):checked').length && !$(this).parents('fieldset').find('input:eq(1):checked').length) {
        $(this).parents('fieldset').find('button').eq(0).text('預設');
        $(this).parents('fieldset').find('button').eq(0).removeClass('active');
        $(this).parents('fieldset').find('button').eq(1).hide();
    } else {
        $(this).parents('fieldset').find('button').eq(0).text('自訂');
        $(this).parents('fieldset').find('button').eq(0).addClass('active');
        $(this).parents('fieldset').find('button').eq(1).show();
    }

});

$('.dt_identity').on('change', function (event) {
    event.preventDefault();
    /* Act on the event */
    if ($('.dt_identity:checked').length != $('.dt_identity').length) {
        $('.unlimited_identity').show();
    } else {
        $('.unlimited_identity').hide();
    }

});

$('.dt_trade').on('change', function (event) {
    event.preventDefault();
    /* Act on the event */
    if ($('.dt_trade:eq(0):checked').length && !$('.dt_trade:eq(1):checked').length) {
        $('.unlimited_trade').hide();
    } else {
        $('.unlimited_trade').show();
    }

});

$('.urrency').on('change', function (event) {
    event.preventDefault();
    /* Act on the event */
    if ($('.urrency:eq(0):checked').length && $('.urrency:eq(1):checked').length && $('.urrency:eq(2):checked').length && $('.urrency:eq(3):checked').length && !$('.urrency:eq(4):checked').length && !$('.urrency:eq(5):checked').length && !$('.urrency:eq(6):checked').length && !$('.urrency:eq(7):checked').length) {
        $('.unlimited_urrency').prev().text('預設');
        $('.unlimited_urrency').prev().removeClass('active');
        $('.unlimited_urrency').hide();
    } else {
        $('.unlimited_urrency').prev().text('自訂');
        $('.unlimited_urrency').prev().addClass('active');
        $('.unlimited_urrency').show();
    }

});

$('.dt_urrency').on('change', function (event) {
    event.preventDefault();
    /* Act on the event */
    if ($('.dt_urrency:eq(0):checked').length && $('.dt_urrency:eq(1):checked').length && $('.dt_urrency:eq(2):checked').length && $('.dt_urrency:eq(3):checked').length && !$('.dt_urrency:eq(4):checked').length && !$('.dt_urrency:eq(5):checked').length && !$('.dt_urrency:eq(6):checked').length && !$('.dt_urrency:eq(7):checked').length) {
        $('.unlimited_urrency').hide();
    } else {
        $('.unlimited_urrency').show();
    }

});

$('.frequency , .issued , .guarantee').on('change', function (event) {
    event.preventDefault();
    /* Act on the event */
    if ($(this).parents('fieldset').find('input[type=checkbox]:checked').length != $(this).parents('fieldset').find('input[type=checkbox]').length) {
        $(this).parents('fieldset').find('button').eq(2).text('自訂');
        $(this).parents('fieldset').find('button').eq(2).addClass('active');
        $(this).parents('fieldset').find('button').eq(3).show();
        $(this).parents('fieldset').find('button').eq(0).show();
    } else {
        $(this).parents('fieldset').find('button').eq(2).text('預設');
        $(this).parents('fieldset').find('button').eq(2).removeClass('active');
        $(this).parents('fieldset').find('button').eq(3).hide();
        $(this).parents('fieldset').find('button').eq(0).hide();
    }

});

$('.dt_issued').on('change', function (event) {
    event.preventDefault();
    /* Act on the event */
    if ($('.dt_issued:checked').length != $('.dt_issued').length) {
        $('.unlimited_issued').show();
    } else {
        $('.unlimited_issued').hide();
    }

});

$('.dt_guarantee').on('change', function (event) {
    event.preventDefault();
    /* Act on the event */
    if ($('.dt_guarantee:checked').length != $('.dt_guarantee').length) {
        $('.unlimited_guarantee').show();
    } else {
        $('.unlimited_guarantee').hide();
    }

});

$('.dt_frequency').on('change', function (event) {
    event.preventDefault();
    /* Act on the event */
    if ($('.dt_frequency:checked').length != $('.dt_frequency').length) {
        $('.unlimited_frequency').show();
    } else {
        $('.unlimited_frequency').hide();
    }

});



// 不限 - 捲軸式
$('.unlimited_rate,.unlimited_year,.unlimited_min_denomination,.unlimited_yield').on('click', function (event) {
    event.preventDefault();
    /* Act on the event */
    if ($(this).parents('.select').find('.ui-slider').length) {
        var $slider = $(this).parents('.select').find('.ui-slider');

    } else {
        var $slider = $(this).parents('fieldset').find('.ui-slider');

    }
    $slider.slider("values", 0, $slider.parent().find('input').eq(0).attr('placeholder'));
    $slider.slider("values", 1, $slider.parent().find('input').eq(1).attr('placeholder'));
    $slider.parent().find('input').eq(0).val('');
    $slider.parent().find('input').eq(1).val('');
    $(this).prev().text('預設');
    $(this).prev().removeClass('active');
    $(this).hide();
});

// 不限 - CHECKBOX要全選的格式
$('.unlimited_frequency , .unlimited_identity , .unlimited_issued ,.unlimited_guarantee, .unlimited_urrency').on('click', function (event) {
    event.stopPropagation();

    /* Act on the event */
    $(this).parent().parent().find('input[type=checkbox]').prop('checked', 'checked');
    $(this).hide();
    $(this).prev().removeClass('active');
    $(this).prev().text('預設');
});

$('.unlimited_guarantee , .unlimited_issued').on('click', function (event) {
    event.stopPropagation();

    /* Act on the event */
    $(this).parents('fieldset').find('input[type=checkbox]').prop('checked', 'checked');
    $(this).parents('fieldset').find('button').eq(2).text('預設');
    $(this).parents('fieldset').find('button').eq(2).removeClass('active');
    $(this).parents('fieldset').find('button').eq(3).hide();
    $(this).parents('fieldset').find('button').eq(0).hide();
});

$('.unlimited_urrency').on('click', function (event) {
    event.stopPropagation();

    /* Act on the event */
    $(this).parent().parent().find('input[type=checkbox]').prop('checked', '');
    $(this).parent().parent().find('input[type=checkbox]').eq(0).prop('checked', 'checked');
    $(this).parent().parent().find('input[type=checkbox]').eq(1).prop('checked', 'checked');
    $(this).parent().parent().find('input[type=checkbox]').eq(2).prop('checked', 'checked');
    $(this).parent().parent().find('input[type=checkbox]').eq(3).prop('checked', 'checked');
    $(this).hide();
    $(this).prev().removeClass('active');
    $(this).prev().text('預設');
});

$('.unlimited_trade').on('click', function (event) {
    event.stopPropagation();

    /* Act on the event */
    $(this).parent().parent().find('input[type=checkbox]').prop('checked', '');
    $(this).parent().parent().find('input[type=checkbox]').eq(0).prop('checked', 'checked');
    $(this).hide();
    $(this).prev().removeClass('active');
    $(this).prev().text('預設');
});


// 手機版展開幣別
$('.urrency_open').click(function (event) {
    /* Act on the event */
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).parent().find('.pad').hide();
    } else {
        $(this).addClass('open');
        $(this).parent().find('.pad').css('display', 'block');
    }
});

// Search功能
$('.search_issued').on('input', function (event) {
    event.preventDefault();
    /* Act on the event */
    if (this.value != '') {
        var temp_value = this.value;
        $.each($('.issued'), function (index, el) {
            /* iterate through array or object */
            if (this.value.indexOf(temp_value) == -1) {
                $(this).parent().hide();
            } else {
                $(this).parent().show();
            }

        });
    } else {
        $('.issued').parent().show();
    }
});

$('.search_guarantee').on('input', function (event) {
    event.preventDefault();
    /* Act on the event */
    if (this.value != '') {
        var temp_value = this.value;
        $.each($('.guarantee'), function (index, el) {
            /* iterate through array or object */
            if (this.value.indexOf(temp_value) == -1) {
                $(this).parent().hide();
            } else {
                $(this).parent().show();
            }

        });
    } else {
        $('.guarantee').parent().show();
    }
});

$('.select .popup .primary').on('click', function (e) {
    $(this).parent().parent().parent().removeClass('open');
});

$('.close .select b').on('click', function (e) {
    $(this).parent().removeClass('open');
});

$('.close i').on('click', function (e) {
    $('.close').hide();
});

$('.form #more').on('click', function (e) {
    $('.form .more').toggleClass('open');
    $(this).toggleClass('open');

    $('.form .more').css('overflow', 'hidden');

    if ($('.form .more').hasClass('open')) {
        setTimeout(function () {
            $('.form .more').css('overflow', 'visible');
        }, 100);
    }
});

$("#select").change(function () {
    $(".custom-select > span").text($(this).val());
});

$('.info > button').on('click', function (e) {
    $('.form.mobile').addClass('show');
    $('body').css('overflow', 'hidden');
    $('html,body').animate({
        scrollTop: 0
    }, 100);
});

$('.form.mobile > .title img,.foot .primary').on('click', function (e) {
    $('.form.mobile').removeClass('show');
    $('body').css('overflow', 'auto');
});

$('.search-list > div .btn > i').on('click', function (e) {
    $(this).parent().parent().parent().toggleClass('open');
});

$('.search-list > div .sm-btn').on('click', function (e) {
    $(this).parent().parent().toggleClass('open');
});

$('.custom-select-btn button').on('click', function (e) {
    $(this).toggleClass('turn');
});

$('#select').change(function () {
    if ($(this).val() == '排序依：票面利率') {
        $('.custom-select-btn button').removeClass('active');
        $('#select-btn1').addClass('active');
    } else if ($(this).val() == '排序依：到期日') {
        $('.custom-select-btn button').removeClass('active');
        $('#select-btn2').addClass('active');
    } else if ($(this).val() == '排序依：月漲跌') {
        $('.custom-select-btn button').removeClass('active');
        $('#select-btn3').addClass('active');
    } else if ($(this).val() == '排序依：最新參考市值') {
        $('.custom-select-btn button').removeClass('active');
        $('#select-btn4').addClass('active');
    } else if ($(this).val() == '排序依：投資人身分') {
        $('.custom-select-btn button').removeClass('active');
        $('#select-btn5').addClass('active');
    }
});