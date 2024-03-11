export interface User {
  userId: number;
  name: string;
  email: string;
  role: number;
  password: string;
  complaints: Complaint[];
}

export interface Product {
  productId: number;
  name: string;
  complaints: Complaint[];
}

export interface Complaint {
  id: number;
  productId: number;
  description: string;
  userId: number;
  status: number;
  user: User;
  product: Product;
}

export interface ComplaintTableProps {
  complaints: Complaint[];
  onResolve: (id: number) => void;
}
