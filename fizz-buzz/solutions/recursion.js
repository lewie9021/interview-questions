function fizzBuzz(count, limit) {
    if (count > limit)
        return;

    var str = (
        (count % 3 == 0 ? "Fizz" : "") +
        (count % 5 == 0 ? "Buzz" : "")
    );

    console.log(str || count);
    fizzBuzz(count + 1, limit)
}

fizzBuzz(1, 100);