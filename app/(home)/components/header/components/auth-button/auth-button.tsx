import {YandexUserInfo} from "@/shared/api/hooks/use-auth/use-auth";
import Image from "next/image";
import {ButtonLink} from "@/shared/ui/button-link/button-link";
import {Text} from "@/shared/ui/text/Text";
import {APP_CONFIG} from "@/lavka.config";
import {headers as nextHeaders} from "next/headers";
import {fetcher} from "@/shared/api/fetcher";

export async function AuthButton() {
    const headers = await nextHeaders()

    const user = await fetcher<YandexUserInfo>("me", {headers})

    return (
        <div className="flex items-center justify-center w-12 h-12 relative">
            {user ? (
                <Image
                    src={`https://avatars.yandex.net/get-yapic/${user.default_avatar_id}/islands-retina-middle`}
                    // onClick={logout}
                    className="object-contain rounded-full cursor-pointer"
                    sizes="120px"
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
        </div>
    )
}