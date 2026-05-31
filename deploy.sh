#!/usr/bin/env bash
set -e

echo "=== Words to Santhi - Deployment Script ==="
echo ""

# Build the project
echo "1. Building project..."
npm run build
echo "✓ Build complete"
echo ""

# Check which service to use
if command -v wrangler &> /dev/null || npx --yes wrangler --version &> /dev/null; then
  echo "2. Deploying to Cloudflare Pages..."
  echo ""
  echo "   If this is your first time, you'll need to authenticate:"
  echo "   Run: npx wrangler login"
  echo "   Then run this script again."
  echo ""
  echo "   Or use an API token:"
  echo "   CLOUDFLARE_API_TOKEN=your_token $0"
  echo ""

  if [ -n "$CLOUDFLARE_API_TOKEN" ]; then
    npx wrangler pages deploy out --project-name words-to-santhi
    echo "✓ Deployed to Cloudflare Pages!"
  else
    echo "   Skipping deployment (no CLOUDFLARE_API_TOKEN set)."
    echo "   To deploy manually: npx wrangler pages deploy out --project-name words-to-santhi"
  fi
elif command -v gh &> /dev/null; then
  echo "2. Deploying to GitHub Pages..."
  npx gh-pages -d out
  echo "✓ Deployed to GitHub Pages!"
else
  echo "2. No deployment tools found."
  echo "   To deploy:"
  echo "   - Cloudflare Pages: npx wrangler pages deploy out --project-name words-to-santhi"
  echo "   - GitHub Pages:    npx gh-pages -d out"
  echo "   - Netlify:         npx netlify deploy --prod --dir=out"
fi

echo ""
echo "=== Done ==="
