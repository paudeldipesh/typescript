# TypeScript

TypeScript is a programming language that's similar to JavaScript, but with some extra features to help developers catch and prevent common mistakes in their code.

###### Prepare By Dipesh Paudel.

TypeScript Official Documentation - [Docs](https://www.typescriptlang.org/docs/)

#### Install TypeScript Globally

```sh

npm install -g typescript

```

#### Create a TypeScript File

```typescript
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}
greet("TypeScript");
```

#### Compile TypeScript to JavaScript

```sh

tsc app.ts

```

#### Run the JavaScript Code

```sh

node app.js

```

#### Create a TypeScript Configuration File (Optional)

```sh

tsc --init

```

#### Watch TypeScript Files

```sh

tsc --watch

```
