import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const footerContacts = [
  {
    icon: <FaWhatsapp size={20} />,
    label: "+55 (15) 98841-1647",
    ariaLabel: "WhatsApp",
    link: "https://wa.me/5515988411647",
  },
  {
    icon: <CiMail size={20} />,
    label: "contato@tabinfo.com.br",
    ariaLabel: "E-mail",
    link: "mailto:contato@tabinfo.com.br?subject=Contato pelo site",
  },
  {
    icon: <FaInstagram size={20} />,
    label: "tabinfotecnologia",
    ariaLabel: "Instagram",
    link: "https://www.instagram.com/tabinfotecnologia",
  },
  {
    icon: <FaFacebookF size={20} />,
    label: "TabInfo Tecnologia",
    ariaLabel: "Facebook",
    link: "https://www.facebook.com/tabinfotecnologia",
  },
];

export function Footer() {
  return (
    <footer className="bg-primary px-4 py-9 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-9">
        <ul className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {footerContacts.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center gap-3 text-sm sm:text-base"
            >
              <a
                href={item.link}
                aria-label={item.ariaLabel}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-semibold"
              >
                {item.icon}
              </a>

              <a
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="break-words hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center text-sm sm:text-base">
          Copyright © 2026 TAB INFO TECNOLOGIA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
