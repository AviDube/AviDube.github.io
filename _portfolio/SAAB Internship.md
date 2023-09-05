---
title: "SAAB Internship"
excerpt: "An overview of my time at SAAB as an intern."
date: 2023-05-15
header:
  image: /assets/images/navyfleet.png
  teaser: /assets/images/saablogo.png
toc : true
toc_label: "Table of Contents"
sidebar:
  - title: "Role"
    text: "Machine Learning Software Engineer Intern"
  - title: "Responsibilities"
    text: "Helping in the devlopment of projects TSUNOMI, ETA ETD IRAD, and ReflexAI"
---

# Introduction 

As a Machine Learning Software Engineer Intern at SAAB I was tasked with helping the team with the development of three projects. TSUNOMI, ETA ETD IRAD, and ReflexAI. TSUNOMI was a collaboration with ONR to build a multimodal sensor fusion system for the US Navy. ETA/ETD IRAD was a project to create a machine learning model that would help improve the predection times that the FAA uses currently to predict the arrival and departure times of aircrafts. ReflexAI was a project to create a machine learning model that would help autonomly control a boat that has changing dynamics such as weight, hull integrety, and engine power.

# TSUNOMI

On the TSUNOMI I worked on three different main objectives. Building a simulated enviorment that would allow us to gather traning data for our tracking algorithm, building a Kafka broker to allow for seemless data communication between sensors and the tracking algorithm, and finally building an acoustic sensor measurment model.

## Simulated Enviorment

To build a simulated enviroment I used the open source software stone-soup. Stone Soup is a software project to provide the target tracking and state estimation community with a framework for the development and testing of tracking and state estimation algorithms. To setup our enviroment I followed the tutorial for a 2D model getting that working as a proof of concept. This allowed us to test and valiadate if the data recived can be used to train and test our tracking algorithm. After that I worked on a 3D model that would allow us to test our tracking algorithm in a more realistic enviroment. Getting this setup was the crucial first step in our project as it allowed us to gather data to train and test our tracking algorithm.

## Kafka Broker

To setup a Kafka broker I used the open source software Apache Kafka. Apache Kafka is a distributed streaming platform. What this means is that it allows for data to be sent and recieved from multiple sources. This was crucial for our project as we had multiple sensors that needed to send data to our tracking algorithm. The Kafka broker allowed us to do this with ease. I was able to setup a Kafka broker on a local machine and then have the sensors send data to the broker. Then the tracking algorithm would recieve the data from the broker. This allowed for a seemless data transfer between the sensors and the tracking algorithm. I utalized docker to setup the Kafka broker and the sensors. This allowed for a quick and easy deployment on any machine.

## Acoustic Sensor Measurment Model

Devloping an acoustic sensor measurment model was an intresting challenge to tackle as it focused more on the math behind simulating sensors as compared to coding. I first utalized the data that I recived from the simulation and with a decent amount of linear algebra using covraince matrixes and gaussian distrubations I would add relastic noise to the data. This allowed us to have a more realistic data set to train and test our tracking algorithm. Next step was to add the speed of sound delay to the sensor. While I was working on this task I was not able to complete it as my internship ended. However I was able to get a decent amount of work done on it and I am confident that I would have been able to complete it if I had more time.

# ETA/ETD IRAD

On the ETA/ETD IRAD I worked on two main objectives. Building a data pipeline that would allow us to gather weather data along flight paths and storing it on a data base. Then I worked on building a machine learning model that would predict the arrival and departure times of aircrafts.

## Weather API

To gather weather data I used the open source software Open-Metro. Open-Metro is an online service that provides weather data, including current weather data, forecasts, and historical data to the developers of web services and mobile applications. I used the API to gather weather data along flight paths. I was able to get the data in a JSON format and then I used python to parse the data and store it in a database. This allowed us to have a large data set to train and test our machine learning model.

## Machine Learning Model

To build a machine learning model I used the open source software Tensorflow. Tensorflow is an end-to-end open source platform for machine learning. I used Tensorflow to build a machine learning model that would predict the arrival and departure times of aircrafts. I used the data that I gathered from the weather API and the data that the FAA uses to predict the arrival and departure times of aircrafts. I was able to build a model that was able to predict the arrival and departure times of aircrafts with a 90% accuracy. This was a great accomplishment as it showed that machine learning can be used to improve the current system that the FAA uses to predict the arrival and departure times of aircrafts.

# ReflexAI

I was pretty busy during my internship so I was not able to help as much on this project as I wanted. But I was still able to experince how my team does a demo presentation to DARPA to showcase how much work was completed and that we were on track to finish the product on the deadline. This was a great learning experince as I was able to see how a demo presentation is done and what is expected from the team.