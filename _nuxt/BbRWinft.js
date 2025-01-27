import{a9 as f}from"./JACn959u.js";const y="40fnhjbe",h="production",_="2024-01-29",$=f({projectId:y,dataset:h,useCdn:!1,apiVersion:_});function S(){return`
    {
      title,
      slug,
      description,
      keywords,
      "image": image.asset->{
        url,
        "width": metadata.dimensions.width,
        "height": metadata.dimensions.height,
      }
    }
  `}function b(){return`
  *[_type =='settings'][0] {
    "address": footer.address,
    "disclaimer": footer.disclaimer,
    "footerItems": footer.footerItems[] {
      title,
      "pages": pages[] {
        _type == 'reference' => {
          "type": 'internal',
          "title": @->.pageSetup.title,
          "slug": @->.pageSetup.slug.current
        },
        _type == 'externalLink' => {
          "type": 'external',
          title,
          "slug": url
        },
      },
    },
    "legalItems": *[_type =='settings'][0].legalItems[]-> {
      "title": pageSetup.title,
      "slug": pageSetup.slug.current
    },
    legalText,
    socialNetworks
  }
  `}function e(){return`
        {
            alt,
            hotspot,
            asset,
            ...asset->{
                url,
                "width": metadata.dimensions.width,
                "height": metadata.dimensions.height,
                extension,
            }
        }
    `}function r(){return`
        {
            ...sources[0].video.asset->{
                "mediaType": contentType,
                "width": dimensions.width,
                "height": dimensions.height,
            },
            sources[]{
                breakpoint,
                ...video.asset->{
                    "url": fileURL,
                    "width": dimensions.width,
                    "height": dimensions.height,
                    "type": contentType,
                    "duration": duration
                }
            }
        }
    `}function t(){return`
  {
    label,
    type,
    section,
    'href': url,
    'slug': pageReference->.pageSetup.slug.current,

    type == 'openContactForm' => {
			"slug": openContactForm->slug.current,
		},
  }
  `}function a(){return`
  {
    "file": file.asset->.url,
    fallbackImage {
      ...${e()}
    }
  }
  `}function p(){return`
  {
    title,
    image {
      ...${e()}
    },
    list[] {
      title,
      animation {
        ...${a()}
      },
      image {
        ...${e()}
      }
    }
  }
  `}function d(){return`
    {
      _type == "internalLink" => {
        "href": false,

        "to": @.href-> {
          _type == "blog" => {
            "to": "/news/blog/" + pageSetup.slug.current,
          },
          _type == "pressReleases" => {
            "to": "/news/press-releases/" + pageSetup.slug.current,
          },
          _type == "legal" => {
            "to": "/legal/" + pageSetup.slug.current,
          },
          _type == "careers" => {
            "to": "/" + pageSetup.slug.current,
          }
        }.to,
      }
    }
  `}function j(){return`
  *[_type == 'awards'] {
    award,
    year,
    organization,
    "image": image {
      ...${e()}
    }
  }
  `}function g(){return`
  {
    title,
    description,
    animation {
      ...${a()}
    },
  }
  `}const T={homeHeader:{projection:function(){return`
			{
        title,
				description,
        video {
					intro {
						...${r()}
					},
					full {
						...${r()}
					},
					mobile {
						...${r()}
					},
					fallbackImage {
						...${e()}
					}
				},
      }
      `}},homeStatistics:{projection:function(){return`
			{
				list[]-> {
					...${g()}
				}
			}`}},vectors:{projection:function(){return`
			{
				list[] {
					title,
					description,
					image {
						...${e()}
					},
					animation {
						...${a()}
					},
					content[] {
						...,
						_type == "cta" => {
							...${t()}
						},
						_type == 'cardList' => {
							_type,
							list[] {
								title,
								icon {
									...${e()}
								}
							}
						},
						_type == 'relatedNews' => {
							list[]-> {
								"type": _type,
								"slug": pageSetup.slug.current,
								"title": header.title,
								"description": header.summary,
								"category": header.category->name,
								"date": header.date,
							}
						}
					}
				}
			}
			`}},globalMarket:{projection:function(){return`
			{
				video {
					intro {
						...${r()}
					},
					loop {
						...${r()}
					}
				},
				title,
				list[] {
					title,
					icon,
					list[],
					backgroundType,
					background {
						...${r()}
					}
				}
			}
			`}},reasons:{projection:function(){return`
			{
				list[] {
					title,
					description,
					video {
						...${r()}
					}
				}
			} 
			`}},studioHighlights:{projection:function(){return`
			{
				title,
				video {
					...${r()}
				},
				cta {
					...${t()}
				},
				studio {
					title,
					"cta": callToAction {
						...${t()}
					},
					list[] {
						title,
						animation {
							...${a()}
						},
					},
					for[]
				},
			} 
			`}},homeExchanges:{projection:function(){return`
			{
				...
			} 
			`}},inTheNews:{projection:function(){return`
			{
				title,
				"selectedList": [...selectedList->, ...*[_type == "inTheNews"] | order(date desc)][0..4]{
					title,
					publicationEntity,
					date,
					link,
				},
			}
			`}}},w={aboutHeader:{projection:function(){return`
			{
        phrases,
        video{
          teaser {
						...${r()}
					},
					full {
						...${r()}
					}
        }
      }`},transformer:function(i){return{...i,hello:"world"}}},statistics:{projection:function(){return`
			{
				title,
				list[]-> {
					...${g()}
				}
			}`}},leadershipQuotes:{projection:function(){return`
			{
				quotesSlider[] {
					quote,
					nameAndRole,
					background {
						...${e()}
					}
				}
			}`}},team:{projection:function(){return`
			{
				title,
				description,
				members[]-> {
					"slug": pageSetup.slug.current,
					"header": teamHeader {
						name,
						role,
						"photo": photo{
							...${e()}
						}
					}
				}
			}`}},journey:{projection:function(){return`
			{
				...,
				"events": events[] {
					date,
					type,
					"image": image {
						...${e()}
					},
					description[] {
						...,
						_type == 'block' => {
							...,
							markDefs[]{
								...,
								...${d()}
							}
						},
						_type == "figureNews" => {
							"children": null,
							...${e()}
						},
						_type == "figureSide" => {
							"children": null,
							...${e()}
						}
					},		
				}
			}`}},culture:{projection:function(){return`
			{
				title,
				"callToAction": callToAction {
					...${t()}
				},
				"photos": photos[] {
					...${e()}
				}
			}`}},aboutNews:{projection:function(){return`
				{
					title,
					"list": list[]-> {
						_type == 'blog' => {
							"title": header.title,
							"category":{
								"name": header.category->name,
								"colorSlug": header.category->colorSlug,
							},
							"date": header.date,
							"slug": pageSetup.slug.current,
							"thumbnail": pageSetup.image {
								...${e()}
							}
						},
						_type == 'pressReleases' => {
							"type": _type,

							"slug":  pageSetup.slug.current,
							"title":  header.title,
							"category":{
								"name": "Press Release",
								"colorSlug": "press-release",
							},
							"date": header.date,
						},
					},
					"postsCount": count(*[_type == "blog"]),
				}
			`}}},L={careersHeader:{projection:function(){return`
      {
			  title,
        description,
        "callToAction": callToAction {
					...${t()}
				},
        photosLoop[] {
          "type": _type,
          _type == "photo" => {
            ...${e()}
          },
          _type == "statistic" => {
            title,
            description,
          }
        }
      }`}},values:{projection:function(){return`
       {
        title,
        description,
        "list": list[] {
          ...,
          title,
          description,
          "fallbackImage": fallbackImage {
            ...${e()}
          }
        }
       }
      `}},careersNews:{projection:function(){return`
	    {
	      	title,
        	"postsCount": count(*[_type == "blog"]),

			"list": list[]-> {
				_type == 'blog' => {
					"title": header.title,
					"category":{
						"name": header.category->name,
						"colorSlug": header.category->colorSlug,
					},
					"date": header.date,
					"slug": pageSetup.slug.current,
					"thumbnail": pageSetup.image {
						...${e()}
					}
				},
				_type == 'pressReleases' => {
					"type": _type,

					"slug":  pageSetup.slug.current,
					"title":  header.title,
					"category":{
						"name": "Press Release",
						"colorSlug": "press-release",
					},
					"date": header.date,
				},
			},
	    }`}},careersQuotes:{projection:function(){return`
			{
				quotesSlider[] {
					quote,
					nameAndRole,
					background {
						...${e()}
					}
				}
			}`}},careersAwards:{projection:function(){return`
        {
          title,
          "awardsList":  ${j()}
        }
      `}},workplaces:{projection:function(){return`
			{
				title,
				locations,
				employees
			}`}},testimonials:{projection:function(){return`
      {
        title,
        description,
        "list": list[]-> {
          testimonial,
          name,
          role,
          "photo": photo {
            ...${e()}
          }
        }
      }`}},jobOffers:{projection:function(){return`
			{
				title,
				description,
				downloadButton{
					label,
					"href": file.asset->.url
				},
			}`}}},k={teamHeader:{projection:function(){return`
      {
        name,
        role,
        photo {
          ...${e()}
        }
      }`}},teamContent:{projection:function(){return`{
				biography,
				experience
			}`}}};function u(){return`
		title,
		"asset": asset.asset->.url,
		"thumbnail": image {
			...${e()}
		}
	`}const C={newsHeader:{projection:function(){return`
			{
				title,
				"featuredArticle": featuredArticle->{
					"slug": pageSetup.slug.current,
					"image": pageSetup.image {
						...${e()}
					},
					"title": header.title,
					"description": header.summary,
					"category":{
						"name": header.category->name,
						"colorSlug": header.category->colorSlug,
					},
					"date": header.date,
					"readingTime": round(length(pt::text(content.body)) / 5 / 180 ),
				},
				"featuredList": featuredList[]->{
					_type == 'blog' => {
						"slug": pageSetup.slug.current,
						"title":  header.title,
						"description": header.summary,
						"type": _type,
						"date": header.date,
						"readingTime": round(length(pt::text(content.body)) / 5 / 180 ),
					},
					_type == 'pressReleases' => {
						"slug":  pageSetup.slug.current,
						"title":  header.title,
						"type": _type,
						"date": header.date,
						"readingTime": round(length(pt::text(content.body)) / 5 / 180 ),
					},
					_type == 'conferences' => {
						"slug": link,
						"title": title,
						"type": _type,
						"dateStart": dateStart,
						"dateEnd": dateEnd,
					},
					_type == 'mediaAssets' => {
						"slug": asset.asset->.url,
						"title": title,
						"type": _type,
					},
					_type == 'whitepapers' => {
						"slug": asset.asset->.url,
						"title": title,
						"description": description,
						"type": _type,
						"date": date,
					},
				}
			}`}},navigation:{projection:function(){return`
			{
				types
			}
		`}},blog:{projection:function(){return`
			{
				title,
				"selectedList": [...selectedList->, ...*[_type == "blog"]| order(header.date desc)][0..2]{
					"title": header.title,
					"thumbnail": pageSetup.image {
						...${e()}
					},
					"category":{
						"name": header.category->name,
						"colorSlug": header.category->colorSlug,
					},
					"date": header.date,     
					"slug": pageSetup.slug.current,      
					"readingTime": round(length(pt::text(content.body)) / 5 / 180 ),
				},

				"postsCount": count(*[_type == "blog"]),

				"page": page{
					"title": title,
					"selectedList": *[_type == "blog"][] | order(header.date desc){
						"slug": pageSetup.slug.current,
						"thumbnail": pageSetup.image {
							...${e()}
						},
						"title": header.title,
						"description": header.summary,
						"category":{
							"name": header.category->name,
							"colorSlug": header.category->colorSlug,
						},
						"date": header.date,
						"readingTime": round(length(pt::text(content.body)) / 5 / 180 ),
					},
					"blogCategories": *[_type == "blogCategories"][].name
				}

			}
		`},transformer:function(i){return{...i}}},pressReleases:{projection:function(){return`
				{
				title,
				"selectedList": [...selectedList->, ...*[_type == "pressReleases"]| order(header.date desc)][0..2]{
					"title": header.title,
					"date": header.date,     
					"slug": "/news/press-releases/" + pageSetup.slug.current,      
				},
				"contactCta": contactCTA{
					leftLabel,
				},

				"postsCount": count(*[_type == "pressReleases"]),

				"page": page{
					"title": title,
					"selectedList": *[_type == "pressReleases"][] | order(header.date desc){
						"title": header.title,
						"date": header.date,     
						"slug": "/news/press-releases/" + pageSetup.slug.current,
					},
					"contactCta": contactCTA{
						leftLabel,
					},
				}
			}
		`}},mediaAssets:{projection:function(){return`
				{
				title,
				"selectedList": coalesce(
					selectedList[]->{...${u()}},
					*[_type == "mediaAssets"]| order(_createdAt desc)[0..2]{...${u()}},
				),

				"downloadKit": downloadKit.asset->.url,

				"contactCta":contactCTA{
					"text": text[]{
						...,
						_type == "block" => {
							...,
							markDefs[]{
								...,
								_type == "internalLink" => {
									"href": false,
									"to": "/legal/" + @.href->pageSetup.slug.current,
								},
							}
						},
					},
					leftLabel,
				},

				"postsCount": count(*[_type == "mediaAssets"]),

				"page": {
					"title": page.title,
					"selectedList": *[_type == "mediaAssets"][] | order(header.date desc){
						title,
						"asset": asset.asset->.url,
							"thumbnail": image {
							...${e()}
						},
					},

					"downloadKit": downloadKit.asset->.url,

					"contactCta": page.contactCTA{
						"text": text[]{
							...,
							_type == "block" => {
								...,
								markDefs[]{
									...,
									_type == "internalLink" => {
										"href": false,
										"to": "/legal/" + @.href->pageSetup.slug.current,
									},
								}
							},
						},
						leftLabel,
					},
				}
			}
	    `}},whitepapers:{projection:function(){return`
			{
				title,
				"selectedList": [...selectedList->, ...*[_type == "whitepapers"]| order(_createdAt desc)][0..2]{
					title,
					date,
					description,
					"slug": asset.asset->.url,
					"thumbnail": image {
						...${e()}
					},
				},

				"postsCount": count(*[_type == "whitepapers"]),

				"page": page{
					"title": title,
					"selectedList": *[_type == "whitepapers"][] | order(date desc){
						title,
						date,
						description,
						"slug": asset.asset->.url,
						"thumbnail": image {
							...${e()}
						},
					},
				}
			}
		`}},conferences:{projection:function(){return`
			{
				title,
				noConferenceMessage,
				"conferences": [...selectedList->, ...*[_type == "conferences"]| order(_createdAt desc)][0..5]{
					title,
					link,
					dateStart,
					dateEnd,
					"location": location->name
				},

				"page": page{
					title,
					noConferenceMessage,
					"conferences": *[_type == "conferences"][] | order(header.date desc){
						title,
						link,
						dateStart,
						dateEnd,
						"location": location->name
					},
				}
			}
		`}},spotifyPodcast:{projection:function(){return`
			{
				...,
				"page": page{
					title,
					"selectedList": *[_type == "spotify"][] | order(spotifyContent.date desc) {
						"episodeUrl": spotifyContent.episodeUrl,
						"title": spotifyContent.title,
						"episode": spotifyContent.episode,
						"duration": spotifyContent.duration,
						"date": spotifyContent.date,
						"thumbnail": pageSetup.image {
							...${e()}
						},
					},
				}
			}
		`}}},v={header:{projection:function(){return`
      {
	      ...,
	      author-> {
	        ...,
	        photo {
	          ...${e()}
	        }
	      },
	      category-> {
	        name,
	        colorSlug
	      }
      }
	    `},transformer:function(i){return{...i,hello:"world"}}},content:{projection:function(){return`
			{
				"type": ^._type,
				"readingTime": round(length(pt::text(body)) / 5 / 180 ),
				body[] {
					...,
					_type == 'block' => {
						...,
						style == null => {
							"style": 'normal'
						},
						markDefs[]{
							...,
							...${d()}
						}
					},
					_type == "figureNews" => {
						"children": null,
						...${e()}
					},
					_type == "figureSide" => {
						"children": null,
						...${e()}
					}
				},

				references,
				"pressReleasesFootNote": *[_type == 'news'][0].articlesSubtext.pressReleasesFootNote,
				"legalText": *[_type == 'news'][0].articlesSubtext.legalText,
				"form":	*[_type == "forms" && slug.current == "contact"][0]{
					title,
					"slug": slug.current,
					"fields":fields[]{
						name,
						label,
						required,
						errorMessage,
						_type,
					}
				}
			}
	    `}}},A={studioHeader:{projection:function(){return`
      {
        title,
        "cta": callToAction {
          ...${t()}
        },
        animation {
          "file": file.asset->.url,
          fallbackImage {
            ...${e()}
          }
        }
      }
      `}},api:{projection:function(){return`
      {
        title,
        description,
        "cta": callToAction {
          ...${t()}
        },
        animation {
          ...${a()}
        },
      }
      `}},tools:{projection:function(){return`
      {
        title,
        list[] {
          title,
          description,
          animation {
            ...${a()}
          },
          image {
            ...${e()}
          },
          content[] {
						...,
						_type == 'list' => {
							_type,
							list[] {
								title,
								icon {
									...${e()}
								},
                sublist[]
							}
						},
					}
        }
      }
      `}},highlights:{projection:function(){return`
      {
        animation {
          ...${a()}
        },
        list[] {
          title,
          image {
            ...${e()}
          }
        }
      }
      `}},features:{projection:function(){return`
      {
        title,
        list[] {
          name,
          icon,
          title,
          description,
          image {
            ...${e()}
          }
        }
      }
      `}},demoVideo:{projection:function(){return`
      {
        video {
          ...${r()}
        }
      }
      `}},numbers:{projection:function(){return`
      {
        title,
        description,
        list[] {
          title,
          description
        }
      }
      `}},discover:{projection:function(){return`
      {
        title,
        description,
        "cta": callToAction {
          ...${t()}
        }
      }
      `}},infrastructureOverview:{projection:function(){return`
			{
        title,
        scrollingGroupList[] {
          ...${p()}
        }
      }`}}},x={contactsContent:{projection:function(){return`
			{
				title,
				description,
				
				
				"availableForms": *[_type == "forms" && active == true][]{
					title,
					destinationEmail,
					"slug": slug.current,
					"fields":fields[]{
						name,
						label,
						required,
						errorMessage,
						_type,
					}
				},
				"blogPosts": *[_type == "blog"]| order(header.date desc)[0..2]{
					"title": header.title,
					"thumbnail": pageSetup.image {
						...${e()}
					},
					"category":{
						"name": header.category->name,
						"colorSlug": header.category->colorSlug,
					},
					"date": header.date,     
					"slug": pageSetup.slug.current,      
					"readingTime": round(length(pt::text(content.body)) / 5 / 180 ),
				},
			}`}},contactsForms:{projection:function(){return`
			{
				formsList[]->
			}`}}},R={legalContent:{projection:function(){return`
			{
				title,
				"body": body[] {
					...,
					 _type == "block" => {
						...,
						markDefs[]{
							...,
							_type == "internalLink" => {
								"href": false,
								"to": "/legal/" + @.href->pageSetup.slug.current,
							},
						}
					},
					_type == "figureLegal" => {
						"children": null,
						alt,
						caption,
						source,
						...asset->{
							url,
							"width": metadata.dimensions.width,
							"height": metadata.dimensions.height,
						}
					},
					_type == "pagesHub" => {
						"items": items[]->{
							"slug": "/legal/" + pageSetup.slug.current,
							"title": legalContent.title,
							_updatedAt,
						}
					},
					_type == "documentation" => {
						title,
						"items": items[]{

							_type == "page" => {...} -> {
								"slug": "/legal/" + pageSetup.slug.current,
								"title": legalContent.title,
							},
						
							_type == "pdf" => {
								"slug" : asset->url,
								"title" : asset->originalFilename
							}
						}
					},
					_type == "pdfList" => {
						title,
						"items": items[]{
							_type == "pdf" => {
								"slug" : asset->url,
								"title" : asset->originalFilename
							}
						}
					}
				},
			}`}}},I={primeBrokerageHeader:{projection:function(){return`
			{
				title,
				description,
				tags[]{
	              label,
	              text
	            },
	  		}`}},primeBrokerageClients:{projection:function(){return`
			{
				title,
				clientsTitle,
				clients[] {
					"icon": icon {
						...${e()}
					},
					text
				},
				assetClassesTitle,
				assetClasses[] {
					"icon": icon {
						...${e()}
					},
					text
				}
			}`}},primeBrokerageServices:{projection:function(){return`
			{
				servicesList[]{
					title,
					upperTitle,
					description,
					buttonLabel,
					image {
						...${e()}
					},
					content[] {
						...,
						_type == "cta" => {
							...${t()}
						},
						_type == 'cardList' => {
							_type,
							list[] {
								title,
								icon {
									...${e()}
								}
							}
						},
						_type == 'relatedNews' => {
							list[]-> {
								"type": _type,
								"slug": pageSetup.slug.current,
								"title": header.title,
								"description": header.summary,
								"category": header.category->name,
								"date": header.date,
							}
						}
					},
					"pageReference": pageReference->pageSetup.slug.current,
				},

			}`}},primeBrokerageWhiteGlove:{projection:function(){return`
			{
				title,
				description,
				cards[]{
					"icon": icon {
						...${e()}
					},
					title,
					description,
					callToAction{
						label,
						"openContactForm": openContactForm->slug.current
					}
				}
			}`}}},N={clearingHeader:{projection:function(){return`
			{
				title,
				description,
				lowerText,
				exchanges,
	  		}`}},clearingMarketSolutions:{projection:function(){return`
			{
				title,
				solutions[]{
					text,
					icon {
						...${e()}
					},
				}
			}`}},clearingInfrastructureOverview:{projection:function(){return`
			{
				scrollingGroupList[] {
				...${p()}
				}
			}`}},clearingNews:{projection:function(){return`
			{
				title,
				"postsCount": count(*[_type == "blog"]),
				"list": list[]-> {
					_type == 'blog' => {
						"title": header.title,
						"category":{
							"name": header.category->name,
							"colorSlug": header.category->colorSlug,
						},
						"date": header.date,
						"slug": pageSetup.slug.current,
						"thumbnail": pageSetup.image {
							...${e()}
						}
					},
					_type == 'pressReleases' => {
						"type": _type,

						"slug":  pageSetup.slug.current,
						"title":  header.title,
						"category":{
							"name": "Press Release",
							"colorSlug": "press-release",
						},
						"date": header.date,
					},
				},
			}`}}},H={investmentHeader:{projection:function(){return`
			{
				title,
				description,
				lowerTagline,
				"callToAction": callToAction {
					...${t()}
				},
	  		}`}},investmentIndustries:{projection:function(){return`
			{
				industriesList[]{
					title,
					image {
						...${e()}
					},
				},
			}`}},investmentLeadership:{projection:function(){return`
			{
				title,
				description,
				members[]-> {
					"slug": pageSetup.slug.current,
					"header": teamHeader {
						name,
						role,
						"photo": photo {
							...${e()}
						}
					},
					"teamContent": teamContent {
						linkedin
					}
				}
			}`}},investmentServices:{projection:function(){return`
			{
				title,
				description,
				services[] {
					title,
					description,
					animation {
						"file": file.asset->.url,
						fallbackImage {
							...${e()}
						}
					}
				}
			}`}},investmentTransactions:{projection:function(){return`
			{
				title,
				cards[]{
					link,
					amount,
					title,
					role,
					date,
					image {
						...${e()}
					},
				}
			}`}}},F={releasesHeader:{projection:function(){return`
      {
        title,
        description       
      }
      `}},releasesList:{projection:function(){return`
			{
        list[]{
          release,
          date,
          "content": content[] {
            ...,
            _type == "block" => {
              ...,
              markDefs[]{
                ...,
                _type == "internalLink" => {
                  "href": false,
                  "to": "/legal/" + @.href->pageSetup.slug.current,
                },
              }
            },
            _type == "figureReleases" => {
              "children": null,
              alt,
              caption,
              source,
              ...asset->{
                url,
                "width": metadata.dimensions.width,
                "height": metadata.dimensions.height,
              }
            },
          },
        },
			}`}}},P={spotifyContent:{projection:function(){return`
			{
				...,
			}
		`}}},E={olympusHeader:{projection:function(){return`
			{
				title,
				description,
				callToAction {
					...${t()}
				},
	  		}`}},olympusRequestsSpeed:{projection:function(){return`
			{
				title,
				description,
				tags[]{
	              label,
	              text
	            },
	  		}`}},olympusSecurities:{projection:function(){return`
			{
				title,
				callToAction {
					...${t()}
				},
				tags[]{
	              text
	            },
			}`}},olympusFeatures:{projection:function(){return`
			{
				title,
				description,
				servicesList[]{
					title,
					upperTitle,
					description,
					image {
						...${e()}
					},
					"pageReference": pageReference->pageSetup.slug.current,
				},

			}`}},olympusCtaSection:{projection:function(){return`
			{
				title,
				callToAction {
					...${t()}
				},
			}`}},olympusNews:{projection:function(){return`
			{
				title,
				"postsCount": count(*[_type == "blog"]),
				"list": list[]-> {
					_type == 'blog' => {
						"title": header.title,
						"category":{
							"name": header.category->name,
							"colorSlug": header.category->colorSlug,
						},
						"date": header.date,
						"slug": pageSetup.slug.current,
						"thumbnail": pageSetup.image {
							...${e()}
						}
					},
					_type == 'pressReleases' => {
						"type": _type,

						"slug":  pageSetup.slug.current,
						"title":  header.title,
						"category":{
							"name": "Press Release",
							"colorSlug": "press-release",
						},
						"date": header.date,
					},
				},
			}`}}},q={activeTraderHeader:{projection:function(){return`
			{
				title,
				description,
				callToAction {
					...${t()}
				},
				callToActionExtra {
					...${t()}
				},
				animation {
					"file": file.asset->.url,
					fallbackImage {
						...${e()}
					}
				}
	  		}`}},activeTraderFeatures:{projection:function(){return`
			{
				title,
				featuresList[]{
	            	title,
	            	description,
					"icon": icon {
						...${e()}
					},
	            },
	  		}`}},activeTraderSuite:{projection:function(){return`
			{
				title,
				upperTitle,
				assetsList[]{
					text,
					description[],
					"icon": icon {
						...${e()}
					},
	            },

				clientsList[]{
					text,
					description[],
					"icon": icon {
						...${e()}
					},
	            },

				servicesList[]{
					text,
					description[],
					"icon": icon {
						...${e()}
					},
	            },
			}`}},activeTraderHighlights:{projection:function(){return`
			{
				title,
				list[]{
					title,
					description,
					image {
						...${e()}
					},
					content[] {
						...,
						_type == "cta" => {
							...${t()}
						},
					 _type == 'list' => {
							"_type": "cardList",
							list[] {
								title,
								icon {
									...${e()}
								}
							}
						},
						_type == 'relatedNews' => {
							list[]-> {
								"type": _type,
								"slug": pageSetup.slug.current,
								"title": header.title,
								"description": header.summary,
								"category": header.category->name,
								"date": header.date,
							}
						}
					},
					"pageReference": pageReference->pageSetup.slug.current,
				},
			}`}},activeTraderPricing:{projection:function(){return`
			{
				title,
				description,
				pricingItems[]{
					title,
					description,
					"icon": icon {
						...${e()}
					},
	            },
				modalButton {
					label,
					content[] {
						...,
						_type == "cta" => {
							...${t()}
						},
						_type == 'list' => {
							"_type": "cardList",
							list[] {
								title,
								icon {
									...${e()}
								}
							}
						},
						_type == 'relatedNews' => {
							list[]-> {
								"type": _type,
								"slug": pageSetup.slug.current,
								"title": header.title,
								"description": header.summary,
								"category": header.category->name,
								"date": header.date,
							}
						}
					},
				},
			}`}},activeTraderTestimonials:{projection:function(){return`
			{
				upperTitle,	
				title,
				testimonialList[]{
					quote,
					name,
					company,
					"photo": photo {
						...${e()}
					},
	            },

			}`}},activeTraderFaq:{projection:function(){return`
			{
				upperTitle,	
				title,
				callToAction {
					...${t()}
				},
				faqList[]{
					title,
					body
	            },

			}`}}},c={...T,...w,...L,...k,...C,...v,...A,...x,...R,...I,...N,...H,...F,...P,...E,...q};function D(i){return Object.entries(i).map(([n,{projection:o}])=>`
      defined(${n}) => {
        ${n}${o()}
      }
    `).join(",")}function B(i){const[n,o]=i.split("."),l=`_type == "${n}"`,s=o?`pageSetup.slug.current == "${o}"`:[];return[l,s].flat().join(" && ")}async function M(i){const n=await $.fetch(`
	*[${B(i)}][0] {
	  "pageSetup": pageSetup {
	    ...${S()}
	  },
	  "sections": {
	    ${D(c)},
	    "footer": ${b()},
	  }
	}
	`),o=Object.entries(n.sections);for(let l=0;l<o.length;l++){const[s,m]=o[l];s in c&&"transformer"in c[s]&&(n.sections[s]=await c[s].transformer(m))}return n}export{M as f};
