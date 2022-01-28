import styled from '@emotion/styled';
import { DocsFooter } from '~/components/molecules/DocsFooter';

const Wrapper = styled.div({
  width: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const PrivacyPolicyDocument: React.FC = () => {
  return (
    <Wrapper>
      <h1>プライバシーポリシー</h1>
      <h3>お客様から取得する情報</h3>
      <div>当社は、お客様から以下の情報を取得します。</div>
      <ul>
        <li>氏名</li>
        <li>メールアドレス</li>
        <li>電話番号</li>
        <li>住所</li>
      </ul>
      <h3>お客様の情報を利用する目的</h3>
      <div>当社は、お客様から取得した情報を、以下の目的のために利用します。</div>
      <ul>
        <li>当社サービスに関する登録の受付、お客様の本人確認、認証のため</li>
        <li>当社サービスにおけるお客様の行動履歴を分析し、当社サービスの維持改善に役立てるため</li>
        <li>
          提携する事業者・サービスのご案内をお送りするため お客様からのお問い合わせに対応するため
        </li>
        <li>当社の規約や法令に違反する行為に対応するため</li>
        <li>当社サービスの変更、提供中止、終了、契約解除をご連絡するため</li>
        <li>当社規約の変更等を通知するため</li>
        <li>以上の他、当社サービスの提供、維持、保護及び改善のため</li>
      </ul>
      <h3>第三者提供</h3>
      <div>
        当社は、お客様から取得する情報のうち、個人データ（個人情報保護法第２条第６項）に該当するものついては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。
      </div>
      <h3>アクセス解析ツール</h3>
      <div>
        当社は、お客様のアクセス解析のために、「Googleアナリティクス」を利用しています。Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。Cookieを無効にすれば、これらの情報の収集を拒否することができます。詳しくはお使いのブラウザの設定をご確認ください。Googleアナリティクスについて、詳しくは以下からご確認ください。
      </div>
      <div>https://marketingplatform.google.com/about/analytics/terms/jp/</div>
      <h3>プライバシーポリシーの変更</h3>
      <div>
        当社は、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。
      </div>
      <h3>お問い合わせ</h3>
      <div>
        お客様の情報の開示、情報の訂正、利用停止、削除をご希望の場合は、以下のメールアドレスにご連絡ください。
        e-mail kurisakien@gmail.com
      </div>
      <h3>事業者の名称</h3>
      <div>栗崎園 2022年1月1日 制定</div>
      <DocsFooter />
    </Wrapper>
  );
};
