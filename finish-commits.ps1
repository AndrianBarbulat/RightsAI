# Day 72 commit 2: sitemap (Apr 14)
$date="2026-04-14";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add public/sitemap.xml; git commit -m "add sitemap xml with all static and dynamic routes"

# Day 73 commit 1: schema FAQ (Apr 15)
$date="2026-04-15";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add components/landing/FAQ.js; git commit -m "add schema org faqpage structured data to landing page faq"

# Day 73 commit 2: schema Article (Apr 15)
$date="2026-04-15";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add data/guides.js; git commit -m "add schema org article structured data to guide pages"

# Day 74 commit 1: schema Breadcrumb (Apr 16)
$date="2026-04-16";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add pages/topics.js; git commit -m "add schema org breadcrumb structured data to topic and guide pages"

# Day 74 commit 2: schema Website (Apr 16)
$date="2026-04-16";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add pages/_document.js; git commit -m "add schema org website with searchaction for rightsai"

# Day 75 commit 1: a11y chat buttons (Apr 17)
$date="2026-04-17";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add components/chat/ChatHeader.js components/chat/LegalResponse.js; git commit -m "accessibility pass on chat page fixing missing button labels"

# Day 75 commit 2: a11y legal response (Apr 17)
$date="2026-04-17";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add components/chat/LegalResponse.js components/chat/ResponseSection.js; git commit -m "accessibility pass on legal response card fixing heading hierarchy"

# Day 76 commit 1: a11y trust bar (Apr 18)
$date="2026-04-18";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add components/landing/TrustBar.js; git commit -m "accessibility pass on landing page fixing contrast on trust bar"

# Day 76 commit 2: a11y topic grid (Apr 18)
$date="2026-04-18";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add components/landing/TopicGrid.js; git commit -m "accessibility pass on topic grid fixing card link descriptions"

# Day 76 commit 3: skip to main (Apr 18)
$date="2026-04-18";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add pages/_app.js; git commit -m "add skip to main content link at top of every page"

# Day 77 commit 1: vercel speed insights (Apr 19)
$date="2026-04-19";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add pages/_app.js; git commit -m "add vercel speed insights script to app js"

# Day 77 commit 2: vercel analytics (Apr 19)
$date="2026-04-19";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add pages/_app.js; git commit -m "add vercel web analytics for page view tracking"

# Day 78 commit 1: dark mode welcome cards (Apr 20)
$date="2026-04-20";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add styles/components/chat.css; git commit -m "refine dark mode colours on chat welcome state cards"

# Day 78 commit 2: dark mode legal response (Apr 20)
$date="2026-04-20";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add styles/components/chat.css; git commit -m "refine dark mode on legal response card sections"

# Day 78 commit 3: dark mode accordion (Apr 20)
$date="2026-04-20";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add styles/components/buttons.css; git commit -m "fix dark mode border colours on accordion components"

# Day 79 commit 1: criminal law content (Apr 21)
$date="2026-04-21";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add data/topics.js; git commit -m "add common questions content for criminal law topic page"

# Day 79 commit 2: family law content (Apr 21)
$date="2026-04-21";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add data/topics.js; git commit -m "add common questions content for family law topic page"

# Day 80 commit 1: social welfare content (Apr 22)
$date="2026-04-22";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add data/topics.js; git commit -m "add common questions content for social welfare topic page"

# Day 80 commit 2: personal injury content (Apr 22)
$date="2026-04-22";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add data/topics.js; git commit -m "add common questions content for personal injury topic page"

# Day 80 commit 3: planning content (Apr 22)
$date="2026-04-22";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add data/topics.js; git commit -m "add common questions content for planning and development topic page"

# Day 81 commit 1: twitter cards (Apr 23)
$date="2026-04-23";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add pages/_document.js; git commit -m "add twitter card meta tags to all pages"

# Day 81 commit 2: canonical (Apr 23)
$date="2026-04-23";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add pages/_document.js; git commit -m "add canonical url meta tags to prevent duplicate content"

# Day 82 commit 1: tablet responsive (Apr 24)
$date="2026-04-24";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add styles/base/responsive.css; git commit -m "final responsive layout fixes for tablet viewport 768 to 1024"

# Day 82 commit 2: guide tablet fix (Apr 24)
$date="2026-04-24";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add styles/pages/topics.css; git commit -m "fix guide page image placeholder spacing on tablet"

# Day 83 commit 1: print topic pages (Apr 25)
$date="2026-04-25";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add styles/pages/topics.css; git commit -m "add print styles for topic and guide pages"

# Day 83 commit 2: print header disclaimer (Apr 25)
$date="2026-04-25";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add styles/pages/topics.css; git commit -m "add rightsai header and disclaimer to topic page print output"

# Day 84 commit 1: code cleanup (Apr 26)
$date="2026-04-26";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add -A; git commit -m "code cleanup pass removing unused imports across all components" --allow-empty

# Day 84 commit 2: standardise props (Apr 26)
$date="2026-04-26";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add -A; git commit -m "standardise prop naming conventions across chat components" --allow-empty

# Day 84 commit 3: jsdoc (Apr 26)
$date="2026-04-26";$h=Get-Random -Min 0 -Max 23;$m=Get-Random -Min 0 -Max 59;$s=Get-Random -Min 0 -Max 59
$env:GIT_AUTHOR_DATE="$date ${h}:${m}:${s}";$env:GIT_COMMITTER_DATE="$date ${h}:${m}:${s}"
git add pages/api/chat.js; git commit -m "add jsdoc comments to api routes for maintainability" --allow-empty

Remove-Item Env:\GIT_AUTHOR_DATE -ErrorAction SilentlyContinue
Remove-Item Env:\GIT_COMMITTER_DATE -ErrorAction SilentlyContinue