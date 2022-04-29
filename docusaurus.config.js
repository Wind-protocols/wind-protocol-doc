module.exports = {
  title: "Wind-protocol",
  tagline: "The metaverse layer of Web3",
  url: "https://www.windprotocol.org/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/windboo.png",
  organizationName: "Wind-protocol", // Usually your GitHub org/user name.
  projectName: "wind-document", // Usually your repo name.
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
        src: "img/windboo.png",
      },items: [
        {
          href: "Egomobile/",
          label: "EGO",
          position: "left",
        },
        {
          href: "Palace-Marketplace/",
          label: "Marketplace",
          position: "left",
        },
       
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
