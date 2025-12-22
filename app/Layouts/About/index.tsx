import fetcher from "@/app/Services/fetcher";
import { Title } from "../../components/Title";
import Image from "next/image";
import { UserDTO } from "@/app/DTOs/User.dto";

const About = async () => {
  const { avatar_url } = await fetcher<UserDTO>(
    "https://api.github.com/users/victorcmarinho",
    {
      next: { revalidate: 36 * 100000 },
    }
  );

  return (
    <section
      id="about"
      className="max-w-5xl mr-auto ml-auto flex flex-col justify-center items-center"
    >
      <Title as="h2">Sobre</Title>
      <div className="flex flex-row flex-wrap gap-12 justify-between items-start">
        <Image
          id="about-img"
          alt="Imagem de perfil"
          src={avatar_url}
          width={300}
          height={390}
          className="rounded-lg w-auto h-full flex-1 max-w-[300px] object-cover"
        ></Image>
        <div className="flex flex-col flex-1 min-w-[300px]">
          <Title id="about-title" as="h3">
            Sobre mim
          </Title>
          <div id="about-text">
            <p className="max-w-[496px] mb-mb2">
              Meu nome é Victor Vinícius de Carvalho Marinho e sou formado em
              Análise e Desenvolvimento de Sistemas pelo IFSP (Instituto Federal
              de Ciências e Tecnologia de São Paulo). Atualmente, estou cursando
              uma pós-graduação em Arquitetura de Software.
            </p>
            <p className="max-w-[496px] mb-mb2">
              Exerço a função de desenvolvedor front-end na empresa Reclame Aqui
              e tenho uma trajetória profissional rica, trabalhando em diversos
              projetos com empresas renomadas, como a Zappts, GoCart, Santander,
              Auttar, Getnet, Ultragaz e iClubs. Essas oportunidades têm me
              permitido expandir meus conhecimentos e habilidades na área de
              desenvolvimento de sistemas.
            </p>
            <p className="max-w-[496px] mb-mb2">
              Além do meu trabalho formal, sou apaixonado por tecnologia e adoro
              explorar novas ferramentas e tecnologias. Nas horas vagas,
              dedico-me ao desenvolvimento de projetos pessoais, especialmente
              com Flutter, uma plataforma que me encanta pela sua versatilidade
              e facilidade de uso para criação de aplicativos móveis. Também
              tenho interesse em desenvolver APIs usando NestJS, aproveitando
              seus recursos robustos e sua arquitetura escalável.
            </p>
            <p className="max-w-[496px] mb-mb2">
              Minha formação acadêmica e as experiências profissionais têm me
              proporcionado um amplo conjunto de habilidades e conhecimentos que
              aplico diariamente em meus projetos e trabalho como desenvolvedor.
              Estou entusiasmado com a minha pós-graduação em Arquitetura de
              Software e animado para o que o futuro me reserva nesse campo em
              constante evolução.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
