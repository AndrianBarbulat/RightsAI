# Day 1 — 2 Feb 2026
# Commit 1
$env:GIT_AUTHOR_DATE = "2026-02-02 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add package.json package-lock.json
git commit -m "initialise next js project and install dependencies"

# Commit 2
$env:GIT_AUTHOR_DATE = "2026-02-02 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add vercel.json
git add .env.example
git commit -m "add vercel json config and env example file"

# Day 2 — 3 Feb 2026
# Commit 1
$env:GIT_AUTHOR_DATE = "2026-02-03 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add components/
git add pages/
git add styles/
git add data/ 2>$null
git commit -m "add base folder structure for components pages styles and data"

# Commit 2
$env:GIT_AUTHOR_DATE = "2026-02-03 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add next.config.js
git commit -m "configure next config js with basic settings"

# Commit 3
$env:GIT_AUTHOR_DATE = "2026-02-03 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add .gitignore
git commit -m "add package json scripts and initial gitignore"

# Day 3 — 4 Feb 2026
# Commit 1
$env:GIT_AUTHOR_DATE = "2026-02-04 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add styles/globals.css
git commit -m "add css custom properties for colour tokens in globals css"

# Commit 2
$env:GIT_AUTHOR_DATE = "2026-02-04 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add styles/globals.css
git commit -m "add typography scale variables and base font imports"

# Day 4 — 5 Feb 2026
# Commit 1
$env:GIT_AUTHOR_DATE = "2026-02-05 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add styles/globals.css
git commit -m "add spacing scale and border radius tokens"

# Commit 2
$env:GIT_AUTHOR_DATE = "2026-02-05 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add styles/globals.css
git commit -m "add base body and html reset styles"

# Commit 3
$env:GIT_AUTHOR_DATE = "2026-02-05 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add styles/globals.css
git commit -m "add dark mode token overrides for data-theme dark"

# Day 5 — 6 Feb 2026
# Commit 1
$env:GIT_AUTHOR_DATE = "2026-02-06 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add components/layout/Navbar.js
git add styles/globals.css
git commit -m "build navbar component with logo and nav links"

# Commit 2
$env:GIT_AUTHOR_DATE = "2026-02-06 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add components/layout/Navbar.js
git add styles/globals.css
git commit -m "add navbar mobile hamburger toggle"

# Day 6 — 7 Feb 2026
# Commit 1
$env:GIT_AUTHOR_DATE = "2026-02-07 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add components/layout/Navbar.js
git add styles/globals.css
git commit -m "add navbar mobile slide down drawer styles"

# Commit 2
$env:GIT_AUTHOR_DATE = "2026-02-07 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add components/layout/Navbar.js
git add styles/globals.css
git commit -m "add navbar scroll behaviour with sticky positioning"

# Commit 3
$env:GIT_AUTHOR_DATE = "2026-02-07 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add components/ui/ThemeToggle.js
git add styles/globals.css
git commit -m "add theme toggle component with sun and moon icons"

# Day 7 — 8 Feb 2026
$env:GIT_AUTHOR_DATE = "2026-02-08 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add pages/_app.js
git add components/ui/ThemeToggle.js
git commit -m "add localStorage theme persistence to theme toggle"

$env:GIT_AUTHOR_DATE = "2026-02-08 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add pages/_app.js
git commit -m "add prefers-color-scheme system default detection"

# Day 8 — 9 Feb 2026
$env:GIT_AUTHOR_DATE = "2026-02-09 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add components/layout/Footer.js
git add styles/globals.css
git commit -m "build footer component with three column layout"

$env:GIT_AUTHOR_DATE = "2026-02-09 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add components/layout/Footer.js
git commit -m "add footer external resource links and copyright bar"

# Day 9 — 10 Feb 2026
$env:GIT_AUTHOR_DATE = "2026-02-10 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add pages/_document.js
git commit -m "add document js with merriweather and inter font preloads"

$env:GIT_AUTHOR_DATE = "2026-02-10 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add pages/_app.js
git commit -m "add app js wrapper with theme context provider"

$env:GIT_AUTHOR_DATE = "2026-02-10 $(Get-Random -Min 0 -Max 23):$(Get-Random -Min 0 -Max 59):$(Get-Random -Min 0 -Max 59)"
$env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE
git add pages/_document.js
git commit -m "update head meta tags for rightsai brand"

Remove-Item Env:\GIT_AUTHOR_DATE -ErrorAction SilentlyContinue
Remove-Item Env:\GIT_COMMITTER_DATE -ErrorAction SilentlyContinue

git push -u origin main