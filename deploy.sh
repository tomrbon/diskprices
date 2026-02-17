#!/bin/bash
# deploy.sh - Deploy diskprices.info to GitHub and trigger Cloudflare Pages build
#
# Usage: ./deploy.sh [message]
#
# Prerequisites:
#   1. GitHub CLI installed (gh) or git remote configured
#   2. Cloudflare Pages project linked to GitHub repo
#
# Setup:
#   1. Create GitHub repo: gh repo create diskprices --public --source=. --push
#   2. Connect to Cloudflare Pages: https://dash.cloudflare.com
#   3. Select GitHub repo, set build command: npm run build, output: _site

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

COMMIT_MSG="${1:-Update site $(date +%Y-%m-%d\ %H:%M)}"

echo "🚀 Deploying diskprices.info"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Build the site
echo "📦 Building site..."
npm run build

# Check if there are changes
if git diff --quiet && git diff --cached --quiet; then
    echo "✅ No changes to deploy"
    exit 0
fi

# Commit and push
echo "📝 Committing changes..."
git add -A
git commit -m "$COMMIT_MSG"

echo "☁️  Pushing to GitHub..."
git push origin main || git push origin master

echo "✅ Deployed! Cloudflare Pages will auto-build."
echo "🔗 Check status at: https://dash.cloudflare.com"