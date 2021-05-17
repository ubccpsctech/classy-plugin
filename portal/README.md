#

Instructions

To use a plugin requires substituting Classy's 'plugin' folder with this plugin repository and enabling the plugin in the .env file. A re-build is required.

This README assumes that Classy is already cloned on the server filesystem, its .env file has been configured, and that Classy can be build and run with Docker.
If not, please see the (ubccpsc/classy/README.md)[https://github.com/ubccpsc/classy/blob/master/README.md]

1. Assuming that ubccpsc/classy is already cloned on the filesystem, ie.`cd /opt/classy`.
2. `ls -lh` will reveal a `plugin` folder, which we will substitute with our own plugin. 
3. Substitute Classy's `plugin` folder with this plugin repository: `rm -rf ./plugin && git clone https://github.com/ubccpsctech/classy-plugin plugin`.
4. Determine full-path of plugin folder: `cd plugin && pwd`.
5. Add full plugin folder path to the Classy .env file: `echo PLUGIN_FULLPATH=$(cd plugin && pwd)`
6. Re-build Docker images: `docker-compose build`
7. Once build completes, run and test at runtime: `docker-compose up -d`

