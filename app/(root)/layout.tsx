import Footer from "@/components/footer/footer";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 max-w-7xl lg:mx-auto p-5 md:px-10 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
