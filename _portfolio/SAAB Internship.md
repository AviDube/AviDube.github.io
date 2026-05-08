---
title: "Saab Internships"
excerpt: "Three summers at Saab building ML pipelines, computer vision systems, and real-time detection engines for defense and aerospace applications."
date: 2025-08-15
header:
  image: /assets/images/navyfleet.png
  teaser: /assets/images/saablogo.jpg
toc: true
toc_label: "Table of Contents"
sidebar:
  - title: "Role"
    text: "Machine Learning Software Engineer Intern"
  - title: "Summers"
    text: "2023 · 2024 · 2025"
  - title: "Key Tech"
    text: "YOLOv11 · Unreal Engine · C++ · Python · Kafka · Docker · OpenCV"
---

# Overview

Three summers at Saab across three distinct projects — each building on the last. Starting with sensor fusion and data pipelines (2023), moving to computer vision and synthetic data generation for the US Navy (2024), and culminating in a production-grade real-time object detection engine in Unreal Engine (2025).

---

# Summer 2025 — Real-Time Detection Pipeline

**Role:** Machine Learning Software Engineering Intern · Remote (San Diego, CA)

## YOLOv11 Model Training

Trained a YOLOv11 object detection model using 10,000 synthetic images generated under varied lighting, weather, and environmental conditions. The model achieved **89% precision** when evaluated against real-world drone datasets — a significant result given it was trained entirely on synthetic data.

## Real-Time Async Detection Pipeline

Engineered a fully asynchronous, real-time object detection pipeline inside Unreal Engine using C++. The pipeline integrates the YOLOv11 model via **NNE (Neural Network Engine)** and **OpenCV**, processing live camera feeds with minimal latency while maintaining stable frame rates in complex simulation environments.

## Custom Messaging Bus

Designed and implemented a custom **topic-based messaging bus** inside Unreal Engine to route and process real-time sensor data between multiple concurrent systems. This architecture decoupled the detection pipeline from downstream consumers, enabling modular system design and easier integration of new sensors or algorithms.

---

# Summer 2024 — TSUNOMI & Synthetic Data (ONR)

**Role:** Machine Learning Software Intern · Remote

TSUNOMI was a collaboration with the Office of Naval Research (ONR) to build a multimodal sensor fusion system for the US Navy — combining real-time object tracking, computer vision, and synthetic data generation at scale.

## Computer Vision System

Developed a robust camera vision system for tracking objects and providing real-time location data. The system maintained consistent tracking accuracy across varying environmental conditions and object velocities, with an optimized processing pipeline to minimize latency.

## YOLO Model Training Pipeline

Designed an automated image pipeline that generates bounding boxes around objects of interest, significantly streamlining YOLO model training. This reduced manual labeling effort and improved the consistency of training data across diverse scenarios.

## Unreal Engine Synthetic Data

Implemented a camera calibration pipeline within Unreal Engine to ensure proper alignment between virtual and real-world camera parameters. Created photo-realistic environments — using Cesium for geospatial accuracy — that closely mimicked real-world conditions for AI model training.

## Cross-Functional Leadership

Led cross-functional team meetings with university research collaborators, aligning development goals and ensuring innovations could be integrated into broader research initiatives.

---

# Summer 2023 — TSUNOMI, ETA/ETD IRAD & ReflexAI

**Role:** Machine Learning Software Engineer Intern

Three concurrent projects: a multi-sensor tracking system (TSUNOMI), an aircraft arrival/departure prediction model (ETA/ETD IRAD), and an autonomous boat control system (ReflexAI).

## TSUNOMI — Simulation & Kafka Infrastructure

Built a 3D simulated environment using **Stone Soup** to generate training data for the tracking algorithm. Set up an **Apache Kafka** broker via Docker to enable seamless, real-time data streaming between multiple sensors and the tracking algorithm. Also developed an **acoustic sensor measurement model** using covariance matrices and Gaussian distributions to add realistic noise to simulated sensor data.

## ETA/ETD IRAD — Aircraft Prediction Model

Engineered a weather data pipeline using the **Open-Meteo API** to gather historical and forecast weather data along flight paths, storing results in a structured database. Built a **TensorFlow** machine learning model leveraging this weather data alongside FAA records to predict aircraft arrival and departure times — achieving **~90% prediction accuracy**.

## ReflexAI — DARPA Demo

Observed and participated in a DARPA demo presentation for ReflexAI, a machine learning model for autonomous control of a boat with dynamic variables (weight, hull integrity, engine power). Gained direct exposure to how defense-focused product demos are structured and evaluated.

---

# Key Technologies

| Category | Tools |
|---|---|
| ML / CV | YOLOv11, YOLO, TensorFlow, OpenCV, NNE |
| Simulation | Unreal Engine, Cesium, Stone Soup, Docker |
| Languages | C++, Python |
| Infrastructure | Apache Kafka, SQL, Git, JIRA |
| Other | ArduPilot, cross-functional leadership |
