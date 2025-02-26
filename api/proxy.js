// api/proxy.js
import fetch from 'node-fetch';
import { logRequest } from './proxy-helper.js';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    res.status(400).send("Missing url parameter");
    return;
  }
  logRequest(url, req.method);
  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type") || "text/html";
    const data = await response.text();
    res.setHeader("Content-Type", contentType);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Error fetching the URL");
  }
}
