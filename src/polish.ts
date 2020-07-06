const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
};

let evaluate = (expr : string) => {
    let stack = [];

    expr.split(' ').forEach((token) => {
        if (token in operators) {
            let [y, x] = [stack.pop(), stack.pop()];
            stack.push(operators[token](x, y));
        } else {
            stack.push(parseFloat(token));
        }
    });

    return stack.pop();
};

console.log(evaluate("2 + 2"));