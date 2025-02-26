// utils/proxyHelper.js
export function rewriteUrl(url) {
    // Encodes the URL for the proxy endpoint.
    return `/api/proxy?url=${encodeURIComponent(url)}`;
  }
  