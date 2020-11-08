
export class FilterClient {
  name: string;
  page: number;
  limit: number;
  sort: string;

  constructor(name: string, page: number, limit: number, sort: string){
    this.name = name;
    this.page = page;
    this.limit = limit;
    this.sort = sort;
  }
}
