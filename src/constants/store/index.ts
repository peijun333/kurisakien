import { Order } from '../../@types/order';
import { Item } from '../../@types/product';

export const itemList: Item[] = [
  {
    id: 'a01',
    imagePath: '/image/items/hutsu.JPG',
    name: '普通煎茶',
    price: 1080,
    amount: '200g',
    description: `
一番のロングセラー商品。
普段使いのお茶として人気があります。

お手頃価格ですが、れっきとした1番茶です。
少し冷ましたお湯でゆったり(1分以上かけて)茶葉を開かせると
一茶ならではの旨みが引き出せます。

旨みも渋みも持ち合わせていますので、
その日の気分やシチュエーションに合わせて淹れ方を工夫してみてください。
(湯温で味バランスが変化します。)
煎が効くのも嬉しいお茶です。`,
  },
  {
    id: 'a02',
    imagePath: '/image/items/tokuyo.JPG',
    name: '徳用煎茶',
    price: 2000,
    amount: '334g',
    description: `
二番茶ならではの、たっぷりサイズでお手頃価格のお茶です。
味の厚み、深みは一番茶にはかないませんが、健康的なさっぱり味、
そして何より惜しげもなくゴクゴク飲めるのが嬉しいお茶のです。

湯温もさほど気にしなくて大丈夫、気軽にさっと淹れて下さい。
夏は、ロックティーもおすすめです。
濃いめに淹れて、氷の入ったグラスに注いで急冷すれば、
あっという間に冷茶ができます。
暑さでバテ気味の身体をシャキッとさせてくれます。`,
  },
  {
    id: 'a03',
    imagePath: '/image/items/hukamushi100g.JPG',
    name: '深蒸し煎茶',
    price: 1080,
    amount: '100g',
    description: `
5月初旬にミル芽摘みしました。
とろりとまろやか、緑色した濁りのお茶です。

同価格の高級煎茶(普通蒸煎茶)と同時期の原葉ですが、
蒸し長めの製造なので形状が細かいです。
茶の粉部分が良い塩梅に渋みをカバーしてくれています。
高級煎茶と同様おもてなし向きです。
この2種の詰め合わせギフトもご好評頂いています。`,
  },
  {
    id: 'a04',
    imagePath: '/image/items/hukamushi200g.JPG',
    name: '深蒸し茶',
    price: 1300,
    amount: '200g',
    description: `
普段使いのお茶です。
形状が細かいのでさっと淹れても(30秒程)味はしっかり出ます。
高めの湯温でも渋みが前面には出てこないので、
慌ただしい日々の中、安定した美味しさで淹れられます。

深蒸し茶は、緑の濁り、まったりした味わいが特徴ですが、
春野は深蒸しに特化した産地ではないので、
茶葉の形状はほどほどにあり、喉越しはすっきりしています。

それでも3煎目くらいから若干湯切れが鈍くなりますので、
気になる方は帯網み急須でお淹れください。`,
  },
  {
    id: 'a05',
    imagePath: '/image/items/kokyusentya.JPG',
    name: '高級煎茶',
    price: 1080,
    amount: '100g',
    description: `
旨みと渋み、両方をバランスよく持ち合わせていて煎が効きます。
心地良い余韻もあります。
なので、淹れ方次第、淹れ手次第で様々な表情が生まれます。
ちょっと難しく感じるかもしれませんが、実はお茶を淹れる醍醐味でもあり、
大いに楽しんで頂きたいところです。
香味だけでなく、その日の気分や飲み手に合わせて淹れる楽しみも是非味わって下さい。

お茶は日々を豊かにしてくれます。
贈りもの、おもてなし用として人気のある商品です。
    `,
  },
  {
    id: 'a06',
    imagePath: '/image/items/tokujosentya.JPG',
    name: '特上煎茶',
    price: 1620,
    amount: '100g',
    description: `
かぶせ茶をブレンドしたお茶です。
玉露のような重厚な香りと濃厚な旨みがあります。
茶葉を贅沢に使って、
ぬるめのお湯でじっくり淹れるとより玉露に近い味わいになります。

煎を重ねるとだんだん心地良い渋味もでてきます。
ひたひたのお水でしずく茶として楽しむのもおすすめです。
充実した芽ならではの楽しみ方です。
  `,
  },
  {
    id: 'a07',
    imagePath: '/image/items/hoji.JPG',
    name: 'ほうじ茶',
    price: 1080,
    amount: '200g',
    description: `
一番茶の棒を焙煎しました。
軽めの焙じなので味も楽しめます。

熱いお湯で香り高く淹れるのが一番ですが、
実は冷たい水でじっくり淹れても美味しいです。
喉越し良くてごくごく飲めると夏の人気商品でもあります。
`,
  },
  {
    id: 'a08',
    imagePath: '/image/items/kuki200g.JPG',
    name: 'くき茶',
    price: 1080,
    amount: '200g',
    description: `
いわゆる出物、仕上げ作業で取り除かれた茎の部分のお茶です。
すっきりかつ甘みある茎に、一緒に弾かれた上質な本茶が程よく混ざり、
爽やかなハーモニーを奏でています。
生産量が圧倒的に少ないので、隠れファン？に買って頂いておしまいになります。

湯温の影響を受けにくく、気楽に淹れて頂けます。
「注ぎ切らなくても渋くならないから、
ずぼらな私向きなんだよね。」
とおっしゃる方も。
なるほど、家族で食事の時に重宝しそうです。
    `,
  },
  {
    id: 'a09',
    imagePath: '/image/items/mattyagenmaitya.JPG',
    name: '抹茶入り玄米茶',
    price: 1080,
    amount: '300g',
    description: `
緑茶に抹茶と炒り米をブレンドしました。

抹茶が入っているので、
さっと淹れた一煎目は鮮やかなグリーンとまったりした優しい味になります。
煎を重ねていくと、じわじわと渋みが出てきます。懐かしい味だね
との感想を頂いています。
湯温も進出時間も自由度が高いので、思い思いの淹れ方で楽しんだ頂けたらと思います。

抹茶の入っていない玄米茶を飲みたい！という方は、
ご自身でブレンドしてみて下さい。
玄米(100g220円)を販売していますのでそちらをお買い求め頂き、
好きなお茶に加えるだけです。お茶と玄米は同量で混ぜるのが標準です。
    `,
  },
  {
    id: 'a10',
    imagePath: '/image/items/kotya.JPG',
    name: '春野の紅茶リーフ',
    price: 540,
    amount: '80g',
    description: `
穏やかな香りの和紅茶です。
渋みが少なくほんのり甘みがあるので、
まずはストレートで飲んでみてください。
お砂糖を入れないラテやアイスティーもお試し下さい。
    `,
  },
  {
    id: 'a11',
    imagePath: '/image/items/benihukikotya.JPG',
    name: 'べにふうき紅茶',
    price: 540,
    amount: '50g',
    description: `
「べにふうき」いう品種の紅茶です。
我が家は、この品種を緑茶加工、紅茶加工、どちらもしています。

メチル化カテキンという成分を含み、緑茶にすると渋いです。
紅茶にすると香味が楽しめます。
「春野の紅茶」と比べると、香りに華が、水色に明るさがあります。
    `,
  },
  {
    id: 'a12',
    imagePath: '/image/items/benihukigreen.JPG',
    name: 'べにふうき緑茶リーフ',
    price: 870,
    amount: '100g',
    description: `
「べにふうき」という品種の緑茶です。
「メチル化カテキン」という特殊なをカテキンを含む渋いお茶ですが、
花粉症のシーズンになると突然売れ出します。
本当は、通年飲まれる方が良いそう、継続は力なりです。
リーフタイプの他にTB、粉末タイプもございます。
また、紅茶向きの品種なので、「べにふうき紅茶」も作っています。

    `,
  },
  {
    id: 'a13',
    imagePath: '/image/items/ryokutyabag.JPG',
    name: '緑茶ティーバッグ(紐付き)',
    price: 540,
    amount: '3g x 15',
    description: `
いつでも手軽に楽しめるお湯呑み1人分3g紐付きの緑茶TBです。
5g紐なし緑茶TB(20ケ入り500円)が緑濃いまろやか茶なのに対し、
こちらは透明感あるすっきりクリアなお茶です。
湯温を少し下げてじっくり淹れると旨みが引き立ちます
夏場はじっくり水で淹れても美味しいです。
    `,
  },
  {
    id: 'a14',
    imagePath: '/image/items/mattyagenmaityabag.JPG',
    name: '抹茶入り玄米茶ティーバッグ(紐付き)',
    price: 540,
    amount: '3g x 20',
    description: `
癒しの味と香りを手軽に楽しめるTBです。

緑茶は、湯温で渋みを変えられますが、
そんなの気にせずただただお茶飲んでほっとしたい！
という時には玄米茶をおすすめします。
適当に淹れてもちゃんと美味しくなるお茶です。
`,
  },
  {
    id: 'a15',
    imagePath: '/image/items/hojibag.JPG',
    name: 'ほうじ茶ティーバッグ(紐付き)',
    price: 540,
    amount: '3g x 15',
    description: `
人気のほうじ茶を気軽に飲んで頂けるよう、
紐付きのティーバッグにしました。
熱々を保温状態にしておいても味や香りの劣化が少なく。
「水筒のお茶」としてお弁当のお供にされている方も多いです。
水出しもオススメです。
    `,
  },
  {
    id: 'a17',
    imagePath: '/image/items/himonashiryokutyabag.JPG',
    name: '緑茶ティーバッグ',
    price: 540,
    amount: '5g x 20',
    description: `
ひと包み5gと茶葉たっぷりタイプ。
ボトルや土瓶での作り置きに重宝します。
もちろん、濃いお茶好きの方は、
お湯呑みにひと包みで贅沢なお茶時間をお過ごし下さい。

細かい茶葉なので水でも早く出ます。
猛暑で冷茶需要が高い時期でも冷蔵庫に切らすことなく
どんどん作ってどんどん飲んで頂けます。
もちろん、お湯でも美味しく飲めます。
`,
  },
  {
    id: 'a18',
    imagePath: '/image/items/kotyabag.JPG',
    name: '春野の紅茶ティーバッグ',
    price: 540,
    amount: '3g x 15',
    description: `
まろやかな口当たりの国産紅茶です。
１包3gとたっぷりサイズです。
2煎、3煎と飲み進められるのが経済的で嬉しいとのお声も頂きます。
穏やかな香りと渋すぎないところが人気です。
ストレートで飲まれる方が多いです。
`,
  },
  {
    id: 'a19',
    imagePath: '/image/items/benihukihunmatsu40g.JPG',
    name: 'べにふうき粉末茶',
    price: 650,
    amount: '40g',
    description: `
べにふうき緑茶を手軽に楽しめるよう粉末にしました。
40gたっぷりサイズなので、シーズン通してこまめに飲みたい方におすすめです。

慣れればクセになる渋さ、でも慣れるまでは渋い！と顔が歪むかも…。
好みの分量に調節して飲んで下さい。
`,
  },
  {
    id: 'a20',
    imagePath: '/image/items/benihukistick.JPG',
    name: 'べにふうき粉末茶スティックタイプ',
    price: 870,
    amount: '1g x 30',
    description: `
粉末のべにふうき緑茶を1gに分包しました。
ご家族やご友人と分けたり、職場やお出かけ用など携帯にも便利です。
簡単にさっと飲めて助かる、これなら継続できると好評です。

    `,
  },
  {
    id: 'a21',
    imagePath: '/image/items/bihunmatsu.JPG',
    name: '微粉末緑茶',
    price: 540,
    amount: '50g',
    description: `
緑茶をパウダー状に粉砕しました。
お水やお湯に溶かすだけで簡単に飲める、急須いらず、ごみゼロのエコなお茶です。

また、お茶には不溶性成分(ビタミンE、食物繊維など…)体に良い成分が沢山あり、
これらを余すことなく摂ることができるので、体にもとても嬉しいお茶です。

抹茶によく似ていますが、
こちらは露地栽培のお茶の葉っぱが原料です。(抹茶は被覆栽培です。)
緑鮮やかな抹茶に対し、おひさまをたっぷり浴びた微粉末緑茶は、
葉っぱ本来の黄緑色をしています。
緑茶ならではの渋みがありますが、
粉末加工により渋みがカバーされまろやかな口当たりです。
抹茶よりお手頃価格なので、毎日ごくごく飲んで頂けます。

粉末タイプのお茶は用途の幅が広がります。
焼酎、牛乳などに混ぜるほか、小麦粉料理や手作りお菓子の材料にもおすすめ、
是非お茶三昧の豊かな時間をお過ごしください。

    `,
  },
  {
    id: 'a22',
    imagePath: '/image/items/bihunmatsustick.JPG',
    name: '微粉末緑茶スティックタイプ',
    price: 540,
    amount: '1g x 30',
    description: `
緑茶を粉状にして、1g(一杯分)ずつ分包しました。
個包装なので、みんなで分け合ったり、携帯用、会社用…
などちょっと飲みたいという時に重宝します。

ハサミいらず、爪を立てれば手で開封できます。
細長のスティックなので、
ペットボトルのような小さな口からも簡単に投入でき
いつでも作りたてをお飲み頂けます。
    `,
  },
  {
    id: 'a23',
    imagePath: '/image/items/genmaitya.JPG',
    name: '抹茶入り玄米茶',
    price: 540,
    amount: '35g',
    description: `
抹茶に粉状にした炒り米を混ぜました。
鮮やかな緑色と食欲をそそる香ばしい香りがお子さまにも人気です。
粉末状なのでお湯はもちろん水に溶かしても口から鼻にふわっと香りが広がります。

特にバニラアイスとの相性抜群、炒り米の香りと豊かな抹茶の味わいがプラスされ、
たちまち豪華なスウィーツになります。
    `,
  },
  {
    id: 'a24',
    imagePath: '/image/items/genmaityastick.JPG',
    name: '抹茶入り玄米茶スティックタイプ',
    price: 540,
    amount: '1g x 25',
    description: `
抹茶入り玄米茶を使い切りサイズ1gに分包しました。
ハサミがなくても爪を立てて手で開封できます。
粉末タイプ、まるごと全部飲めるので急須不要、茶殻が出ない、
そして美味しいと、いつでもどこでもリラックスタイムを過ごせます。
綺麗な緑とホッとする香りに癒されて下さい。

    `,
  },
  {
    id: 'a25',
    imagePath: '/image/items/mattyastick.JPG',
    name: '抹茶スティックタイプ',
    price: 540,
    amount: '1g x 20',
    description: `
抹茶を使い切りサイズの1gに分包しました。
ハサミを使わず手で開封できます。
計量要らずで抹茶のお菓子やラテを作るときにも重宝します。
緑が綺麗なので、グラスで飲んだり焼酎やヨーグルトに混ぜたりと、
目でも楽しみながら味わって下さい。
    `,
  },
  {
    id: 'a26',
    imagePath: '/image/items/tokujomattay.JPG',
    name: '特上抹茶',
    price: 650,
    amount: '20g',
    description: `
鮮やかなグリーンの香り豊かな抹茶です。
お湯やお水に溶かすだけで、
まろやかな口当たりの目にも楽しい飲み物になります。
茶漉しでアイスクリームや生クリームに振りかけるだけで
たちまち抹茶スウィーツに。
色々とアレンジが楽しめます。
    `,
  },
  {
    id: 'a27',
    imagePath: '/image/items/benihukiame.JPG',
    name: 'べにふうき茶あめ',
    price: 540,
    amount: '100g (約 20個)',
    description: `
べにふうき茶の粉末をたっぷり練り込んだやや硬めのあめです。
体に優しい麦芽糖を使用、甘さ控えめでお茶本来の味を楽しめます。
花粉症の方はもちろん、普通に舐めて頂きたいです。
お茶の味強めなのが意外にも好評でリピーターさんが多い商品です。
    `,
  },
  {
    id: 'a29',
    imagePath: '/image/items/tokujosetx2.JPG',
    name: 'サンプル１２',
    price: 1000,
    amount: '200g',
    description: 'this is sample',
  },
  {
    id: 'a30',
    imagePath: '/image/items/tokujosetx3.JPG',
    name: 'サンプル１２',
    price: 1000,
    amount: '200g',
    description: 'this is sample',
  },
  {
    id: 'a30',
    imagePath: '/image/items/minikan1.JPG',
    name: 'サンプル１２',
    price: 1000,
    amount: '200g',
    description: 'this is sample',
  },
  {
    id: 'a31',
    imagePath: '/image/items/minikan2.JPG',
    name: 'サンプル１２',
    price: 1000,
    amount: '200g',
    description: 'this is sample',
  },
  {
    id: 'a32',
    imagePath: '/image/items/kan1.JPG',
    name: 'サンプル１２',
    price: 1000,
    amount: '200g',
    description: 'this is sample',
  },
  {
    id: 'a33',
    imagePath: '/image/items/kan1x2.JPG',
    name: 'サンプル１２',
    price: 1000,
    amount: '200g',
    description: 'this is sample',
  },
  {
    id: 'a34',
    imagePath: '/image/items/kan2.JPG',
    name: 'サンプル１２',
    price: 1000,
    amount: '200g',
    description: 'this is sample',
  },
  {
    id: 'a35',
    imagePath: '/image/items/kan2x2.JPG',
    name: 'サンプル１２',
    price: 1000,
    amount: '200g',
    description: 'this is sample',
  },
];

export const initialOrder: Order = {
  postalCode: '',
  address: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  paymentType: 'postal',
};
