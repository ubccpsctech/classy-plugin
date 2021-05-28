# Classy Plugin Setup

This README assumes that Classy is already cloned on the server filesystem, its .env file has been configured, and that Classy can successfully be built and run on its server host.

If not, please see the (ubccpsc/classy/README.md)[https://github.com/ubccpsc/classy/blob/master/README.md] for directions on bootstrapping Classy.

## Development

- Clone this plugin project into your local classy/plugins directory with your given plugin name. ie. `git clone https://github.com/ubccpsctech/classy-plugin cs999Mods`.
- Open your IDE and intellisense should recognize the namespaces defined in the `classy/tsconfig.json` file (@frontend, @backend, @common).
- Modify the nginx.rconf and docker-compose.override.yml files to help support your application logic changes if necessary.

## Plugin Setup & Enabling

 - [ ] Fork this repository. You will have full control over your fork where you can store changes to this plugin.
 - [ ] From the command line, enter the `classy/plugins` directory. ie. `cd /opt/classy/plugins`.
 - [ ] Clone this `classy-plugin` repository into a folder with your chosen plugin name (ie. cs999Mods): `git clone https://github.com/ubccpsctech/classy-plugin cs999Mods`.
 - [ ] Enable the plugin in the Classy .env file by changing the value of `PLUGIN=default` to `PLIUGIN=cs999Mods`, or your given plugin name.

## Ask Tech-Staff to Update Plugin in Production

 - [ ] Ensure that your changes are pushed the your forked repository.
 - [ ] Ensure that the changes have been QAed in your local development environment, as these changes will be going live for your course.
 - [ ] Notify help@cs.ubc.ca tech-staff to pull in your latest changes (access must be granted to your repository ahead of time)
       OR see **Updating Your Plugin in Production**.

## Independently Updating Your Plugin in Production

1. Ssh into your VM `ssh user@classyvm.students.cs.ubc.ca`
2. Enter your plugin directory ie. `cd /opt/classy/plugins/cs999Mods`
3. `git pull` to bring in your local changes
4. Enter into the root Classy directory: `cd /opt/classy`
5. Run script to copy over Docker override and Nginx configuration: `./helper-scripts/load-plugin.sh`
6. Stop Classy `docker-compose down`
7. Re-build Classy `docker-compose build`
8. Start Classy `docker-compose build -d`

