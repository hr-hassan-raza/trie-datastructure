// ComplaintTable.tsx
import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { ComplaintTableProps } from "../types/interfaces";

const ComplaintTable: React.FC<ComplaintTableProps> = ({
  complaints,
  onResolve,
}) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Description</Th>
          <Th>User Name</Th>
          <Th>Product Name</Th>
          <Th>Status</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {complaints.map((complaint) => (
          <Tr key={complaint.id}>
            <Td>{complaint.description}</Td>
            <Td>{complaint.user.name}</Td>
            <Td>{complaint.product.name}</Td>
            <Td>{complaint.status === 0 ? "Pending" : "Resolved"}</Td>
            <Td>
              {complaint.status === 0 && (
                <Button onClick={() => onResolve(complaint.id)}>Resolve</Button>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ComplaintTable;
