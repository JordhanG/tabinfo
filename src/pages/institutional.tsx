import type { CSSProperties } from "react";
import { FaUser } from "react-icons/fa";

const values = [
  {
    title: "Valores",
    items: [
      "Regras de comportamento",
      "Nao sao palavras bonitas",
      "Definem como trabalhamos",
    ],
  },
  {
    title: "Foco no cliente",
    items: [
      "Entender antes de propor",
      "Gerar valor real",
      "Nunca empurrar solucao",
    ],
  },
  {
    title: "Responsabilidade",
    items: [
      "Cumprir o combinado",
      "Assumir erros",
      "Resolver problemas ate o fim",
    ],
  },
  {
    title: "Transparencia",
    items: [
      "Falar a verdade",
      "Alinhar expectativas",
      "Nada de promessas vazias",
    ],
  },
  {
    title: "Excelencia tecnica",
    items: ["Codigo limpo", "Evolucao constante", "Nada de mais ou menos"],
  },
  {
    title: "Nosso compromisso",
    items: [
      "Empresa solida",
      "Clientes bem atendidos",
      "Crescimento consistente",
    ],
  },
];

const thumbnails = [
  { src: "/institutional/tower1.svg", alt: "Fachada do escritorio" },
  { src: "/institutional/tower2.svg", alt: "Recepcao do escritorio" },
  { src: "/institutional/tower3.svg", alt: "Sala de reuniao" },
];

const orbitUsers = {
  outer: [
    { angle: 232, radius: 40 },
    { angle: 278, radius: 50 },
    { angle: 326, radius: 36 },
    { angle: 56, radius: 40 },
    { angle: 118, radius: 45 },
  ],
  middle: [
    { angle: 226, radius: 40 },
    { angle: 70, radius: 46 },
    { angle: 338, radius: 34 },
    { angle: 130, radius: 40 },
  ],
  inner: [
    { angle: 202, radius: 32 },
    { angle: 318, radius: 36 },
    { angle: 94, radius: 48 },
  ],
};

const orbitArcs = {
  outer: [
    { start: 242, length: 24 },
    { start: 294, length: 26 },
    { start: 350, length: 32 },
    { start: 70, length: 36 },
    { start: 146, length: 54 },
  ],
  middle: [
    { start: 234, length: 66 },
    { start: 24, length: 18 },
    { start: 78, length: 42 },
    { start: 164, length: 34 },
  ],
  inner: [
    { start: 222, length: 72 },
    { start: 8, length: 58 },
    { start: 124, length: 46 },
  ],
};

type OrbitUser = {
  angle: number;
  radius: number;
};

function getOrbitUserStyle({ angle, radius }: OrbitUser): CSSProperties {
  const radians = (angle * Math.PI) / 180;

  return {
    left: `${50 + Math.cos(radians) * radius}%`,
    top: `${50 + Math.sin(radians) * radius}%`,
  };
}

function UserBadge({
  className = "",
  user,
}: {
  className?: string;
  user: OrbitUser;
}) {
  return (
    <span
      className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={getOrbitUserStyle(user)}
    >
      <span className="institutional-orbit-keep-upright flex h-full w-full items-center justify-center rounded-full bg-primary-navy text-white shadow-md">
        <FaUser aria-hidden="true" />
      </span>
    </span>
  );
}

function OrbitLine({ arcs }: { arcs: { start: number; length: number }[] }) {
  const radius = 49;

  return (
    <svg
      className="absolute inset-0 h-full w-full overflow-visible text-primary-navy"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      {arcs.map((arc) => (
        <circle
          key={`${arc.start}-${arc.length}`}
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.45"
          strokeLinecap="round"
          pathLength="360"
          strokeDasharray={`${arc.length} 360`}
          transform={`rotate(${arc.start} 50 50)`}
        />
      ))}
    </svg>
  );
}

function AnimatedUserNetwork() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="institutional-orbit institutional-orbit-clockwise h-[80%] w-[80%]">
        <OrbitLine arcs={orbitArcs.outer} />
        {orbitUsers.outer.map((user) => (
          <UserBadge
            key={`${user.angle}-${user.radius}`}
            user={user}
            className="h-8 w-8 text-xs sm:h-11 sm:w-11 sm:text-sm"
          />
        ))}
      </div>

      <div className="institutional-orbit institutional-orbit-counter-clockwise h-[58%] w-[58%]">
        <OrbitLine arcs={orbitArcs.middle} />
        {orbitUsers.middle.map((user) => (
          <UserBadge
            key={`${user.angle}-${user.radius}`}
            user={user}
            className="h-7 w-7 text-[10px] sm:h-9 sm:w-9 sm:text-xs"
          />
        ))}
      </div>

      <div className="institutional-orbit institutional-orbit-clockwise h-[44%] w-[44%]">
        <OrbitLine arcs={orbitArcs.inner} />
        {orbitUsers.inner.map((user) => (
          <UserBadge
            key={`${user.angle}-${user.radius}`}
            user={user}
            className="h-7 w-7 text-[10px] sm:h-6 sm:w-6 sm:text-xs"
          />
        ))}
      </div>

      <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full bg-primary-navy text-3xl text-white shadow-xl ring-12 ring-primary-navy/10 sm:h-22 sm:w-22 sm:text-4xl sm:ring-16">
        <FaUser aria-label="Rede de usuarios" />
      </div>
    </div>
  );
}

export function InstitutionalPage() {
  return (
    <div className="pt-16 text-text-primary">
      <section className="bg-primary-navy px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="mx-auto w-full max-w-md lg:mx-0">
            <h1 className="text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              NOSSO ESPAÇO,
              <span className="block">
                NOSSA <span className="text-background-linear">CULTURA</span>
              </span>
            </h1>

            <address className="mt-8 max-w-xs text-sm not-italic leading-relaxed text-white/90">
              The One Tower, Sala 123
              <br />
              Av. Cassiano Ricardo, 601 - Sala 123 - Edificio The One
              <br />
              Parque Residencial Aquarius - Sao Jose dos Campos, SP
            </address>

            <div className="mt-8 flex gap-4">
              {thumbnails.map((item) => (
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  className="h-20 w-20 rounded-xl object-cover shadow-lg sm:h-24 sm:w-24"
                />
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl pb-12 sm:pb-16 lg:mx-0 lg:justify-self-end">
            <img
              src="/institutional/tower1.svg"
              alt="Entrada do edificio The One"
              className="aspect-[1.62] w-[86%] rounded-[30px] object-cover shadow-2xl"
            />
            <img
              src="/institutional/tower2.svg"
              alt="Ambiente interno do escritorio"
              className="absolute bottom-0 right-0 aspect-[0.75] w-[31%] rounded-3xl object-cover shadow-2xl ring-4 ring-primary-navy"
            />
          </div>
        </div>
      </section>

      <section className="bg-background-soft px-4 py-10 sm:px-6 lg:px-0">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="relative min-h-56 w-full overflow-hidden rounded-2xl bg-white px-10 py-10 shadow-sm lg:px-12">
            <img
              src="/institutional/montain.svg"
              alt=""
              className="pointer-events-none absolute -bottom-8 -left-10 w-56 opacity-100 sm:bottom-0 sm:left-4 sm:w-64 lg:w-45"
            />
            <div className="relative mx-auto max-w-xl">
              <h2 className="text-center text-3xl font-semibold text-primary-navy">
                MISSÃO
              </h2>
              <p className="mt-8 text-base font-medium leading-8 text-text-primary sm:text-lg">
                Desenvolver soluções tecnológicas sob medida que estruturam
                operações, reduzem falhas e dão controle para empresas crescerem
                com eficiência e segurança.
              </p>
            </div>
          </article>

          <article className="relative min-h-56 w-full overflow-hidden rounded-2xl bg-card-light/55 px-10 py-10 shadow-sm lg:px-12">
            <img
              src="/institutional/binocle.svg"
              alt=""
              className="pointer-events-none absolute -bottom-2 right-0 w-44 opacity-85 sm:w-56"
            />
            <div className="relative mx-auto max-w-xl">
              <h2 className="text-center text-3xl font-semibold text-background-linear">
                VISÃO
              </h2>
              <p className="mt-8 text-base font-medium leading-8 text-text-primary sm:text-lg">
                Ser reconhecida como uma empresa de referência no Brasil em
                soluções sob medida que estruturam e impulsionam o crescimento
                de médias e grandes empresas.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fff8f3] px-4 py-12 sm:px-6 lg:px-8">
        <img
          src="/institutional/diamond.svg"
          alt=""
          className="pointer-events-none absolute bottom-4 right-0 z-0 w-40 opacity-35 sm:w-48 lg:right-4 lg:w-52 lg:opacity-100"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <h2 className="text-center text-3xl font-semibold text-orange">
            VALORES
          </h2>

          <div className="mt-9 grid gap-x-14 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <section key={value.title}>
                <h3 className="text-lg font-semibold text-orange">
                  {value.title}
                </h3>
                <ul className="mt-3 space-y-2 text-base font-medium leading-7 text-text-primary">
                  {value.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold text-primary-navy sm:text-4xl">
              QUEM SOMOS
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base font-medium leading-8 text-text-primary sm:text-lg">
              <p>
                Somos mais do que uma empresa de desenvolvimento de softwares e
                aplicativos móveis.
              </p>
              <p>
                Transformamos ideias em experiências digitais reais, unindo
                inovação, tecnologia e criatividade para ajudar pessoas e
                empresas a alcançarem seu potencial no mundo digital.
              </p>
              <p>
                Nossa abordagem é colaborativa, centrada no cliente e focada em
                resultados. Cada projeto é desenvolvido com compromisso,
                excelência e atenção aos detalhes.
              </p>
              <p>
                Estamos sempre explorando novas tecnologias e soluções para
                criar produtos modernos, eficientes e impactantes.
              </p>
              <p>
                Junte-se a nós nessa jornada de transformação digital e leve
                suas ideias ainda mais longe.
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-[1.46] w-full max-w-lg overflow-hidden">
            <img
              src="/institutional/globalMap.svg"
              alt=""
              className="absolute inset-0 h-full w-full object-contain opacity-100"
            />
            <AnimatedUserNetwork />
          </div>
        </div>
      </section>
    </div>
  );
}
