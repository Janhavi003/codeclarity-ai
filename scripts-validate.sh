#!/usr/bin/env bash
set -euo pipefail
required=(package.json tsconfig.json next.config.ts eslint.config.mjs .prettierrc.json .env.example .gitignore README.md LICENSE app/page.tsx app/analyze/page.tsx app/api/analyze/route.ts app/api/chat/route.ts components/code-workspace.tsx lib/ai.ts types/analysis.ts)
for file in "${required[@]}"; do test -f "$file" || { echo "Missing $file"; exit 1; }; done
if grep -R -E 'sk-[A-Za-z0-9]{20,}' --exclude=scripts-validate.sh --exclude-dir=node_modules --exclude-dir=.next . >/dev/null 2>&1; then echo "Potential committed API key"; exit 1; fi
if find . -type d \( -name node_modules -o -name .next \) | grep -q .; then echo "Build artifacts present"; exit 1; fi
if grep -R -E 'TODO|implement this later|add your code here' --exclude=scripts-validate.sh --exclude-dir=node_modules --exclude-dir=.next . >/dev/null 2>&1; then echo "Placeholder text found"; exit 1; fi
printf 'Static project validation passed.\n'
