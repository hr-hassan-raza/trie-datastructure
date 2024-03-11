// App.tsx
import React, { useEffect, useState } from "react";
import ComplaintTable from "../pages/ComplaintTable";
import { Complaint } from "../types/Interfaces";
import { useToast } from "@chakra-ui/react";
import { AppConfig } from "../AppConfig";

export const ComplaintComponent: React.FC = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const toast = useToast();

  useEffect(() => {
    fetch(`${AppConfig.baseUrl}/complaints`)
      .then((response) => response.json())
      .then((data) => setComplaints(data));
  }, [complaints]);

  const resolveComplaint = async (id: number) => {
    try {
      const response = await fetch(`${AppConfig.baseUrl}/complaint/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Status: "Resolved",
        }),
      });

      if (!response.ok) {
        toast({
          title: "Error in resolving complaint",
          description: "Error in resolving complaint",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      toast({
        title: "Complaint resolved",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: any) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <ComplaintTable complaints={complaints} onResolve={resolveComplaint} />
  );
};

export default ComplaintComponent;
