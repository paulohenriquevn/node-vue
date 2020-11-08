import mongoose from 'mongoose';
import ClientSchema, { Client } from "../models/client";


export class FilterClient {
  name: string;
  page: number; 
  limit: number;
  sort: string;
}

class ClientRepository {
  private model: mongoose.Model<Client>;

  constructor() {
    this.model = ClientSchema;
  }

  public find(filter: FilterClient): Client[] | null {
    return null;
  }

  async findBy(filter: FilterClient | null): Promise<Client> {
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
      return data.map(function (p) {
        p.totalPages = Math.ceil(count / limit);
        p.currentPage = page;
        return p.toJSON()
      });
    })
    .catch((error: Error) => {
      throw error;
    });
  }
}

export default ClientRepository;