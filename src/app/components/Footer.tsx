const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-300 p-4 text-center">
      <div className="mx-auto max-w-5xl">
        <p>© 2025 Pede Apps. Todos os direitos reservados.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:underline">
            Sobre
          </a>
          <a href="#" className="hover:underline">
            Contato
          </a>
          <a href="#" className="hover:underline">
            Termos
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;