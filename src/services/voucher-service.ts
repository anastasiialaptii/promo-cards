import { getSteamDiscounts, getUdemyCoupons } from "../api/voucher";
import { SteamResponse } from "../schema/steam-schema";
import { UdemyResponse } from "../schema/udemy-schema";

export async function getUdemyVoucher(): Promise<UdemyResponse> {
    return getUdemyCoupons();
}

export async function getSteamVoucher(appId: number): Promise<SteamResponse> {
    return await getSteamDiscounts(appId);
}