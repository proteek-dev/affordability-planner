
<p align="center">
  <i align="center">Affordability Planner 🚀</i>
</p>

<h4 align="center">
  <br>
  <a href="https://discord.gg/EJhUjMCd8m">
    <img src="https://img.shields.io/badge/discord-7289da.svg?style=flat-square" alt="discord">
  </a>
</h4>

<p align="center">
    <img src="https://github.com/proteek-dev/affordability-planner/blob/main/docs/planner.gif" alt="dashboard"/>
</p>

## Project

<p align="center">
    <a href="https://macquarian.my.canva.site/">Protject</a>
</p>


## Prototype(App)

<p align="center">
    <a href="https://www.figma.com/proto/jH3mzKOrrkYTAMqNKsp241/Macquarian---Affordability-Planner-(GovHack-2023)?type=design&node-id=2-964&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A964">App</a>
  &nbsp;
  <a href="https://proteek-dev.github.io/affordability-planner/">Website(NSW)</a>
  &nbsp;
  <a href="https://proteek-dev.github.io/affordability-planner/tasmania.html">Website(Tasmania)</a>
</p>

## Introduction

Cost of living is a key issue effecting many NSW citizens Australia is currently facing high inflation, surging housing demand and increased interest rates. The topic of housing affordability is a
'real' issue that residents are dealing with as they plan for the future of the family. Many residents have recently experienced rental price hikes as NSW tackles the issue of housing availability and landlords struggle to make their repayments.

The NSW Department of Planning estimates that an additional 904,000 homes will be needed over the next 20 years to house its growing population. The majority of planned dwellings will be situated outside of the Sydney CB, primarily in the Greater Sydney Region.While there is rich information out there in the public domain, it is complex. When families are time poor and under financial stress, navigating this ocean of data to make an informed choice on their next move is not easy.

How will families decide where to move in the future? How can families plan for their child's education future with entry into good schooling? Phase One pilot of the Macquarian 'Affordability Planner' intends to help equip households with the information they require to make informed decisions on their next housing decision. It will provide users with insight into suburbs that are within their affordability range enriched with information on local schools and relative school quality. Future enhancements for family planning decision data may include a better indication of:

<ol>
  <li>Localised cost of living by relying on information such as fuel prices and greenslip registration.</li>
  <li>Insight into infrastructure pipeline for planned developments of new schools or care facilities.</li>
  <li>Job data to provide a view of job vacancies.</li>
    <li>Availability of social or affordable housing in the future.</li>
</ol>

**Data Journey**
Macquarian has sourced public domain information from:
<ol>
  <li>NSW Data (data.nsw.gov.au)</li>
  <li>NSW Family & Community Services (facs.nsw.gov.au)</li>
</ol>

Australian Curriculum, Assessment and Reporting Authority (acara.edu.au)
Detailed information on average rental prices, school location and school quality have been ingested into a Tableau dashboard to provide a geospatial heatmap of potential 'affordable' suburbs along with available schooling. Users can expect to interact with the application via a Desktop and Mobile App, input their accommodation needs to have a visual overlay of their affordable areas in the NSW Region. They can then make informed decisions on potential locations taking into consideration convenience factors (e.g. distance from work) while having a list of schools available for their schooling needs.

## Architecture

<p align="center">
    <img src="https://github.com/proteek-dev/affordability-planner/blob/main/docs/UML class.png" alt="architecture"/>
</p>


## Pilot data constraints

Current school quality ranking is based on publicly available ICSEA score via ACARA. ICSEA Definition: The Index of Community Socio-Educational Advantage score for the school. This score is derived from a number of variables including parental school and non-school education and occupation, the school’s geographical location and proportion of Indigenous students. As a proof of concept ICSEA has been utilised for the purpose of assume a 'quality' for a given school that is not ideal. ACARA includes more detailed results of school outcomes (for example 'Average NAPLAN Score'). Due to the sensitivity of the data on individual school performance, the information is not immediately acessible, however accessible via a data request to ACARA. This enhanced data can be scrubbed to provide a generic suburb quality score to improve of the Affordability Checker output.


<details open>
<summary>
 Features
</summary> <br />

<p align="center">
    <img width="49%" src="https://github.com/proteek-dev/affordability-planner/blob/main/docs/Search.png" alt="apis"/>
&nbsp;
    <img width="49%" src="https://github.com/proteek-dev/affordability-planner/blob/main/docs/Features.png" alt="data-models"/>
</p>

<p align="center">
    <img width="49%" src="https://github.com/proteek-dev/affordability-planner/blob/main/docs/8.png" alt="plugins"/>
</p> 
    
</details>




## Contributers

<!---
npx contributer-faces --exclude "*bot*" --limit 70 --repo "https://github.com/amplication/amplication"

change the height and width for each of the contributors from 80 to 50.
--->

[//]: contributor-faces
<a href="https://github.com/navasikya06"><img src="https://avatars.githubusercontent.com/u/24759061?v=4" title="Taylor" width="50" height="50"></a>
<a href="https://github.com/proteek-dev"><img src="https://avatars.githubusercontent.com/u/38344009?v=4" title="Proteek" width="50" height="50"></a>
<a href="https://github.com/melbreaker"><img src="https://avatars.githubusercontent.com/u/804658?v=4" title="Mel" width="50" height="50"></a>
<a href="https://github.com/garv1510"><img src="https://avatars.githubusercontent.com/u/57868866?v=4" title="Garv" width="50" height="50"></a>
<a href="https://github.com/suyashpokharel"><img src="https://avatars.githubusercontent.com/u/47374758?v=4" title="morhag90" width="50" height="50"></a>

[//]: contributor-faces
