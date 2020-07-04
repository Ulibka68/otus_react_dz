//  Generics
//  ========

class Concatenator<T> {
    concatenateArray(inputArray: Array<T>): string {
        let returnString = "";

        for (let i = 0; i < inputArray.length; i++) {
            if (i > 0)
                returnString += ",";
            returnString += inputArray[i].toString();
        }
        return returnString;
    }
}

const stringConcat = new Concatenator<string>();
const numberConcat = new Concatenator<number>();

const concatResult = stringConcat.concatenateArray(
    ["first", "second", "third"]);
console.log(concatResult);

const stringArray: string[] = ["first", "second", "third"];
const numberArray: number[] = [1, 2, 3];
const stringResult =
    stringConcat.concatenateArray(stringArray);
const numberResult =
    numberConcat.concatenateArray(numberArray);

    // generates a compiler error
// let stringResult2 =
//     stringConcat.concatenateArray(numberArray);
// let numberResult2 =
//     numberConcat.concatenateArray(stringArray);

class MyClass {
    private _name: string;
    constructor(arg1: number) {
        this._name = arg1.toString() + "_MyClass";
    }
    toString(): string {
        return this._name;
    }
}

const myArray: MyClass[] = [
    new MyClass(1),
    new MyClass(2),
    new MyClass(3)];

const myArrayConcatentator = new Concatenator<MyClass>();
const myArrayResult =
    myArrayConcatentator.concatenateArray(myArray);
console.log(myArrayResult);


//  Constraining the type of T
//  ==========================

enum ClubHomeCountry {
    England,
    Germany
}

interface IFootballClub {
    getName(): string | undefined;
    getHomeCountry(): ClubHomeCountry | undefined;
}

abstract class FootballClub implements IFootballClub {
    protected _name: string | undefined;
    protected _homeCountry: ClubHomeCountry | undefined;
    getName() { return this._name }
    getHomeCountry() { return this._homeCountry }
}

class Liverpool extends FootballClub {
    constructor() {
        super();
        this._name = "Liverpool F.C.";
        this._homeCountry = ClubHomeCountry.England;
    }
}

class BorussiaDortmund extends FootballClub {
    constructor() {
        super();
        this._name = "Borussia Dortmund";
        this._homeCountry = ClubHomeCountry.Germany;
    }
}

class FootballClubPrinter<T extends IFootballClub>
    implements IFootballClubPrinter<T> {
    print(arg: T) {
        console.log(` ${arg.getName()} is ` +
            `${this.IsEnglishTeam(arg)}` +
            ` an English football team.`
        );
    }
    IsEnglishTeam(arg: T): string {
        if (arg.getHomeCountry() == ClubHomeCountry.England)
            return "";
        else
            return "NOT"
    }
}

const clubInfo = new FootballClubPrinter();
clubInfo.print(new Liverpool());
clubInfo.print(new BorussiaDortmund());


interface IFootballClubPrinter<T extends IFootballClub> {
    print(arg: T): void;
    IsEnglishTeam(arg: T): string;
}


//  Creating new objects
//  ====================


class FirstClass {
    id: number | undefined;
}

class SecondClass {
    name: string | undefined;
}

class GenericCreator<T> {
    create(arg1: { new(): T }): T {
        return new arg1();
    }
}
