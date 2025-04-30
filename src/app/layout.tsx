import Header from '@/app/components/header/Header';
import Footer from '@/app/components/Footer';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 flex-col md:flex-row">
          <aside className="hidden w-40 bg-gray-200 md:block">
            <div className="p-4 text-center">Área de Anúncios (Esquerda)</div>
          </aside>
          <main className="mx-auto w-full max-w-5xl flex-1 p-4 pt-40">{children}</main>
          <aside className="hidden w-40 bg-gray-200 md:block">
            <div className="p-4 text-center">Área de Anúncios (Direita)</div>
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;