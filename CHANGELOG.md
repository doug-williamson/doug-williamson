# Change Log

All notable changes to doug-williamson will be documented in this location. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# URL

https://dougwilliamson.space

<a name="1.0.0-beta.15"></a>
# 1.0.0-beta.15 (2020-11-02)


### Breaking Changes
* Contact: moved text to Firebase service, requiring collection/document
* Donate: moved text to Firebase service, requiring collection/document
* Latest News: moved to Firebase service, requiring collection/document

### Features
* Biography: moved About Me/Website to Biography card content
* Experience: moved jobs to experience card content

### Bug Fixes
* rhombus-shell: collapsed sidenav for viewports < XL

<a name="1.0.0-beta.14"></a>
# 1.0.0-beta.14 (2020-10-28)

### Features
* Theming: Added gradients for new primary and accent colors
* Backlog: Added view for project statuses: To Do, In Progress, and Done. Replaces Coming Soon view.

### Bug Fixes
* Biography: added OrderBy for About Me/Website
* Experience: added OrderBy for Jobs

<a name="1.0.0-beta.13"></a>
# 1.0.0-beta.13 (2020-10-27)

### Bug Fixes
* Dynasties: cleaned up template(s), created Team component for Year view with weekly schedule

<a name="1.0.0-beta.12"></a>
# 1.0.0-beta.12 (2020-10-22)

### Features
* Dynasties: created initial component(s) for Firebase-driven gaming data

<a name="1.0.0-beta.11"></a>
# 1.0.0-beta.11 (2020-10-13)

### Features
* Posts: replaced Blog view of mat-accordion with Posts/Post mat-sidenav UI
* Posts: moved blog data from component to Firebase collection('posts')
* Biography: moved biography data from component to Firebase collection('biography')

<a name="1.0.0-beta.10"></a>
# 1.0.0-beta.10 (2020-05-01)

### Features
* Experience: moved overview and job array to Firebase, added orderBy pipe

### Bug Fixes
* rhombus-shell: upgraded to beta.30, adding fxFlex for router-outlet and fixing Home button text bug

<a name="1.0.0-beta.9"></a>
# 1.0.0-beta.9 (2020-04-15)

### Features
* rhombus-shell: upgraded to beta.28, updating sidenav and adding breadcrumb header

<a name="1.0.0-beta.8"></a>
# 1.0.0-beta.8 (2020-04-15)

### Features
* rhombus-shell: upgraded to beta.27, fixing sidenav collapsing, adding Dark Mode toggle and upgrading to Angular 9

### Hotfixes
* Updated multi-component view margins
* Added dates to Experience view's non-mobile expansion panels

<a name="1.0.0-beta.7"></a>
# 1.0.0-beta.7 (2020-04-04)

### Features
* Added Doug's Blog
* Added Latest News feature to Home view
* Made Home view, Latest News and Coming Soon components responsive
* Added #coding Discord link to Home view (Welcome)
* Added #general Discord link to Streaming view

<a name="1.0.0-beta.6"></a>
# 1.0.0-beta.6 (2020-03-26)

### Features
* rhombus-shell: upgraded to beta.20, fixing mat-sidenav collapse issue

<a name="1.0.0-beta.5"></a>
# 1.0.0-beta.5 (2020-02-03)

### Features
* rhombus-shell: upgraded to beta.19, updated branding for dougwilliamson.space

<a name="1.0.0-beta.4"></a>
# 1.0.0-beta.4 (2020-01-08)

### Features
* rhombus-shell: upgraded to beta.18, get Donate dialog
* Streaming: added Twitch iFrame

<a name="1.0.0-beta.3"></a>
# 1.0.0-beta.3 (2019-12-25)

# Features
* rhombus-shell: upgraded to beta.16, get Settings view with Theme Mode (Light/Dark)

<a name="1.0.0-beta.2"></a>
# 1.0.0-beta.2 (2019-12-22)

## Features
* Added responsiveness to Views
* rhombus-shell: Provided CHANGELOG.md GitHub link

<a name="1.0.0-beta.1"></a>
# 1.0.0-beta.1 (2019-12-18)

### Features

* Experience: added accordion opened default to most recent job
* Experience: added buttons for job attribute urls
* Streaming: updated Mixer info with Twitch info
* rhombus-shell: added Work Sans, Montserrat sans-serif font family to Typography
* rhombus-shell: consumed Typography

<a name="1.0.0-beta.0"></a>
# 1.0.0-beta.0 (2019-12-10)

### Features

* Consumed the following npm library:
  - **dougwilliamson/rhombus-shell**
* Created the following application routes/views:
    - Home
    - Biography
    - Experience
    - Streaming
