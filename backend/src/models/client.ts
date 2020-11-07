// import mongoose from 'mongoose';
// import { uuid } from "uuidv4";

// interface IClient {
//   name: string;
//   totalValue: number;
//   firstDate: Date;
// }

// @Entity({ schema: 'clients', name: 'client' })
// class Client {
//   @PrimaryGeneratedColumn()
//   id: string;

//   @Column()
//   name!: string;

//   @Column()
//   totalValue!: number;

//   @Column()
//   firstDate!: Date;

//   // constructor({ name, totalValue, firstDate }: Omit<IClient, 'id'>) {
//   //   this.id = uuid();
//   //   this.name = name;
//   //   this.totalValue = totalValue;
//   //   this.firstDate = firstDate;
//   // }
// }

// export default Client;


// export interface DadosExternos extends mongoose.Document {
//   _id: string;
//   dados: unknown;
// }

// const DadosExternosSchema: mongoose.Schema = new mongoose.Schema({
//   _id: { type: mongoose.Types.ObjectId, auto: true },
//   dados: { type: Object, required: true },
// });

// export default mongoose.model<DadosExternos>('DadosExternos', DadosExternosSchema);