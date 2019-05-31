
    export function fetchAllPosts(){
        var apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        return fetch(apiUrl).then(res => res.json());
    }

    export function fetchPostById(id: string){
        var apiUrl = 'https://jsonplaceholder.typicode.com/posts/'+ id;
        return fetch(apiUrl).then(res => res.json());
    }


