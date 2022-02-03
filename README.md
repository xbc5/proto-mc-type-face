## Intro
A basic workspace for quick HTML, JS and CSS prototyping. It automatically does a browser refresh on any changes to files under `./scratch`.

It also initialises Git for you, and tracks `./scratch` while ignoring everything else.

## Install
There is an install script:
```sh
curl https://raw.githubusercontent.com/xbc5/proto-mc-type-face/main/scripts/install.sh | bash
```

Or you can manually install it:
```sh
npm i -g degit
cd my_dir # must be empty
degit xbc5/proto-mc-type-face && rm .gitignore
pnpm install 
```

## Usage
```sh
pnpm run init   # first time only
pnpm run start  # start the server
```

Your source files live under `./scratch`. You can wipe them with:

```sh
pnpm run clean
```

This will create a new base template under `./scratch`, wiping any progress.

You can pull HEAD with:
```sh
pnpm run update
```
And it will preserve `./scratch` too.
