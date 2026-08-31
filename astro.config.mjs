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
  // The front door is the first page, not a landing page in front of it.
  // A splash of cards duplicating the sidebar is a click between somebody and
  // the thing they came for, and every route into this guide — the
  // Documentation card, a bookmark, the app's own address — arrives at `/`.
  // So `/` *is* the first page. `index.mdx` is gone rather than hidden: a page
  // nothing links to is a page that rots.
  redirects: {
    "/": "/apps/_admin-guide/start/architecture/",
  },
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
          label: "Get started",
          items: [
            { label: "What you are running", slug: "start/architecture" },
            { label: "Ways to install", slug: "start/install-options" },
            { label: "First run", slug: "start/first-run" },
            { label: "Upgrading", slug: "start/upgrading" },
          ],
        },
        {
          label: "Configuration",
          items: [
            { label: "Configuration and settings", slug: "config/configuration-vs-settings" },
            { label: "Listeners, origins and proxies", slug: "config/listeners-and-origins" },
            { label: "The operating dials", slug: "config/operating-dials" },
            { label: "Retention", slug: "config/retention" },
          ],
        },
        {
          label: "Identity",
          items: [
            { label: "Sign-in providers", slug: "identity/providers" },
            { label: "The built-in administrator", slug: "identity/local-administrator" },
            { label: "Accounts awaiting activation", slug: "identity/activation" },
            { label: "Sessions", slug: "identity/sessions" },
            { label: "Users and roles", slug: "identity/users-and-roles" },
            { label: "Groups", slug: "identity/groups" },
            { label: "Directory groups", slug: "identity/directory-groups" },
            { label: "The directory feed (SCIM)", slug: "identity/directory-feed" },
            { label: "Offboarding and dormancy", slug: "identity/offboarding" },
          ],
        },
        {
          label: "Apps and the estate",
          items: [
            { label: "Execution modes", slug: "apps/execution-modes" },
            { label: "Ownership and grants", slug: "apps/ownership-and-grants" },
            { label: "Listing and access requests", slug: "apps/listing" },
            { label: "Locking and retirement", slug: "apps/locking" },
            { label: "Quiet apps", slug: "apps/quiet" },
            { label: "Tags", slug: "apps/tags" },
            { label: "Releases and retention", slug: "apps/releases" },
            { label: "The artifact store", slug: "apps/artifact-store" },
            { label: "The estate views", slug: "apps/estate-views" },
          ],
        },
        {
          label: "Builds",
          items: [
            { label: "What a deploy does", slug: "build/pipeline" },
            { label: "The build queue", slug: "build/queue-and-limits" },
            { label: "The build cache", slug: "build/cache" },
            { label: "Language versions", slug: "build/languages" },
            { label: "Runner images", slug: "build/runner-images" },
          ],
        },
        {
          label: "Security",
          items: [
            { label: "How apps are isolated", slug: "security/isolation" },
            { label: "Anonymous access", slug: "security/anonymous" },
            { label: "Reachability", slug: "security/reachability" },
            { label: "Trusted app sources", slug: "security/sources" },
            { label: "Connected git hosts", slug: "security/git-connections" },
            { label: "Dependency policy", slug: "security/dependencies" },
            { label: "At-rest encryption", slug: "security/encryption" },
            { label: "Machine credentials", slug: "security/keys" },
            { label: "The audit log", slug: "security/audit" },
            { label: "Scan targets", slug: "security/scan-targets" },
          ],
        },
        {
          label: "Capabilities",
          items: [
            { label: "What is optional", slug: "capabilities/optional" },
            { label: "App storage", slug: "capabilities/storage" },
            { label: "The credentials broker", slug: "capabilities/credentials" },
            { label: "Integrations", slug: "capabilities/integrations" },
            { label: "Email and notifications", slug: "capabilities/email" },
            { label: "Announcements and messages", slug: "capabilities/announcements" },
            { label: "The gallery", slug: "capabilities/gallery" },
            { label: "Documentation", slug: "capabilities/documentation" },
            { label: "Telemetry", slug: "capabilities/telemetry" },
          ],
        },
        {
          label: "Operating",
          items: [
            { label: "System checks", slug: "operate/checks" },
            { label: "Health and processes", slug: "operate/health-and-processes" },
            { label: "Usage and cost", slug: "operate/usage" },
            { label: "Automation", slug: "operate/automation" },
            { label: "Licensing", slug: "operate/licensing" },
            { label: "The binary's subcommands", slug: "operate/command-line" },
            { label: "Troubleshooting", slug: "operate/troubleshooting" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "Settings reference", slug: "reference/settings" },
            { label: "Environment reference", slug: "reference/environment" },
            { label: "The admin pages", slug: "reference/admin-pages" },
            { label: "Checks reference", slug: "reference/checks-reference" },
          ],
        },
      ],
    }),
  ],
});
