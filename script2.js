/* Область видимости переменных и отличие let от var */

function isThePriceRight(cost) {
    /* Переменная total обьявленная через let в теле функции будет видна всем вложенным блокам */
    let total = cost + 1;

    if (total > 3) {
        /* переменная  warning обьявленная через let в блоке будет видна только в нем */
        //let warning = true;
        /* если изменить let на var то warning будет доступна alert который ниже и warning
        * будет инициализированно как undefined */
        var warning = true;
        alert(total);
    } else {
        alert("Вы ничего не ввели!");
    }

    /* у alert нет здесь доступа к пременной warning */
    alert(warning);
}

isThePriceRight();