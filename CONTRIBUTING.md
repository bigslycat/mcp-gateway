# Development

## Toolchain

Install [proto](https://moonrepo.dev/proto), then run `proto use` to install the
versions pinned in `.prototools`: Node.js, stable Yarn, and Moon.

```sh
moon run root:fmt-check root:lint root:typecheck root:typecheck-solution
```

Each quality task depends on `root:install`, which installs workspace
dependencies with an immutable lockfile. All project commands run through Moon.
Use `moon run root:fmt` or `moon run root:lint-fix` to apply formatting or lint
fixes.

CI installs the same pinned tools through proto and runs the same Moon targets.

## Workspace layout

- `apps/*`: applications.
- `packages/*`: shared packages.
- One root `yarn.lock` covers all workspaces; use `workspace:` for internal
  links.

There are no application packages or build/test/publish tasks yet. Add those
with the first implementation rather than creating placeholder packages.

## TypeScript projects

`tsconfig.json` is the solution: `files: []` prevents it from compiling sources
itself, and `references` lists the projects in the solution. Initially it
references only `tsconfig.root.json`, which checks the actual root tooling
configs.

`tsconfig.options.json` holds shared compiler options. `tsconfig.root.json` owns
root tooling and excludes `apps` and `packages`; each new workspace must own its
own `tsconfig.json`, extend the shared options, and be referenced by the
solution. Moon synchronizes workspace project references. The root Moon project
explicitly uses `tsconfig.root.json`, not the solution file.

`moon run root:typecheck` checks root sources directly.
`moon run root:typecheck-solution` traverses the solution with TypeScript build
mode without emitting JavaScript. Compiler artifacts go to the ignored
`.moon/cache/types` directory.
