export async function GET({ fetch, request }) {
	return new Response(JSON.stringify({ name: 'junjuny' }));
}
