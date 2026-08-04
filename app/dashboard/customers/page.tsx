import { Metadata } from "next";
import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page() {
  const customers = await fetchFilteredCustomers("");
  // console.log(customers);

  return <CustomersTable customers={customers}></CustomersTable>;
}
