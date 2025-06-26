import Image from "next/image";
import {ButtonLink} from "@/shared/ui/button-link/button-link";
import {Text} from "@/shared/ui/text/Text";
import {APP_CONFIG} from "@/lavka.config";
import {getUser} from "@/lib/api/user";

export async function AuthButton() {
    const {user} = await getUser()

    return (
        <div className="flex items-center justify-center relative">
            {user ? (
                <Image
                    src={`https://avatars.yandex.net/get-yapic/${user.default_avatar_id}/islands-retina-middle`}
                    // onClick={logout}
                    className="object-contain rounded-full cursor-pointer"
                    sizes="120px"
                    alt={user.display_name}
                    height={42}
                    width={42}
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