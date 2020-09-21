// Напишите async flow который сходит в https://swapi.dev/api/people и сохранит данные в стейте

// Если у нас нет try..catch, асинхронная функция будет возвращать завершившийся с ошибкой промис (в состоянии rejected).
export async function getPeoples() {
    const response = await fetch("http://swapi.dev/api/people/", {
        method: "GET",
        mode: "cors",
        credentials: 'same-origin'
    });
    if (!response.ok) {
        throw new Error('Ответ сети был не ok.');
    }
    const data = await response.json();
    if (data.results)
        return data.results; // массив users
    else return [];
}

// использование - проверить ошибку
function a() {
    getPeoples()
        .then( peoples => { console.log(peoples)} )
        .catch(e => {
            console.log(`Error! ${e}`);
        //    задиспетчить error
        });
}

/*
{
    "count": 82,
    "next": "http://swapi.dev/api/people/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "http://swapi.dev/api/planets/1/",
            "films": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [
                "http://swapi.dev/api/vehicles/14/",
                "http://swapi.dev/api/vehicles/30/"
            ],
            "starships": [
                "http://swapi.dev/api/starships/12/",
                "http://swapi.dev/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "http://swapi.dev/api/people/1/"
        },

 */