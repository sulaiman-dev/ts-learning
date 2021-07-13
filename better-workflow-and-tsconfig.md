*better workflow and tsconfig file

for deployment (outDir)
public OR dist folder => index.html, style.css and index.js main files etc.

for development (rootDir)
src folder for different ts files etc.

creating and initializing tsconfig.json file manually or by using tsc --init command
tsconfig.json file ==> configuration
simple===>
{
    "compilerOptions": {
        "rootDir": "./src",
        "outDir": "./dist"
    }
}
in-case of only src folder compiletion use 
"include": ["src"] at the end 