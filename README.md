# node-codingdojo-starterkit
Simple starter kit for NodeJS Coding Dojo projects.

## How to install

Clone the repository via git:
```bash
git clone git@github.com:pcdevil/node-codingdojo-starterkit.git
```

You might want to fork it for `git push`

## How to use

1. Create tests in the [index.spec.js] with the help of [Chai] assertion library
2. Run [Mocha] and see the failing tests: `npm test`
3. Statisfy tests with implementation in the [index.js]
4. Refactor implementation until the tests pass again

Repeat steps as you want

## Commands

| command | description |
|---|---|
| `npm start` | runs the index.js |
| `npm run start:watch` | runs the index.js and restarts it if code changes |
| `npm test` | runs the index.spec.js with mocha |
| `npm test:watch` | runs the index.spec.js with mocha and restarts it if code changes |



[index.js]: index.js
[index.spec.js]: index.spec.js
[Chai]: http://chaijs.com/
[Mocha]: https://mochajs.org/
