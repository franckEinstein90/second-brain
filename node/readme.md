
# New Node.js project with TypeScript  
## Step One: Create a repo in either GitHub, BitBucket, or GitLab
Add a readme.md, and a .gitignore file. Easiest is to create it from the website and clone it to your local after. GitHub at least, and maybe the other give you the option to create a repo that includes a readme, a gitignore and license with just about one or two clicks.

## Step Two: Clone the repo on your local

## Step Three: Initialize Your Node.js Project
You now have a workspace for your project, which is a folder on your local and a corresponding repo on git. The two are linked, and you can synch your local file to your remote git repo. That would be the basis for any givien project in any language on any architecture. The next step is to setup a typical nodejs type architecture. We're going to use Typescript for this. The steps for a simple JavaScript project are much simpler, and don't require much instructions beyond this one. Create a new Node.js project by setting up a package.json file. You can do this by running 

```
npm init -y
```
in your project's root directory and following the prompts.

## Step Two: Install TypeScript and tools

Install tsc and ts-node if you don't have them available already: 

```
# Locally in your project.
npm install -D typescript
npm install -D ts-node
# Or globally with TypeScript.
npm install -g typescript
npm install -g ts-node
# Depending on configuration, you may also need these
npm install -D tslib @types/node
```


Install TypeScript as a development dependency using npm or yarn and type definitions for external modules or libraries. These definitions are usually available through the @types scope on npm. 

```
npm install typescript @types/node --save-dev
```

## Step Four: Create your Project Structure:
Create a directory structure for your TypeScript source files (.ts) and output JavaScript files (.js). For instance:


```
mkdir dist
mkdir src
mkdir test
echo "console.log('hello world')" > src/main.ts
touch test/main.test.ts
echo "dist/" > .gitignore
echo "node_modules/" >> .gitignore
```

which should provide you with something similar to: 
```
project-root/
├── src/
│   ├── main.ts
├── dist/
```
The dist folder will contain the js code that will be the source of your application. The ./src folder contains the Typescript code that you will write and that will transpiled into the js code that will be kept in your ./dist folder. When you "distribute" your code, the code you'll publish or deploy will be the one ./dist. However, there is ts code that you don't want to see end up in your ./dist folder. For instance, you might not want your test code to be distributed, because, what purpose would that serve? 

The next step is concerned with how, and which  ts code ends up as js code in ./dist

## Step Five: Setup TypeScript Configuration
Create a tsconfig.json file in the project root. This file specifies how TypeScript should compile your code. You can create a basic configuration using the command: 

```
tsc --init
```

Configure tsconfig.json:
In the tsconfig.json file, you can customize compiler options according to your project's needs. Some common options include specifying the output directory, target ECMAScript version, module format, etc. There is a full example of my typical settings in this folder

## Step Six: Compile TypeScript to JavaScript
Run the TypeScript compiler to convert your TypeScript code into JavaScript code:

```
npx tsc
```

This will compile the code based on your tsconfig.json settings and output the transpiled JavaScript files to the dist directory (or any other specified output directory). If you now run:
```
node dist/main.js
```

You should see "Hello World" output to console.


## Step Six, setup your tests
create a folder ./test, and a file ./test/index.spec.ts, and copy/past this inside:

```
import { expect } from 'chai';

const add = (a: number, b: number): number => a + b;

describe('add function', () => {
    it('should add two numbers correctly', () => {
        expect(add(2, 3)).to.equal(5);
    });

    // Additional test cases can be added here
});
```
add the following script(s) in your  package.json scripts:
```
"test": "mocha -r ts-node/register test/**/*.spec.ts"
```


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
## Commit your changes: 
```
git add .gitignore
git add package*
git add test*
git add src*
git add tsconfig.json
git commit -m "first commit"
git push
```
## Create a develop branch
```
git branch develop
```
