# base image
FROM node:11.3

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH so we can execute commands like "eslint" directly
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile

COPY . /app/

# We expose port 3000 (which is more like documentation)
EXPOSE 3000

#When we run the dockerimage it will spin up the http-server on port 3000
CMD ["./run.sh"]

