import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  getList(pageNumber) {
    let url = "https://picsum.photos/v2/list?page=";

    url += pageNumber;

    return this.http.get(url);
  }
}
