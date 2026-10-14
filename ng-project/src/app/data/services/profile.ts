import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';

@Service()
export class Profile {
    http: HttpClient = inject(HttpClient)

    baseApiUrl = 'http://localhost:8000/'

    getDataApi(){
        const data = this.http.get(`${this.baseApiUrl}api/account/test_accounts`)
        return data
    }
}
