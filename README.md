# Classy Plugin Setup

This README assumes that Classy is already cloned on the server filesystem, its .env file has been configured, and that Classy can successfully be built and run on its server host.

If not, please see the [ubccpsc/classy/README.md](https://github.com/ubccpsc/classy/blob/master/README.md) for directions on bootstrapping Classy.

## Forking, Development, and Production

Once you fork this repository, you can develop with this plugin within the `classy/plugins/yourPlugin` filesystem path on your local environment. 

Once you are satisfied with the changes, they must be pushed to your forked repository and brought in on your Classy VM server. Tech staff can either assist or grant you necessary access to access the server.

Full detailed forking, development, and production steps to developing with this plugin can be found [here](https://github.com/ubccpsc/classy/blob/master/docs/developer/customization.md#steps-to-customize-plugin).

## Application Customization

A background into how components of this plugin interact with Docker, Nginx, and Portal's back-end/front-end applications respectively can be found [here](https://github.com/ubccpsc/classy/blob/master/docs/developer/customization.md#application-customization).

