<?php

$pdo = require_once 'connect.php';

$data = [
    ':rankerName' => $_POST['name'],
    ':rankerScore' => $_POST['score']
];

$sql = "INSERT INTO `rank` (rank_id, ranker_name, ranker_score) VALUES('', :rankerName, :rankerScore)";

$stmt = $pdo->prepare($sql);
$stmt->execute($data);

header('Location:ranking.php');
