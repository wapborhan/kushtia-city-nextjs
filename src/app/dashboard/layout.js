export default function DashboardLayout({ children }) {
  return (
    <body>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </body>
  );
}
