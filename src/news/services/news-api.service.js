import axios from 'axios';
import {LogoApiService} from "../../shared/services/logo-api.service.js";

const http = axios.create({
    baseURL: 'http://newsapi.org/v2/',  //Parte repetida
})

export class NewsApiService{
    apiKey = '61360a6ae1cc4b1c9dffa3eff183b5c3';
    logoApi = new LogoApiService();

    //Metodo implementado para sources
    getSources(){
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`)
    }
    getArticlesForSource(sourceId){
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`)
    }

    getUrlToLogo(source){
        return this.logoApi.getUrlToLogo(source); //Aplicamos el patron delegate, solo para un solo servicio client.
    }


}