mkdir -Force out
$content = '';
foreach ($item in Get-ChildItem *.d.ts | get-content) {
    $content += "$item`n".
        Replace("declare namespace", "namespace");
}

Set-Content ./out/lodash.d.ts $content
