import Client from "../models/client";


interface FilterClient {
	name: string;
}

class ClientRepository {
	public find(filter : FilterClient): Client[] | null {
		return null;
	}
}

export default ClientRepository;