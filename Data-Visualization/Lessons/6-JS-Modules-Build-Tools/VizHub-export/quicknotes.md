Run npm install via package.json to install all dependencies including transitive dependencies
Run npm run build to build the rollup bundle
Seems irritating to have to run build for every change, would rather see a live preview, so what is best practice here?
Can automate run build or can simply develop without a bundle and then use a bundle for live, but
at that point then why even use the bundle?
Hmm, seems like a tradeoff but perhaps there is a solution
If run into a cache issue can check a box for disable cache under network in dev tools, can also shift refresh
Is a project template that will allow you to have auto refresh: https://github.com/rollup/rollup-starter-app