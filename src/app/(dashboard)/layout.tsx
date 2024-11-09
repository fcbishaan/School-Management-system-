export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen flex">
          {/* Left*/}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  bg-blue-300">l</div>
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-red-400">r</div>
        </div>
      
    );
  }