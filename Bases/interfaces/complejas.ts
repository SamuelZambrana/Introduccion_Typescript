(() => {


    interface Client {
        name: string;
        age: number;
        address?: Address;
        getFullAddress?: (id: string) => string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Alejandro',
        age: 23,
        address: {
            id: 123456,
            zip: '12345',
            city: 'New York'
        },
        getFullAddress(id: string) {
            return this.address?.city || '';
        }
    }
})