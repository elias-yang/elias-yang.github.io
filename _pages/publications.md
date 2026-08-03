---
layout: page
permalink: /publications/
title: Publications
description: Publications organized by research theme.
nav: true
nav_order: 3
---

<link rel="stylesheet" href="/assets/css/reference-style.css?v=7">

{% include bib_search.liquid %}

<div class="research-themes">

## Robust 3D Perception for Autonomous Driving

Unsupervised cooperative perception and domain-aware multimodal detection for reliable autonomous systems.

<div class="publications">
{% bibliography --query @*[project=robust3d] %}
</div>

## Low-Light Driving Perception

Real-world day–night data alignment and robust perception in dark driving environments.

<div class="publications">
{% bibliography --query @*[project=lowlight] %}
</div>

## Efficient Federated Learning

Communication-efficient learning through parameter freezing, dynamic sparsity, and task alternation.

<div class="publications">
{% bibliography --query @*[project=fedlearning] %}
</div>

## Adversarial Robustness

Robust optimization and stealthy adversarial attacks for multi-task learning systems.

<div class="publications">
{% bibliography --query @*[project=adversarial] %}
</div>

## Digital Twin & Health Intelligence

Personalized medical devices, cardiac digital twins, and learning-based healthcare applications.

<div class="publications">
{% bibliography --query @*[project=digitalhealth] %}
</div>

## Cyber-Physical & Environmental Intelligence

Formal risk analysis for cyber-physical systems and data-driven environmental sensing.

<div class="publications">
{% bibliography --query @*[project=cpsenvironment] %}
</div>

</div>
