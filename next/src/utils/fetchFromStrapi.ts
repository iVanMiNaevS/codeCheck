export async function fetchFromStrapi(endpoint: string, populate?: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${endpoint}${populate}`);
	if (!res.ok) {
		throw new Error(`Error fetch strapi: ${res.statusText}`);
	}
	return res.json();
}
