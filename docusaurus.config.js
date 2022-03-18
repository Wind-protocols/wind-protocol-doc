module.exports = {
  title: "Wind-protocol",
  tagline: "The metaverse layer of Blockchain",
  url: "https://www.windprotocol.org/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/protocollogo.org",
  organizationName: "Wind-protocol", // Usually your GitHub org/user name.
  projectName: "windmetaverse-docs", // Usually your repo name.
  i18n: {
    defaultLocale: 'English',
    locales: ['English'],
  },themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",
    },navbar: {
      title: "Windmetaverse",
      logo: {
        alt: "windmetaverse logo",
        src: "img/protocollogo.svg",
      },items: [
       
        {
          href: "https://www.windprotocol.org/",
          label: "Protocol",
          position: "right",
        },
        {
          href: "https://www.windmetaverse.com/",
          label: "Metaverse",
          position: "right",
        },
      ],
    },footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/9PyKRev8TE",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/windmetaverse",
            },
            {
              label: "Telegram",
              href: "https://t.me/joinchat/mNxJoJn4p4JhYjU1",
            },
          ],
        },
      
      ],
      copyright: `Copyright © ${new Date().getFullYear()} windmetaverse. Built with Docusaurus.`,
    },
  },presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
      },
    ],
  ],
  
};
