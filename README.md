# diskprices.info

Storage deals aggregation site. Sorted by price-per-TB. Multi-retailer.

## Quick Start

```bash
npm install
npm run build
npm run serve  # Local dev server at http://localhost:8080
```

## Deployment

### First-Time Setup

1. **Create GitHub repository:**
   ```bash
   cd /home/stealth/.openclaw/workspace-main/projects/diskprices/site
   gh repo create diskprices --public --source=. --push
   ```

2. **Connect to Cloudflare Pages:**
   - Go to https://dash.cloudflare.com
   - Pages → Create a project → Connect to Git
   - Select your GitHub repo `diskprices`
   - Build settings:
     - Build command: `npm run build`
     - Build output: `_site`
   - Deploy

3. **Add custom domain:**
   - In Cloudflare Pages → Custom domains
   - Add `diskprices.info`
   - Update Namecheap nameservers to Cloudflare (shown in dashboard)

4. **Add secrets for price updates (optional):**
   - GitHub repo → Settings → Secrets and variables → Actions
   - Add: `AMAZON_ACCESS_KEY`, `AMAZON_SECRET_KEY`, `AMAZON_PARTNER_TAG`
   - Add: `BESTBUY_API_KEY` (if using Best Buy API)

### Ongoing Deployment

```bash
./deploy.sh "Your commit message"
```

Or just push to GitHub — Cloudflare auto-deploys.

### Price Updates

Prices auto-update every 6 hours via GitHub Actions when API keys are configured.

Manual update:
```bash
node ../fetcher/update-prices.js
./deploy.sh "Update prices"
```

## Project Structure

```
site/
├── _data/
│   └── products.json    # Product data (prices, URLs, etc.)
├── _includes/
│   └── base.njk         # Base template
├── _site/               # Built site (generated)
├── css/
│   └── style.css        # Styles
├── js/
│   └── main.js          # Client-side JavaScript
├── .github/
│   └── workflows/
│       └── deploy.yml   # Auto-deploy workflow
├── index.njk            # Homepage
├── privacy.njk          # Privacy policy
├── .eleventy.js         # 11ty config
├── package.json
└── deploy.sh            # Deployment script
```

## Adding Products

Edit `_data/products.json`:

```json
{
  "id": "unique-id",
  "name": "Product Name",
  "category": "SSD",
  "subcategory": "NVMe",
  "capacity": 2,
  "capacityUnit": "TB",
  "price": 149.99,
  "pricePerTB": 74.99,
  "retailer": "Amazon",
  "url": "https://amazon.com/dp/ASIN?tag=your-tag",
  "reviews": 1234,
  "rating": 4.5,
  "inStock": true
}
```

## Affiliate Programs

Priority order:
1. B&H Photo (2-8%)
2. Western Digital (3-5%)
3. Seagate (3-6%)
4. Samsung (3-5%)
5. Amazon Associates (2.5-4%) — also provides PAAPI for pricing
6. Awin/Newegg (1-3%)

---

Built with [11ty](https://www.11ty.dev/) • Hosted on [Cloudflare Pages](https://pages.cloudflare.com/)