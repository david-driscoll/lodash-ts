mkdir -Force out
$content = '';
foreach ($item in Get-ChildItem *.ts | get-content) {
    $content += "$item`n".
        Replace("declare namespace", "namespace").
        Replace("export ", "");
}

$content += "`nexport = Static;`n";

Set-Content ./out/lodash.d.ts $content
