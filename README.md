LIVE_SPEEDTRAP

# Mobile application to simulate Speed trap challenges seen in the popular racing video game franchise “Need For Speed” (henceforth, NFS) in the real world.

SpeedTrap:
Point location which one must cross at a minimum speed of x km/h.

Proposed flow:
1. User launches app.
2. User profile created either via social login or locally on device and synced to cloud.
3. Map loads up showing nearby speedtraps and user’s location in the center.
User taps on a speedtrap which loads up the following information in a popup card:
  # Target speed of speedtrap
  # Distance to speedtrap from current location
ETA to speedtrap from current location
Global best of speedtrap
User’s best of speedtrap
From this popup the user can “start” speedtrap attempt.
A route to speedtrap will be shown and navigation will work similar to GoogleMaps, Uber, Ola, etc
Once the point (or nearby) is reached, a notification will be issued and the user is free to start attempting.
Speed monitoring will begin now.
If speed while crossing speedtrap region >= target speed of speedtrap a notification will be issued mentioning “success” and this data will be updated to user’s profile as well as speedtrap information on cloud.
If speed < target speed of speedtrap while crossing speedtrap point location then notification will state “fail” and a “try again” prompt will appear.

Proposed technology:
React Native framework to develop native apps for Android and iOS.
