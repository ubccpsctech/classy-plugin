# Classy Plugin Setup

This README assumes that Classy is already cloned on the server filesystem, its .env file has been configured, and that Classy can successfully be built and run on its server host.

If not, please see the (ubccpsc/classy/README.md)[https://github.com/ubccpsc/classy/blob/master/README.md] for directions on bootstrapping Classy.

## Plugin Setup

 - [ ] Fork this repository. You will have full control over your fork where you can store changes to this plugin.
 - [ ] From the command line, enter the `classy/plugins` directory. ie. `cd /opt/classy/plugins`.
 - [ ] Clone this `classy-plugin` repository into a folder with your chosen plugin name (ie. cs999Mods): `git clone https://github.com/ubccpsctech/classy-plugin cs999Mods`.
 - [ ] Enable the plugin in the Classy .env file by changing the value of `PLUGIN=default` to `PLIUGIN=cs999Mods`, or your given plugin name.

## Updating Classy with Plugin Updates

 - [ ] Ensure that your changes are pushed the your forked repository.
 - [ ] Ensure that the changes have been QAed in your local development environment, as these changes will be going live for your course.
 - [ ] Notify help@cs.ubc.ca tech-staff to pull in your latest changes (SSH key must be configured)
       OR 
       1. ssh into your VM
       2. cd into /opt/classy/plugins/cs999Mods
       3. `git pull` to bring in your local changes
       4. cd into the root of the classy project `cd /opt/classy`
       5. run `./helper-scripts/load-plugin.sh`
       6. Stop Classy `docker-compose down`
       7. Re-build Classy `docker-compose build`
       8. Start Classy `docker-compose build -d`

