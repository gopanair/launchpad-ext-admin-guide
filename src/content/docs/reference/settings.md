---
title: Settings reference
description: Every runtime setting, what it does, and where it is rendered.
---

Every setting an administrator can change, by the name the API uses for it,
grouped by the page that renders it.

Ninety-three of them. **A setting missing from this index is a test failure** —
the same index feeds the settings page, its filter, and the command palette, so a
setting cannot be findable by one and invisible to another.

Everything here is a **database row**, changed at runtime, **audited**, and needs
no restart. For the environment side, see the [environment
reference](../environment/). For the seven that are both, see [operating
dials](../../config/operating-dials/).

:::note
`⌘K` finds any of these by name and takes you to the control. That is usually
faster than this page.
:::

## Admin → Settings

| Setting | Name | What it does |
|---|---|---|
| `public_base_url` | Address | Where links in notification email point. Leave blank to use the address this install was started with. |
| `security_txt_contact` | Security contact | Where somebody who has found a problem should send it. Filling this in publishes /.well-known/security.txt; clearing it stops. |
| `security_txt_expires` | Good until | The date the published contact stops being a promise. Required whenever there is a contact. |
| `security_txt_policy` | Disclosure policy | An https:// page describing how you want problems reported. Optional. |
| `security_txt_languages` | Preferred languages | Language tags the mailbox above can read a report in, separated by commas. Optional. |
| `isolated_execution_enabled` | Isolated execution | Lets an app be promoted to its own workload, with its own network namespace and resource envelope. |
| `default_execution_mode` | New apps are born | Which mode an app is created in when whoever creates it does not say. |
| `background_jobs_enabled` | Background jobs | Lets isolated apps run scheduled and on-demand work as their own workload. |
| `app_memory_limit_mb` | Memory limit per app | How much memory one app’s workload may use before the platform restarts it, in MB or GB. 0 uses the install’s own figure. |
| `app_cpu_request_millicores` | CPU reserved per app | What each isolated workload reserves from the cluster scheduler, in millicores. 0 uses the install’s own figure. |
| `app_cpu_limit_millicores` | CPU ceiling per app | The most CPU one isolated workload may use, in millicores. 0 uses the install’s own figure, which is normally none. |
| `max_concurrent_builds` | Builds at once | How many deploys may be building at the same time. 0 uses the install’s MAX_CONCURRENT_BUILDS. |
| `auto_deploy_poll_seconds` | Auto-deploy check interval | How often the platform asks tracked branches for new commits. 0 uses the install’s AUTO_DEPLOY_POLL_INTERVAL. |
| `r_package_repository` | R package repository | Where R builds install binary packages from. Empty uses the install’s LAUNCHPAD_R_REPOS. |
| `log_level` | Platform log level | How much this platform writes about itself. Empty uses the install’s LOG_LEVEL. |
| `job_concurrency_per_app` | Concurrent runs per app | How many of one app’s runs may be in flight at once. |
| `max_run_retries` | Most automatic retries | The ceiling on how many extra attempts an automation may ask for. 0 turns retries off everywhere. |
| `notebook_render_timeout_seconds` | Let a notebook render for | How long a notebook’s cells may take to run during a deploy. Past this the deploy fails and the release already serving stays up. |
| `build_timeout_seconds` | Let a build command run for | How long any one build step may take — installing dependencies, compiling, bundling. Past this the deploy fails and the release already serving stays up. |
| `idle_sleep_minutes` | Sleep idle apps after | Minutes without a request before a shared-mode app’s process is stopped to reclaim its memory. Set 0 to turn this off. |
| `max_scheduled_tasks_per_app` | Most scheduled tasks an app may have | Counted per schedule rather than per endpoint. |
| `scheduled_task_timeout_seconds` | Wait for the app to answer for | Past this the run is recorded as a failure. |
| `scheduled_run_result_bytes` | Keep of each response | What the app answers becomes the run’s result. Set 0 to store none. |
| `gallery_deploy_mode` | Gallery | What the gallery offers: nothing, extensions only, or extensions and examples. |
| `job_log_retention_days` | Keep job logs for | A background job’s log lines. |
| `job_run_retention_days` | Keep job runs for | The run rows themselves, and the output files attached to them. |
| `scheduled_run_retention_days` | Keep run history for | By age rather than by count, so it means the same thing for an hourly task and a nightly one. |
| `scheduled_log_retention_days` | Keep task logs for | The lines an app pushes while a task runs. |
| `app_event_retention_days` | Keep failure events for | Everything that broke without anyone doing it — a build that failed, a health check that stopped answering, a scheduled run that could not be made. |
| `platform_log_retention_days` | Keep the platform’s own log for | What Launchpad said about each app — the release it fetched, the interpreter it resolved, the dependencies it repaired, the reason a start was refused, the moment it stopped retrying. |
| `announcement_recipient_retention_days` | Keep announcement recipients for | The list of who each announcement was mailed to, person by person, with what happened to each of them. |
| `max_versions_per_app` | Most versions an app may keep | Every deploy leaves a release behind. This caps what any one app keeps, however many its owner asked for. Set 0 for no limit. |
| `environment_tag` | Environment name | What this install is in a multi-environment setup — for example stage or prod. Leave blank to turn environment defaults off. |

## Admin → Authentication

| Setting | Name | What it does |
|---|---|---|
| `dormant_lock_enabled` | Lock unused accounts | Locks an account nobody has used for the period below. Administrators are never locked automatically. |
| `dormant_lock_days` | Lock after | How long an account may go unused before it is locked. |
| `session_absolute_hours` | Sign in again after | How long a session lasts, however much it is used. Measured from signing in. |
| `session_idle_minutes` | End an unused session after | How long a session may sit with nobody using it. Set 0 to turn this off. |
| `public_apps_enabled` | Apps open to anyone | Whether an app here may be opened by somebody who is not signed in. |
| `apps_listable_to_authenticated` | Everyone signed in can see every app | Whether every app appears in everyone’s list, by name and owner, without being openable. On unless you turn it off. |
| `sign_in_providers` | Sign-in providers | Your organization’s identity provider, its provisioning policy, and which social logins are offered. |
| `local_admin_enabled` | Built-in administrator | The local username and password that exists so a new install can be configured before single sign-on does — and recovered when it breaks. |

## Admin → Messages

| Setting | Name | What it does |
|---|---|---|
| `announcement` | Announcement banner | A line across the top of every page, in an administrator’s voice. |
| `announcement_emails` | Announcements | Email to the people on this install, from you — the message that reaches somebody who is not looking at the app. |
| `knowledge_base` | Knowledge base | One app this install points everybody at, from a link in the header on every page. |
| `locked_account_message` | Locked account message | What somebody is told when their account is locked. |
| `no_account_message` | No account message | What somebody is told when they authenticated but no provider will create an account. |
| `pending_activation_message` | Awaiting-activation message | What somebody is told when their account exists and nobody has activated it yet. |
| `account_activated_message` | Account-activated message | What somebody is emailed when you activate their account. |
| `app_locked_message` | Locked app message | What a visitor is told when they open an app an administrator has locked. |

## Admin → Dependencies

| Setting | Name | What it does |
|---|---|---|
| `dependency_policy` | Dependency policy | Whether this install reads the third-party packages an app installs and compares them to published advisories. |
| `dependency_block_malware` | Refuse malicious packages | A separate switch rather than a severity, because there is no such thing as a low-severity credential stealer. |
| `dependency_block_severity` | Refuse vulnerabilities at or above | The threshold a vulnerability has to meet before a deploy is refused. |
| `dependency_block_only_fixable` | Only refuse when a fix has been published | Refuses the findings somebody can act on, and records the rest. |
| `dependency_scan_on_deploy` | Resolve dependencies at deploy | Reads the package names and versions a build installs, as it installs them. |
| `dependency_watch_enabled` | Re-check serving apps in the background | An advisory published today is about a release deployed last month. |
| `dependency_feed_endpoint` | Feed address | Where advisory data is fetched from. Point it at an internal mirror if egress is closed. |
| `dependency_feed_interval_hours` | Refresh every | How often the advisory data is refreshed. |
| `dependency_feed_max_age_hours` | Call it stale after | Past this the data is called out as old. A stale feed never blocks a deploy. |
| `dependency_feed_credential` | Mirror credential | For a feed that needs one. Write-only — it never comes back to a browser. |
| `dependency_waiver_max_days` | Waivers may run for | There is no permanent waiver; this is the ceiling on a temporary one. |

## Admin → Sources

| Setting | Name | What it does |
|---|---|---|
| `source_policy` | Source policy | Which repositories this install will deploy from at all, and whether an uploaded archive may become an app. |
| `source_uploads_enabled` | Archive uploads | Whether a folder uploaded from a browser may become an app at all. |
| `git_connections` | Connected git hosts | Connect the organization’s git host once, so an app points at a repository instead of carrying a credential of its own. |

## Admin → Email

| Setting | Name | What it does |
|---|---|---|
| `email_enabled` | Send email | When off, no notification is sent and nothing fails. |
| `email_transport` | Transport | SMTP, or an HTTPS sending API for the install where outbound 587 is closed and 443 is not. |
| `email_api_provider` | Sending API provider | Which sending API, when the transport is one. |
| `email_host` | SMTP host | The mail server this install hands messages to. |
| `email_port` | SMTP port | 587 for STARTTLS, 465 for implicit TLS. |
| `email_security` | Transport security | STARTTLS, implicit TLS, or none. |
| `email_username` | SMTP username | The account this install authenticates as. Blank for a relay that needs no credential. |
| `email_password` | SMTP password | Write-only. Leaving it blank keeps the stored password. |
| `email_api_key` | Sending API key | A field of its own rather than a second use of the password: a transport switch must never offer an SMTP password as a bearer token. |
| `email_skip_verify` | Accept a self-signed certificate | For an internal relay with a certificate this install cannot verify. A workaround, not a fix. |
| `email_from_address` | From address | Who mail from this install appears to be from. |
| `email_from_name` | From name | The display name beside the address. |
| `email_reply_to` | Reply-to | Where a reply goes, when that should not be the from address. |
| `email_notify_admin` | Administrator notifications | Mail to system administrators about this install. |
| `email_admin_group_address` | Administrator notification address | A distribution list to send administrator notifications to instead of to each administrator’s own address. |
| `email_notify_app` | App and access notifications | Mail to the people who use Launchpad about their own apps and access. |

## Admin → Telemetry

| Setting | Name | What it does |
|---|---|---|
| `telemetry_enabled` | Export telemetry | When off, nothing is exported and nothing fails. |
| `telemetry_endpoint` | Collector endpoint | The collector’s base URL. The exporters append /v1/traces and /v1/metrics. |
| `telemetry_headers` | Credential | Write-only headers for a collector that needs authentication. |
| `telemetry_traces` | Traces | Whether spans are exported. |
| `telemetry_metrics` | Metrics | Whether metric batches are exported. |
| `telemetry_sample_ratio` | Trace sampling | Head sampling, 0–1. Cardinality is budgeted, and the budget is code. |
| `telemetry_temporality` | Metric temporality | Cumulative or delta, whichever your collector expects. |

## Admin → Integrations

| Setting | Name | What it does |
|---|---|---|
| `integration_connections` | Connections | One credential, tied to one place. Two of the same kind are fine; each is attached to apps separately. |
| `integration_catalog` | What you can connect | Everything this version of Launchpad can send through. |
| `integrations_retain_bodies` | Keep message bodies | Off by default. The log always records a checksum either way. |
| `integrations_retention_days` | Keep the integration log for | At least 30 days. |

## Admin → API keys

| Setting | Name | What it does |
|---|---|---|
| `api_keys_enabled` | Personal API keys | Whether people may hold long-lived credentials that let a script act as them, for automation outside Launchpad. |

## Admin → Features

| Setting | Name | What it does |
|---|---|---|
| `feature_switches` | Optional features | What this build offers, what the license covers, and what an administrator has switched on. The names are data, not code. |

## Admin → License

| Setting | Name | What it does |
|---|---|---|
| `license_key` | License key | The key this install was issued. It names a license on the vendor’s side; the term, the customer and the entitlements come back in the answer rather than living in the key. |

## Notes on a few of them

**The dials** — `app_memory_limit_mb`/`_gb`, `app_cpu_request_*`,
`app_cpu_limit_*`, `max_concurrent_builds`, `auto_deploy_poll_seconds`,
`r_package_repository`, `log_level` — have an environment variable underneath
them. **Zero or empty means the environment's number, never "off"**, and only one
of a quantity's two unit spellings may be set.

**`public_apps_enabled`** and **`apps_listable_to_authenticated`** both default
**on** and both *take a capability away* when you turn them off. Their default is
read from an **absent row**, which is why the query asks whether the value is
`false` rather than whether it is `true`.

**Write-only fields** — `email_password`, `email_api_key`, `telemetry_headers`,
`dependency_feed_credential` — are credentials, not setting values. They never
come back to a browser, and leaving one blank keeps what is stored.

**`log_format` is not here.** It is reported read-only on the settings document,
beside `effective_log_level`: it is a fact about who is reading the stream, and
changing it mid-flight hands a collector a format change it did not ask for.

**`security_txt_expires` is required whenever `security_txt_contact` is set**, and
is never invented or rewritten.

**`integrations_retention_days` is floored at 30.**

**`environment_tag`** left blank turns `.env.<tag>` environment defaults off
entirely.
