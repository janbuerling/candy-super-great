#!/bin/bash

# We need to do the actual building when the container is started. We cannot do this during building
# the image, since then the environment variables would be ignored.

yarn build --production

serve -s -l 3000 dist
