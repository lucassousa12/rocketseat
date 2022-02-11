import { Summary } from "../Summary/Index";
import { TransactionTable } from "../TransactionTable/Index";
import { Container } from "./style";

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
}