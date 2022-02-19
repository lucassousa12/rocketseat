import express from 'express';
import { v4 as uuidv4 } from 'uuid';

declare global {
    namespace Express {
      interface Request {
          customer: CustomersProps; //or can be anythin
        }
    }
}

const app = express();

app.use(express.json());

interface CustomersProps {
    cpf: number, 
    name: string, 
    id: {}, 
    statement: statementOperationProps[]
}

interface statementOperationProps {
    amount: number;
    description?: string;
    createdAt: Date;
    type: string;
}

const customers: CustomersProps[] = [];

//Middleware
function verifyIfExistAcoountCpf(request: express.Request, response: express.Response, next: express.NextFunction) {
        const { cpf } = request.headers;
        const customer: CustomersProps | undefined = customers.find(customer => Number(customer.cpf) === Number(cpf));
    
        if(!customer) {
            return response.status(400).json({error: "customer not found"});
        } 
    
        request.customer = customer;
        
        next();

}

function getBalance(statement: any) {
    const balance = statement.reduce((acc: number, operation: statementOperationProps) => {
        if(operation.type == "credit") {
            return acc += operation.amount;
        } else {
            return acc -= operation.amount;
        }
    }, 0)

    return balance;
}

app.post("/account", (request, response) => {
    const {cpf, name} = request.body;

    const verificaCpf = customers.some((customer) => customer.cpf === cpf);

    if(verificaCpf) {
        return response.status(400).json({error: "Customer already exists"})
    }

    customers.push({
        cpf, 
        name, 
        id: uuidv4(), 
        statement: []
    })

    return response.status(201).send();
})

app.get("/statement", verifyIfExistAcoountCpf, (request, response) => {
    const { customer } = request;

    return response.json(customer?.statement);
})

app.post("/deposit", verifyIfExistAcoountCpf, (request, response) => {
    const { amount, description} = request.body;

    const { customer } = request;

    const statementOperation: statementOperationProps = {
        amount,
        description,
        createdAt: new Date(),
        type: "credit",
    }

    customer.statement.push(statementOperation);

    return response.status(201).send();
})

app.post("/withdraw", verifyIfExistAcoountCpf, (request, response) => {
    const { amount } = request.body;
    const { customer } = request;

    const balance = getBalance(customer.statement);

    if(balance < amount) {
        return response.status(400).json({error: "Saldo insuficiente para saque!"})
    } 

    const statementOperation: statementOperationProps = {
        amount,
        createdAt: new Date(),
        type: "withdraw",
    }

    customer.statement.push(statementOperation);

    return response.status(201).send();
})

app.get("/statement/date", verifyIfExistAcoountCpf, (request, response) => {
    const { customer } = request;
    const { date } = request.query;

    const dateFormat = new Date(date + " 00:00:00");

    const statementOfDate = customer.statement.filter((statement) => statement.createdAt.toDateString() === dateFormat.toDateString());

    return response.json(statementOfDate);
})

app.put("/account", verifyIfExistAcoountCpf, (request, response) => {
    const { customer } = request;
    const { name } = request.body;

    customer.name = name;

    return response.status(201).json(customer.name)
})

app.get("/account", verifyIfExistAcoountCpf, (request, response) => {
    const { customer } = request;
    return response.status(200).json(customer);
})

app.delete("/account", verifyIfExistAcoountCpf, (request, response) => {
    const { customer } = request;

    const customerIndexOf = customers.indexOf(customer);
    
    customers.splice(customerIndexOf, 1);

    return response.status(200).json({customers})
})

app.get("/balance", verifyIfExistAcoountCpf, (request, response) => {
    const { customer } = request;

    const balance = getBalance(customer.statement);

    return response.status(201).json({balance});
})

app.listen(3333);