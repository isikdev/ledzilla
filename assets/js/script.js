let menu = $('.navbar__mob-body');
$('.open').on("click", function () {
    menu.toggleClass('navbar__mob-body-active');
});
$('.close').on("click", function () {
    menu.toggleClass('navbar__mob-body-active');
});

$(document).ready(function () {
    $('#carBrand').on('input', function () {
        var inputText = $(this).val().trim();
        var suggestions = $('#carBrandSuggestions');

        if (inputText.length > 0) {
            $.ajax({
                url: 'https://api.cars-base.ru/cars',
                method: 'GET',
                data: {
                    full: 1
                },
                dataType: 'json',
                success: function (data) {
                    suggestions.empty(); // Очищаем предыдущие подсказки
                    $.each(data, function (index, item) {
                        var suggestion = $('<div>').text(item['mark-name']).addClass('suggestion');
                        suggestions.append(suggestion); // Выводим новые подсказки
                    });
                },
                error: function (xhr, status, error) {
                    console.error('Ошибка при получении подсказок:', error);
                }
            });
        } else {
            suggestions.empty(); // Очищаем подсказки, если поле ввода пустое
        }
    });
});