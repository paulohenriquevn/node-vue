import mongoose from 'mongoose';
import ClientSchema, { Client } from "../models/client";


export class FilterClient {
  name: string;
  page: number; 
  limit: number;
  sort: string;
}

export class ResultClient {
  data: Client[];
  totalPages: number;
  currentPage: number;
  total: number;
}

class ClientRepository {
  private model: mongoose.Model<Client>;

  constructor() {
    this.model = ClientSchema;
  }

  public find(filter: FilterClient): Client[] | null {
    return null;
  }

  async findBy(filter: FilterClient | null): Promise<ResultClient> {
    // const user: Client = {
    //   name: "Steve Jobs",
    //   totalValue: 1,
    //   firstDate: new Date()
    // };

    // const user: Client = {
    //   name: "Paulo",
    //   totalValue: 2,
    //   firstDate: new Date()
    // };

    // this.model.create(user)
    //   .then((dados) => dados)
    //   .catch(((err) => { throw new Error(err); }));

      const { name, page = 1, limit = 20, sort = 'firstDate' } = filter;

      const count = await ClientSchema.countDocuments();

    const query = {};
    if (name) {
        query.name = { $regex: '.*' + name + '.*', $options: 'i' }
    }

    return ClientSchema.find(query).limit(limit * 1)
    .skip((page - 1) * limit)
    .sort(sort)
    .then((data: Client[]) => {
      const items = data.map(function (p) {
        return p.toJSON()
      });
      const result = new ResultClient();
      result.data = items;
      result.currentPage = page;
      result.totalPages = Math.ceil(count / limit);
      result.total = count;
      return result;
    })
    .catch((error: Error) => {
      throw error;
    });
  }
}

export default ClientRepository;