const CANONICAL_HOST = "www.conall.net";
const ALT_DOMAINS = new Set([
  "www.conall.dev",
  "www.conall.ie",
  "www.conallob.net",
  "www.conallobrien.com",
]);

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (ALT_DOMAINS.has(url.hostname)) {
    return Response.redirect(
      `https://${CANONICAL_HOST}${url.pathname}${url.search}`,
      301
    );
  }
  return context.next();
}
