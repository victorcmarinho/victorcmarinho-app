import { UserDTO } from "../../DTOs/User.dto";

import fetcher from "../../Services/fetcher";

const Footer = async () => {
  const { name, ...response } = await fetcher<UserDTO>(
    "https://api.github.com/users/victorcmarinho",
    {
      next: { revalidate: 36 * 100000 },
    }
  );

  console.log(response);

  return (
    <footer className="bg-secondary text-white text-center font-default py-8 px-0 mt-16 flex flex-col justify-center items-center gap-4 min-h-[200px] ">
      <p className="text-2xl">{name}</p>
      <p>© 2020 copyright all right reserved</p>
    </footer>
  );
};

export default Footer;
