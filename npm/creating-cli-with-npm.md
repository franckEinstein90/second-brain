## Using npm to create a cli

The first step is to add the following key in package.json:

```
"bin": {
    "cli-tool": "./index.js"
}
```

"cli-tool" is the name of the command being created. It is pointing it at index.js, our main point of entry.
This step is not just important for testing the tool, but also for publishing it later on. So, make sure to add it.

## Install the package globally on Local
```
npm i -g
```
Now, run the tool right from the terminal:

```
todos --help
```

