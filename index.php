<?php
$pdo = require_once 'connect.php';
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
    <link href="css/playstyle.css" rel="stylesheet">
    <link href="css/objects.css" rel="stylesheet">
    <title>アド消ック天国 広告をひたすら消すシミュレーション</title>
  </head>
  <body>
      <!-- こっからパラメータ -->
    <div class="parameter">
      <!-- <h1>ひたすら広告を消す<br>シミュレーション</h1> -->
      <dl>
        <dt>TIME:</dt>
        <dd id="passage-area">
          0.00
        </dd>
      </dl>
      <dl>
        <dt>SCORE:</dt>
        <dd id="score-area">
          0
        </dd>
      </dl>
    </div>
      <!-- ここまでパラメータ -->

      <!-- ここからシミュレータ -->
        <div id="simulator">
          <!-- ここからスタート画面 -->
          <div id="start-wrapper">
            <div id="start">
                <h1 id="ready"><img src="images/logo.png" alt="アド消ック天国">
                  <p>広告をひたすら消すシミュレーション</p></h1>
                <div class="start__middle">
                  <h2>GAME PLAY</h2>
                  <!-- <div id="object-sample">
                    <a>
                      <img src="./images/makura320.jpg" alt="真ん中">
                    </a>
                    <button id="0" type="button" class="xbtn">×</button>
                  </div> -->
                  <select id="difficulity">
                    <option value="0">EASY</option>
                    <option value="1" selected>NORMAL</option>
                    <option value="2">HARD</option>
                  </select>
                  <p class="start__description">
                    <!-- <img src="images/howto_img.png"> -->
                    しつこく出てくる広告を出来るだけ素早く消していこう!!
                  </p>
                </div>
                <div class="start-button-wrapper">
                  <button type="button" id="start-button">スタート</button>
                </div>
            </div>
          </div>
          <!-- ここまでスタート領域 -->
        </div>

        <!-- オブジェクト表示領域ここまで -->

        <!-- <a href="#" id="gameover-wrapper">
          <h3>GAME OVER</h3>
          <h4>tatch screen</h4>
        </a> -->

        <div id="result-wrapper">
          <div class="result">
            <h2>GAME OVER</h2>
            <div class="resultsheet">
              <div class="result__column">
                <dl>
                  <dt>SCORE</dt>
                  <dd id="score-result">0</dd>
                </dl>
                <span>/</span>
                <dl>
                  <dt>TIME</dt>
                  <dd id="passsec-result">0</dd>
                </dl>
              </div>
              <div class="result__column-final">
                  <h3>FINAL SCORE</h3>
                  <p id="final-result">0</p>
              </div>
            </div>

            <div class="score-form-wrapper">
              <form class="score-form" action="rank_in.php" method="post">
                <input  type="hidden" name="score" value="0">
                <input id="form-name" type="text" name="name" placeholder="名前を付けてランキングに登録">
                <button id="form-submit" type="submit"><img src="images/submit.svg" alt="送信"></button>
              </form>
            </div>
            
            <div class="result__menu">
              <button id="back" type="button">トップへ戻る</button>
              <button id="retry-button" type="button">リトライ</button>
            </div>
          </div>
        </div>

        <!-- 要素参考 -->
        <!-- <div id="object0">
          <a>
            <img src="./images/makura320.jpg" alt="真ん中">
          </a>
          <button id="0" type="button" class="xbtn">×</button>
        </div>
        <div id="object1">
          <a>
            <img src="./images/broom.jpg" alt="スライド下">
          </a>
          <button id="1" type="button" class="xbtn">×</button>
        </div>
        <div id="object2">
          <a>
            <img src="./images/grano.jpg" alt="スライド上">
          </a>
          <button id="2" type="button" class="xbtn">×</button>
        </div>
        <div id="object3">
          <a>
            <img src="./images/jine.png" alt="SNSｱｲｺﾝ">
          </a>
          <button id="3" type="button" class="xbtn">×</button>
        </div> -->
      
    <script type="text/javascript" src="js/common.js" defer></script>
  </body>
</html>
