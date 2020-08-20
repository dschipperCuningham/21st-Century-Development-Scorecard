var dataIn = {
    "matrix": [
        {
            "tag": "Limits to Growth",
            "category": "Place",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Developed on any legal site following all regulations."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Developed for density, or limits growth, and contains open space."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"No development on sensitive sites (wetlands, flood plain, etc.)."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"No development on sensitive sites (wetlands, flood plain, etc.) or undeveloped land. Plan in place for future ecosystem health."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Continually restores and enhances the local ecosystem."
                }
            ],
            "barriers":[
                {"before":"Regenerative","type":"Monetary"}
            ]
        },{
            "tag": "Food",
            "category": "Place",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"No garden space or food production on site."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Some public garden or food production space."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Opportunity for every resident to have access to community garden greenhouse, local farm education, and fresh, healthy food."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"On-site food production contributes to local food network in relation to the density of the project."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"All food production contributes to ecosystem health and is grown within the bioregional ecosystem (100 mile radius). Surplus food is grown and shared with other communities."
                }
            ],
            "barriers":[
                {"before":"Regenerative","type":"Monetary"}
            ]
        },{
            "tag": "Habitat",
            "category": "Place",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"May contain parks, landscaping. Little emphasis on stormwater management."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Green spaces include parks, landscaping. Some emphasis on stormwater management."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Constructed wetlands, land set aside, native plantings, more than 25% of developable space is undeveloped."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Each hectare (2.47 acres) of development requires an equal amount of land set aside in perpetuity."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Habitat creation and management within the development connects and restores larger regional habitats and movement of species."
                }
            ],
            "barriers":[
                {"before":"Regenerative","type":"Monetary"}
            ]
        },{
            "tag": "Transportation",
            "category": "Place",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Car-oriented development. Planning may contain sidewalks, but development is not designed around the pedestrian."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Promotes walkable streets, bicycle infrastructure, access to some services."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Walkable streets, bicycle infrastructure, public transit links, car sharing, EV charging stations, and easy access to services."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Mobility Plan in place: pedestrian-oriented community; public transit linkage to services; pedestrian, bicycle, and electric vehicle infrastructure; advocacy for human-powered transportation. Mixed-use communities: community may not cause the predominant occupancy type to exceed maximum percentage."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"All transportation powered by renewable resources and nonpolluting."
                }
            ],
            "barriers":[
                {"before":"Regenerative","type":"Monetary"}
            ]
        },{
            "tag": "Water",
            "category": "Water",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Water needs met by utilities or well, some conservation strategies in place."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Some stormwater reuse or infiltration, greywater recycling, conservation goals."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Greywater purification and reuse, rainwater capture and use, stormwater prevention through green roofs and permeable surfaces."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"100% of community's water needs met by captured precipitation or closed-loop water system. 100% of community's water discharge (including greywater and blackwater) treated on site. Restores the water cycle."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"All water is sourced from natural precipitation (with on-site storage for periods of drought) and returned to regional surface or groundwater cycles after usage. Compromised waters from off site are cleaned or treated on site."
                }
            ],
            "barriers":[
                {"before":"Better","type":"Policy"}
            ]
        },{
            "tag": "Energy",
            "category": "Energy",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Energy from grid. No renewable energy requirements greater than code."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"2030 standards goal of efficiency, with some reduction goals for energy and carbon, some renewable energy. Solar PV ready."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"2030 standards of efficiency met, with ongoing monitoring to maintain goals. More than 50% renewable energy used."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"105% community energy needs met by community-generated renewable energy. No combustion-based energy. Storage for resiliency."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"All community operational energy generated from multiple diverse renewable and nonpolluting sources. Additional energy is stored on site with non-polluting technologies."
                }
            ],
            "barriers":[
                {"before":"Better","type":"Monetary"},
                {"before":"Living Community Principles","type":"Policy"}
            ]
        },{
            "tag": "Civilized Environment",
            "category": "Health + Happiness",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Community has no specific ways to foster social connection."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Community has some groups to promote social connections."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Community has some organization and collaborates on 1 or 2 of the Living Community listed programs."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Adequate staff positions to oversee community initiatives, such as: local food program, car and bike sharing, transit information center, community tool share, library, art and recreation programs, community center. Heritage preservation plan in place."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Shared tools, transportation, and financial and educational resources for residents. Resource use extended to other communities."
                }
            ],
            "barriers":[
                {"before":"Living Community Principles","type":"Monetary"}
            ]
        },{
            "tag": "Neighborhood Design",
            "category": "Health + Happiness",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Limited access to walking trails, parks, and recreation areas."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Some access to walking trails that connect to amenities, parks, and recreation areas."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Community has some organization and collaborates on 1 to 2 of the listed Living Community listed programs."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Dedicated walking trails, parks, plazas, squares, recreation areas. Health & Wellness Education Plan in place."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Community encourages humans and other living things to thrive. Clean air, pure water, nutritious food, and secure, comfortable shelter are provided, with opportunities for physical activity, recreation, creative endeavors, social engagement, and stress reduction."
                }
            ],
            "barriers":[
                {"before":"Living Community Principles","type":"Monetary"}
            ]
        },{
            "tag": "Biophilia",
            "category": "Health + Happiness",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Standard development. Access to parks by driving."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Development includes parks and has some landscaping."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Innovative landscaping using native plants, rain gardens, constructed wetlands, access to parks and waterfront, community gardening."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Innovative public realm designed to include elements that encourage human/nature connection. Biophilic Framework & Biophilic Plan in place."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Development expands and reinforces residents' sense of place and connection to the natural world. Natural and resource cycles are obvious and understood."
                }
            ],
            "barriers":[
                {"before":"Living Community Principles","type":"Monetary"}
            ]
        },{
            "tag": "Resilient Connections",
            "category": "Health + Happiness",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"No emergency plan or risk assessment conducted."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Emergency plan created and/or risks assessed."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Emergency plan includes access to nearby amenities and facilities. All community facilities have backup generators in case of emergency."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Resilience through infrastructure, community resources, and social interactions. Place for residents to congregate in case of emergency. All facilities have backup power sources. Disaster Response Plan in place. Sensitive infrastructure located out of the flood plain."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"All residents know and understand the emergency plan and their role in a response. Community is able to assist other communities in the event of an emergency."
                }
            ],
            "barriers":[
                {"before":"Living Community Principles","type":"Monetary"}
            ]
        },{
            "tag": "Material Plan",
            "category": "Materials",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Standard construction and material selection."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Some use of environmentally-preferable material selection standards, using information from manufacturers and labels."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Environmentally-preferable material selection standards used. Material plan made available to public."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Living Materials Implementation Plan in place. No Red List materials. Responsible industry and living economy sourcing--see Living Building Challenge."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"All materials used in the community are local, healthy, and renewable. Sourcing supports the local economy."
                }
            ],
            "barriers":[
                {"before":"Living Community Principles","type":"Monetary"},
                {"before":"Regenerative","type":"Policy"}
            ]
        },{
            "tag": "Embodied Energy & Carbon",
            "category": "Materials",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"No proxy standards for reducing CO2 in material selection or construction."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Some proxy standards for reducing CO2 in material selection and construction."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Material selection requirements and proxy standards for reducing CO2 in material selection and construction. Ongoing energy usage monitoring."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Accounting and offsetting for total construction embodied carbon impact."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Zero net fugitive carbon created in construction. Opportunities for additional carbon storage are included."
                }
            ],
            "barriers":[
                {"before":"Living Community Principles","type":"Monetary"},
                {"before":"Regenerative","type":"Monetary"}
            ]
        },{
            "tag": "Waste",
            "category": "Materials",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Standard construction material selection and waste collection."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Material selection for recycled/recyclable materials. Waste collection facilities and waste reduction standards in place."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Reduction in construction waste. Material selection for recycled/recyclable materials. Innovative waste collection facility with waste to energy."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Material Conservation Management Plan in place. Greater than 90% reduction in waste from construction, plan for disassembly and end-of-life of products. Collection of recyclables and compostable food scraps."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"All compostable and chemical material cycles are closed-loop. Community can process waste from other communities."
                }
            ],
            "barriers":[
                {"before":"Regenerative","type":"Monetary"}
            ]
        },{
            "tag": "Neighborhood & Access",
            "category": "Equity",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Not focused on pedestrian-oriented, human-scaled spaces. No effort to include existing community in programmed usage. Control of both interior and exterior spaces is exclusive. No attempt to integrate into language and landscape of neighborhood."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Some elements of human-scaled design.  Design acknowledges physical context of neighborhood. Beautified street frontage. Neighborhood support pledge is made."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Designed throughout to create human-scaled places. Promotes culture and interaction.  Design acknowledges physical, social, and cultural context of neighborhood and promotes interaction among cultures. Public approach to street front includes active communal spaces. Aversion to crime fostered through environmental design tactics. Community Benefits Agreement put in place."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"All interior spaces programmed to accommodate public need. Full ground-floor public accessibility throughout development. Communal space supports local functional needs of the built environment, focused on the immediate neighborhood. Community Benefits Agreement includes binding language creating community access.  Project is designed to create human-scaled places. Promotes culture and interaction. Meets Living Community Challenge specifications."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Civic and communal spaces actively contribute to equitable distribution of the functional needs of the built environment, as determined by those within the neighborhood as well as the extant community."
                }
            ],
            "barriers":[
                {"before":"Regenerative","type":"Monetary"}
            ]
        },{
            "tag": "Access to Nature",
            "category": "Equity",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Limited access to parks or green spaces, minimal landscaping, no daylighting requirements for buildings.  Use delimited by hours of operation or lack of amenities—restrooms, water fountains, benches."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Access to parks, promotes sense of place, some daylighting strategies for buildings.  Promotes community coherence. Amenities encourage use for all ages and those with various needs."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Landscaping is innovative, promotes sense of place, includes access to parks, community agriculture and daylighting of buildings.  Daylighting strategies for buildings actively involve neighborhood collaboration in design and use strategies."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"All transportation, roads, and nonbuilding infrastructure must be modes universally accessible to the public. Public realm enhanced through design measures. Designs meet ADA and ABA (Architectural Barriers Act) requirements. Provides access to, and will not diminish the quality of, fresh air, sunlight, and natural waterways. Addresses any noise audible to the public. Sunlight may not be blocked above a maximum height (based on density). Provides access to and along natural waterways.  Access to parks promotes sense of place and is supported by strong community-driven programming. Educational internships and entry-level jobs support community youth engagement in public space use and maintenance."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Park spaces continually evolve with public participation."
                }
            ],
            "barriers":[
                {"before":"Regenerative","type":"Monetary"}
            ]
        },{
            "tag": "Access to Community Services",
            "category": "Equity",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Travel to service and community centers dependent on vehicles.  No community outreach or engagement."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Some services and community centers accessible by bike or walking.  Community services access included in basic scope of design with some programming and predesign services. Elevates the baseline requirements for community engagement, as determined by local governing body; engagement is in-depth."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Diversity of services available in community and easily accessible by different modes of transportation.  Contracted consultant and/or staff time allocated to community engagement and report-back. Opportunity provided for community to intervene in the site prior to construction. Community Benefits Agreement put in place."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Provides access to basic services and amenities—places to shop, congregate, work, and learn—within 1/2 mile directly, or within 2 miles if direct public transportation accessible within 1/4 mile. Community must have a public transit network (range and capacity based on density of community).  Dedicated staff person allocated to robust community organizing and report-back within the design and construction process. Collaboration with community artists and organizers to creatively bring the project to public consciousness. Addresses issues of the neighborhood during the design process."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Extends scope of services to include a robust predesign and community organizing process. Hires community Design Advocates (community advocates/organizers) to support the civic, cultural, and communal aspects to be embedded in the design concept and future programming of the development. Utilize small-scale, low barrier-to-entry design interventions at the front end to test and build viable accessibility. Actively advocate for policies and procedures that directly benefit current neighborhood."
                }
            ],
            "barriers":[
                {"before":"Living Community Principles","type":"Monetary"}
            ]
        },{
            "tag": "Investment",
            "category": "Equity",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"No philanthropic contribution provided to benefit the project community.  Design process utilizes policies and procedures to advantage the project without regard for negative consequences created for the larger neighborhood. Seeks a purely financial return on investment."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Some philanthropic contributions provided to benefit the project community.  Design positions some spaces as communal spaces. Addresses the historical conditions that allowed the development to exist; considers the existing building as well as the larger context as a necessary historical point of reference. Project outcomes documented and made publicly accessible."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Project continuously provides philanthropic contributions to benefit the project community.  Project humanizes community members by positioning some spaces as civic, cultural, and/or communal. Project outcomes documented in a manner that can be used to further the future positive development of the community."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"For every dollar of the project cost, half a cent must be donated to a charity.  Socio-Cultural Feasibility Study used to determine potential project impact."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Humanizes community members by positioning all spaces as civic, cultural, and communal spaces. Participates in % for art/civic design programs in the city/town; if such programs do not exist, uses the development as a means to support the creation of one. Forwards a civic design concept that supports the long-term benefit of the community through the sustained economic inclusion of local community groups and businesses. Dynamically adjusts to the outcomes of the project and respective impacts."
                }
            ],
            "barriers":[
                {"before":"Regenerative","type":"Monetary"}
            ]
        },{
            "tag": "Just Organizations",
            "category": "Equity",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Entities involved have standard contracts and legal arrangements."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Entities involved use hold-harmless for purposes of project development."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Entities involved use an Integrated Design Process, with a relational contract, hold-harmless agreement, and incentive pool. All entities pay an appropriate living wage."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"At least two project team organizations have JUST label, and advocate for others to obtain a JUST label. Corporate transparency of entities involved."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Organizational and financial structures of all governmental, developmental, educational, and institutional organizations are transparent, inclusive, and representative."
                }
            ],
            "barriers":[
                {"before":"Regenerative","type":"Monetary"}
            ]
        },{
            "tag": "Beauty and Spirit",
            "category": "Beauty",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"Few public art pieces are commissioned by developers for inclusion in the project."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Art, architecture, and indoor environmental quality (IEQ) factors are considered."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Art, architecture, and IEQ factors are implemented."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Public art is incorporated into the community (frequency and scale based on population). Aspects of the design are created solely for human delight and the celebration of culture, spirit, and place."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"Community members are engaged in shaping the built form. Sense of purpose and connection to society, nature, spirit, and place is reinforced by the built and managed realm. Artistic and creative works reinforce current and historical culture."
                }
            ],
            "barriers":[
                {"before":"Regenerative","type":"Monetary"}
            ]
        },{
            "tag": "Inspiration",
            "category": "Beauty",
            "data":[
                {
                    "score":"Standard",
                    "value":0,
                    "text":"No education or attention is placed on the development's attributes."
                },{
                    "score":"Good",
                    "value":1,
                    "text":"Some education on the development's attributes. Some opportunities for community events focused on 21st Century Development aspects of project."
                },{
                    "score":"Better",
                    "value":2,
                    "text":"Education on sustainable practices provided. Opportunities created for community engagement around 21st Century Development concepts. Unit metering implemented."
                },{
                    "score":"Living Community Principles",
                    "value":3,
                    "text":"Educational materials and electronic communications created and maintained. Informational and interpretive signage provided on buildings, landscaping, and infrastructure. Case study created to inspire others. Operation & maintenance manuals provided."
                },{
                    "score":"Regenerative",
                    "value":4,
                    "text":"21st Century Development literacy is built into project. Community continually engaged, with ongoing monitoring and continual improvements communicated. Ecosystem and material cycles are obvious and understood."
                }
            ],
            "barriers":[]
        }
    ],
    "developments":{
        "This Project":{
            "name":"This Project",
            "description":"",
            "location":"",
            "scores":{
                "Limits to Growth":{"score":"Standard","value":0,"category":"Place"},
                "Food":{"score":"Standard","value":0,"category":"Place"},
                "Habitat":{"score":"Standard","value":0,"category":"Place"},
                "Transportation":{"score":"Standard","value":0,"category":"Place"},
                "Water":{"score":"Standard","value":0,"category":"Water"},
                "Energy":{"score":"Standard","value":0,"category":"Energy"},
                "Civilized Environment":{"score":"Standard","value":0,"category":"Health + Happiness"},
                "Neighborhood Design":{"score":"Standard","value":0,"category":"Health + Happiness"},
                "Biophilia":{"score":"Standard","value":0,"category":"Health + Happiness"},
                "Resilient Connections":{"score":"Standard","value":0,"category":"Health + Happiness"},
                "Material Plan":{"score":"Standard","value":0,"category":"Materials"},
                "Embodied Energy & Carbon":{"score":"Standard","value":0,"category":"Materials"},
                "Waste":{"score":"Standard","value":0,"category":"Materials"},
                "Neighborhood & Access":{"score":"Standard","value":0,"category":"Equity"},
                "Access to Nature":{"score":"Standard","value":0,"category":"Equity"},
                "Access to Community Services":{"score":"Standard","value":0,"category":"Equity"},
                "Investment":{"score":"Standard","value":0,"category":"Equity"},
                "Just Organizations":{"score":"Standard","value":0,"category":"Equity"},
                "Beauty & Spirit":{"score":"Standard","value":0,"category":"Beauty"},
                "Inspiration":{"score":"Standard","value":0,"category":"Beauty"}
            }
        },"Abundance":{
            "name":"Abundance EcoVillage",
            "description":"",
            "location":"United States",
            "scores":{
                "Limits to Growth":{"score":"Good","value":1,"category":"Place"},
                "Food":{"score":"Better","value":2,"category":"Place"},
                "Habitat":{"score":"Better","value":2,"category":"Place"},
                "Transportation":{"score":"Good","value":1,"category":"Place"},
                "Water":{"score":"Good","value":1,"category":"Water"},
                "Energy":{"score":"Good","value":1,"category":"Energy"},
                "Civilized Environment":{"score":"Better","value":2,"category":"Health + Happiness"},
                "Neighborhood Design":{"score":"Good","value":1,"category":"Health + Happiness"},
                "Biophilia":{"score":"Better","value":2,"category":"Health + Happiness"},
                "Resilient Connections":{"score":"Standard","value":0,"category":"Health + Happiness"},
                "Material Plan":{"score":"Good","value":1,"category":"Materials"},
                "Embodied Energy & Carbon":{"score":"Good","value":1,"category":"Materials"},
                "Waste":{"score":"Better","value":2,"category":"Materials"},
                "Neighborhood & Access":{"score":"Better","value":2,"category":"Equity"},
                "Access to Nature":{"score":"Better","value":2,"category":"Equity"},
                "Access to Community Services":{"score":"Good","value":1,"category":"Equity"},
                "Investment":{"score":"Standard","value":0,"category":"Equity"},
                "Inspiration":{"score":"Better","value":2,"category":"Beauty"}
            }
        },"Almerre":{
            "name":"Almere New City",
            "description":"",
            "location":"International",
            "scores":{
                "Limits to Growth":{"score":"Better","value":2,"category":"Place"},
                "Food":{"score":"Better","value":2,"category":"Place"},
                "Habitat":{"score":"Good","value":1,"category":"Place"},
                "Transportation":{"score":"Better","value":2,"category":"Place"},
                "Water":{"score":"Good","value":1,"category":"Water"},
                "Energy":{"score":"Good","value":1,"category":"Energy"},
                "Civilized Environment":{"score":"Good","value":1,"category":"Health + Happiness"},
                "Neighborhood Design":{"score":"Better","value":2,"category":"Health + Happiness"},
                "Biophilia":{"score":"Good","value":1,"category":"Health + Happiness"},
                "Resilient Connections":{"score":"Standard","value":0,"category":"Health + Happiness"},
                "Material Plan":{"score":"Standard","value":0,"category":"Materials"},
                "Embodied Energy & Carbon":{"score":"Standard","value":0,"category":"Materials"},
                "Waste":{"score":"Standard","value":0,"category":"Materials"},
                "Neighborhood & Access":{"score":"Better","value":2,"category":"Equity"},
                "Access to Nature":{"score":"Good","value":1,"category":"Equity"},
                "Access to Community Services":{"score":"Better","value":2,"category":"Equity"},
                "Investment":{"score":"Standard","value":0,"category":"Equity"},
                "Inspiration":{"score":"Standard","value":0,"category":"Beauty"}
            }
        }
    }
}