#!/usr/bin/env sh

# abort on errors
set -e

# pnpm clean
pnpm generate
wrangler pages publish .output/public
