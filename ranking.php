<?php

require_once "connect.php";

$sql = "SELECT * FROM `rank` WHERE(ranker_name, ranker_score) VALUES('', :rankerName, :rankerScore)";

?>

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="none">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=M+PLUS+1:wght@300;400;700;900&display=swap" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <title>アド消ック天国 広告をひたすら消すシミュレーション</title>
  </head>
  <body>
      <div class="wrapper">
        <header class="header">
          <h1 class="header__logo"><img src="images/logo.png" alt="アド消ック天国 広告をひたすら消すシミュレーション">
          <p>アド消ック天国 広告をひたすら消すシミュレーション</p></h1>
        </header>
        <h2>RANKING</h2>
          <table class="ranking">
              <thead class="ranking__titles">
                <tr>
                  <th class="rank">RANK</th><th class="name">NAME</th><th class="f_score">F_SCORE</th>
                </tr>
              </thead>
              <tbody class="ranking__items">
                <tr>
                  <td class="rank">$no</td><td class="name">$name</td><td class="f_score">$f_score</td>
                </tr>
                <tr>
                  <td class="rank">2</td><td class="name">$name</td><td class="f_score">99999</td>
                </tr>
                <tr>
                  <td class="rank">$no</td><td class="name">$name</td><td class="f_score">$f_score</td>
                </tr>
                <tr>
                  <td class="rank">$no</td><td class="name">$name</td><td class="f_score">$f_score</td>
                </tr>
                <tr>
                  <td class="rank">$no</td><td class="name">$name</td><td class="f_score">$f_score</td>
                </tr>
              </tbody>
          </table>
      </div>
  </body>
</html>
