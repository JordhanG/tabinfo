const introParagraphs = [
  "Na nossa jornada de inovacao e criatividade, temos o orgulho de oferecer uma ampla gama de servicos sob medida para atender as necessidades unicas dos nossos clientes.",
  "Com uma equipe talentosa e experiente, estamos prontos para abracar desafios diversos e transformar conceitos em experiencias digitais envolventes e funcionais.",
  "Nossos servicos abrangem uma variedade de areas, incluindo:",
  "Aplicativos Mobile, Sistemas Web, Jogos com Realidade Aumentada e Online, E-Commerces e Sites Institucionais.",
  "Independentemente do tamanho ou complexidade do projeto, estamos comprometidos em oferecer solucoes de alta qualidade que superam as expectativas e impulsionam resultados tangiveis.",
];

const mobileFeatures = [
  "Potencialize o seu negocio com um aplicativo mobile personalizado!",
  "Na Tab Info, criamos solucoes sob medida para atender as suas necessidades especificas.",
  "Em um mundo cada vez mais conectado, ter um aplicativo mobile e mais do que uma tendencia: e uma necessidade estrategica.",
  "Capacite sua marca e alcance seu publico onde quer que estejam.",
  "Entre em contato conosco e leve sua presenca movel para o proximo nivel!",
];

const webFeatures = [
  "Introduzindo nosso mais recente servico: sistemas online de ultima geracao!",
  "Desenvolvemos solucoes sob medida para atender a todas as suas necessidades, utilizando linguagens de programacao de ponta.",
  "Acesse seus dados de forma rapida e segura em qualquer dispositivo, pois nossos sistemas permanecem na nuvem, garantindo a maxima protecao para suas informacoes.",
  "Explore a conveniencia e a seguranca dos sistemas online conosco!",
];

const realityFeatures = [
  "Descubra o futuro hoje!",
  "Na Tab Info, desvendamos os segredos da Realidade Aumentada, criando experiencias que desafiam a imaginacao.",
  "Explore o que esta por vir e mergulhe em um mundo onde a realidade e apenas o comeco.",
  "Deixe-nos guia-lo atraves dos maravilhas da RA.",
  "Junte-se a nos e transforme sua visao em realidade!",
];

const gamesFeatures = [
  "Prepare-se para mergulhar em aventuras emocionantes.",
  "Nossa equipe desenvolve jogos mobile que cativam criancas e adultos de todas as idades.",
  "Com graficos coloridos, jogabilidade envolvente, nossos jogos sao garantia de diversao para toda a familia.",
  "Explore um mundo de games conosco e descubra como podemos encantar seu publico, seja ele qual for.",
];

export function ServicesPage() {
  return (
    <div className="pt-16 text-text-primary">
      <section className="bg-linear-to-b from-[#E5F8FE] to-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="text-center text-3xl font-semibold text-primary-navy sm:text-4xl">
            NOSSOS SERVICOS
          </h1>

          <div className="mx-auto mt-8 max-w-5xl space-y-4 text-base font-medium leading-8 text-text-primary sm:text-lg">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
            <div className="relative mx-auto min-h-[430px] w-full max-w-md sm:min-h-[520px]">
              <img
                src="/services/leftMobile.svg"
                alt=""
                className="absolute left-0 top-12 w-[50%] opacity-85"
              />
              <img
                src="/services/rightMobile.svg"
                alt=""
                className="absolute right-0 top-12 w-[50%] opacity-85"
              />
              <img
                src="/services/frontMobile.svg"
                alt="Aplicativo mobile em smartphone"
                className="absolute left-1/2 top-0 z-10 w-[58%] -translate-x-1/2 drop-shadow-2xl"
              />
            </div>

            <article className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-2xl font-semibold text-orange sm:text-3xl">
                APLICATIVOS MOBILE
              </h2>
              <div className="mt-7 space-y-4 text-base font-medium leading-8 text-text-primary sm:text-lg">
                {mobileFeatures.map((feature) => (
                  <p key={feature}>{feature}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary-navy to-primary px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-center text-2xl font-semibold text-background-linear sm:text-3xl">
            SISTEMAS WEB
          </h2>

          <div className="relative mx-auto mt-10 min-h-[260px] w-full max-w-5xl sm:min-h-[380px] lg:min-h-[430px]">
            <img
              src="/services/leftWeb.svg"
              alt=""
              className="absolute left-0 top-[24%] w-[46%] opacity-65"
            />
            <img
              src="/services/rightWeb.svg"
              alt=""
              className="absolute right-0 top-[24%] w-[46%] opacity-65"
            />
            <img
              src="/services/frontWeb.svg"
              alt="Sistema web em painel administrativo"
              className="absolute left-1/2 top-0 z-10 w-[72%] -translate-x-1/2 drop-shadow-2xl"
            />
          </div>

          <div className="mt-6 space-y-4 text-base font-medium leading-8 sm:text-lg lg:mt-8">
            {webFeatures.map((feature) => (
              <p key={feature}>{feature}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2">
          <article className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              REALIDADE AUMENTADA
            </h2>
            <div className="mt-7 space-y-4 text-base font-medium leading-8 sm:text-lg">
              {realityFeatures.map((feature) => (
                <p key={feature}>{feature}</p>
              ))}
            </div>
          </article>

          <img
            src="/services/reality.svg"
            alt="Dinossauro em realidade aumentada"
            className="w-full rounded-lg object-cover shadow-sm"
          />

          <img
            src="/services/games.svg"
            alt="Jogo online em ambiente ilustrado"
            className="order-4 w-full rounded-lg object-cover shadow-sm lg:order-3"
          />

          <article className="order-3 flex flex-col justify-center lg:order-4">
            <h2 className="text-2xl font-semibold text-orange sm:text-3xl">
              JOGOS ONLINE
            </h2>
            <div className="mt-7 space-y-4 text-base font-medium leading-8 sm:text-lg">
              {gamesFeatures.map((feature) => (
                <p key={feature}>{feature}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
