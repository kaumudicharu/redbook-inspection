
    export function fetchAllUsers(){
        var apiUrl = 'https://jsonplaceholder.typicode.com/users';
        return fetch(apiUrl).then(res => res.json());
    }

    export function fetchUserById(id: string){
        var apiUrl = 'https://jsonplaceholder.typicode.com/users/'+ id;
        return fetch(apiUrl).then(res => res.json());
    }


