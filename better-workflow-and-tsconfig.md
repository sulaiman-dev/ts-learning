# better workflow and tsconfig.json file setting.

**for deployment** (outDir)
public OR dist folder (main files).
-index.html.
-style.css.
-index.js.

**for development** (rootDir)
src folder for different ts files etc.

creating and initializing tsconfig.json file manually 
**or** 
by using tsc --init command
tsconfig.json file

**configuration**
simple setting
```
{
    "compilerOptions": {
        "rootDir": "./src",
        "outDir": "./dist"
    }
}
```
in-case of only src folder compiletion add  
"include": ["src"] property after "compilerOptions"
