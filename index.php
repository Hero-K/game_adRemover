<?php  ?>

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="none, noindex, nofollow">
    <link rel="shortcut icon" href="images/favicon.png">
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
        <dd id="passage_area">
          0.00
        </dd>
      </dl>
      <dl>
        <dt>SCORE:</dt>
        <dd id="score_area">
          0
        </dd>
      </dl>
      <dl>
        <dt>LIFE:</dt>
        <dd id="life_area">
          ---
        </dd>
      </dl>
    </div>
      <!-- ここまでパラメータ -->

      <!-- ここからシミュレータ -->
        <div id="simulator">
          <!-- ここからスタート画面 -->
          <div id="start_wrapper">
            <div id="start">
                <h1 id="ready"><img src="images/logo.png" alt="アド消ック天国">
                  <p>広告をひたすら消すシミュレーション</p></h1>
                <div class="start_middle">
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
                    <option value="3">I N S A N E</option>
                  </select>
                  <p class="start_description">
                    <!-- <img src="images/howto_img.png"> -->
                    しつこく出てくる広告を、出来るだけ素早く消せ!!
                  </p>
                </div>
                <div class="start_button_wrapper">
                  <button type="button" id="start_button">スタート</button>
                  <!-- <button type="button" id="start-button"><a href="ranking.php">ランキング</a></button> -->
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

        <div id="result_wrapper">
          <div class="result">
            <h2>GAME OVER</h2>
            <div class="resultsheet">
              <div class="result_column">
                <dl>
                  <dt>SCORE</dt>
                  <dd id="score_result">0</dd>
                </dl>
                <span>/</span>
                <dl>
                  <dt>TIME</dt>
                  <dd id="passsec_result">0</dd>
                </dl>
              </div>
              <div class="result_column_final">
                  <h3>FINAL SCORE</h3>
                  <p id="final_result">0</p>
              </div>
            </div>

            <div class="score_form_wrapper">
              <form class="score_form" action="rank_in.php" method="post" onSubmit="return formCheck()">
                <input  type="hidden" name="score" value="0">
                <input id="form_name" type="text" name="name" placeholder="名前を付けてランキングに登録">
                <button id="form_submit" type="submit"><img src="images/submit.svg" alt="送信"></button>
              </form>
              <p id="form_alert"></p>
            </div>
            
            <div class="result_menu">
              <button id="ranking_button" type="button"><a href="ranking.php">ランキングへ</a></button>
              <button id="retry_button" type="button">リトライ</button>
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
