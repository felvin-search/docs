// Docs: https://docusaurus.io/docs/sidebar
module.exports = {
  mySidebar: [
    "index",
    {
      type: "category",
      label: "Features",
      items: ["instant-apps/overview", "profiles/overview"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Instant Apps",
      collapsed: false,
      items: [
        "instant-apps/getting-started",
        "instant-apps/architecture",
        "instant-apps/marketplace",
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
      label: "Events",
      collapsed: false,
      items: ["events/hackathon"],
    },
    {
      type: "category",
      label: "Team Docs",
      items: [
        "team-documentation",
        "team-docs/tutorials",
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
          label: "felvin.com",
          items: [
            "team-docs/felvin.com/overview",
            "team-docs/felvin.com/release-flow",
            "team-docs/felvin.com/deployment-runbook",
          ],
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
