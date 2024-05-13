/*! For license information please see 775cd3f9.bc21a892.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[955211],{462787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(824246),o=t(511151);const i={id:"org",title:"GitHub Organizational Data",sidebar_label:"Org Data",description:"Importing users and groups from a GitHub organization into Backstage"},s=void 0,a={id:"integrations/github/org",title:"GitHub Organizational Data",description:"Importing users and groups from a GitHub organization into Backstage",source:"@site/../docs/integrations/github/org.md",sourceDirName:"integrations/github",slug:"/integrations/github/org",permalink:"/docs/integrations/github/org",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/github/org.md",tags:[],version:"current",frontMatter:{id:"org",title:"GitHub Organizational Data",sidebar_label:"Org Data",description:"Importing users and groups from a GitHub organization into Backstage"},sidebar:"docs",previous:{title:"Discovery",permalink:"/docs/integrations/github/discovery"},next:{title:"GitHub Apps",permalink:"/docs/integrations/github/github-apps"}},c={},l=[{value:"Permissions",id:"permissions",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration Details",id:"configuration-details",level:3},{value:"Events Support",id:"events-support",level:3},{value:"Custom Transformers",id:"custom-transformers",level:2},{value:"Transformer Examples",id:"transformer-examples",level:3},{value:"Resolving GitHub users via organization email",id:"resolving-github-users-via-organization-email",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This documentation is written for ",(0,r.jsx)(n.a,{href:"/docs/backend-system/",children:"the new backend system"})," which is the default since Backstage ",(0,r.jsx)(n.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If you are still on the old backend system, you may want to read ",(0,r.jsx)(n.a,{href:"/docs/integrations/github/org--old",children:"its own article"})," instead, and ",(0,r.jsx)(n.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,r.jsxs)(n.p,{children:["The Backstage catalog can be set up to ingest organizational data - users and\nteams - directly from an organization in GitHub or GitHub Enterprise. The result\nis a hierarchy of\n",(0,r.jsx)(n.a,{href:"/docs/features/software-catalog/descriptor-format#kind-user",children:(0,r.jsx)(n.code,{children:"User"})})," and\n",(0,r.jsx)(n.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:(0,r.jsx)(n.code,{children:"Group"})})," kind\nentities that mirror your org setup."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: This adds ",(0,r.jsx)(n.code,{children:"User"})," and ",(0,r.jsx)(n.code,{children:"Group"})," entities to the catalog, but does not\nprovide authentication. See the\n",(0,r.jsx)(n.a,{href:"/docs/auth/github/provider",children:"GitHub auth provider"})," for that."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,r.jsx)(n.p,{children:"Prior to installing the GitHub Org provider you should confirm you have the right permissions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Personal Access Token permissions are listed in the ",(0,r.jsx)(n.a,{href:"/docs/integrations/github/locations#token-scopes",children:"GitHub Locations"})," documentation"]}),"\n",(0,r.jsxs)(n.li,{children:["GitHub App(s) permissions are listed in the ",(0,r.jsx)(n.a,{href:"/docs/integrations/github/github-apps#app-permissions",children:"GitHub Apps"})," documentation"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["You will have to add the GitHub Org provider to your backend as it is not installed by default, therefore you have to add a\ndependency on ",(0,r.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-github-org"})," to your backend\npackage."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-github-org\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Next add the basic configuration to ",(0,r.jsx)(n.code,{children:"app-config.yaml"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    githubOrg:\n      id: github\n      githubUrl: https://github.com\n      orgs: ['organization-1', 'organization-2', 'organization-3']\n      schedule:\n        initialDelay: { seconds: 30 }\n        frequency: { hours: 1 }\n        timeout: { minutes: 50 }\n"})}),"\n",(0,r.jsx)(n.p,{children:"Finally, update your backend by adding the following line:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-catalog-backend/alpha'));\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-catalog-backend-module-github-org'));\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configuration-details",children:"Configuration Details"}),"\n",(0,r.jsx)(n.p,{children:"In the installation steps above we included an simple example of the needed configuration. The section goes into more details about the various configuration options."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    githubOrg:\n      - id: github\n        githubUrl: https://github.com\n        orgs: ['organization-1', 'organization-2', 'organization-3']\n        schedule:\n          initialDelay: { seconds: 30 }\n          frequency: { hours: 1 }\n          timeout: { minutes: 50 }\n      - id: ghe\n        githubUrl: https://ghe.mycompany.com\n        orgs: ['internal-1', 'internal-2', 'internal-3']\n        schedule:\n          initialDelay: { seconds: 30 }\n          frequency: { hours: 1 }\n          timeout: { minutes: 50 }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Directly under the ",(0,r.jsx)(n.code,{children:"githubOrg"})," is a list of configurations, each entry is a structure with the following elements:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id"}),": A stable id for this provider. Entities from this provider will be associated with this ID, so you should take care not to change it over time since that may lead to orphaned entities and/or conflicts."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"githubUrl"}),": The target that this provider should consume"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"orgs"})," (optional): The list of the GitHub orgs to consume. By default wil consume all accessible orgs on the given GitHub instance (support for GitHub App integration only)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"schedule"}),": The refresh schedule to use, matches the structure of ",(0,r.jsx)(n.a,{href:"https://backstage.io/docs/reference/backend-tasks.taskscheduledefinitionconfig/",children:(0,r.jsx)(n.code,{children:"TaskScheduleDefinitionConfig"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"events-support",children:"Events Support"}),"\n",(0,r.jsxs)(n.p,{children:["The catalog module for GitHub Org comes with events support enabled.\nThis will make it subscribe to its relevant topics and expects these events to be published via the ",(0,r.jsx)(n.code,{children:"EventsService"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Topics:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"github.installation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"github.membership"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"github.organization"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"github.team"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, you should install the\n",(0,r.jsxs)(n.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md",children:["event router by ",(0,r.jsx)(n.code,{children:"events-backend-module-github"})]}),"\nwhich will route received events from the generic topic ",(0,r.jsx)(n.code,{children:"github"})," to more specific ones\nbased on the event type (e.g., ",(0,r.jsx)(n.code,{children:"github.membership"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["In order to receive Webhook events by GitHub, you have to decide how you want them\nto be ingested into Backstage and published to its ",(0,r.jsx)(n.code,{children:"EventsService"}),".\nYou can decide between the following options (extensible):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"via HTTP endpoint"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"via an AWS SQS queue"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can check the official docs to ",(0,r.jsx)(n.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/creating-webhooks",children:"configure your webhook"})," and to ",(0,r.jsx)(n.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks",children:"secure your request"}),".\nThe webhook will need to be configured to forward ",(0,r.jsx)(n.code,{children:"organization"}),",",(0,r.jsx)(n.code,{children:"team"})," and ",(0,r.jsx)(n.code,{children:"membership"})," events."]}),"\n",(0,r.jsx)(n.h2,{id:"custom-transformers",children:"Custom Transformers"}),"\n",(0,r.jsx)(n.p,{children:"You can inject your own transformation logic to help map from GH API responses\ninto backstage entities. You can do this on the user and team requests to\nenable you to do further processing or updates to the entities."}),"\n",(0,r.jsxs)(n.p,{children:["To enable this you pass a function into the ",(0,r.jsx)(n.code,{children:"GitHubOrgEntityProvider"}),". You can\npass a ",(0,r.jsx)(n.code,{children:"UserTransformer"}),", ",(0,r.jsx)(n.code,{children:"TeamTransformer"})," or both. The function is invoked\nfor each item (user or team) that is returned from the API. You can either\nreturn an Entity (User or Group) or ",(0,r.jsx)(n.code,{children:"undefined"})," if you do not want to import\nthat item."]}),"\n",(0,r.jsxs)(n.p,{children:["There is also a ",(0,r.jsx)(n.code,{children:"defaultUserTransformer"})," and ",(0,r.jsx)(n.code,{children:"defaultOrganizationTeamTransformer"}),".\nYou could use these and simply decorate the response from the default\ntransformation if you only need to change a few properties."]}),"\n",(0,r.jsx)(n.p,{children:"Here's an example of how to use the transformers:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import { createBackend } from '@backstage/backend-defaults';\nimport { createBackendModule } from '@backstage/backend-plugin-api';\nimport { githubOrgEntityProviderTransformsExtensionPoint } from '@backstage/plugin-catalog-backend-module-github-org';\nimport { myTeamTransformer, myUserTransformer } from './transformers';\n\nconst githubOrgModule = createBackendModule({\n  pluginId: 'catalog',\n  moduleId: 'github-org-extensions',\n  register(env) {\n    env.registerInit({\n      deps: {\n        githubOrg: githubOrgEntityProviderTransformsExtensionPoint,\n      },\n      async init({ githubOrg }) {\n        githubOrg.setTeamTransformer(myTeamTransformer);\n        githubOrg.setUserTransformer(myUserTransformer);\n      },\n    });\n  },\n});\n\nconst backend = createBackend();\n\n// Other items\n\nbackend.add(import('@backstage/plugin-catalog-backend/alpha'));\n\nbackend.add(githubOrgModule());\n\nbackend.start();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"myTeamTransformer"})," and ",(0,r.jsx)(n.code,{children:"myUserTransformer"})," transformer functions are from the examples in the section below."]}),"\n",(0,r.jsx)(n.h3,{id:"transformer-examples",children:"Transformer Examples"}),"\n",(0,r.jsxs)(n.p,{children:["The following provides an example of each kind of transformer. We recommend creating a ",(0,r.jsx)(n.code,{children:"transformers.ts"})," file in your ",(0,r.jsx)(n.code,{children:"packages/backend/src"})," folder for these."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/transformers.ts"',children:"import {\n  TeamTransformer,\n  UserTransformer,\n  defaultUserTransformer,\n} from '@backstage/plugin-catalog-backend-module-github';\n\n// This team transformer completely replaces the built in logic with custom logic.\nexport const myTeamTransformer: TeamTransformer = async team => {\n  return {\n    apiVersion: 'backstage.io/v1alpha1',\n    kind: 'Group',\n    metadata: {\n      name: team.slug,\n      annotations: {},\n    },\n    spec: {\n      type: 'GitHub Org Team',\n      profile: {},\n      children: [],\n    },\n  };\n};\n\n// This user transformer makes use of the built in logic, but also sets the description field\nexport const myUserTransformer: UserTransformer = async (user, ctx) => {\n  const backstageUser = await defaultUserTransformer(user, ctx);\n  if (backstageUser) {\n    backstageUser.metadata.description = 'Loaded from GitHub Org Data';\n  }\n  return backstageUser;\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"resolving-github-users-via-organization-email",children:"Resolving GitHub users via organization email"}),"\n",(0,r.jsx)(n.p,{children:"When you authenticate users you should resolve them to an entity within the\ncatalog. Often the authentication you use could be a corporate SSO system that\nprovides you with email as a key. To enable you to find and resolve GitHub users\nit's useful to also import the private domain verified emails into the User\nentity in backstage."}),"\n",(0,r.jsxs)(n.p,{children:["The integration attempts to return ",(0,r.jsx)(n.code,{children:"organizationVerifiedDomainEmails"})," from the\nGitHub API and makes this available as part of the object passed to\n",(0,r.jsx)(n.code,{children:"UserTransformer"}),". The GitHub API will only return emails that use a domain\nthat's a verified domain for your GitHub Org. It also relies on the user having\nconfigured such an email in their own account. The API will only return these\nvalues when using GitHub App authentication and with the correct app permission\nallowing access to emails."]}),"\n",(0,r.jsxs)(n.p,{children:["You can decorate the default ",(0,r.jsx)(n.code,{children:"userTransformer"})," to replace the org email in the\nreturned identity."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/transformers.ts"',children:"export const myVerifiedUserTransformer: UserTransformer = async (user, ctx) => {\n  const backstageUser = await defaultUserTransformer(user, ctx);\n  if (backstageUser && user.organizationVerifiedDomainEmails?.length) {\n    backstageUser.spec.profile!.email =\n      user.organizationVerifiedDomainEmails[0];\n  }\n  return backstageUser;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This example assumes you have implemented the custom transformer following the ",(0,r.jsx)(n.a,{href:"#custom-transformers",children:"Custom Transformers"})," and ",(0,r.jsx)(n.a,{href:"#transformer-examples",children:"Transformer Examples"})," documentation in the sections above."]}),"\n",(0,r.jsxs)(n.p,{children:["Once you have imported the emails you can resolve users by building a ",(0,r.jsx)(n.a,{href:"/docs/auth/identity-resolver#building-custom-resolvers",children:"Custom Resolver"}),". In this custom resolver you can then use this example to properly match the user:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"ctx.signInWithCatalogUser({\n  filter: {\n    kind: ['User'],\n    'spec.profile.email': email as string,\n  },\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,u=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:a.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||p}function y(){}function x(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var v=x.prototype=new y;v.constructor=x,m(v,b.prototype),v.isPureReactComponent=!0;var j=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function _(e,n,r){var o,i={},s=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)k.call(n,o)&&!T.hasOwnProperty(o)&&(i[o]=n[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:t,type:e,key:s,ref:a,props:i,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var O=/\/+/g;function S(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function U(e,n,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return s=s(c=e),e=""===i?"."+S(c,0):i,j(s)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),U(s,n,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),n.push(s)),1;if(c=0,i=""===i?".":i+":",j(e))for(var l=0;l<e.length;l++){var u=i+S(a=e[l],l);c+=U(a,n,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=U(a=a.value,n,o,u=i+S(a,l++),s);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function G(e,n,t){if(null==e)return e;var r=[],o=0;return U(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function H(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},I={transition:null},P={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};n.Children={map:G,forEach:function(e,n,t){G(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return G(e,(function(){n++})),n},toArray:function(e){return G(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=b,n.Fragment=o,n.Profiler=s,n.PureComponent=x,n.StrictMode=i,n.Suspense=u,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=w.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)k.call(n,l)&&!T.hasOwnProperty(l)&&(o[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:t,type:e.type,key:i,ref:s,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=_,n.createFactory=function(e){var n=_.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:H}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return C.current.useCallback(e,n)},n.useContext=function(e){return C.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return C.current.useDeferredValue(e)},n.useEffect=function(e,n){return C.current.useEffect(e,n)},n.useId=function(){return C.current.useId()},n.useImperativeHandle=function(e,n,t){return C.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return C.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return C.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return C.current.useMemo(e,n)},n.useReducer=function(e,n,t){return C.current.useReducer(e,n,t)},n.useRef=function(e){return C.current.useRef(e)},n.useState=function(e){return C.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return C.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return C.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(667294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);