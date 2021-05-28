# Classy Plugin Setup

Clone this plugin into the /plugins Classy project in a new directory. The name of the directory will become the name that we reference the Classy plugin by in the Classy .env file.

This README assumes that Classy is already cloned on the server filesystem, its .env file has been configured, and that Classy can successfully be built and run on its server host.

If not, please see the (ubccpsc/classy/README.md)[https://github.com/ubccpsc/classy/blob/master/README.md] for directions on bootstrapping Classy.

1. Assuming that ubccpsc/classy is already cloned on the filesystem, enter the Classy plugins directory; ie.`cd /opt/classy/plugins`.
2. `ls -lh` will reveal a `default` folder. This is the default plugin that Classy uses to offer default functionality.
3. Clone this `classy-plugin` repository into a folder with the plugin name (ie. cs999): `git clone https://github.com/ubccpsctech/classy-plugin cs999`.
4. Enable the plugin in the Classy .env file by changing the value of `PLUGIN=default` to `PLIUGIN=cs999`, in the case of the example, or any other given plugin name.
