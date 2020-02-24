---
title: "Train the Trainers"
description: ""
draft: false
layout: single
slug: 2020/train-the-trainers
---

The RSGB will be running a Train the Trainers one day course in Cardiff on Saturday, April 18th. The event will be hosted by the Cardiff University ARS in the Engineering and Computer Science building.

## Summary

Trainers on amateur radio courses need to deliver content to students from a wide age range and to an audience that has vastly different levels of knowledge and abilities. In light of these challenges trainers do a great job despite many not coming from a professional teaching background.

During the course participants will cover the following subject areas:

* Ways students learn – we are not all the same
* Alternative delivery methods
* Quick and easy lesson planning
* Delivering the practical assessments
* Obtaining and giving feedback
* Supporting students after they pass

For a full description of the course check the main RSGB event page: [Train the Trainers](https://rsgb.org/main/clubs-training/for-trainers/train-trainers-events/)

## Join the Course

Send an email to the RSGB Training team at [trainthetrainers@rsgb.org.uk](mailto:trainthetrainers@rsgb.org.uk) for more information or to signup!

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

