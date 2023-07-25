import Button from "../../components/Button";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaUser } from "react-icons/fa6";
import Link from "next/link";
import fetcher from "@/app/Services/fetcher";
import { UserDTO } from "@/app/DTOs/User.dto";

const Home = async () => {
  const { avatar_url, html_url } = await fetcher<UserDTO>(
    "https://api.github.com/users/victorcmarinho",
    {
      next: { revalidate: 36 * 100000 },
    }
  );
  return (
    <section
      className="max-w-5xl mr-auto ml-auto h-screen flex justify-center items-center"
      id="home"
    >
      <div className="flex flex-col mr-mb2  ml-mb2 gap-8">
        <div className="flex flex-row relative flex-wrap-reverse gap-8  ">
          <div>
            <h1 id="home-title" className="text-6xl mb-mb5 font-default">
              Hi, <br /> I&apos;am{" "}
              <span className="text-primary">Victor Marinho</span> <br />{" "}
              Fullstack Developer
            </h1>
            <Button
              id="home-btn"
              as="a"
              href={`mailto:victorcmarinho@gmail.com?subject=Gostaria de saber mais`}
            >
              Contato
            </Button>
          </div>

          <div className="bg-[rgb(75,111, 236)] rounded-full ">
            <Image
              id="home-img"
              alt="Imagem de perfil"
              src={avatar_url}
              width={"290"}
              height={"290"}
              className="rounded-full w-auto h-full"
              priority
            ></Image>
          </div>
        </div>
        <ul className="flex flex-row text-4xl gap-8" id="home-social">
          <li>
            <Link
              href={html_url}
              rel="external noreferrer"
              target="_blank"
              title="Meu Github"
            >
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link
              href={"https://br.linkedin.com/in/victorcmarinho"}
              rel="external noreferrer"
              title="Meu Linkedin"
            >
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link
              href={"https://resume.io/r/Hbcq2CKgR"}
              rel="external noreferrer"
              title="Meu curriculo"
            >
              <FaUser />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
