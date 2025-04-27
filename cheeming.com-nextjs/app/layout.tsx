import './global.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    <head>
    <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FIXME - cheeming.com</title>
    <link rel="alternate" type="application/rss+xml" title="cheeming.com feed - RSS" href="https://www.cheeming.com/rss.xml" />
    <link rel="alternate" type="application/atom+xml" title="cheeming.com feed - Atom" href="https://www.cheeming.com/atom.xml" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

    </head>

    <body>
    <div className="content">
    { children }
    </div>

    <div className="footer">
        <p className="license">
            <a rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" src="https://licensebuttons.net/l/by-sa/3.0/80x15.png" /></a><br />cheeming.com by <a href="https://www.cheeming.com" property="cc:attributionName" rel="cc:attributionURL">Chew Chee Ming</a> is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.
        </p>
    </div>

    </body>
    </html>
  );
}
