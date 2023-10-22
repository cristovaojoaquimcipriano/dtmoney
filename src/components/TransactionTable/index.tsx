import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api
      .get("http://localhost:5173/api/transactions")
      .then((response) => console.log(response.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titlo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/04/2024</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- $1.100</td>
            <td>Casa</td>
            <td>20/02/2024</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
