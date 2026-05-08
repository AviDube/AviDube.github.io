---
title: "SWARM"
date: 2022-08-25
excerpt: "Founded Codex Laboratories and built SWARM — a cloud-based multi-agent drone simulation platform adopted by MIT Lincoln Laboratory, Alarm.com, and research institutions worldwide."
toc: true
toc_label: "Table of Contents"
header:
  image: /assets/images/SWARMS_Main.PNG
  teaser: /assets/images/SWARMS_App.jpg
sidebar:
  - title: "Role"
    text: "Founding Technical Lead"
  - title: "Organization"
    text: "Codex Laboratories · Purdue University"
  - title: "Period"
    text: "May 2022 – Present"
  - title: "Adopted By"
    text: "MIT Lincoln Laboratory · Alarm.com · Purdue Research"
gallery:
  - url: /assets/images/Airsimslope.jpg
    image_path: /assets/images/Airsimslope.jpg
    alt: "Slope following obstacle avoidance"
  - url: /assets/images/airsimexplenation.jpg
    image_path: /assets/images/airsimexplenation.jpg
    alt: "AirSim simulation explanation"
  - url: /assets/images/Airsimtop.jpg
    image_path: /assets/images/Airsimtop.jpg
    alt: "Top-down AirSim view"
---

# Introduction

Researchers, graduate students, and companies routinely spend weeks — sometimes months — rebuilding the same drone simulation infrastructure before they can write a single line of algorithm code. SWARM was built to eliminate that problem.

The SWARM Simulation Platform is a cloud-based, multi-agent drone simulation environment with a clean user interface and a well-documented API. A 2-step installation process gets users from zero to running simulations without touching complex binaries. An extensive motion planning and obstacle avoidance library is available out of the box, and the platform is designed from the ground up to support machine learning, reinforcement learning, and autonomous system development.

Platform: [swarmsim.io](https://www.swarmsim.io/)

# My Contributions

## Obstacle Avoidance

In my first year I was tasked with building a basic obstacle avoidance (OA) algorithm. I started with an approach I called **slope following**: the LiDAR detects the slope of an obstacle, and by taking the highest and lowest points of that data we can calculate the slope angle — allowing the drone to fly above objects or follow steep terrain naturally.

{% include gallery class = "full" %}
{% include video id="10buVuqaaxrs1ZgT3NYo0XL0e0ZXHDLvi" provider="google-drive" %}

## Control Systems

The original control system caused significant jerk, making the drone unstable during maneuvers. I redesigned it with a low-level **PID controller** operating at the roll, pitch, and yaw level — giving the drone smoother, more stable flight and exposing control parameters that users can tune for their own algorithms.

<img src="/assets/images/pidstruct.PNG" alt="PID control structure diagram">
{% include video id="1fRGYJ5szuXEYH9iyLcEeP8wejX8qYbcG" provider="google-drive" %}

## Advanced Obstacle Avoidance

A teammate and I developed a more sophisticated OA algorithm using a **safety sphere** to maintain a minimum clearance distance from obstacles. When an obstacle is detected within the sphere, a bounding cube is projected around it and the drone selects the cube edge point closest to both its current position and goal — creating a smooth avoidance path. The algorithm is being integrated into AirSim with a research paper planned to document the findings.

<img src="/assets/images/newalgo.png" alt="Advanced obstacle avoidance algorithm diagram">

## SLAM & Path Planning

As the platform matured, I designed **SLAM algorithms** for autonomous drone navigation in complex environments and implemented real-time obstacle avoidance using LiDAR, distance sensors, and vision-based detection — building toward fully autonomous multi-agent missions.

# Leadership

As Founding Technical Lead I've been responsible for the full research operation at Purdue: running weekly meetings, assigning tasks, cold-recruiting members from departments across campus, and mentoring new contributors through their first pull requests. We grew the active team by 5 members, expanded the platform's feature set, and presented research at Purdue's Undergraduate Research Expo annually.
