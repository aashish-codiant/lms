import { Suspense } from "react";
import CustomersTable from "@/app/ui/customers/table";
export default async function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomersTable />
    </Suspense>
  );
}
