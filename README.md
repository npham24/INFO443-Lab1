# INFO443-Lab1

1. Clone your forked repo into your local machine
2. `cd` into the repo
3. Create a development branch separate from master via `git checkout -b dev`
4. Set up compiler configuration file tsconfig.json via `tsc --init`
5. Enter command `npm install --save @types/node` to be able to use ES6 types in your function
6. Code your algorithm for the given specifications in problem-a.ts
7. Test your changes by compiling the .ts file via `tsc ./exercises/problem-a.ts`  or `tsc --watch ./exercises/problem-a.ts` to auto-recompile on file save
8. Run the script via `node ./exercise/problem-a.js` and check if your code passes the given tests
9. If your code passes the tests, `add`, `commit`, and `push` your code to `dev`.
10. Create a pull request to merge your commits from `dev` into `master` in **your** repository, rather than the repo you forked from.
11. Submit the link to your pull request on Canvas under Lab 1 Exercise
