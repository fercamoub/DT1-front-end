export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  expirationDate: string;
}
export interface ProductForm {
  name: string;
  price: number;
  stock: number;
  category: string;
  expirationDate: string;
}
export type Order = "asc" | "desc";

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Product;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Product
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
