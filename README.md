# typescript-course

Working through Colt Steele's Mastering Typescript - 2022 edition Udemy course.

## Using the compiler

- run `tsc --init` to create a `tsconfig.json` file.
- _or_ run `tsc index.ts --watch` to have the file watched, and recompiled upon changes. _Or_ run `tsc --w` without a file specified to watch entire project.
- _or_ run `tsc` to compile any `.ts` files.

### Compiler options

- **files** option is a TOP level option in the `tsconfig.json` file, it goes outside of the `compilerOptions` section. Use this to explicitly and manually list out the files to be compiled.
  ```json
  "files": ["index.ts", "example.ts"]
  ```
- **include/exclude** options are also TOP level, related to the files option. Files are resolved relative to the location of the `tsconfig.json` file in the directory. Exclude will only exclude files that are already being included as a result of the include option. Default for exclude is `node_modules`. Make sure to add it in if you are using the exclude option.
  ```json
  "include": ["src/**/*"],
  "exclude": ["tests/**/*"]
  ```
- **outDir** option allows us to specify where to emit compiled files. If not specified, the output will be emitted into the same directory as the `.ts` file it was generated from. `dist/` is a common name for an output directory. This option is inside of the `compilerOptions`.
  ```json
  "outDir": "./dist"
  ```
- **target** option is in the `compilerOptions` and governs the JS version that the output will be compiled down to.
- **strict** option is also in the `compilerOptions` and is `true` by default, and enables all type checking to be strict.

## Links

- [Typescript playground + TS Config + examples](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA)
