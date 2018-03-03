$(function() {


		$('.quantity input').on('input change paste', function() {
		  $(this).val(this.value.replace(/[^0-9\-]/, '')); // запрещаем ввод любых символов, кроме цифр и знака минуса
		});

		$('.quantity > div').on('click', function() {
		  var input = $(this).closest('.quantity').find('input'); // инпут
		  var value = parseInt(input.val()) || 0; // получаем value инпута или 0
		  
		  if ($(this).hasClass('quantity-minus')) {
			value = value - 1; // вычитаем из value 1
		  }
		  if ($(this).hasClass('quantity-plus')) {
			value = value + 1; // прибавляем к value 1
		  }
		  input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
		});
		$('.checkbox').unbind("click").on('click', function (e) {
			$(this).toggleClass('active');
			return false;
		});
		
            $(".tabs_address").mCustomScrollbar({
            	theme:"dark"
            });
        $('.header_menu_mobile').on('click', function(e) {
        	$('.header_menu').slideToggle();
        });
});
