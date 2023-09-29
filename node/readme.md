
# New Node.js project with TypeScript  
## Step One: Create a repo in either GitHub, BitBucket, or GitLab
and add a readme.md

## Step Two: Clone the repo on your local

## Step One: Initialize Your Node.js Project
If you haven't already, create a new Node.js project by setting up a package.json file. You can do this by running 

```
npm init -y
```
in your project's root directory and following the prompts.

## Step Two: Install TypeScript
Install TypeScript as a development dependency using npm or yarn and type definitions for external modules or libraries. These definitions are usually available through the @types scope on npm. 

```
npm install typescript @types/node --save-dev
```

## Step Three: Create your Project Structure:
Create a directory structure for your TypeScript source files (.ts) and output JavaScript files (.js). For instance:


```
mkdir dist
mkdir src
mkdir test
echo "console.log('hello world')" > src/main.ts
touch test/main.test.ts
echo "dist/" > .gitignore
```

which should provide you with something similar to: 
```
project-root/
├── src/
│   ├── main.ts
├── dist/
```

## Step Four: Create a TypeScript Configuration
Create a tsconfig.json file in the project root. This file specifies how TypeScript should compile your code. You can create a basic configuration using the command: 

```
tsc --init command.
```

Configure tsconfig.json:
In the tsconfig.json file, you can customize compiler options according to your project's needs. Some common options include specifying the output directory, target ECMAScript version, module format, etc. Here's an example of a basic tsconfig.json:

```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "moduleResolution": "node",  
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Step Five: Compile TypeScript to JavaScript
Run the TypeScript compiler to convert your TypeScript code into JavaScript code:

```
npx tsc
```

This will compile the code based on your tsconfig.json settings and output the transpiled JavaScript files to the dist directory (or any other specified output directory). If you now run:
```
node dist/main.js
```

You should see "Hello World" output to console.

## Add to your Build Script:
To automate the compilation process, you can define a build script in your package.json that runs the TypeScript compiler. Add this to the "scripts" section:

```
"scripts": {
  "build": "tsc"
}
```

You can then use npm run build to compile your TypeScript code with: 

```
npm run build
```
