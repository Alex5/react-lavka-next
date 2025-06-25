import {NextRequest} from "next/server";
import {APP_CONFIG} from "@/lavka.config";

export async function GET(request: NextRequest) {
    console.log(request);

    return await fetch(`${APP_CONFIG.API_URL}/api/v1/cart`);
}