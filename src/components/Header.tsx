import { useEffect, useState } from "react";

export type HeaderPage = "initial" | "institutional" | "services" | "clients";

interface HeaderProps {
  page: HeaderPage;
  setPage: (selectedPage: HeaderPage) => void;
}

interface MenuItemProps {
  label: string;
  page: HeaderPage;
}

const menuItems: MenuItemProps[] = [
  { label: "Início", page: "initial" },
  { label: "Institucional", page: "institutional" },
  { label: "Serviços", page: "services" },
  { label: "Clientes", page: "clients" },
];

export function Header({ page, setPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPage = page.toLowerCase();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute z-20 w-full bg-white">
      <div className="mx-auto flex max-h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <img
          src="/logo.svg"
          alt="Tab Info"
          className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
        />

        <nav
          aria-label="Navegação principal"
          className="hidden items-center justify-center gap-6 lg:flex"
        >
          {menuItems.map((item) => {
            const isActive = currentPage === item.page;

            return (
              <button
                key={item.page}
                aria-current={isActive ? "page" : undefined}
                className={`min-h-10 rounded-full px-4 text-base text-text-primary transition-colors hover:bg-card-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive ? "font-bold" : "font-normal"
                }`}
                type="button"
                onClick={() => setPage(item.page)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          className="hidden min-h-8 rounded-full bg-orange px-5 text-base font-semibold text-white transition-colors hover:bg-orange-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange lg:inline-flex lg:items-center"
          type="button"
        >
          Fale com um especialista!
        </button>

        <button
          aria-expanded={isMenuOpen}
          aria-label="Abrir menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:bg-card-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          onClick={() => setIsMenuOpen(true)}
          type="button"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
          </span>
        </button>
      </div>

      <button
        aria-label="Fechar menu"
        className={`fixed inset-0 z-40 bg-primary-deep/45 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        type="button"
      />

      <aside
        aria-hidden={!isMenuOpen}
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(82vw,320px)] flex-col bg-white px-5 py-4 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <img
            src="/logo.svg"
            alt="Tab Info"
            className="h-14 w-14 shrink-0 object-contain"
          />

          <button
            aria-label="Fechar menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-2xl leading-none text-text-primary transition-colors hover:bg-card-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          >
            ×
          </button>
        </div>

        <nav
          aria-label="Navegação principal mobile"
          className="mt-8 flex flex-col gap-3"
        >
          {menuItems.map((item) => {
            const isActive = currentPage === item.page;

            return (
              <button
                key={item.page}
                aria-current={isActive ? "page" : undefined}
                className={`min-h-12 rounded-full px-4 text-left text-base text-text-primary transition-colors hover:bg-card-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive ? "font-bold" : "font-medium"
                }`}
                onClick={() => {
                  setPage(item.page);
                  setIsMenuOpen(false);
                }}
                type="button"
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          className="mt-8 min-h-11 rounded-full bg-orange px-5 text-sm font-semibold text-white transition-colors hover:bg-orange-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          onClick={() => setIsMenuOpen(false)}
          type="button"
        >
          Fale com um especialista!
        </button>
      </aside>
    </header>
  );
}
