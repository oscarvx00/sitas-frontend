### STAGE 1:BUILD ###
FROM node:14
WORKDIR /sitas-frontend-test

#apt update
RUN apt update

#Install chrome
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' >> /etc/apt/sources.list
RUN apt-get update && apt-get install --no-install-recommends -y google-chrome-stable

#Install angular cli
RUN npm install -g @angular/cli
#Instal npm packages
RUN npm i

COPY ./ ./

ENTRYPOINT ["ng", "test", "--code-coverage", "--watch=false"]