// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

/**
 * The Launchpad admin guide.
 *
 * Built to a folder of HTML and committed as `dist/`, because that folder *is*
 * the deliverable: Launchpad never runs `npm install` or `astro build` for an
 * app, and `launchpad.toml`'s `[static] root = "dist"` is what tells the
 * detector to serve this repo rather than refuse it for having a package.json.
 *
 * `base` is not optional. A static app is served under `/apps/{slug}/`, and a
 * root-absolute URL without that prefix asks the *platform* for the file and
 * gets a 404. The slug is reserved (`_` belongs to apps Launchpad installs
 * itself), so it cannot be taken by an ordinary app and this value cannot go
 * stale behind a rename.
 */
export default defineConfig({
  base: "/apps/_admin-guide",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "Launchpad",
      logo: { src: "./src/assets/logo.svg", alt: "Launchpad" },
      tagline: "Admin guide",
      description:
        "Installing, configuring and running a Launchpad install.",
      components: {
        ThemeSelect: "./src/components/empty.astro",
        SocialIcons: "./src/components/empty.astro",
      },
      customCss: [
        "@fontsource-variable/geist",
        "@fontsource-variable/geist-mono",
        "./src/styles/launchpad.css",
      ],
      pagination: true,
      lastUpdated: false,
      pagefind: true,
      sidebar: [
        {
          label: "Install",
          items: [
            { label: "Ways to install", slug: "install/ways" },
            { label: "First run", slug: "install/first-run" },
            { label: "Configuration", slug: "install/configuration" },
          ],
        },
        {
          label: "Identity",
          items: [
            { label: "Sign-in providers", slug: "identity/providers" },
            { label: "The built-in administrator", slug: "identity/local" },
            { label: "Sessions", slug: "identity/sessions" },
            { label: "Groups", slug: "identity/groups" },
            { label: "Offboarding and dormancy", slug: "identity/offboarding" },
          ],
        },
        {
          label: "Apps",
          items: [
            { label: "Execution modes", slug: "apps/execution-modes" },
            { label: "Locking and retirement", slug: "apps/locking" },
            { label: "Quiet apps", slug: "apps/quiet" },
            { label: "Publisher requests", slug: "apps/publishing" },
            { label: "The estate view", slug: "apps/estate" },
          ],
        },
        {
          label: "Security",
          items: [
            { label: "How apps are isolated", slug: "security/isolation" },
            { label: "Anonymous access", slug: "security/anonymous" },
            { label: "Reachability", slug: "security/reachability" },
            { label: "Trusted app sources", slug: "security/sources" },
            { label: "Dependency policy", slug: "security/dependencies" },
            { label: "At-rest encryption", slug: "security/encryption" },
            { label: "The audit log", slug: "security/audit" },
            { label: "Scan targets", slug: "security/scanning" },
          ],
        },
        {
          label: "Capabilities",
          items: [
            { label: "What is optional", slug: "capabilities/optional" },
            { label: "App storage", slug: "capabilities/storage" },
            { label: "Integrations", slug: "capabilities/integrations" },
            { label: "Notifications", slug: "capabilities/notifications" },
            { label: "The Gallery", slug: "capabilities/gallery" },
            { label: "Documentation", slug: "capabilities/documentation" },
          ],
        },
        {
          label: "Running it",
          items: [
            { label: "Telemetry", slug: "operate/telemetry" },
            { label: "Licensing", slug: "operate/licensing" },
            { label: "Language versions", slug: "operate/versions" },
            { label: "Troubleshooting", slug: "operate/troubleshooting" },
          ],
        },
      ],
    }),
  ],
});
