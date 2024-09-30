import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerService { 
    async execute ( {id}: DeleteCustomerProps) {

        if( !id ) {
            throw new Error("Id is required")
        }

        const Findcustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!Findcustomer) {
            throw new Error("Customer not found")
        }

        await prismaClient.customer.delete({
            where: {
                id: Findcustomer.id
            }
        })

        return {message: "Customer deleted successfully"};

    }

}


export { DeleteCustomerService }