import mongoose from 'mongoose';
export interface Client extends mongoose.Document {
  toJSON();
  _id: string;
  name: unknown;
  totalValue: number;
  firstDate: Date;
  totalPages: number;
  currentPage: number;
}

const ClientSchema: mongoose.Schema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  totalValue: { type: mongoose.Types.Decimal128, required: true },
  firstDate: { type: Date, required: true },
}, {
  toJSON: {
    transform: function (doc, ret) {
      ret.firstDate = ret.firstDate.toLocaleDateString('pt-br');
      ret.totalValue = ret.totalValue.toString().toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    }
  }
});

export default mongoose.model<Client>('client', ClientSchema);