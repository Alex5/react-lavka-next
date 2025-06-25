"use client"

import {useAuth} from "@/shared/api/hooks/use-auth/use-auth";
import Image from "next/image";
import {ButtonLink} from "@/shared/ui/button-link/button-link";
import {Text} from "@/shared/ui/text/Text";
import {APP_CONFIG} from "@/lavka.config";
import {LoaderCircle} from "lucide-react";

export function AuthButton() {
    const { logout, user, isLoading } = useAuth();

    return (
        <div className="flex items-center justify-center w-12 h-12 relative">
            {user ? (
                <Image
                    src={`https://avatars.yandex.net/get-yapic/${user.default_avatar_id}/islands-retina-middle`}
                    onClick={logout}
                    className="object-contain rounded-full cursor-pointer"
                    sizes="120px"
                    alt={user.display_name}
                    fill
                />
            ) : isLoading ? <LoaderCircle className="animate-spin block w-full h-full"/> : (
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
        </div>
    )
}