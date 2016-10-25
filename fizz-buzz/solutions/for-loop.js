function fizzBuzz(count, limit) {
    for (var i = count; i <= limit; i += 1) {
        var str = (
            (i % 3 == 0 ? "Fizz" : "") +
            (i % 5 == 0 ? "Buzz" : "")
        );

        console.log(str || i);
    }
}

fizzBuzz(1, 100);