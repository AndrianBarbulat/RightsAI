$date = "2026-02-02"
$commitMessage = "initialise next js project and install dependencies"

$randomHour = Get-Random -Minimum 0 -Maximum 23
$randomMinute = Get-Random -Minimum 0 -Maximum 59
$randomSecond = Get-Random -Minimum 0 -Maximum 59

$commitDate = "$date ${randomHour}:${randomMinute}:${randomSecond}"

$env:GIT_AUTHOR_DATE = $commitDate
$env:GIT_COMMITTER_DATE = $commitDate

git add package.json package-lock.json
git commit -m $commitMessage

Remove-Item Env:\GIT_AUTHOR_DATE
Remove-Item Env:\GIT_COMMITTER_DATE

git push -u origin main