<?php

$pdo = require_once 'connect.php';

$nameame = $POST_['name'];
if (!preg_match('/^[A-Za-z0-9]+$/', $nameame))
{
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}else{
$data = [
    ':rankerName' => $_POST['name'],
    ':rankerScore' => $_POST['score']
];

$sql = "INSERT INTO `rank` (rank_id, ranker_name, ranker_score) VALUES('', :rankerName, :rankerScore)";

$stmt = $pdo->prepare($sql);
$stmt->execute($data);

header('Location:ranking.php');
}


