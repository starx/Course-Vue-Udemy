There are several bits (demos, assignments, projects) here that you might want to run. They might be several different ways they can be browsed, but I recommend two.1

1. for the bits using, External Resources and _do not require_ building.1

Simply create a symbolic link.

2. for the bits using, webpack, exports, imports etc, you need to navigate to each such bits and build. When you build it, it will delete the main dist folder and replace it with whatever it needs to have in the `dist` folder.

# Course

https://www.udemy.com/course/vuejs-2-the-complete-guide

*SubCourse*: Learn Vuex
https://scrimba.com/g/gvuex

## Getting Started

* JSFiddle: https://jsfiddle.net/smax/c4mcxu7s/

## Using VueJS to interact with DOM

JSFiddle Links:

* Getting Started: https://jsfiddle.net/smax/pcjtcmdm/
* Template Syntax: https://jsfiddle.net/smax/bkk97b7g/
* Events: https://jsfiddle.net/smax/7zdak05g/
* Two-Way-Binding: https://jsfiddle.net/smax/ut0tsbcu/
* Computed Properties & Watch: https://jsfiddle.net/smax/yLjqxmw0/
* Dynamic Classes: https://jsfiddle.net/smax/gowg40ym/
* Dynamic Styles: https://jsfiddle.net/smax/3rvdLq5y/

Further Links:

* Official Docs - Getting Started: http://vuejs.org/guide/
* Official Docs - Template Syntax: http://vuejs.org/guide/syntax.html
* Official Docs - Events: http://vuejs.org/guide/events.html
* Official Docs - Computed Properties & Watchers: http://vuejs.org/guide/computed.html
* Official Docs - Class & Style Binding: http://vuejs.org/guide/class-and-style.html

## Using conditionals and rendering lists

JSFiddle:

* Conditionals (v-if and v-show): https://jsfiddle.net/smax/hoc719j5/
* Lists: https://jsfiddle.net/smax/o7uy2g0u/

Useful Links:

* Official Docs - Conditionals: http://vuejs.org/guide/conditional.html
* Official Docs - Lists: http://vuejs.org/guide/list.html

## Understanding the VueJS Instance

JSFiddle:

* The Vue Instance Code: https://jsfiddle.net/smax/9a2k6cja/2/
* The VueJS Instance Lifecycle: https://jsfiddle.net/smax/jcgw7ak8/

Useful Links:

* Official Docs - The Vue Instance: http://vuejs.org/guide/instance.html

## Moving to a "Real" Development Workflow with Webpack and Vue CLI

### More about ".vue" Files and the CLI

The ".vue" File

You can learn more about ".vue" Files in this Article from the official Docs: http://vuejs.org/guide/single-file-components.html

Learn more about the render()  method in another Article in the official Docs: http://vuejs.org/guide/render-function.html

Finally, it's important to be aware of the fact, that you can also load your App.vue File (your main Component/ Instance) via the following two Ways (Alternatives to render() ):

1) Using the ES6 Spread Operator (for that, you need to add babel-preset-stage-2 as a Dependency and to your .babelrc File):

    npm install --save-dev babel-preset-stage-2

#### .babelrc:

    {
      "presets": [
        ["es2015", { "modules": false }],
        ["stage-2"]
      ]
    }

and

    import Vue from 'vue'
    import App from './App.vue'

    new Vue({
      el: '#app',
      ...App
    });


2) Using mount() :

Also install the stage-2 preset as described above.

    import Vue from 'vue'
    import App from './App.vue'

    const vm = new Vue({
      ...App
    });

    vm.$mount('#app');


#### The CLI

Learn more about the CLI here: https://github.com/vuejs/vue-cli

Local CSS / Sass Files and CLI Templates

The webpack-simple template doesn't support local CSS or Sass files, because no CSS loader is set up.

Use the webpack template (not webpack-simple) to get this functionality: https://github.com/vuejs-templates/webpack

## Debugging VueJS Projects

There are two main Tools you may use:

1) The Developer Tools in Chrome (see below)

2) The Vue Developer Tools (https://github.com/vuejs/vue-devtools)

When working with a Project created by the CLI (using Webpack!), you can easily debug your running Application by opening your Developer Tools (see below in Chrome) and going to "Sources" there.

You should see a "Webpack" folder which you may open to see all your files included in the project (see image below, in orange box).

You can open any file there and set *breakpoints* etc. to debug your running application.

## An Introduction to Components

If you want to learn more about VueJS Components, you may want to have a look at this Article from the official Docs (important: It does cover Topics which will be taught in the next Course Modules!): http://vuejs.org/guide/components.html

Also see: https://vuejs.org/v2/guide/components-registration.html

## Communicating between components

Official Docs - Props: http://vuejs.org/guide/components.html#Props
Official Docs - Custom Events: http://vuejs.org/guide/components.html#Custom-Events
Official Docs - Non-Parent-Child Communication: http://vuejs.org/guide/components.html#Non-Parent-Child-Communication

## Advanced component usage

Official Docs - Slots: http://vuejs.org/guide/components.html#Content-Distribution-with-Slots
Official Docs - Dynamic Components: http://vuejs.org/guide/components.html#Dynamic-Components
Official Docs - Misc: http://vuejs.org/guide/components.html#Misc

## Handling User Input with Forms

Official Docs - Forms: http://vuejs.org/guide/forms.html

## Using and Creative directives

Official Docs - Custom Directives: http://vuejs.org/guide/custom-directive.html

## Improving your App with Filters and Mmixins

Official Docs - Filters: https://vuejs.org/v2/guide/filters.html
Official Docs - Mixins: http://vuejs.org/guide/mixins.html

## Routing in Vue JS application

vue-router Github Page: https://github.com/vuejs/vue-router
vue-router Documentation:https://router.vuejs.org/en/

## Better state management with vuex

Vuex Github Page: https://github.com/vuejs/vuex
Vuex Documenation: https://vuex.vuejs.org/en/

## Connecting to Servers via Http - Suing vue-resource

vue-resource on Github: https://github.com/yyx990803/vue-resource
Some Code Recipes for vue-resource: https://github.com/yyx990803/vue-resource/blob/master/docs/recipes.md
Template URLs: https://medialize.github.io/URI.js/uri-template.html
Requests and Responses (incl. Different File Formats): https://github.com/yyx990803/vue-resource/blob/master/docs/http.md

##

Vue Developer Tools: https://github.com/vuejs/vue-devtools

## Using Axios instead of vue-resource

Axios: https://github.com/axios/axios