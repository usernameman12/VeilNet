// api/proxy-helper.js
export function logRequest(url, method) {
    console.log(`[VeilNet] Proxying ${method} request for: ${url}`);
  }
//meathod is the url starter (eg: https, http, wss, etc)  