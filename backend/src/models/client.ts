import mongoose from 'mongoose';
export interface Client extends mongoose.Document {
  toJSON();
  _id: string;
  name: unknown;
  totalValue: number;
  firstDate: Date;
}

const formatarData = (valor: any): any => {
  return valor.toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '/');
}

const formatarMonetario = (valor: any): any => {
  return parseFloat(valor.toString()).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

const ClientSchema: mongoose.Schema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  totalValue: { type: mongoose.Types.Decimal128, required: true },
  firstDate: { type: Date, required: true },
}, {
  toJSON: {
    transform: function (doc, ret) {
      ret.firstDate = formatarData(ret.firstDate)
      ret.totalValue = formatarMonetario(ret.totalValue);
    }
  }
});

export default mongoose.model<Client>('client', ClientSchema);


