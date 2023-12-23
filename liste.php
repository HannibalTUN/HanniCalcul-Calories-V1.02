<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr><td>name</td><td>gender</td><td>old</td><td>tall</td><td>weight</td><td>activite</td>
    </tr>
    <?php>
    require "calcul.php";
    
    $name=$_POST['name'];
    $gender = $_POST['gender'];
    $old = $_POST['old'];
    $tall = $_POST['tall'];
    $weight = $_POST['weight'];
    $activite = $_POST['activite'];

    echo "<tr>";
    echo "<td>$name</td>";
    echo "<td>$gender</td>";
    echo "<td>$old</td>";
    echo "<td>$tall</td>";
    echo "<td>$weight</td>";
    echo "<td>$activite</td>";
    echo "</tr>";
?>
    </table>
</body>
</html>

