---
title: "CMU AirLab"
date: 2025-09-01
excerpt: "Drone Researcher at Carnegie Mellon's AirLab — building physical AI systems, enhancing the AirStack autonomy platform, and flying the largest drone in CMU history."
toc: true
toc_label: "Table of Contents"
header:
  teaser: /assets/images/airlab/airlab.jpg
sidebar:
  - title: "Role"
    text: "Drone Researcher (Part-Time)"
  - title: "Organization"
    text: "The AirLab at Carnegie Mellon University"
  - title: "Period"
    text: "Aug 2025 – Present"
  - title: "Stack"
    text: "NVIDIA Isaac Sim · AirStack · ArduPilot · C++ · Python"
---

# Introduction

At Carnegie Mellon's AirLab, I research autonomous aerial systems at the intersection of physical AI and robotics. My work focuses on two main threads: extending the capabilities of AirStack — an open-source drone autonomy stack — and building real-world applications that bridge simulation and deployment.

# AirStack

**AirStack** is an open-source drone autonomy platform built on **NVIDIA Isaac Sim**, designed to provide a full-stack foundation for autonomous flight — from low-level control to high-level mission planning. My contributions focus on:

- Enhancing simulation fidelity and sim-to-real transfer pipelines
- Improving system safety margins and flight operations robustness
- Developing autonomy modules that generalize across drone platforms

The goal is to give researchers and developers a reliable foundation so they can focus on algorithm development rather than rebuilding infrastructure — the same philosophy that drove SWARM at Purdue.

# Shimizu Construction Monitoring

In collaboration with Japanese construction firm **Shimizu**, I'm developing a drone-based solution to autonomously monitor excavation progress on active construction sites. The system combines aerial sensing with site-level analytics to generate structured progress reports — reducing the need for manual site inspections and providing richer data than traditional survey methods.

# Largest Drone Ever Built at CMU

As part of CMU's **Large Air Vehicle Development Course** (Robotics Institute), I was part of the team that designed, built, and flew the **largest drone in Carnegie Mellon history**.

{% include video id="YxfsG7Sj5Kc" provider="youtube" %}

**The platform:** a dodecacopter (12-motor) with a custom carbon fiber airframe  
**Weight:** ~140 lbs  
**Thrust:** ~600 lbs  
**First flight:** September 30th — on deadline  

The project covered the full engineering stack:

## Mechanical & Structural
Hands-on design and fabrication of a large-scale carbon fiber airframe, with structural analysis to validate load-bearing components and quality wire soldering throughout.

## Propulsion
Twelve 6S LiPo batteries powering a high-current ESC and motor controller system delivering ~600 lbs of total thrust — requiring careful thermal management and power routing.

## Controls
ArduPilot integration with dual-GPS redundancy, followed by systematic PID tuning to achieve stable flight for a multirotor of this scale and inertia. Multirotor dynamics at this size are fundamentally different from smaller platforms.

## Autonomy Foundations
Developing a vehicle model inside AirLab's AirStack on **NVIDIA Isaac Sim**, laying groundwork for full autonomous operations via sim-to-real transfer.

After 5–6 hour days in the lab leading up to the deadline, stable first flight was achieved on September 30th. The project continues with work on extended flight time and full autonomy.

# Research Focus

My broader research at AirLab sits in **physical AI** — integrating large language models, transformers, and vision systems to build robots that can reason about and operate in the real world. Drones are a compelling testbed: they must fuse sensor data in real time, plan under uncertainty, and execute in dynamic environments where failure has real consequences.
