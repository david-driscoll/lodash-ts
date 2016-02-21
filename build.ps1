mkdir -Force out
$content = '';
foreach ($item in Get-ChildItem *.d.ts | get-content) {
    $content += "$item`n".
        Replace("/// <reference path=`"", "// ").
        Replace("declare namespace LoDash {", "").
        Replace("`n}`n", "");
}

Set-Content ./out/lodash.d.ts $content
