import MOF from "@/app/Drivers";
import { Title } from "../../components/Title";
import Image from "next/image";
import SkillLevel from "../../components/SkillLevel";

const Skills = MOF<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    id="skills"
    className="max-w-5xl mr-auto ml-auto flex flex-col justify-center items-center"
  >
    <Title as="h2">Skills</Title>
    <div className="flex flex-row flex-wrap gap-12 justify-center items-center">
      <div className="flex flex-col">
        <Title as="h3"> Habilidades profisonais</Title>
        <p className="max-w-[496px] mb-mb2">
          Destaque em meus trabalhos anteriores a liderança técnica em uma
          equipe de desenvolvimento, onde já trabalhei com Angular, NextJS,
          React e NestJS. Para entregas de aplicações escaláveis e otimizadas
          também com SEO
        </p>
        <p className="max-w-[496px] mb-mb2">
          Outro destaque em meu portfólio é um projeto pessoal desenvolvido com
          Flutter e Nest.js. Que podem ser vistos no meu Github
        </p>

        <SkillLevel title="Nextjs" icon="nextjs" pct={100} />
        <SkillLevel title="Angular" icon="angular" pct={90} />
        <SkillLevel title="Flutter" icon="flutter" pct={70} />
        <SkillLevel title="Nestjs" icon="nestjs" pct={60} />
      </div>
      <Image
        alt="Imagem sobre um computador"
        src={"/work3.jpg"}
        width={"490"}
        height={"330"}
        className="rounded-lg w-auto h-full max-w-md self-center "
      ></Image>
    </div>
  </section>
));

export default Skills;
