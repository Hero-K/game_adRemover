<?php

$pdo = require_once 'connect.php';

$nameame = $_POST['name'];
// if (!preg_match('/^[A-Za-z0-9ぁ-んァ-ヶー一-龠]+$/', $nameame))
// {
//     echo "<script>
//     alert('ERROR BADsql: フォームの内容に不具合があります。担当者に報告してください。');
//     window.history.go(-1);
//      </script>";
    // exit(1);
// }
$data = [
    ':rankerName' => htmlspecialchars( $_POST['name'], ENT_QUOTES, 'UTF-8' ),
    ':rankerScore' => htmlspecialchars( $_POST['score'], ENT_QUOTES, 'UTF-8' )
];



$sql = "INSERT INTO `rank` (rank_id, ranker_name, ranker_score) VALUES('', :rankerName, :rankerScore)";

$stmt = $pdo->prepare($sql);
$stmt->execute($data);

header('Location:ranking.php');


