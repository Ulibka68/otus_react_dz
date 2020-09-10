// https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)
// https://stackoverflow.com/a/28032438/10828885

// import logger from "redux-logger";

function spawn<A, P, G>(generator: (...args: A[]) => Generator<G>) {
    return (
        (...args: A[]): Promise<P> => {
            const iter = generator(...args);

            return Promise.resolve()
                .then(
                    function onValue(lastValue): P | Promise<P> {
                        const result = iter.next(lastValue);

                        const {done, value} = result;

                        if (done) {
                            // generator done, resolve promise
                            return value;
                        }
                        return Promise.resolve(value)
                            .then(
                                onValue,  // resolve
                                iter.throw.bind(iter) // reject
                            ) as Promise<P>; // repeat
                    });
        }
    );
}


const fetchSomething = (val: string, ms = 500) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(val), ms);
    });

type spawnParameterGeneratorType<A, G> = (...args: A[]) => Generator<G>;

const spawnParameterGenerator: spawnParameterGeneratorType<number, Promise<any>> = function* (a: number, b: number) {
    const val1 = yield  fetchSomething('aa' + a);
    const val2 = yield  fetchSomething('bb' + b);
    return [val1, val2];
}


const ourImportantFunction = spawn(function* () {
    const val1 = yield fetchSomething('val1', 2000);
    console.log('val1 : ', val1);
    const val2 = yield fetchSomething('val2');
    console.log('val2 : ', val2);
    const val3 = yield fetchSomething('val3');
    console.log('val3 : ', val3);

    return [val1, val2, val3];
});

async function testRun() {
    const result = await ourImportantFunction();
    console.log(result);
    // expect(result).toStrictEqual(["value", "value", "value"]);
}

async function testRun2() {
    const spn = spawn(spawnParameterGenerator);
    const result = await spn(11, 22);
    console.log('testRun2 : ', result);
}

function testRun3() {
    console.log('testRun3');
    Promise.resolve()
        .then(
            function onValue(lastValue) {
                console.log('testRun3 lastValue : ', lastValue);
            }
        );
}

// testRun();
// testRun2();
// testRun3();
