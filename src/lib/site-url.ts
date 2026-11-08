export function getSiteUrl(): URL | undefined {
  const configuredUrl = process.env.SITE_URL;

  if (!configuredUrl) {
    return undefined;
  }

  const siteUrl = new URL(configuredUrl);
  const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(
    siteUrl.hostname,
  );

  if (
    (siteUrl.protocol !== "https:" &&
      !(siteUrl.protocol === "http:" && isLocalHost)) ||
    siteUrl.username ||
    siteUrl.password ||
    siteUrl.pathname !== "/" ||
    siteUrl.search ||
    siteUrl.hash
  ) {
    throw new Error(
      "SITE_URL must be an HTTPS origin without credentials, path, query, or hash.",
    );
  }

  return siteUrl;
}
