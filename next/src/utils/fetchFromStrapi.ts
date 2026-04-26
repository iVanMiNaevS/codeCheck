
export async function fetchFromStrapi(endpoint: string, populate: string = "") {
	try{
		const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${endpoint}${populate}`);
		if (!res.ok) {
			throw new Error(`Error fetch strapi: ${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${endpoint}${populate}. Status Text ${res.statusText}`);
		}
		return res.json();
	}catch(e: unknown){
		if (e instanceof Error) {
			console.error(e.message);
		}else{
			console.error('Неизвестная ошибка: ', e)
		}
	}
}
