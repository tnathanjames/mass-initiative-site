import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Footer, Header } from '@massds/mayflower-react';

// import './index.css'
import '@massds/mayflower/css/index-generated.css';

const utilityNav = {
  "items": [],
};

const mainNav = {
  "mainNav": []
};
//   {
//     href: 'https://www.mass.gov/topics/living',
//     text: 'Living',
//     active: false,
//     subNav: [
//       {
//         href: 'https://www.mass.gov/topics/health-social-services',
//         text: 'Health & Social Services'
//       },
//       {
//         href: 'https://www.mass.gov/topics/families-children',
//         text: 'Family & Children'
//       },
//       {
//         href: 'https://www.mass.gov/topics/housing-property',
//         text: 'Housing & Property'
//       },
//       {
//         href: 'https://www.mass.gov/topics/transportation',
//         text: 'Transportation'
//       },
//       {
//         href: 'https://www.mass.gov/topics/legal-justice',
//         text: 'Legal & Justice'
//       },
//       {
//         href: 'https://www.mass.gov/topics/energy',
//         text: 'Energy'
//       },
//       {
//         href: 'https://www.mass.gov/topics/environment',
//         text: 'Environment'
//       },
//       {
//         href: 'https://www.mass.gov/topics/taxes',
//         text: 'Taxes'
//       },
//       {
//         href: 'https://www.mass.gov/topics/unclaimed-property',
//         text: 'Unclaimed Property'
//       }
//     ]
//   },
//   {
//     href: 'https://www.mass.gov/topics/working',
//     text: 'Working',
//     active: false,
//     subNav: [
//       {
//         href: 'https://www.mass.gov/topics/business-resources',
//         text: 'Business Resources'
//       },
//       {
//         href: 'https://www.mass.gov/topics/professional-licenses-permits',
//         text: 'Professional Licenses & Permits'
//       },
//       {
//         href: 'https://www.mass.gov/topics/unemployment',
//         text: 'Unemployment'
//       },
//       {
//         href: 'https://www.mass.gov/topics/finding-a-job',
//         text: 'Finding a Job'
//       },
//       {
//         href: 'https://www.mass.gov/topics/taxes',
//         text: 'Taxes'
//       },
//       {
//         href: 'https://www.mass.gov/topics/workers-rights-safety',
//         text: 'Workers\' Rights & Safety'
//       },
//       {
//         href: 'https://www.mass.gov/topics/industry-regulations',
//         text: 'Industry Regulations'
//       },
//       {
//         href: 'https://www.mass.gov/topics/for-state-employees',
//         text: 'For State Employees'
//       }
//     ]
//   },
//   {
//     href: 'https://www.mass.gov/topics/learning',
//     text: 'Learning',
//     active: false,
//     subNav: [
//       {
//         href: 'https://www.mass.gov/topics/early-childhood-education-care',
//         text: 'Early Childhood Education & Care'
//       },
//       {
//         href: 'https://www.mass.gov/topics/elementary-secondary-schools',
//         text: 'Elementary & Secondary Schools'
//       },
//       {
//         href: 'https://www.mass.gov/topics/higher-education',
//         text: 'Higher Education'
//       },
//       {
//         href: 'https://www.mass.gov/topics/continuing-education',
//         text: 'Continuing Education'
//       },
//       {
//         href: 'https://www.mass.gov/topics/for-educators-administrators',
//         text: 'For Educators & Administrators'
//       }
//     ]
//   },
//   {
//     href: 'https://www.mass.gov/topics/visiting-exploring',
//     text: 'Visiting & Exploring',
//     active: false,
//     subNav: [
//       {
//         href: 'https://www.mass.gov/topics/parks-recreation',
//         text: 'Parks & Recreation'
//       },
//       {
//         href: 'https://www.mass.gov/topics/visiting-massachusetts',
//         text: 'Visiting Massachusetts'
//       },
//       {
//         href: 'https://www.mass.gov/topics/hunting-fishing',
//         text: 'Hunting & Fishing'
//       }
//     ]
//   },
//   {
//     href: 'https://www.mass.gov/topics/your-government',
//     text: 'Your Government',
//     active: false,
//     subNav: [
//       {
//         href: 'https://www.mass.gov/topics/executive-branch',
//         text: 'Executive'
//       },
//       {
//         href: 'https://www.mass.gov/topics/constitutionals-independents',
//         text: 'Constitutionals & Independents'
//       },
//       {
//         href: 'https://www.mass.gov/topics/legislative-branch',
//         text: 'Legislative'
//       },
//       {
//         href: 'https://www.mass.gov/topics/judicial-branch',
//         text: 'Judicial'
//       },
//       {
//         href: 'https://www.mass.gov/state-a-to-z',
//         text: 'State Offices & Courts A-Z'
//       }
//     ]
//   }
// ]};

const footerLinks = {
  "items": [
    {
      "heading": "FooterLinks1",
      "id": "FooterLinks1",
      "links": [
        {
          "href": "https://mass.gov/topics/living",
          "text": "Living"
        },
        {
          "href": "https://mass.gov/topics/working",
          "text": "Working"
        },
        {
          "href": "https://mass.gov/topics/learning",
          "text": "Learning"
        },
        {
          "href": "https://mass.gov/topics/visiting-exploring",
          "text": "Visiting & Exploring"
        },
        {
          "href": "https://mass.gov/topics/your-government",
          "text": "Your Government"
        }
      ]
    },
    {
      "heading": "FooterLinks2",
      "id": "FooterLinks2",
      "links": [
        {
          "href": "https://www.mass.gov/site-policies",
          "text": "Site Policies"
        },
        {
          "href": "http://www.mass.gov/opendata/#/",
          "text": "State Data"
        },
        {
          "href": "https://www.mass.gov/topics/public-records-requests",
          "text": "Public Records Requests"
        }
      ]
    },
    {
      "heading": "FooterLinks3",
      "id": "FooterLinks3",
      "links": [
        {
          "href": "https://www.mass.gov/feedback",
          "text": "Feedback"
        },
        {
          "href": "https://massds.gitbook.io/mayflower/guidelines/search-and-structured-data#adding-your-domain-to-the-search-mass-gov-cse",
          "text": "Sites We Search"
        }
      ]
    }
  ]
};

const socialLinks = {
  "items": [{
    "altText": "Follow us on Facebook",
    "href": "https://www.facebook.com/massgov",
    "icon": "@atoms/05-icons/svg-facebook.twig",
    "component": "Facebook",
    "linkType": "facebook"
  },{
    "altText": "Follow us on Twitter",
    "href": "https://twitter.com/massgov",
    "icon": "@atoms/05-icons/svg-twitter.twig",
    "component": "Twitter",
    "linkType": "twitter"
  },{
    "altText": "Follow us on LinkedIn",
    "href": "https://www.linkedin.com/company/commonwealth-of-massachusetts",
    "icon": "@atoms/05-icons/svg-linkedin.twig",
    "component": "LinkedIn",
    "linkType": "linkedin"
  },{
    "altText": "Follow us on Youtube",
    "href": "https://www.youtube.com/user/massgov",
    "icon": "@atoms/05-icons/svg-youtube.twig",
    "component": "YouTube",
    "linkType": "youtube"
  },{
    "altText": "Follow us on Instagram",
    "href": "https://www.instagram.com/massgov",
    "icon": "@atoms/05-icons/svg-instagram.twig",
    "component": "Instagram",
    "linkType": "instagram"
  }]
};

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header
      // siteTitle={data.site.siteMetadata.title}
      utilityNav = {utilityNav}
      headerSearch = {{}}
      mainNav = {mainNav}
      hideHeaderSearch = {true}
      hideBackTo = {true}
      siteLogoDomain = {{"url": {"domain": "https://www.mass.gov/"}}}
    />
    <main id="main-content" className="main-content">
      {children()}
    </main>
    <Footer 
      footerLinks={footerLinks}
      socialLinks={socialLinks}
    />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
