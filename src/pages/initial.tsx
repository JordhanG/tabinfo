import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const serviceCards = [
  {
    image: "/home/appmobile.svg",
    alt: "Aplicativos mobile",
    title: "Aplicativos mobile",
    description:
      "Aplicativos m\u00f3veis sob medida para atender \u00e0s necessidades exclusivas de cada cliente",
  },
  {
    image: "/home/websystems.svg",
    alt: "Sistemas web",
    title: "Sistemas web",
    description:
      "Desenvolvimento de sistemas web personalizados \u00e0 cada demanda",
  },
  {
    image: "/home/gamesonline.svg",
    alt: "Jogos online",
    title: "Jogos online",
    description:
      "Transformamos ideias em realidade com nossos jogos online customizados",
  },
];

export function InitialPage() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const showPreviousService = () => {
    setActiveServiceIndex((currentIndex) =>
      currentIndex === 0 ? serviceCards.length - 1 : currentIndex - 1,
    );
  };

  const showNextService = () => {
    setActiveServiceIndex((currentIndex) =>
      currentIndex === serviceCards.length - 1 ? 0 : currentIndex + 1,
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveServiceIndex((currentIndex) =>
        currentIndex === serviceCards.length - 1 ? 0 : currentIndex + 1,
      );
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="relative">
      <section className="relative flex w-full flex-col overflow-hidden bg-linear-to-b from-background to-background-linear">
        <div className="mx-auto flex w-full justify-center px-0 pt-16 sm:pt-20 lg:pt-6">
          <img
            src="/home/firstImage.png"
            alt="Tecnologia que transforma"
            className="h-auto w-full object-contain object-center"
          />
        </div>

        <motion.svg
          className="absolute -bottom-px left-0 h-14 w-full sm:h-24 lg:h-30"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          initial={{ y: 60 }}
          animate={{ y: 0 }}
          transition={{ duration: 0, ease: "easeOut" }}
        >
          <motion.path
            d="M0,65 C260,20 460,120 720,135 C980,150 1190,85 1440,45 L1440,160 L0,160 Z"
            fill="#FFFFFF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0, delay: 0 }}
          />
        </motion.svg>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-start lg:gap-16">
          <h1 className="max-w-xl text-3xl font-semibold leading-tight text-primary-deep sm:text-4xl lg:text-5xl">
            EXPLORE O FUTURO
          </h1>

          <p className="max-w-full text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            Bem-vindo à vanguarda da inovação tecnológica! Na Tab Info,
            mergulhamos no mundo digital para criar experiências incríveis em
            software, aplicativos mobile e jogos de realidade aumentada. Somos
            apaixonados por transformar ideias em realidade digital,
            proporcionando interações envolventes e imersivas para nossos
            clientes.
          </p>
        </div>

        <div className="px-4 py-14 sm:px-10 sm:py-20 lg:hidden">
          <div className="mx-auto w-full max-w-96 overflow-visible">
            <div className="relative h-92">
              <button
                aria-label="Mostrar servi\u00e7o anterior"
                className="absolute left-0 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-deep shadow-lg transition hover:-translate-x-1 hover:shadow-xl"
                onClick={showPreviousService}
                type="button"
              >
                <IoChevronBack aria-hidden="true" className="h-5 w-5" />
              </button>

              <button
                aria-label="Mostrar pr\u00f3ximo servi\u00e7o"
                className="absolute right-0 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-deep shadow-lg transition hover:translate-x-1 hover:shadow-xl"
                onClick={showNextService}
                type="button"
              >
                <IoChevronForward aria-hidden="true" className="h-5 w-5" />
              </button>

              {serviceCards.map((card, index) => {
                const position =
                  (index - activeServiceIndex + serviceCards.length) %
                  serviceCards.length;
                const isActive = position === 0;
                const xOffset =
                  position === 1 ? 124 : position === 2 ? -124 : 0;
                const yOffset = isActive ? -14 : 42;
                const scale = isActive ? 1 : 0.78;
                const opacity = isActive ? 1 : 0.42;
                const zIndex = isActive ? 30 : position === 1 ? 20 : 10;

                return (
                  <div
                    className={`card absolute left-1/2 top-2 flex h-80 w-[calc(100%-2rem)] max-w-80 cursor-pointer flex-col items-center justify-center gap-6 rounded-4xl bg-card-light p-8.5 transition-all duration-700 ease-in-out hover:-translate-y-3 ${
                      isActive
                        ? "shadow-[0_28px_60px_rgba(0,0,0,0.24)]"
                        : "shadow-md"
                    }`}
                    key={card.title}
                    onClick={() => setActiveServiceIndex(index)}
                    style={{
                      opacity,
                      transform: `translateX(calc(-50% + ${xOffset}px)) translateY(${yOffset}px) scale(${scale})`,
                      zIndex,
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="h-auto w-[40%] object-contain object-center"
                    />
                    <h2 className="text-2xl font-semibold tracking-wide text-primary-deep">
                      {card.title}
                    </h2>
                    <p className="text-center tracking-wide text-primary-deep">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {serviceCards.map((card, index) => (
                <button
                  aria-label={`Servi\u00e7o ${index + 1}: ${card.title}`}
                  className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                    activeServiceIndex === index
                      ? "w-8 bg-primary-deep"
                      : "w-2.5 bg-primary-deep/25"
                  }`}
                  key={card.title}
                  onClick={() => setActiveServiceIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-around gap-8 px-4 py-14 sm:px-10 sm:py-20 lg:flex lg:flex-row">
          {serviceCards.map((card) => (
            <div
              className="card flex h-80 w-full max-w-80 flex-col items-center justify-center gap-6 rounded-4xl bg-card-light p-8.5 transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl"
              key={card.title}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="h-auto w-[40%] object-contain object-center"
              />
              <h2 className="text-2xl font-semibold tracking-wide text-primary-deep">
                {card.title}
              </h2>
              <p className="text-center tracking-wide text-primary-deep">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background-soft px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-wide text-primary-deep sm:text-4xl">
              APLICATIVOS
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-text-primary">
              <p>
                Desenvolvemos aplicativos sob medida para transformar ideias em
                soluções digitais modernas, intuitivas e eficientes. Criamos
                experiências completas para Android e iOS, unindo design,
                tecnologia e performance para atender às necessidades do seu
                negócio e dos seus usuários.
              </p>

              <p>
                Do planejamento à publicação, nossa equipe acompanha cada etapa
                do projeto, desenvolvendo aplicativos funcionais, seguros e
                escaláveis, sempre com foco em usabilidade, inovação e
                resultados reais.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/home/cellphone.svg"
              alt="Aplicativo mobile desenvolvido pela Tab Info"
              className="soft-edge-image h-auto w-full max-w-140 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/home/realidadeaumentada.svg"
              alt="Experiência de realidade aumentada"
              className="h-auto w-full max-w-90 object-contain sm:max-w-105"
            />
          </div>

          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-wide text-primary-deep sm:text-4xl">
              REALIDADE AUMENTADA
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-text-primary">
              <p>
                Explore novas dimensões com nossos jogos e aplicativos
                customizados em realidade aumentada.
              </p>

              <p>
                Levamos a experiência de uso a um novo patamar, criando
                interações envolventes e imersivas.
              </p>

              <p>
                Descubra um mundo onde a realidade se funde com a imaginação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full flex justify-end">
        <div className="relative w-full max-w-400 overflow-hidden rounded-tl-4xl bg-primary-navy px-5 py-12 sm:px-10 lg:min-h-107.5 lg:px-34 lg:py-20">
          <div className="relative z-10 max-w-3xl text-white lg:max-w-160">
            <h2 className="text-3xl font-semibold tracking-wide sm:text-4xl">
              ENTRE EM CONTATO CONOSCO
            </h2>

            <div className="mt-8 space-y-4 text-base leading-7 text-white/90">
              <p>Venha fazer parte do mundo digital você também!</p>
              <p>
                Preencha o formulário abaixo e entre em contato conosco para
                receber um orçamento personalizado e descobrir como podemos
                atender às suas necessidades.
              </p>
            </div>

            <form className="mt-5 grid gap-3" noValidate>
              <div className="grid gap-3 md:grid-cols-3">
                <input
                  aria-label="Digite seu nome"
                  className="input input-bordered h-9 min-h-9 w-full border-white/70 bg-transparent text-sm text-white placeholder:text-white/85 focus:border-white focus:outline-white"
                  placeholder="Digite seu nome"
                  type="text"
                />
                <input
                  aria-label="Digite seu e-mail"
                  className="input input-bordered h-9 min-h-9 w-full border-white/70 bg-transparent text-sm text-white placeholder:text-white/85 focus:border-white focus:outline-white"
                  placeholder="Digite seu e-mail"
                  type="email"
                />
                <input
                  aria-label="Digite seu telefone"
                  className="input input-bordered h-9 min-h-9 w-full border-white/70 bg-transparent text-sm text-white placeholder:text-white/85 focus:border-white focus:outline-white"
                  placeholder="Digite seu telefone"
                  type="tel"
                />
              </div>

              <textarea
                aria-label="Mensagem"
                className="textarea textarea-bordered min-h-24 w-full resize-none border-white/70 bg-transparent text-sm text-white placeholder:text-white/85 focus:border-white focus:outline-white"
                placeholder="Mensagem"
              />

              <div className="flex justify-center pt-3 md:justify-end">
                <button
                  className="btn h-11 min-h-11 w-full max-w-56 rounded-lg border-none bg-orange text-base font-medium text-white hover:bg-orange-light"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <img
        src="/contato.svg"
        alt="Especialista da Tab Info em contato pelo celular"
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[112%] max-h-180 w-auto object-contain object-bottom lg:block"
      />
    </main>
  );
}
