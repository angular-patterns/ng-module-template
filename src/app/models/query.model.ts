import { HttpParams } from "@angular/common/http";

export class Query {
    key: string;
    country: string;
    searchTerm: string;
    languagePreference: string;
    lastId: string;
    searchFor: string;
    orderBy: string;
    block: boolean;
    cache: boolean;
  
    constructor(term: string) {
      this.key = 'XU83-XE39-PG15-RW99';
      this.languagePreference = 'en';
      this.searchFor = 'Everything';
      this.orderBy = 'UserLocation';
      this.cache = true;
      this.block = true;
      this.searchTerm = term;
    }
    toParams(): HttpParams {
      var query = new Query(this.searchTerm);
      var params = new HttpParams();
      for(var key in query) {
        var value:string = query[key];      
        params = params.append(key, value)
      }
      return params;
    }
  }
  