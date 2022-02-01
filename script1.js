/* Область видимости переменных и отличие let от var */

/* переменная flag обьявлена глобально, поэтому ее будет видеть любая функция */
let flag = true;

function trueOrFalse() {
    if (flag) {
       document.writeln("Истина");
    }
    else {
        document.writeln("Ложь");
    }
}

function showFlag() {
    document.writeln(flag);
}

trueOrFalse();
document.writeln("<br>");
showFlag();