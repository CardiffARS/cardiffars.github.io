---
title: "GNU Radio Workshop"
description: ""
draft: false
layout: single
slug: 2020/gnuradio-workshop
---

The Cardiff University ARS will be hosting an Introduction to GNU Radio and Software Defined Radio workshop on Sunday March 8, 2020 at our campus in Cardiff. This one day event is a mix of presentations, hands on activities, and Q&A focused on . The workshop is being taught by John Worsnop G4BAO, Heather Lomond M0HMO, and Derek Kozel MW0LNA.

GNU Radio is a free and open source, graphical, software development toolkit that provides signal processing blocks to implement software-defined radios and signal-processing systems. It can be used with external RF hardware to create software-defined radios, or without hardware in a simulation environment. It is widely used in hobbyist, academic, and commercial environments to support both wireless communications research and real-world radio systems.

Participants in the workshop will be given an RTL-SDR receiver to use and to take home as well as the workshop materials and the resources to install GNU Radio at home. 

## Interested?

If you are interested in attending the workshop please contact John at <a href="mailto:john@bravoao.co.uk">john@bravoao.co.uk</a>.

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
