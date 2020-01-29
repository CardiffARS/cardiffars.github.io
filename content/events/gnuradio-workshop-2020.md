---
title: "GNU Radio Workshop"
description: ""
draft: false
layout: single
slug: 2020/gnuradio-workshop
---

The Cardiff University ARS will be hosting an Introduction to GNU Radio and Software Defined Radio workshop on Sunday March 8, 2020 at our campus in Cardiff. This one day event is a mix of presentations, hands on activities, and Q&A focused on getting participants to the point of experimenting independantly. The workshop is being taught by John Worsnop G4BAO, Heather Lomond M0HMO, and Derek Kozel MW0LNA.

GNU Radio is a free and open source, graphical, software development toolkit that provides signal processing blocks to implement software-defined radios and signal-processing systems. It can be used with external RF hardware to create software-defined radios, or without hardware in a simulation environment. It is widely used in hobbyist, academic, and commercial environments to support both wireless communications research and real-world radio systems.

Participants in the workshop will be given an RTL-SDR receiver to use and to take home as well as the workshop materials and the resources to install GNU Radio at home. 

## Interested?

If you are interested in attending the workshop please contact John at <a href="mailto:john@bravoao.co.uk">john@bravoao.co.uk</a>.

## Content

### Background

* Basics of Sampling: Sample rates, bit depths, Nyquist limit
* Time and Frequency domains: Using the Fourier Transform
* Complex sampling and mixing
* Filtering

### Basics of GNU Radio

* Creating flowgraphs with the standard library of blocks
* Debugging flowgraphs
* Sample rate and the throttle block
* Documentation: What and where

### Generating Signals

* Creating, viewing, and listening to a sine wave
* Adding and manipulating basic signals
* Visualizing in the frequency domain
* Using and visualizing filters
* Demodulate an FM signal with a digital mixer

### Use of hardware

* Receiving and demodulating FM and SSB over the air
* Controlling hardware from GNU Radio Companion
* Introduction to the design of SDR transcievers
* Overview of imperfections common to SDR transceivers
* Demonstration of transmitting using an SDR

### Extra topics

As time allows:

* Installing and using third-party Out of Tree modules in GNU Radio
* Demonstration of using gr-satellites to demodulate telemetry and data from satellites
* Sending and receiving basic digital signals

#### Important Note 

To be absolutely clear, this is a programming workshop, aimed at people who want to create their own SDR Applications and go beyond just installing standard SDR software and hardware. Previous programming experience is not required but will be helpful at points. Nor is previous knowledge of signals or signal processing needed, the presentations start with no assumptions but do move quickly. 

## Location

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
  integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
  crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
  integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
  crossorigin=""></script>

<div id="mapid" style="height: 400px"></div>

<script>
  var mymap = L.map('mapid').setView([51.4835,-3.1717], 8);
  var marker = L.marker([51.4835,-3.170]).addTo(mymap);
  marker.bindPopup("Cardiff University").openPopup();

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2FyZGlmZmFycyIsImEiOiJjanFvMGpvZDUwYXNtNDhwc21qZnQ0a21lIn0.d75xS1Kq8ls8pDlnAMB3gg'
  }).addTo(mymap);

</script>

> Queen's Building  
> 5 The Parade  
> CF24 3AA  
> Cardiff

## UK Microwave Group Roundtable 

On the previous day, Saturday March 7th, there will be a hands on Introduction to GNU Radio and Software Defined Radio. Checkout the main event page for more information and to register.

<a href="/events/2020/roundtable" class="button is-link">Cardiff Roundtable</a>
