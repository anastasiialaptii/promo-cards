import { SteamResponse, SteamSchema } from "../schema/steam-schema";
import { UdemyResponse, UdemyResponseSchema } from "../schema/udemy-schema";

async function getUdemyCoupons(): Promise<UdemyResponse> {
    if (!process.env.REACT_APP_UDEMY_COURSES) throw new Error('No API key found');

    const response = await fetch('https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/search?page=1&page_size=10&query=python', {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'udemy-paid-courses-for-free-api.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_UDEMY_COURSES
        }
    });

    if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const raw = await response.json();

    return UdemyResponseSchema.parse(raw); 
}

async function getSteamDiscounts(appId: number = 489830): Promise<SteamResponse> {
    if(!process.env.REACT_APP_STEAM_GAMES) throw new Error('No API key found');

    const response = await fetch(`https://steamgames-special-offers.p.rapidapi.com/games_data/?app_id=${appId}`, {
        method: 'GET',
        headers: {
		    'x-rapidapi-host': 'steamgames-special-offers.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_STEAM_GAMES,
	        }
        });

    if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const raw = await response.json();

    return SteamSchema.parse(raw);
}