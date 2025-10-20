"use client";
import Link from "next/link";
import { use } from "react";

export default function ArticlePage(props: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "ar" }>;
}) {
  const parmas = use(props.params);
  const searchParms = use(props.searchParams);

  return (
    <div>
      <h1>News Article {parmas.articleId}</h1>
      <p>Reading in language {searchParms.lang}</p>
      <ul>
        <li>
          <Link href={`/articles/${parmas.articleId}?lang=en`}>English</Link>
          <Link href={`/articles/${parmas.articleId}?lang=ar`}>Arabic</Link>
        </li>
      </ul>
    </div>
  );
}
