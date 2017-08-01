FROM jsurf/rpi-raspbian:latest

MAINTAINER Joshua S. Eagle <joshuaseagle@gmail.com>

RUN apt-get update && \ 
    apt-get install -y curl \
        build-essential \
        nodejs \
        npm 

RUN /bin/bash -c "source /usr/local/rvm/scripts/rvm install 2.3.1 && gem install sass"

RUN echo "source /usr/local/rvm/scripts/rvm" >> ~/.bashrc

RUN apt-get clean && \
    apt-get autoremove
