---
title: "SWARMS"
date: 2022-08-25
excerpt: "A research project to create an easy-to-use, scalable, web-based multi-agent drone simulation platform."
toc : true
toc_label: "Table of Contents"
header:
  image: /assets/images/airsimcapture.PNG
  teaser: /assets/images/airsimscreen.png
sidebar:
  - title: "Role"
    text: "Team Lead, Obstacle Avoidance / Control Systems Developer"
  - title: "Responsibilities"
    text: "Working on obstacle avoidance and low level controllers."
gallery:
  - url: /assets/images/Airsimslope.jpg
    image_path: /assets/images/Airsimslope.jpg
    alt: "placeholder image 1"
  - url: /assets/images/airsimexplenation.jpg
    image_path: /assets/images/airsimexplenation.jpg
    alt: "placeholder image 2"
  - url: /assets/images/Airsimtop.jpg
    image_path: /assets/images/Airsimtop.jpg
    alt: "placeholder image 3"
---
# Introduction
The SWARM Simulation Platform was built from the ground up to solve the major issue with building simulations for multi-agent robotic system. Many researchers, graduate students and companies spend weeks or months building the same infrastructure that utilizes the same systems as before. Our research reduces the amount of time actually spent working on algorithm development and increases research and development costs.

# Website

Our website: [swarmsim.io](https://www.swarmsim.io/)

# My Contributions

## Obstacle Avoidance
In my first year working on the project I was assigned on getting a basic OA algorithm up and running. To do this I started off with a simple approach which I called slope following. The basic idea behind it is that the lidar will detect a slope of an object and taking the highest and lowest point of that data we can figure out the slope of an object. This allows the drone to successfully go above objects or follow steep terrain.

{% include gallery class = "full" %} 
{% include video id="10buVuqaaxrs1ZgT3NYo0XL0e0ZXHDLvi" provider="google-drive" %}

## Control Systems
I also worked on revamping the control system algorithm we were using the reason being that it caused a lot of jerk making the drone unstable. So I created a low level PID system that allows for the drone to be controlled on a roll, pitch, and yaw level. This not only gives extraordinary performance but allows for more custamazitation from a user. 

<img src="/assets/images/pidstruct.PNG" alt="">
{% include video id="1fRGYJ5szuXEYH9iyLcEeP8wejX8qYbcG" provider="google-drive" %}

## In Development
Currently me and my teammate are working on a more advanced obstacle algorithm. It utilizes a safety sphere to create a safe distance between the drone and the obstacle. Then to determine the best way to go around the object a cube is drawn. Then a point that is closest to the drones position and goal are picked from the cubes edges. This algorithm is still being implemented in Airsim and our future aspirations are to write a research paper to showcase our findings to like minded people.

<img src="/assets/images/newalgo.png" alt="">

# Leadership
I am currently the team lead researcher. Some of my responsibilities have been to recruit new members I have been cold emailing different departments at our school asking for students interested in our project with certain skills. So far we have been able to recruit 5 new members helping us maintain/update our website and develope new features for users. I am also tasked with running meetings and making sure each member is assigned a task with and assist them if they ever run into any issues.

