import { Header, SideNav } from "@/components";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-white flex-col h-screen">
      {/* Header */}
      <Header />
      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        {/* SideNav */}
        <div className="fixed inset-y-0 left-0 w-64 z-10">
          {/* Include your SideNav component here */}
          <SideNav />
        </div>
        {/* Main Content */}
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </div>
  );
}