# Lista de imágenes que se usan en el proyecto
$usedImages = @(
    "DSC03279.JPG",
    "DSC03296.JPG",
    "DSC03365.JPG",
    "DSC03305.JPG",
    "DSC03277.JPG",
    "DSC03385-2.JPG",
    "DSC03315.JPG",
    "DSC03338.JPG",
    "DSC03355.JPG",
    "DSC03372.JPG",
    "DSC03395.JPG",
    "DSC03413.JPG",
    "DSC03364.JPG",
    "DSC03333.JPG",
    "DSC03404.JPG",
    "DSC03294.JPG",
    "DSC03362.JPG"
)

$imagesPath = "c:\Programacion\Proyectos\frontend\15\vicky15\src\assets\drive-download-20251022T211739Z-1-001"

# Obtener todas las imágenes en la carpeta
$allImages = Get-ChildItem -Path $imagesPath -Filter "*.JPG"

$deletedCount = 0

foreach ($image in $allImages) {
    if ($usedImages -notcontains $image.Name) {
        Remove-Item $image.FullName -Force
        Write-Host "Eliminada: $($image.Name)"
        $deletedCount++
    }
}

Write-Host "`nTotal de imágenes eliminadas: $deletedCount"
Write-Host "Imágenes conservadas: $($usedImages.Count)"
