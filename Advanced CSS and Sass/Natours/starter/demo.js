function janNotation(arr) {
  let result = [];
  let currentEl = 0;
  let acc = 0;
  let final = 0;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (element != "+" && element != "-" && element != "*" && element != "/") {
      result.push(element);
    } else {
        acc = result.pop();
        currentEl = result.pop();
        result.push(calc(currentEl, element, acc));
        if (currentEl === undefined) {
            console.log(`Error: not enough operands!`);
            break;
        }
    }
  }
   if (result.length > 1) {
    console.log(`Error: too many operands!`);
   } else if (result.join(' ') != 'NaN') {
       console.log(result.join(' '));
   }

  function calc(currentEl, element, acc) {
    if (element === "+") {
      final = currentEl + acc;
    } else if (element === "-") {
      final = currentEl - acc;
    } else if (element === "*") {
      final = currentEl * acc;
    } else if (element === "/") {
      final = currentEl / acc;
    }
    return final;
  }
}

janNotation([3, 4, "+"]);
janNotation([5, 3, 4, "*", "-"]);
janNotation([2, 5, 3, 9, '*', '/', '*']);
janNotation([7, '-']);
