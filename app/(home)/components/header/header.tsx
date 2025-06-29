import { Div } from "@/shared/ui/div/div";
import styles from "./header.module.css";
import { Github } from "lucide-react";
import { ButtonLink } from "@/shared/ui/button-link/button-link";
import reactLavkaFullLogo from "@/assets/logos/react_lavka_full_logo.svg"
import Image from "next/image";
import {AuthButton} from "@home/components/header/components/auth-button/auth-button";

export function Header() {
  const githubLink = "https://github.com/Alex5/react-lavka-next";

  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <Image
          src={reactLavkaFullLogo}
          alt="react-lavka-logo"
          height={28}
        />
        <Div flex gap2>
          <AuthButton/>
          {githubLink ? (
              <ButtonLink
                  href={githubLink}
                  target="_blank"
                  colorPallete="gray"
                  radius="lg"
                  size="md"
                  icon
              >
                <Github />
              </ButtonLink>
          ) : null}
        </Div>
      </div>
    </header>
  );
}
