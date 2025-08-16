export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>layout{children}</main>
    </>
  );
}

function Header() {
  return <div>header</div>;
}
