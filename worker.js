export default {
  async fetch(request, env, ctx) {
    // 让 Cloudflare 自动处理静态资源
    return env.ASSETS.fetch(request);
  },
};
