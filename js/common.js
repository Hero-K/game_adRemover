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
      './images/colonaa.jpg',
      './images/supplement.png'
    ],
    alt: 'Object1',
  },
  {
    src: [
      './images/colonaa.jpg',
      './images/jazzkitten.jpg',
      './images/makura.gif',
      './images/supplement.png'
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

const difficulty = [
  {
    freq: 400, // 広告発生率
    lifeSet: 3, // ライフ(ミス許容回数)
  },
  {
    freq: 300, 
    lifeSet: 3,
  },
  {
    freq: 100,
    lifeSet: 3,
  },
  {
    freq: 100,
    lifeSet: 1,
  },
]; // 難易度別



const startWrapper = document.querySelector('#start_wrapper');
const startButton = document.querySelector('#start_button');
startButton.addEventListener('click', countdown); // スタートボタン
const retryButton = document.querySelector('#retry_button');
retryButton.addEventListener('click', retry); // リトライボタン

const difficultyForm = document.querySelector('#difficulty'); // 難易度変更欄
difficultyForm.addEventListener('change', lifeReset);


// lifeReset();

/* パラメータ関係 
*****************************************************************/
const passageArea = document.querySelector('#passage_area');
const lifeArea = document.querySelector('#life_area');
let PassSec;    // 秒数カウント用変数
let PassageID;  // タイマー関数格納用
let PassagePop; // オブジェクトの周期生成用
let msg = 0;    // メッセージ(時間)
let count = 3;  // (カウントダウン)
let life = difficulty[difficultyForm.selectedIndex].lifeSet; // ライフ初期値

// 繰り返し処理の開始
function startShowing() {
  PassSec = 0;   // カウンタのリセット
  PassageID = setInterval('showPassage()',10); // タイマーをセット(10ms間隔)
  PassagePop = setInterval('randobject()', difficulty[difficultyForm.selectedIndex].freq); // ランダム抽選 (難易度で抽選間隔が変わる)
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
    h2.setAttribute('id', 'countdown_wrapper');
    h2.innerText = count;

    startWrapper.appendChild(h2);
  }

  // console.log(count);
  document.querySelector('#countdown_wrapper').innerText = count--; // カウントダウン
  const id = setTimeout('countdown()', 1000);
  if (count < 0) // カウント０になったら
  {
    clearTimeout(id);
    document.querySelector('#countdown_wrapper').remove();
    startWrapper.style.display = 'none';  // スタート画面の非表示
    startShowing();
  }
}


/* シミュレーション本処理 
***************************************************************/
const scoreArea = document.querySelector('#score_area');
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
      div2.className = 'object_wrapper';
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
        target.closest('.object_wrapper').remove();
        break;
      default:
    }
    target.parentElement.parentNode.removeChild(target.parentElement); // 'イベント'の'要素'の'親のノード'から'イベントの要素'を消す
    flags[ target.id ] = 'false'; // フラグを下げる(オブジェクト削除)
    
    // console.log(target.id + " → " + flags[ target.id ]); // デバッグ用ログ
    clickEffect(e, 'true');
    Score += 1000;
    scoreArea.innerHTML = Score;
  });

  // 失敗判定
  const gameover_a = document.createElement('a');
  gameover_a.href = '#';
  gameover_a.id = 'gameover_wrapper';
  gameover_a.innerHTML = '<h3>GAME OVER</h3><h4>画面をタップしてください</h4>'; // こっちの方がコードが少ない

  aimg.addEventListener('click', (e) => {
    life--;
    damage(lifeArea.lastElementChild);
    clickEffect(e, 'false');
    // console.log(life);
    
    // life回数が許容値を上回ったら
    if (life <= 0) {
      stopShowing(); // タイマー停止

      document.querySelector('body').appendChild(gameover_a); // ゲームオーバー画面表示
      setTimeout( () => {
        document.querySelector('#gameover_wrapper').addEventListener('click', gameover);
      }, 1000);
    }
  });
}

// ゲームオーバー
function gameover() {
  result(); // リザルト画面召喚
  this.remove();
}

// ライフを減らす
function damage(target) {
  target.classList.add('fade_out');
  setTimeout(()=>{target.remove()}, 500);
}

// ライフリセット
function lifeReset() {
  life = difficulty[difficultyForm.selectedIndex].lifeSet;
// console.log(life);
  const HEART = "<span>♥</span>";
  lifeArea.innerHTML = HEART.repeat(life);
}
lifeReset();

/* 終了後 
*********************************************************************/
const resultWrapper = document.querySelector('#result_wrapper');
const scoreResult = document.querySelector('#score_result');
const passSecResult = document.querySelector('#passsec_result');
const finalResult = document.querySelector('#final_result');

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
          document.querySelector('.object_wrapper').remove();
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
  
  count = 3; // カウントダウン初期化
  lifeReset(); // ライフ初期化


  resultWrapper.style.display = 'none'; // 結果画面の非表示
  startWrapper.style.display = 'flex'; // スタート画面の表示
  document.querySelector('#start_wrapper').style.display = 'flex';
  document.querySelector('#start').style.display = 'flex';
}



/* クリックイベント 
***************************************************************/
const imageEffect = {
  true: 'good.png',
  false: 'ok.png',
};

function clickEffect(e, flag) {
  const targetArea = e.target.getBoundingClientRect();
  const x = targetArea.left+ e.offsetX;
  const y = targetArea.top+ e.offsetY;
  
  const div = document.createElement('div');
  div.classList.add('click_effect');
  div.innerHTML = `<img src="images/${imageEffect[flag]}">`;

  div.style.left = `${x - 20}px`;
  div.style.top = `${y- 60}px`;

  document.querySelector('body').appendChild(div);
  setTimeout(()=>{div.remove()}, 1000);
}

/* 入力チェック 
***************************************************************/
function formCheck() {
  const nameForm = document.forms[0].name;
  const formAlert = document.querySelector('#form_alert');
  //入力チェック
  if (!nameForm.value || !nameForm.value.match(/\S/g)) {
    formAlert.innerText = '名前を入力してください';
    return false;
  } else {
  }
}