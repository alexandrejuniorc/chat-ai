interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      suppressHydrationWarning={true}
      className="flex h-16 items-center px-4 bg-slate-900"
    >
      <div className="flex w-full justify-center text-slate-200">
        <p>Desenvolvido por Alexandre Junior.</p>
      </div>
    </footer>
  );
}
