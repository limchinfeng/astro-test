interface Props {
  title: string;
  generator?: string;
  children: React.ReactNode;
}

const Layouts: React.FC<Props> = ({ title, generator, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Astro description" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {generator && <meta name="generator" content={generator} />}
        <title>{title}</title>
      </head>
      <body className="bg-slate-600">
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layouts;