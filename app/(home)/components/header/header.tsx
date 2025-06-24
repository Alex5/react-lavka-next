"use client"

import { Div } from "@/shared/ui/div/div";
import styles from "./header.module.css";
import { Github } from "lucide-react";
import { repository } from "@/package.json";
import { useAuth } from "@/shared/api/hooks/use-auth/use-auth";
import { Text } from "@/shared/ui/text/Text";
import { ButtonLink } from "@/shared/ui/button-link/button-link";
import reactLavkaFullLogo from "@/assets/logos/react_lavka_full_logo.svg"
import Image from "next/image";

export function Header() {
  const { logout, user } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <Image
          src={reactLavkaFullLogo}
          alt="react-lavka-logo"
          height={28}
        />
        <Div flex gap2>
          <Div flex gap2>
            {user ? (
              <Image
                src={`https://avatars.yandex.net/get-yapic/${user.default_avatar_id}/islands-retina-middle`}
                onClick={logout}
                className="radius-rounded"
                sizes="120px"
                style={{ cursor: "pointer" }}
                alt={user.display_name}
                fill
              />
            ) : (
              <ButtonLink
                radius="md"
                href={process.env.API_URL + "/api/v1/yandex?redirect_link=http://localhost:5173/react-lavka/"}
                target="_self"
              >
                <Text fontSize="md" fontWeight="medium">
                  Войти
                </Text>
              </ButtonLink>
            )}
          </Div>
          <ButtonLink
            href={repository}
            target="_blank"
            colorPallete="gray"
            radius="lg"
            size="md"
            icon
          >
            <Github />
          </ButtonLink>
        </Div>
      </div>
    </header>
  );
}
