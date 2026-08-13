---
title: "Aurora Flight Sciences (A Boeing Company)"
excerpt: "Software engineering intern in Aurora's Autonomy Division, extending DARPA-funded FALCON adaptive controllers to quadrotors — swappable PX4 controller library, analytical control barrier functions, and a live DARPA demo."
date: 2026-08-13
header:
  image: /assets/images/aurora/Header.jpg
  teaser: /assets/images/aurora/AuroraLogo.png
toc: true
toc_label: "Table of Contents"
sidebar:
  - title: "Role"
    text: "Software Engineering Intern, Autonomy Division (AI/ML Group)"
  - title: "Program"
    text: "FALCON, under DARPA LINC"
  - title: "Collaborators"
    text: "MIT Aerospace Controls Lab (Prof. Jonathan How)"
  - title: "Key Tech"
    text: "PX4 · ROS2 · C++ · Python · Control Barrier Functions · Foxglove"
---

# Overview

*Header photo: Aurora Flight Sciences, from their [February 2026 announcement](https://www.aurora.aero/2026/02/19/aurora-successfully-demonstrates-ai-enabled-control-technology/) of this same FALCON demonstration.*

I spent the summer on Aurora Flight Sciences' Autonomy Division (AI/ML Group), working on **FALCON** — an adaptive control framework developed under the **DARPA LINC** program in collaboration with MIT's Aerospace Controls Lab (Prof. Jonathan How, Kresa Center for Autonomous Systems). FALCON systems handle unpredicted runtime events — currents, motor disturbances, unmodeled disturbances — without relying on the operator to intervene.

The internship's central question: **can FALCON be rapidly deployed across different vehicle platforms?** My focus was quadrotors — porting and extending FALCON's adaptive controllers from Aurora's existing boat platforms onto a PX4-based quadcopter stack, then proving it out both in simulation and on real hardware.

By the end of the summer, this work included a swappable rate-controller library running on real hardware, an adaptive observer-based controller (AAOBLTR) tuned and flying, analytical control barrier functions for safe guidance, and a live flight demonstration for DARPA.

| Workstream | Summary | Status |
|---|---|---|
| PX4 Debugging | Diagnosed and resolved an issue in the prior figure-8 implementation | ✅ Fixed |
| Analyzation Tooling | Built Foxglove tools; iterated RViz → full 3D replay | ✅ Complete |
| Controller Library | Implemented PID, RSLQR, OBLTR, AAOBLTR behind a swappable interface | ✅ Flying on HW |
| AAOBLTR Tuning | Tuned the adaptive observer-based controller | ✅ Stable flight |
| DARPA Demo | Live demonstration of AAOBLTR | ✅ July 22 |
| CBF Obstacle Avoidance | Closed-form safety filter, validated in simulation | ⚠️ Sim only — HW blocked |
| HLOC Perception | Improved boat detection / pose estimation pipeline | ✅ Accuracy improved |

---

# Debugging the Existing FALCON Pipeline

Before extending anything, I had to get the existing figure-8 mission implementation working again — diagnosing and fixing a bug in the prior team's PX4 integration. This became the regression baseline for everything that followed.

## Foxglove Analyzation Tooling

Understanding *why* a controller misbehaves on real hardware requires seeing the data, not just the numbers. I built a series of Foxglove-based analysis tools, iterating from a raw 2D trajectory plot up to a full synchronized 3D replay with per-axis torque and rate-error traces.

This tooling became essential for every later stage of the internship — tuning controllers, debugging hardware discrepancies, and preparing the DARPA demo all depended on being able to quickly see what the vehicle actually did versus what it was commanded to do.

---

# Custom Rate Controller Library in PX4

FALCON's adaptive controllers needed to live inside PX4's angular rate control loop (250 Hz, body frame) — the innermost, highest-rate loop in the cascaded position → velocity → attitude → rate control architecture.

I designed a runtime-swappable rate controller library so PID, RSLQR, OBLTR, and AAOBLTR could all sit behind a common interface and be selected — even mid-flight, in the field — via a custom QGroundControl parameter, without needing a firmware reflash.

This meant new uORB message types to carry controller-specific telemetry, and QGC UI extensions to expose the new tuning fields alongside PX4's stock PID parameters.

---

# Adaptive Observer-Based Control (OBLTR / AAOBLTR)

The core controller I tuned and flew was **AAOBLTR** — Adaptive Augmented Observer-Based Control with Loop Transfer Recovery:

- **OBLTR** estimates states the vehicle can't directly sense (due to noise or missing sensors) and flies *as if every state were known*.
- **AAOBLTR** builds on this with an online self-adjusting observer that converges back to its designed transient performance even as conditions change.

After tuning, the estimated and real states converged to near-zero error, and roll/pitch/yaw rate tracking held up well across a full flight. The controller flew a full figure-8 mission on hardware in MIT's netted flight-test cage.

---

# Analytical Control Barrier Functions for Safe Guidance

Beyond tracking, I designed and implemented **closed-form control barrier functions (CBFs)** to give theoretically guaranteed collision-free guidance — no online quadratic program required. For a single active spherical obstacle, the safety-filtering problem reduces to one linear inequality with a closed-form projection back onto the safe set.

The filter was validated in simulation against a figure-8 mission with an obstacle placed directly in the flight path — the CBF-filtered trajectory consistently stayed outside the obstacle's safety radius while the unfiltered path did not.

Getting this onto hardware hit a wall: a ROS2 namespace issue — caused by custom MIT-lab-specific settings — blocked goal/CBF message delivery, so the algorithm never got validated in flight.

**Takeaway:** simulation-only validation isn't enough for safety-critical guidance logic — the team needs a more robust hardware-in-the-loop (HITL) pipeline so integration issues like this surface before, not during, flight testing.

---

# Perception: Hierarchical Localization Stack (HLOC)

In parallel, I contributed to Aurora's vision-based pose estimation pipeline for boats — used when GPS and AprilTag fiducials aren't available. I improved the HLOC perception stack by applying masking to observed features and swapping in an off-the-shelf **YOLOv11n** detector.

The result: **2x the detected throughput**, a ~10% improvement in x-axis position accuracy, and a ~2% improvement in heading — traded off against a ~15% degradation in y-axis accuracy, a tradeoff worth revisiting with further tuning.

---

# Live DARPA Demonstration

On July 22nd, I gave a live demonstration of the AAOBLTR controller flying on the quadrotor platform for DARPA — the culmination of the controller library, tuning, and tooling work from the rest of the summer.

Aurora [publicly announced FALCON's earlier surface-vessel results](https://www.aurora.aero/2026/02/19/aurora-successfully-demonstrates-ai-enabled-control-technology/) under this same DARPA LINC program in February 2026 — AI-guided control held vehicles in a safe operating zone 94% of the time versus 63% under manual control, and cut hazard-recovery time by 61%. My work extended that same FALCON architecture from boats to quadrotors.

---

# Lessons Learned

**Technical**
- Hardware testing is hard — HITL validation matters as much as SITL, and reusable launch tooling pays for itself in saved setup time.
- Advanced controllers (OBLTR, AAOBLTR) have a steep ramp-up; analysis tooling (Foxglove, RViz replay) is what makes that ramp-up tractable.

**Professional**
- First real experience working against hard, externally-imposed deadlines (the DARPA demo date).
- Working on a fast-paced, experienced team raised the bar for how I scope and communicate progress.

**People & Culture**
- In-office connections mattered more than expected for unblocking work quickly.
- A strong team culture measurably boosted productivity.

---

# Summary of Contributions

- Extended FALCON controllers and associated missions to quadrotors — RSLQR, OBLTR, and AAOBLTR running on PX4 firmware.
- Designed and implemented analytical CBFs for theoretically guaranteed safe guidance (obstacle avoidance).
- Delivered a live DARPA demonstration of FALCON controllers on an aerial platform.