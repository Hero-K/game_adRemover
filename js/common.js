/* DOCUMENTS javascript */
'use strict';



/* オブジェクト 
***************************************************************/
// フラグ
let flags = Array(5); // 生成時の要素重複を回避するためのフラグ
flags.fill('false');

const imageObject = [
  {
    src: [
      './images/makura320.jpg',
      './images/sumoo.jpg',
      './images/colona320.jpg'
    ],
    alt: 'Object0',
  },
  {
    src: [
      './images/broom.jpg',
      './images/grano.jpg',
      './images/colonaa.jpg'
    ],
    alt: 'Object1',
  },
  {
    src: [
      './images/colonaa.jpg',
      './images/jazzkitten.jpg',
      './images/makura.gif'
    ],
    alt: 'Object2',
  },
  {
    src: [
      './images/jine.png',
      './images/zkype.png',
      './images/puitter.png'
    ],
    alt: 'Object3',
  },
  {
    src: [
      './images/youare.gif',
      './images/grano320.jpg',
      './images/makura320.jpg'
    ],
    alt: 'Object4',
  },
];



const startWrapper = document.querySelector('#start-wrapper');
const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', countdown); // スタートボタン
const retryButton = document.querySelector('#retry-button');
retryButton.addEventListener('click', retry); // リトライボタン



/* パラメータ関係 
*****************************************************************/
const passageArea = document.querySelector('#passage-area');

const difficulity = [400, 300, 100]; // 難易度別広告発生率
let PassSec;    // 秒数カウント用変数
let PassageID;  // タイマー関数格納用
let PassagePop; // オブジェクトの周期生成用
let msg = 0;    // メッセージ(時間)
let count = 3;  // (カウントダウン)

// 繰り返し処理の開始
function startShowing() {
  PassSec = 0;   // カウンタのリセット
  PassageID = setInterval('showPassage()',10); // タイマーをセット(10ms間隔)
  PassagePop = setInterval('randobject()', difficulity[document.querySelector('#difficulity').selectedIndex]); // ランダム抽選 (難易度で抽選間隔が変わる)
}
// 繰り返し処理の中止
function stopShowing() {
  clearInterval( PassageID );   // タイマーのクリア
  clearInterval( PassagePop ); // ランダム生成のクリア
}
// 繰り返し処理の中身
function showPassage() {
  PassSec++;   // カウントアップ
  msg = PassSec / 100;   // 表示文作成
  passageArea.innerHTML = msg.toFixed(2);   // 表示更新
}

// カウントダウン
function countdown() {
  if (count == 3) {
    document.querySelector('#start').style.display = 'none';

    // カウントダウン要素生成
    const h2 = document.createElement('h3');
    h2.setAttribute('id', 'countdown-wrapper');
    h2.innerText = count;

    startWrapper.appendChild(h2);
  }

  // console.log(count);
  document.querySelector('#countdown-wrapper').innerText = count--; // カウントダウン
  const id = setTimeout('countdown()', 1000);
  if (count < 0) // カウント０になったら
  {
    clearTimeout(id);
    document.querySelector('#countdown-wrapper').remove();
    startWrapper.style.display = 'none';  // スタート画面の非表示
    startShowing();
  }
}


/* シミュレーション本処理 
***************************************************************/
const scoreArea = document.querySelector('#score-area');
let Score = 0;  // スコア

// 周期生成
// ランダム抽選
function randobject() {
  const randobj = Math.floor(Math.random() * 20); // オブジェクト抽選

  if( flags[ randobj ] == 'false') // オブジェクトが表示されてなかったら生成
  {
    objectready(randobj); // オブジェクト生成準備
    flags[ randobj ] = 'true'; // フラグを立てる(オブジェクト表示済)
    
    // console.log(randobj + " → " + flags[ randobj ]);
  }
}


// 生成
function objectready(popid) {  
  const imageSrc = imageObject[popid].src[Math.floor(Math.random() * imageObject[popid].src.length)];
  const imageAlt = imageObject[popid].alt;

  const ID = "object" + popid; // クラス名の型で次の処理を楽に

  const div = document.createElement('div'); // divの型を用意
  div.id = ID; // ランダムに得たidを付与

  const aimg = (document.createElement('a'));

  // ↓imageObject 
  aimg.innerHTML = `<img src="${imageSrc}" alt="${imageAlt}">`; // div内に画像を入れる
  
  const btn = document.createElement('button'); // ボタン型の用意
  btn.id = popid;
  btn.type = 'button';
  btn.className = "xbtn";
  btn.innerHTML = "×";

  // 個別の要素設定
  const simulator = document.querySelector('#simulator');
  switch(popid) {
    case 4:
      const div2 = document.createElement('div');
      div2.className = 'object-wrapper';
      simulator.appendChild(div2).appendChild(div).appendChild(aimg);// シミュレータにdivを追加
      simulator.appendChild(div2).appendChild(div).appendChild(btn);
      break;
    default:
      simulator.appendChild(div).appendChild(aimg);// シミュレータにdivを追加
      simulator.appendChild(div).appendChild(btn);// シミュレータに×を追加
      // appendchild()はidとか、唯一無二の要素の中にしか使えないんだって
  }

  // 成功判定(オブジェクト削除)
  btn.addEventListener('click', (e) => {
    const target = e.target; // イベントそのもの.イベントを起こした要素;
    switch(popid) {
      case 4:
        target.closest('.object-wrapper').remove();
        break;
      default:
    }
    target.parentElement.parentNode.removeChild(target.parentElement); // 'イベント'の'要素'の'親のノード'から'イベントの要素'を消す
    flags[ target.id ] = 'false'; // フラグを下げる(オブジェクト削除)
    
    // console.log(target.id + " → " + flags[ target.id ]); // デバッグ用ログ
  
    Score += 1000;
    scoreArea.innerHTML = Score;
  });

  // 失敗判定
  const gameover_a = document.createElement('a');
  gameover_a.href = '#';
  gameover_a.id = 'gameover-wrapper';
  gameover_a.innerHTML = '<h3>GAME OVER</h3><h4>画面をタップしてください</h4>'; // こっちの方がコードが少ない

  aimg.addEventListener('click', () => {
    stopShowing();
    document.querySelector('body').appendChild(gameover_a);
    setTimeout( () => {
      document.querySelector('#gameover-wrapper').addEventListener('click', gameover);
    }, 1000);
  });
}

// ゲームオーバー
function gameover() {
  result(); // リザルト画面召喚
  this.remove();
}

/* 終了後 
*********************************************************************/
const resultWrapper = document.querySelector('#result-wrapper');
const scoreResult = document.querySelector('#score-result');
const passSecResult = document.querySelector('#passsec-result');
const finalResult = document.querySelector('#final-result');

// 記録
function result() {
  resultWrapper.style.display = "flex"; // 結果画面表示
  scoreResult.innerHTML = Score;
  passSecResult.innerHTML = msg; // 経過時間をそのまま持ってきた
  
  const FinalScore = Math.floor(Score / msg);

  document.forms[0].score.value = FinalScore; // フォームに

    // カウントアップ
    let increment = 10;
    const timerId = setInterval( () => {
        if(finalResult.textContent < FinalScore){
            if (finalResult.textContent >=  FinalScore - (FinalScore % 100)) {
              increment = 1;
            }
            // incrementの値を加算して代入
            finalResult.textContent = Number(finalResult.textContent) + increment;
        } else {
            // タイマークリア
            clearInterval(timerId);
        }
    }, 10);

  // finalResult.innerHTML = FinalScore;
}

function retry() {
  // オブジェクトのお掃除
  for (let i = 0; i < flags.length; i++) {
    if (flags[i] == 'true') {
      const IDName = 'object' + i;

      document.getElementById(IDName).remove();
      flags[i] = 'false'; // フラグを下げる(オブジェクト削除)

      // 前面広告オブジェクトの覆いを消す
      switch(i) {
        case 4:
          document.querySelector('.object-wrapper').remove();
          break;
        default:
      }
    }
  }

  // スコア初期化
  Score = 0;
  scoreArea.innerHTML = Score;
  finalResult.textContent = Score;
  
  // 時間初期化
  msg = 0;
  passageArea.innerHTML = '0.00'; // msg入れると0になっちゃう
  
  // カウントダウン初期化
  count = 3;


  resultWrapper.style.display = 'none'; // 結果画面の非表示
  startWrapper.style.display = 'flex'; // スタート画面の表示
  document.querySelector('#start-wrapper').style.display = 'flex';
  document.querySelector('#start').style.display = 'flex';
}
