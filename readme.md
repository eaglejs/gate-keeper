# Garage Door Opener with Raspberry Pi

## Use Case
If you are absent-minded like me, I tend to leave the house and forget to close my garage door. I also hate keeping those blocky remotes on my person if I'm riding a motorcycle, or sometimes I even lock myself out of the house... What if you could setup a server for a resonable price, easy to install and you can open/close your garage door from anywhere?

## What it does
This Application is meant to be ran from your mobile device (i.e., phone, tablet, etc.) as well as a browser on a PC. You can use it to see when your garage was open/closed, if it is open/closed?, and also open/close your garage from anywhere. You can add up to two garage doors for this app. I only have one garage door, but I plan on extending it to opening more than two garages, or multiple homes (if you're rich!) :P Or perhaps... You want to add your Parents garage. :)

## This is a work in progress
This Application is currently a work in progress and is not ready for use in your home just yet. I am actively working on this
so that I too can have this working in my garage. 

## Initial Setup of your raspberry pi
This setup requires that you use any flavor of linux (preferabbly Rasbian pi, or Ubuntu)

### This application requires the installation of the following:
    - mongodb
    - nodejs

### In order to start your mongodb server run:
`mongod`

## Setup your node Application.

### To install and run:
`npm install`

### Run Front End Code
`npm run start`

### Run Back End Code
`npm run start-be`

## ToDo(s)
- Create a way to reset your password.
- Create a user profile and dashboard that you can change/update your password.
- Create an ability to add garages.
- Create a ability to Add Homes.

## Stretch Goal(s):
- Create this in docker so it is easy to setup for the user.