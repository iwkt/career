// aタグ要素の参照を取得
const links = document.querySelectorAll('a[href^="#"]');

// 各aタグにクリックイベントを設定
for ( let i = 0; i < links.length; i++ ) {
  links[i].addEventListener('click', (e) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault();

    // 対象（aタグ）のY軸の絶対座標を取得
    const elemY = links[i].getBoundingClientRect().top;
    // 現在のスクロール量を取得
    const scrollY = window.pageYOffset;
    // 対象までのスクロール量を算出
    const top = elemY - scrollY;

    window.scroll({
      top: top, // スクロール量の設定
      behavior: 'smooth' // スクロール動作の設定
    });
  });
}