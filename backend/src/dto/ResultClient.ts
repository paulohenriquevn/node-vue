import { Client } from "../models/client";

export class ResultClient {
  data: Client[];
  totalPages: number;
  currentPage: number;
  total: number;

  constructor(data: Client[], totalPages: number, currentPage: number, total: number) {
    this.data = data;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
    this.total = total;
  }
}
