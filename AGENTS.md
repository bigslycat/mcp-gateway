# Agent instructions

Make only changes required by the task. Avoid unrelated refactoring, formatting,
and dependency updates.

Use proto for toolchain installation locally and in CI. Run project commands
only through Moon, not standalone package-manager scripts.

Follow the existing Moon, TypeScript, lint, and formatting configuration. Do not
weaken checks to make changes pass.

Keep tsconfig.json a solution config with an empty files list and explicit
project references. Shared compiler options belong in tsconfig.options.json.
Root tooling belongs in tsconfig.root.json; workspace sources belong to their
own projects.

Before completing a change, run the relevant project checks and inspect the
final diff. Report checks that could not run.

README.md is the canonical English documentation.

Keep PR descriptions focused on the changes. Do not include signing or
check-result sections.

Do not merge PRs or publish releases unless explicitly requested.
