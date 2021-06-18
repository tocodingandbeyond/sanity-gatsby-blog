export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60cbf8c58fd0a73429ae3af3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-jw7gek8m",
                  apiId: "6d5a3537-a963-4e15-940b-4c8488486c13",
                },
                {
                  buildHookId: "60cbf8c5341eb635ec61154b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-s3keksjk",
                  apiId: "551776f6-9500-48de-8d15-0069437d2f7b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tocodingandbeyond/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-s3keksjk.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
