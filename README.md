# Big Yellow Bus - School Transport & Attendance Operations ERP

Built from Google Stitch Project `651093325793870125` ("School Transport & Attendance Dashboard").

## Overview

This application delivers a high-density, real-time telemetry and student attendance reconciliation system for campus operations managers, transport coordinators, and security dispatchers.

### Implemented Screens

1. **Dashboard (`index.html`)**
   - **Key Metric Indicators**: Arrived Today (840 / 96.1%), Currently at School (420), Left School (420), Absent / Exceptions (34).
   - **Trip Status Telemetry Bar**: 18 Active Ongoing routes, 4 Completed, 2 Alerts (91.7% progress).
   - **Student Movement Dynamics**: Weekly arrival/dispersal flow histogram.
   - **Attendance Reconciliation Equation**: Interactive modal split tabs for School Bus (718) vs Campus Walk-in Turnstiles (122) categorized by NFC Tap, QR Scan, and Manual check-in.
   - **Student Transit Split**: Breakdown of institutional bus riders vs private vehicle carpools and walk-in arrivals.
   - **Transport Operations Grid**: Live priority bus routes (#12, #24, #31, #18, #07) with crew manifests and speed telemetry.
   - **Gate Physical Access**: Status monitors for Gates 01-05 (Boom barriers, Biometrics, Emergency corridors).
   - **Recent Activity Feed**: Real-time chronological audit trail.

2. **Live Fleet Tracking (`tracking.html`)**
   - **Interactive SVG Map Canvas**: High-precision vector cartography rendering roads, campus buildings, gates, and route lines.
   - **Live GPS Markers**: Real-time vehicle positions with speed tags (#24 Valley Shuttle Delayed, #31 North Express Approaching Gate 1, #12 Southside Line On-Time, #07 Westfield Loop, #18 Docked Bay).
   - **Dispatch Drawer (Left Panel)**: Status filter buttons (All, In Transit, Delayed, Approaching, Done) and quick search.
   - **Selected Vehicle Inspector**: Live speed drift, stop milestones, VOIP radio driver action, and quick link to student roster.
   - **Map Controls**: Layer switchers (Traffic Live, Satellite, Campus Gates), Zoom in/out, Recenter.

3. **Bus Attendance (`attendance.html`)**
   - **Live Boarding Telemetry Strip**: Expected (1,619), Onboard Now (132 / 8.1%), Offboard / Arrived (1,453), Absent (34), and 98.2% Gate Sync meter.
   - **Student Manifest & Roster Grid**: Filterable by role (All, Students, Teachers, Staff) and status (Onboard, Offboard, Absent).
   - **Interactive Status Toggling**: Click "Toggle Status" on any student row to cycle through Onboard ↔ Offboard ↔ Absent with toast notifications.
   - **Search & Column Filters**: Real-time search across student names, tag IDs, bus numbers, and pickup locations.
   - **Export Action**: Single-click PDF/CSV manifest generation.

## Technical Architecture

- **Typography**: Plus Jakarta Sans, JetBrains Mono
- **Styling**: Vanilla CSS + Tailwind CSS utilities
- **Icons**: Material Symbols Outlined & Vector SVGs
- **Interactions**: Vanilla JavaScript (`js/app.js`) with live clock simulation, dynamic filters, marker sync, and notification toast engine.

## Launching Locally

You can open any of the HTML files directly in your web browser:
- `index.html`
- `tracking.html`
- `attendance.html`

Or run a local HTTP server:
```bash
python3 -m http.server 8080 -d /Users/admin/.gemini/antigravity-ide/scratch/school-transport-dashboard
```
Then visit `http://localhost:8080`.
