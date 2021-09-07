// Docs: https://docusaurus.io/docs/sidebar
module.exports = {
  mySidebar: [
    "index",
    {
      type: "category",
      label: "Features",
      items: ["features/instant-apps/index", "features/profiles/index"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Instant Apps",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "features/instant-apps/index",
        },
        "features/instant-apps/architecture",
      ],
    },
    {
      type: "category",
      label: "Company",
      collapsed: false,
      items: [
        "company/about-us",
        "company/vision",
        "company/mission",
        "company/careers",
      ],
    },
    {
      type: "category",
      label: "Team Docs",
      items: [
        "team-documentation",
        {
          type: "category",
          label: "Decisions",
          items: [
            "decisions/public_documentation",
            "decisions/supertokens_for_auth",
            "decisions/styled_components_for_css",
          ],
        },
        {
          type: "category",
          label: "Processes",
          items: ["processes/weekly-review", "processes/weekly-releases"],
        },
        {
          type: "category",
          label: "RFCs",
          items: ["rfcs/snippet_apps"],
        },
        {
          type: "category",
          label: "Incident Reports",
          items: ["incident-reports/2021-08-13-localstorage-schema-error"],
        },
      ],
    },
  ],
};
