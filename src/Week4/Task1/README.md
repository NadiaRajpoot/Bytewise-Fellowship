### Task01 - What are npm projects?

- `npm (Node Package Manager)` projects refer to software projects or applications developed using JavaScript or TypeScript and managed with npm, which is the default package manager for Node.js.

**_Key Components of npm Projects:_**

1. `Package.json:` Every npm project includes a `package.json` file. This file contains metadata about the project, such as its name, version, dependencies, scripts, and other configuration details. It also lists the npm packages (dependencies) required for the project to function.

2. `Dependencies:` npm projects often rely on various npm packages or libraries to extend functionality. These dependencies are specified in the package.json file under the dependencies or devDependencies sections. Dependencies can include frameworks, libraries, utilities, and tools needed for development, testing, or production.

3. `Scripts:` npm allows defining custom scripts in the package.json file. These scripts can automate common tasks such as building, testing, linting, and deployment. Developers can execute these scripts using the npm run command followed by the script name (npm run build, npm run test, etc.).

**_Initialize Project_**

```
npm init
```
