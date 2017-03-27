#/usr/bin/env bash

# save stdout and stderr to file descriptors 3 and 4, then redirect them to "foo"
exec 3>&1 4>&2 >inemaaClickDummy.log 2>&1

cd /home/bogn/dev/javascript/inemaa_event-tool/
killall node &> /dev/null
date
/home/bogn/.nave/installed/5.11.0/bin/node /home/bogn/dev/javascript/inemaa_event-tool/devServer.js src/webpack.config.js

# restore stdout and stderr
exec 1>&3 2>&4

# Open the browser as feedback
#firefox -p demo
