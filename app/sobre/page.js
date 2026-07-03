import LinksLogotype from "../components/icons/LinksLogotype";
import Timeline from "../components/Timeline";
import TypingCycler from "../components/TypingCycler";
import Button from "../components/Button";
import SectionPill from "../components/SectionPill";
import Accordion from "../components/Accordion";

export const metadata = {
  title: "sobre",
  description: "O que é Links Amarelos e quem está por trás.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "sobre • links amarelos",
    description: "O que é Links Amarelos e quem está por trás.",
    url: "/sobre",
  },
  twitter: {
    title: "sobre • links amarelos",
    description: "O que é Links Amarelos e quem está por trás.",
  },
};

const timeline = [
  {
    ano: "setembro de 2025",
    titulo: "links amarelos #1",
    desc: "Vai ao ar a primeira coleção dos melhores links do mês.",
    href: "https://amarelodandara.substack.com/links-amarelos-1",
    cta: "leia no Substack",
  },
  {
    ano: "janeiro de 2026",
    titulo: "ondas amarelas",
    desc: "Os links amarelos ganham voz!",
    href: "https://amarelodandara.substack.com",
    cta: "Ouça no Spotify",
  },
  {
    ano: "junho de 2026",
    titulo: "linksamarelos.com vai ao ar",
    desc: "Sejam bem vindos ao CEP dos linksamarelos na internet.",
  },
  {
    ano: "em breve",
    titulo: "muito mais",
    desc: "Novas realizações amarela estão a caminho",
    href: "/realizacoes",
    cta: "ver realizações",
  },
];

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-(--sun) w-full md:max-w-4xl md:mx-auto border border-sun divide-y divide-sun">
      {/* Header */}
      <section className="space-y-6 px-8 py-16">
        <SectionPill>sobre</SectionPill>

        <h1 className="font-unbounded text-4xl md:text-6xl text-sun-lighter tracking-tight leading-tight">
          links amarelos<br></br>e muito mais
        </h1>
        <p className="font-manrope text-xl text-sun-lighter max-w-xl leading-relaxed">
          Curadorias que te levam aos lugares lindos que a internet ainda tem
          pra oferecer e você se esqueceu.
        </p>
      </section>

      {/* O que é */}
      <section className="bg-sun-light divide-y divide-sun">
        <Accordion
          numero="01"
          nome="Links Amarelos"
          explainer="A curadoria mensal que começou tudo, direto na sua caixa de entrada"
        >
          <p className="font-manrope leading-relaxed p-6">
            Uma newsletter mensal que reúne o melhor que uma designer altamente
            técnica, careca, negra e personality hire encontrou por aí.
          </p>
        </Accordion>

        <Accordion
          numero="02"
          nome="Ondas Amarelas"
          explainer="Quando os links amarelos ganham voz, todo mês no seu ouvidor de áudio favorito"
        >
          <p className="font-manrope leading-relaxed p-6">
            O que acontece quando os links amarelos ganham voz! Uma versão
            expandida da conversa também lançada mensalmente no seu ouvidor de
            áudio favorito.
          </p>
        </Accordion>

        <Accordion
          numero="03"
          nome="Hyperlinks Amarelos"
          explainer="Quando um link é grande demais pra caber em uma edição ou episódio"
        >
          <p className="font-manrope leading-relaxed p-6">
            Quando um link extrapola os limites de uma newsletter e não consegue
            conviver com outras recomendações em um podcast de meia hora, ele
            ganha um espaço dedicado em forma de ensaio por áudio.
          </p>
        </Accordion>
      </section>

      {/* Timeline */}
      <section className="bg-sun-light">
        <div className="border-b border-sun pt-16">
          <p className="uppercase text-sun font-unbounded px-8 pb-2">
            Como chegamos aqui
          </p>
        </div>
        <div className="px-8 py-12">
          <Timeline items={timeline} />
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="bg-sun-light">
        <div className="px-8 py-16 space-y-10">
          <div className="font-manrope text-sm w-3/4 space-y-10">
            {/* Intro */}
            <div className="space-y-5">
              <p>
                Links podem começar com qualquer coisa, mas acho que esquecemos
                disso. Hoje em dia todos os links começam com{" "}
                <span className="font-space-mono bg-sun px-1">
                  https://
                  <TypingCycler />
                </span>
                .
              </p>
              <p>
                Mas aqui não. Aqui eles começam com profundidade, pertencem a
                qualquer mídia e se sustentam com o apoio de vocês.
              </p>
              <p>
                Os links amarelos, as ondas amarelas, e o que mais sair disso,
                são uma contribuição para que passemos mais tempo na internet
                como o nosso bairro e não como o shopping deles.
              </p>
              <p>
                Tudo o que fazemos para que isso aconteça, se apoia em quatro
                princípios:
              </p>
            </div>

            {/* Princípio 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">
                Profundo e Otimista
              </h3>
              <p>
                Enquanto o resto da internet estiver preocupado com resumir,
                cortar e viralizar, aqui eu vou me preocupar com respirar fundo,
                com rolar até o fim da página e priorizar a mensagem. Isso
                envolve contar a mensagem na mídia que ela precisa e não na mais
                rápida, contar com calma e contar com fontes.
              </p>
              <p>
                Essa profundidade vai ser feita com otimismo. É fácil achar o
                lado ruim das coisas, é mais fácil ainda se beneficiar dele. É
                muito mais difícil discutir pontos que não explodiram em
                vermelho essa semana, mas que ninguém vai se lembrar semana que
                vem. Felizmente os links são amarelos, não vermelhos ou sequer
                laranjas.
              </p>
            </div>

            {/* Princípio 2 */}
            <div className="space-y-4">
              <h3 className="font-unbounded text-xl text-brand-black tracking-tight">
                Presente e Multimídia
              </h3>
              <p>
                A internet é mais que texto e imagem, vídeo curto e propaganda.
                Eu procuro por elementos inusitados, por histórias sendo
                contadas sem som, com muito som ou só com o teclado. O amarelo
                mora nelas.
              </p>
              <p>
                E eu amo a internet, mas o mundo não acaba aqui. Eu encontro
                pessoas que são otimistas e as apoio com profundidade no mundo
                real, no mundo físico, no mundo impresso, nas letras e nas
                ondas.
              </p>
            </div>

            {/* Princípio 3 */}
            <div className="space-y-4">
              <h3 className="font-unbounded text-xl text-brand-black tracking-tight">
                Auto-sustentável e Expansivo
              </h3>
              <p>
                A curadoria não começou com a primeira edição da newsletter e
                não vai parar se um dia ela acabar. Tudo isso é apenas a minha
                maneira de alcançar ainda mais pessoas que se interessam por
                ela. A melhor maneira de manter essa transmissão rodando é
                escolher o caminho mais eficiente, mais longevo e mais honesto.
                Mesmo que ele também seja o mais engenhoso.
              </p>
              <p>
                A melhor maneira de expandi-lo é com consistência, transparência
                e vivendo o resto da minha vida porque tem muitas outras cores
                por aí.
              </p>
            </div>

            {/* Princípio 4 */}
            <div className="space-y-4">
              <h3 className="font-unbounded text-xl text-brand-black tracking-tight">
                Apoiado e Apoiador
              </h3>
              <p>
                Todo apoio dado a esse projeto me dá a simples chance de:
                continuar brincando. O meu único interesse é que toda iniciativa
                amarela sempre tenha chance de parar de pé quando for lançada
                pra cima e, se precisar, deixada sozinha.
              </p>
              <p>
                E enquanto me seguram de pé, impulsionarei outros pra cima.
                Sempre procurarei oportunidades de apoiar, retribuir, e dar o
                elogio que alguém precisa pra continuar fazendo o que ama e o
                que sabe. Se precisar de mim, é só me chamar.
              </p>
            </div>

            {/* Fechamento */}
            <div className="space-y-8 pt-4 border-t border-sun-light">
              <p>
                Esses princípios trazem todas as recomendações até vocês e guiam
                todas as realizações do papel para a realidade. É com eles que
                não eu, mas nós, vamos pintar o mundo de amarelo.
              </p>
              <div className="space-y-1">
                <p className="font-unbounded text-base text-brand-black">
                  Amarelo Dandara
                </p>
                <p className="italic">
                  <a
                    href="https://en.wikipedia.org/wiki/Gesamtkunstwerk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-brand-black/30 hover:decoration-brand-black transition-colors"
                  >
                    Gesamtkunstwerk
                  </a>{" "}
                  dos links amarelos e +
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem faz + CTA */}
      <section>
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-sun-light">
          <div>
            <div className="border-b border-sun-light pt-16">
              <p className="uppercase text-sun-lighter font-unbounded px-8 pb-2">
                Quem faz
              </p>
            </div>
            <div className="px-8 py-12 space-y-4 font-manrope">
              <p className="text-xl font-semibold tracking-tight leading-relaxed">
                {" "}
                Amarelo Dandara é, para os próximos, Nicoly Dandara.
              </p>

              <p className="font-manrope leading-relaxed max-w-prose">
                Há tempos perambula pela internet e retorna com links que fazem
                todo mundo se perguntar: de onde isso saiu? Com os links
                amarelos, &ldquo;todo mundo&rdquo; pode passar a significar
                &ldquo;o mundo todo&rdquo;.
              </p>

              <div className="flex gap-4">
                <Button variant="ghost" href="https://instagram.com/nydndr">
                  instagram
                </Button>
                <Button variant="ghost" href="https://adandara.com">
                  site
                </Button>
              </div>
            </div>
          </div>

          <div className="px-8 py-12 space-y-4 text-center bg-[url('/bg-texture-white.svg')] bg-repeat flex flex-col justify-center items-center">
            <p className="font-manrope text-xl font-semibold tracking-tight">
              Pronto para começar?
            </p>
            <p className="font-manrope w-4/5 leading-relaxed">
              Assine grátis pra receber a curadoria todo mês ou apoie o projeto
              pra patrocinar os próximos passos.
            </p>
            <div className="pt-4">
              <Button variant="primary" href="/apoio" className="text-sm" trail>
                apoiar o projeto
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
