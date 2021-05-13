#

Instructions

To use a plugin requires substituting Classy's 'plugin' folder with this plugin repository and enabling the plugin in the .env file. A re-build is required.

This README assumes that Classy is already cloned on the server filesystem, its .env file has been configured, and that Classy can be build and run with Docker.
If not, please see the (ubccpsc/classy/README.md)[https://github.com/ubccpsc/classy/blob/master/README.md]

1. Assuming that ubccpsc/classy is already cloned on the filesystem, `cd` into the cloned folder: `git clone https://github.com/ubccpsc/classy && cd classy`.
2. Substitute Classy's `plugin` folder with this repository: `rm -rf ./plugin && git clone https://github.com/ubccpsctech/classy-plugin plugin`.
3. Determine full-path of plugin folder: `cd plugin && pwd`.
4. Add full plugin folder path to the Classy .env file: `echo PLUGIN_FULLPATH=$(cd plugin && pwd)`
5. Re-build Docker images: `docker-compose build`
6. Once build completes, run and test at runtime: `docker-compose up -d`

