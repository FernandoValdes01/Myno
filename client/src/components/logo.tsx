import Image from "next/image";
// import logoDark from "@/assets/logo-dark.svg";
// import logoWhite from "@/assets/logo-white.svg";
import logoNormal from "@/assets/logo.png";
// import { useTheme } from "next-themes";

export const Logo = () => {
  // const { theme } = useTheme();
  // const logosvg = theme === "dark" ? logoWhite : logoDark;
  return <Image src={logoNormal} alt="Logo de Myno" width={32} height={32} />;
};
