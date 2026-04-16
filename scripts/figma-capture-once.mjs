import { chromium } from 'playwright';

const captureId = process.argv[2];
const url = process.argv[3];
const endpoint = `https://mcp.figma.com/mcp/capture/${captureId}/submit`;

if (!captureId || !url) {
  console.error('Usage: node figma-capture-once.mjs <captureId> <url>');
  process.exit(1);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.route('**/*', async (route) => {
  const response = await route.fetch();
  const headers = { ...response.headers() };
  delete headers['content-security-policy'];
  delete headers['content-security-policy-report-only'];
  await route.fulfill({ response, headers });
});
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });
await page.waitForLoadState('load');
await page.waitForTimeout(8000);
const r = await page.context().request.get('https://mcp.figma.com/mcp/html-to-design/capture.js');
await page.evaluate((s) => {
  const el = document.createElement('script');
  el.textContent = s;
  document.head.appendChild(el);
}, await r.text());
await page.waitForTimeout(2000);
const result = await page.evaluate(
  ({ captureId, endpoint }) =>
    window.figma.captureForDesign({
      captureId,
      endpoint,
      selector: 'body',
    }),
  { captureId, endpoint }
);
console.log(JSON.stringify(result, null, 2));
await browser.close();
