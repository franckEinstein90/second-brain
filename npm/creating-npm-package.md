

# Create an npm package


## Step One: Export the types, functions, and classes you want to export in src/main.ts like so:
```
...
export { blockBobby } from './block-bobby';
export { IFace, FaceOptions} from './types';
... 
```

## Step 1:  Local Testing

### Local Testing Using npm link
The npm link command is designed for this exact use-case. It creates a symlink in the global folder, allowing you to use your local package as if it was installed from npm.

#### 1. Create a Symlink to Your Package

In the terminal, navigate to the root directory of your npm package (the directory containing the package.json file) and run:
```
npm link
```

This will create a global symlink for your package. Symlinks are used by npm link to reference your local development packages. On Unix-based systems (like Linux and macOS), you can use the find command to list all symlinks:
```
cd $(npm root -g)
find . -type l -maxdepth 1
```
This will display all symlinks directly inside the global node_modules directory.

#### 2. Link to Your Package in the Consumer Project

In the terminal, navigate to the root directory of the project where you want to test your package. Run the following command, replacing your-package-name with the name of your package:

```
npm link your-package-name
```

#### Use and Test

Now, in your consumer project, you can import or require your package just as you would if you had installed it from npm. Since it's a symlink, any changes you make in your local package will immediately reflect in the consumer project.

Unlinking (Cleanup)

When you're done testing:

Go to your consumer project and run npm unlink your-package-name.
Then, go to your local package's directory and run npm unlink to remove the global symlink.
Method 2: Using npm pack
The npm pack command can generate a tarball of your package, which mimics the format that would be uploaded to the npm registry.

Create a Tarball

In the terminal, navigate to your package directory and run:

bash
Copy code
npm pack
This will create a .tgz file in your directory.

Install the Tarball in the Consumer Project

In the terminal, navigate to your consumer project's directory and run:

bash
Copy code
npm install /path-to-your-package-directory/package-name-version.tgz
This will install your package from the tarball as if it was a regular npm package.

Use and Test

You can now use your package in the consumer project. Note that if you make changes to your package, you'll need to repeat the npm pack and npm install steps to test the latest version.

Additional Tip
Whenever you make significant changes to the package you're testing, especially involving dependencies, it's a good idea to delete the node_modules folder and package-lock.json (or yarn.lock if you're using Yarn) in the consumer project and then run npm install (or yarn install). This ensures you're testing with a clean slate, similar to how others would experience your package when they install it from npm.

By testing your package locally using one of these methods, you can catch and fix issues before they reach your users, ensuring a smoother experience for everyone.
# Publishing the package
GitHub Repository: Your codebase, with all the necessary files and folders required for the npm package.
npm: npm (node package manager) is a package manager for JavaScript, and is default for Node.js.
To publish a GitHub repository as an npm package, here's a step-by-step guide:

Step 1: Prepare Your Repository
The most important thing to have in your repository is a package.json file. This file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.

To create a package.json file, go to your project's root directory and run npm init, then follow the prompts. You can also use npm init -y to automatically answer "yes" to the prompts and get an initial package.json.

Step 2: Create Your Package
Make sure that the repository has all the code you want to include in your npm package. The main entry point of your package should be specified in the main field of package.json.

Step 3: Version Your Code
Ensure that your code is versioned correctly. The version number can be found in the package.json file under the version key. npm uses semantic versioning, or semver, to manage versions.

Step 4: Create a .npmignore file (if necessary)
If there are files or directories that you don't want to include in your package (like test files, README, etc.), then you should create an .npmignore file in your repository's root. It works like a .gitignore file. If there's no .npmignore file, but there is a .gitignore file, then npm will ignore the files that are "ignored" by .gitignore.

Step 5: Create an Account on npm
Before you can publish your package, you need to create an account on npm. You can do this by going to the npm website and signing up, or by using the npm CLI with the command npm adduser.

Step 6: Login to Your npm Account
Login to your npm account via CLI using npm login.

Step 7: Publish Your npm Package
Once you've done all the above, navigate to your project's root directory and run npm publish. This will publish your package to the npm registry.

Remember, the name of your package should be unique, otherwise npm will return an error because there's already a package with that name.

Step 8: Verify Your Package
You can verify that your package was published correctly by navigating to the npm website and searching for your package. You should also be able to install it via npm using npm install <your-package-name>.

Note
It's important to note that when you make changes to your package, you must update the version number in your package.json file before you can publish it again.

Also, once a specific version of a package is published, you cannot reuse that same version number again, even if you unpublish the package. You must always increase the version number when you publish.
