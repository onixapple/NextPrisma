import { Nav, NavLink } from "@/components/Nav";

export default function AdminLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {


    return <>
        <Nav>
            <NavLink href="/admin">Dashboard</NavLink>
            <NavLink href="/admin/produts">Products</NavLink>
            <NavLink href="/admin/users">Customers</NavLink>
            <NavLink href="/admin/orders">Orders</NavLink>
        </Nav>
        <div className="containre my-6">{children}</div>
    </>
}