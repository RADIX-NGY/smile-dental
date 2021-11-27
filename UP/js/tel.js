
// ======================================= Use of jQuery 1. 2. 3. serie ======================================= 


/*--------------------------------------------------------------------------*
 *
 * phone Links
 *  
 *--------------------------------------------------------------------------*/



$(function() {
    if (!isPhone()) {
        return;
    }

    $('span[data-action=call]').each(function() {
        var $ele = $(this);		
        var telorg = $(this).text();
        if(telorg==""){
          var telorg = $(this).children('img').attr('alt');
        }
        var telfix = telorg.replace(/[^0-9]/g, '');		
        $ele.wrap('<a href="tel:' + telfix + '"></a>');
    });
});

function isPhone() {

    // Edgeを弾く
    if (navigator.userAgent.indexOf('Edge') >= 0) {
      return false;
    }

    // Android且つMobileだった場合、電話機とみなす
    if (navigator.userAgent.indexOf('Android') >= 0 && navigator.userAgent.indexOf('Mobile') >= 0) {
      return true;
    }

    // 最後はiPhoneかどうかを判定し、結果を返す
    return (navigator.userAgent.indexOf('iPhone') >= 0);
}


// html側に書き込む要素
// <span data-action="call">TEL:012-345-6789</span>
