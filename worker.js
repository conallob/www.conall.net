const CANONICAL_HOST = "www.conall.net";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== CANONICAL_HOST) {
      return Response.redirect(
        `https://${CANONICAL_HOST}${url.pathname}${url.search}`,
        301
      );
    }
    return env.ASSETS.fetch(request);
  },
};
