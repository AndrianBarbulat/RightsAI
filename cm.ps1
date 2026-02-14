param(
    [Parameter(Mandatory=$true)]
    [string]$date,
    [Parameter(Mandatory=$true)]
    [string]$msg
)

$h = Get-Random -Min 8 -Max 21
$m = Get-Random -Min 0 -Max 59
$s = Get-Random -Min 0 -Max 59
$cd = "$date ${h}:${m}:${s}"

$env:GIT_AUTHOR_DATE = $cd
$env:GIT_COMMITTER_DATE = $cd

git add .
git commit -m $msg

Remove-Item Env:\GIT_AUTHOR_DATE -ErrorAction SilentlyContinue
Remove-Item Env:\GIT_COMMITTER_DATE -ErrorAction SilentlyContinue

git push