function sayGoodBye() {

    alert("Говорю тебе пока!");

    function sayHello() {
        alert("Говорю тебе привет!");
    }

    return sayHello;
}

let something = sayGoodBye();
//alert(something);
something();
/* С точки зрения переменной something внешняя функция youSayGood Bye
просто исчезает. Так как теперь переменная something указывает на
функцию, вы можете активировать эту функцию, вызвав ее, как обычно,
с помощью открывающих и закрывающих скобок: */