(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{125:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Learn more about this circle at "),a("a",{attrs:{href:"Transportation_networks"}},[e._v("Transportation networks")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Transportation networks")]),e._v(" generally refer to a set of "),a("strong",[e._v("links")]),e._v(", "),a("strong",[e._v("nodes")]),e._v(", and "),a("strong",[e._v("lines")]),e._v(" that represent the infrastructure or supply side of the transportation. The links have characteristics such as speed and capacity for roadways; frequency and travel time data are defined on transit links or lines for the transit system. Transportation analysis zones are represented in the network by "),a("strong",[e._v("centroids")]),e._v(", a subset of the nodes; and "),a("strong",[e._v("centroid connectors")]),e._v(" are links that provide access and egress to the system.")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Highway and transit networks are a principal means by which the supply side of transportation is represented. A typical highway network will include links ranging from high speed, high capacity (e.g., freeways) to low-speed, low capacity (e.g., residential streets). Transit networks are a spatial representation of bus, rail, and other types of transit routes available in a region. Links will include fixed-guideway (e.g., passenger rail) to bus lines that operate in mixed-traffic on the roadway links.")]),e._v(" "),a("p",[e._v("While all models are representations of the 'real world', it should be noted that network models can be both very precise and accurate. The following quote puts this in perspective especially as it relates to the differences between the supply and demand side of models.")]),e._v(" "),a("p",[e._v(":")]),e._v(" "),a("pre",[a("code",[e._v(':   "Traffic modeling is frequently described as being part science, part art. Modelling the base year supply-side -- the representation of the highway network today -- is the science part. It is frequently modelled with, literally, military precision using mapping data from GPS satelittes. This level of precision does not extend to the representation of the demand-side of the travel economy..."[^1]\n')])]),e._v(" "),a("h2",{attrs:{id:"network-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-types"}},[e._v("#")]),e._v(" Network Types")]),e._v(" "),a("h3",{attrs:{id:"highway-networks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#highway-networks"}},[e._v("#")]),e._v(" Highway Networks")]),e._v(" "),a("p",[a("a",{attrs:{href:"Highway_networks"}},[e._v("Highway networks")]),e._v(" provide a representation of individual, connected links between intersections through the use of "),a("em",[e._v("links")]),e._v(" and "),a("em",[e._v("nodes")]),e._v(". Links are often described by length, capacity, number of lanes, posted speed, and freeflow speed. The congested speed on any link may be calculated through the use of an appropriate "),a("a",{attrs:{href:"Delay_Estimation_in_Trip_Based_Models"}},[e._v("volume-delay function (VDF)")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"transit-networks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transit-networks"}},[e._v("#")]),e._v(" Transit Networks")]),e._v(" "),a("p",[a("a",{attrs:{href:"Transit_networks"}},[e._v("Transit networks")]),e._v(" are also comprised of nodes and links. Nodes generally comprise bus or rail stops along transit routes and are spatially located by XY coordinates. Stop attributes may be attached to a node to describe the characteristics of the stop, typical dwell times, and frequency of vehicle arrivals at the stop. Links on the transit network connect consecutive stops. Further detail about each route often includes route fares, schedules, headways, and speeds. Other spatial data elements associated with transit networks include the locations and capacity of park-n-ride facilities, and access and egress legs or links for each zone. Intra- and intermodal transfer locations are also identified in transit networks.")]),e._v(" "),a("h3",{attrs:{id:"other-networks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-networks"}},[e._v("#")]),e._v(" Other Networks")]),e._v(" "),a("p",[a("strong",[e._v("Non-motorized")]),e._v(" modes such as walking or bicycling are sometimes not represented in travel forecasting models. Hence, the networks for these modes would not included. The main reason for this exclusion is that most models were developed to address macro-level questions about the location or size of the roadway and transit network links (i.e., are new roads needed or what existing roads need to be widened). However, an emerging area of interest includes "),a("a",{attrs:{href:"bike_modeling"}},[e._v("bike modeling")]),e._v(", which requires a network that may include special attributes that influence route choice (such as street slope).")]),e._v(" "),a("p",[a("a",{attrs:{href:"Freight_networks"}},[e._v("Freight networks")]),e._v(" can include both truck facilities and rail freight.")]),e._v(" "),a("p",[a("a",{attrs:{href:"Super_Network_Modeling"}},[e._v("Super networks")]),e._v(" represent an integrated multi-modal network with the intention of providing a more comprehensive look at routes across all available modes of transport and access/egress patterns. The modal elements appear in multiple layers and are connected by artificial transfer links, which can represent a variety of costs. The private (car and bicycle) layers can be connected to the pedestrian layer where they are available and can be parked, and all origin and destination centroids are located on the pedestrian layer. "),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])])]),e._v(" "),a("h2",{attrs:{id:"current-state-of-the-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-state-of-the-practice"}},[e._v("#")]),e._v(" Current State of the Practice")]),e._v(" "),a("p",[a("strong",[e._v("Network Representation")])]),e._v(" "),a("p",[e._v("Usually all freeways, expressways, principal arterials, minor arterials, and feeder/collector routes are included. Data on roadway characteristics are associated with each link. Current highway networks range in size from 4,200 links for small MPOs to more than 20,000 for large MPOs. "),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v(" The detail of the network often reflects the size of the "),a("a",{attrs:{href:"Traffic_Analysis_Zones"}},[e._v("TAZs")]),e._v(", the resources available to maintain the network, and the intended applications of the model.")]),e._v(" "),a("p",[e._v('![Sample Highway Network](MAG Highway Networks.jpg "Sample Highway Network")')]),e._v(" "),a("p",[e._v("The transit network (if there is one) is represented as routes for the various transit systems in the metropolitan area. Some of these routes run on the highway network and share highway links, while others are on their own right-of-way. Transit networks are typically more complex than highway networks because of the multiple modes involved and the need to consider operating frequencies and schedules. The vast majority of MPOs that have rail transit within their area include the entire rail network in their transit model. More than 80 percent of all MPOs and 90 percent of large MPOs include at least 75 percent of available express bus miles in their transit network. All of the large MPOs that reported having local bus service include at least three quarters of the local routes in their network. In contrast, more than 60 percent of the small MPOs and 20 percent of the medium MPOs that reported having local bus service include less than three-quarters of local service miles in their network."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])])]),e._v(" "),a("p",[a("strong",[e._v("Network Data Management")])]),e._v(" "),a("p",[e._v("Transportation supply is often represented through highway and transit networks mapped and edited in a GIS database or travel forecasting software.")]),e._v(" "),a("p",[e._v("Some MPOs maintain master networks that provide project-level coding by build-out year, combined into one network or database. The master networks allow the modeler to more easily create networks for various future years and evaluate different scenarios.")]),e._v(" "),a("p",[e._v("Many MPOs keep meta-data on their network to track the person who added or edited a given segment, the date, and other key pieces of information. This is helpful for when there is a question about the way a network is coded.")]),e._v(" "),a("p",[e._v("Who codes the network? Some agencies have found that it can be problematic to let non-modelers (e.g., agency staff) edit the network. They may not understand the process and why certain information is needed, and inconsistencies may be created. That said, it’s important to have a visual way for the planning team to check the accuracy of the coding.")]),e._v(" "),a("p",[e._v("How often to update the network? A protocol should be developed for when the network is updated. Plans in a region can change frequently and it can be very challenging, and possibly unproductive, for the regional MPO network to keep pace.")]),e._v(" "),a("h2",{attrs:{id:"developing-a-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developing-a-network"}},[e._v("#")]),e._v(" Developing a Network")]),e._v(" "),a("p",[e._v("Using geographic information systems (GIS), networks can be created that are built off survey and satellite mapping data that is accurate to within a few inches. This level of accuracy and precision, however, should be considered in the context of the demand model and what happens when demand and supply are brought together in "),a("a",{attrs:{href:"Spatial_Interaction_Models"}},[e._v("trip distribution")]),e._v(" and trip assignment.")]),e._v(" "),a("p",[e._v("Transportation network data tends to remain relatively stable over time. Most models have existing transportation networks that must simply be updated to reflect new roadways, increases in roadway capacity (e.g., through the addition of travel lanes), or new transit services.")]),e._v(" "),a("p",[e._v("What is coded? A protocol should be developed to ensure consistency throughout the region in how the model network is coded. Many travel demand models are not sensitive to changes in signal timings, adding a center left-turn lane, etc. The modeling network could be a subset of the list of regional improvements in the plan.")]),e._v(" "),a("p",[a("strong",[e._v("Standards")])]),e._v(" "),a("p",[e._v("There are various emerging standards for transportation networks. Standard network definitions make it easier to share networks between organizations, software programs, and people. A few relevant standards include:")]),e._v(" "),a("ul",[a("li",[e._v("OpenStreetMap - "),a("a",{attrs:{href:"http://wiki.openstreetmap.org/wiki/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://wiki.openstreetmap.org/wiki/Main_Page"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("General Transit Feed Specification (GTFS) - "),a("a",{attrs:{href:"https://developers.google.com/transit/gtfs",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developers.google.com/transit/gtfs"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Model Free - "),a("a",{attrs:{href:"http://modelfree.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://modelfree.org"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("UNETRANS - "),a("a",{attrs:{href:"http://ncrst.digitalgeographic.com/research/unetrans/first.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://ncrst.digitalgeographic.com/research/unetrans/first.html"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("TIGER/Line - "),a("a",{attrs:{href:"http://www.census.gov/geo/maps-data/data/tiger.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.census.gov/geo/maps-data/data/tiger.html"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("strong",[e._v("Data Sources")])]),e._v(" "),a("p",[e._v("Several sources of network data are described in the "),a("a",{attrs:{href:"Model_Validation_and_Reasonableness_Checking"}},[e._v("Travel Model Validation and Reasonableness Checking Manual")]),e._v(". "),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),e._v(" These sources could include direct field observations, transportation or transit planning agencies, aerial photography, online maps ("),a("a",{attrs:{href:"https://maps.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Maps"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"http://www.openstreetmap.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenStreetMap"),a("OutboundLink")],1),e._v("), commercial venders (ArcGIS, Navteq, Tele Atlas), GTFS, "),a("a",{attrs:{href:"http://www.census.gov/geo/maps-data/data/tiger.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIGER/Line Files"),a("OutboundLink")],1),e._v(" from the Census Bureau, and others.")]),e._v(" "),a("p",[a("strong",[e._v("Reasonableness Checks")])]),e._v(" "),a("p",[e._v("While network data does tend to be relatively stable, there can be a lot of detail and quantity of data associated with the networks that often require on-going editing and quality control. Most travel forecasting or GIS software programs contain tools to conduct a variety of error or "),a("a",{attrs:{href:"Network_Reasonableness_Checks"}},[e._v("reasonableness checks")]),e._v(" related to the accuracy and connectivity of the network. Automated processes that catch errors before a model run can save time.")]),e._v(" "),a("h2",{attrs:{id:"visualization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visualization"}},[e._v("#")]),e._v(" Visualization")]),e._v(" "),a("p",[e._v("The visualization of networks typically occurs through mapping specific variables or attributes. These attributes can be displayed statically or dynamically and can take 2-D or 3-D forms.")]),e._v(" "),a("h2",{attrs:{id:"research-needs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#research-needs"}},[e._v("#")]),e._v(" Research Needs")]),e._v(" "),a("p",[e._v("Travel demand is influenced by the network that is supplied. This relationship needs to be better understood so that induced and suppressed travel effects can be directly modeled by feedback to trip generation and long-range land use forecasts. The presence and completeness of bicycle, pedestrian, and low-energy vehicle/neighborhood electric vehicle networks on travel demand needs to better understood to justify future investments in these modes.")]),e._v(" "),a("h2",{attrs:{id:"online-network-repositories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#online-network-repositories"}},[e._v("#")]),e._v(" Online Network Repositories")]),e._v(" "),a("p",[e._v("Some online repositories for actual network files for research and modeling include:")]),e._v(" "),a("ul",[a("li",[e._v("TransitLand - "),a("a",{attrs:{href:"https://transit.land",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://transit.land"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("TransportationNetworks Test Programs (TNTP) - "),a("a",{attrs:{href:"http://trb-networkmodeling.org/testdata",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://trb-networkmodeling.org/testdata"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("h2",{attrs:{id:"related-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-content"}},[e._v("#")]),e._v(" Related Content")]),e._v(" "),a("p",[e._v("{{#ask: "),a("a",{attrs:{href:"_"}},[e._v("_")]),e._v("\n| format=ul\n}}")]),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("van Eck, Gijsbert (2014) Model complexities and requirements for multimodal transport network design: Assessment of classical, state-of-the-practice, and state-of-the-research models, Transportation Research Board, 2014. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[a("a",{attrs:{href:"SR_288_Metropolitan_Travel_Forecasting_Current_Practice_and_Future_Direction"}},[e._v("SR 288-Metropolitan Travel Forecasting Current Practice and Future Direction")]),e._v(", Transportation Research Board, 2007. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[a("p",[a("a",{attrs:{href:"Model_Validation_and_Reasonableness_Checking"}},[e._v("Travel Model Validation and Reasonableness Checking Manual, Second Edition")]),e._v(", Federal Highway Administration Travel Model Improvement Program, 2010. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);