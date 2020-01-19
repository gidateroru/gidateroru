FROM ubuntu:latest

RUN apt-get update
RUN apt-get install build-essential -y
RUN apt-get install git -y
RUN git --version
RUN apt install curl -y
RUN curl --version
RUN apt install ruby-full -y
RUN ruby --version
RUN apt-get install rubygems -y

WORKDIR /my_app
VOLUME  /my_app
COPY . .

CMD ["chmod", "+x", "gitp.sh"]

RUN gem install bundler
<<<<<<< HEAD
RUN gem install minima
=======
RUN bundle install
>>>>>>> ...

EXPOSE 4000

# ADD ./ /srv/jekyll


# CMD [ "bundle exec jekyll serve" ]