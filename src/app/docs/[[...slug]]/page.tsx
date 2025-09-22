export default async function DocsPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <h1>Docs page {slug?.join("/")}</h1>;
}
