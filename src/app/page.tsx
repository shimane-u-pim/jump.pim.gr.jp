import { Metadata } from "next";

export const metadata: Metadata = {
  title: "エラー - Pim 外部リンクシステム",
};

export default function Home() {
  return (
    <>
      <h1>エラー</h1>
      <p>トップページには直接アクセスできません。</p>
      <p>
        <a href="https://www.pim.gr.jp">Pimホームページへ</a>
      </p>
    </>
  );
}
