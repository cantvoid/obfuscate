# obfuscate
a vencord plugin that replaces all latin characters in all sent messages to unicode lookalikes

### features

- preserves urls
- randomly selects from multiple lookalikes

### example
hello -> һ𝘦ǀlо

obfuscate -> o𝖻ꬵᴜ𝗌с𝖺𝗍𝘦

# installation

to install custom user plugins, vencord must be built from source.

required dependencies:
[git](git-scm.com/downloads), 
[nodejs](nodejs.org/en/download), 
[pnpm](pnpm.io/installation)

```bash
git clone https://github.com/Vendicated/Vencord #clone the vencord repo
cd Vencord
pnpm install --frozen-lockfile #install vencord dependencies
mkdir ./src/userplugins #create the userplugins folder
git clone https://github.com/cantvoid/obfuscate ./src/userplugins/obfuscate #clone the obfuscate repo into user plugins
pnpm build #compile vencord
sudo pnpm inject #install vencord
```
