# stencil-ts-import-test

## Issue:
When importing interface from my-component.tsx like this: `import {User} from "../../../../models/User";` and running build, a js-file is generated (`webcomponents/models/User.js`).

Steps to reproduce:

1. npm run build
1. see that file `webcomponents/models/User.js` has been generated

How to stop it from doing that? :)
