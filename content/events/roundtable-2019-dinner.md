---
title: "Cardiff Microwave Roundtable"
description: ""
draft: false
layout: single
slug: 2019/roundtable/dinner
---

<div class="tabs is-centered">
    <ul>
        <li><a href="/events/2019/roundtable">About</a></li>
        <li><a href="/events/2019/roundtable/program">Program</a></li>
        <li class="is-active"><a>Dinner</a></li>
        <li><a href="/events/2019/roundtable/venue">Venue</a></li>
        <li><a href="/events/2019/roundtable/attendees">Attendees</a></li>
        <li><a href="/events/2019/roundtable/register">Register</a></li>
    </ul>
</div>

## Dinner

There will be a group dinner in the evening from 18:30 to 21:00 at [Valentino's](https://www.valentinocardiff.com/), a nearby Italian restaurant within easy walking distance of the main venue.

Because of the unfortunately timed rugby match the menu is somewhat reduced.


<link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
  integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
  crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
  integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
  crossorigin=""></script>

<div id="mapid" style="height: 400px"></div>

<script>
  var mymap = L.map('mapid').setView([51.4832,-3.175], 15);
  var marker = L.marker([51.4835,-3.170]).addTo(mymap);
  marker.bindPopup("Cardiff University").openPopup();

  var marker = L.marker([51.4832,-3.173]).addTo(mymap);
  marker.bindPopup("Valentino's").openPopup();

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2FyZGlmZmFycyIsImEiOiJjanFvMGpvZDUwYXNtNDhwc21qZnQ0a21lIn0.d75xS1Kq8ls8pDlnAMB3gg'
  }).addTo(mymap);

</script>
