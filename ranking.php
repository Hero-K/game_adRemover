<?php

$pdo = require "connect.php";
$sql = "SELECT * FROM rank ORDER BY ranker_score DESC LIMIT 100";

$stmt = $pdo->query($sql);

$rankers = $stmt->fetchAll(PDO::FETCH_ASSOC);

// if ($rankers) {
//   foreach ($rankers as $ranker) {
//     echo $ranker["ranker_name"] . $ranker["ranker_score"];
//   }
// }
?>

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="none" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=M+PLUS+1:wght@300;400;700;900&display=swap"
      rel="stylesheet"
    />
    <link href="css/style.css" rel="stylesheet" />
    <title>アド消ック天国 広告をひたすら消すシミュレーション</title>
  </head>
  <body>
    <div class="wrapper">
      <header class="header">
        <h1 class="header_logo">
          <a href="index.php">
            <img src="images/logo.png" alt="アド消ック天国" />
            <p>広告をひたすら消すシミュレーション</p>
          </a>
        </h1>
      </header>
      <h2>RANKING</h2>

      <table class="ranking">
        <thead class="ranking_titles">
          <tr>
            <th class="rank">RANK</th>
            <th class="name">NAME</th>
            <th class="f_score">F_SCORE</th>
          </tr>
        </thead>
        <tbody class="ranking_items">
          <?php 
          if ($rankers) {
            $i=1;
            foreach ($rankers as $ranker) {
            echo           "<tr>
              <td class='rank'>" . $i . "</td>
              <td class='name'>" . $ranker["ranker_name"] . "</td>
              <td class='f_score'>" . $ranker["ranker_score"] . "</td>
            </tr>";
            $i==$i++;
            }
          }
          ?>
        </tbody>
      </table>
    </div>
  </body>
</html>