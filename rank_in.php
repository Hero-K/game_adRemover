<?php

$pdo = require_once 'connect.php';

var_dump($pdo);


$data = [
    // ':rankerID' => "",
    ':rankerName' => "John",
    ':rankerScore' => "400"
];

$sql = "INSERT INTO `rank` (rank_id, ranker_name, ranker_score) VALUES('', :rankerName, :rankerScore)";

$stmt = $pdo->prepare($sql);

$stmt->execute($data);

$publisher_id = $pdo->lastInsertId();

echo 'The publisher id ' . $publisher_id . ' was inserted';



