<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $weight = $_POST['weight'];
    $height = $_POST['height'];

    if (is_numeric($weight) && is_numeric($height) && $weight > 0 && $height > 0) {
        $heightInMeters = $height / 100;
        $bmi = $weight / ($heightInMeters * $heightInMeters);
        echo round($bmi, 2);
    } else {
        echo 'Invalid input';
    }
} else {
    echo 'Invalid request';
}
?>
