import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お探しのページは存在しません - Pim 外部リンクシステム",
};

export default function Custom404() {
  return (
    <>
      <h1>エラー 404</h1>
      <p>当該のページは存在しません</p>
      <p>
        <a href="https://www.pim.gr.jp">Pimホームページへ</a>
      </p>
    </>
  );
}