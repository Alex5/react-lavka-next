"use client"

import {useAuth} from "@/shared/api/hooks/use-auth/use-auth";
import Image from "next/image";
import {ButtonLink} from "@/shared/ui/button-link/button-link";
import {Text} from "@/shared/ui/text/Text";
import {Div} from "@/shared/ui/div/div";
import {APP_CONFIG} from "@/lavka.config";

export function AuthButton() {
    const { logout, user } = useAuth();

    return (
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
                    href={APP_CONFIG.API_URL + "/api/v1/yandex"}
                    target="_self"
                >
                    <Text fontSize="md" fontWeight="medium">
                        Войти
                    </Text>
                </ButtonLink>
            )}
        </Div>
    )
}