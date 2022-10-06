// Hay que agregar la dependencia de axios ```yarn add axios```
// import axios from 'axios';

import { HttpClient } from "./open-close-c";


export class TodoService {
    
    constructor(public http: HttpClient){}

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor(public http: HttpClient){}

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor(public http: HttpClient){}

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}