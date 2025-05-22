const jsonData = [
        {
            "url": "https://2019.wattenberger.com/blog/css-percents",
            "title": "What does 100% mean in CSS?",
            "desc": "One of the CSS units I use most is the wonderful % — so handy for positioning elements on the page.Unfortunately, the rules aren’t exactly straightforward.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/the-pleasure-of-o4_1__4kZbX7e8x-.jpg",
            "tag": "CSS"
        },
        {
            "url": "https://gomakethings.com/mixing-colors-with-css/",
            "title": "Mixing colors with CSS",
            "desc": "I learned about the color-mix() CSS function. As the name implies, it lets you mix two colors together.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/the-pleasure-of-o4_1__4kZbX7e8x-.jpg",
            "tag": "CSS"
        },

        {
            "url": "https://medium.com/@piyushkesarwani72/javascript-dom-document-object-model-simply-explained-3a3b670c139f",
            "title": "The DOM (Document Object Model): Simply Explained",
            "desc": "We’ll be learning and understanding the concept of the Document Object Model in JavaScript.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/markus-spiske-hvSr_CVecVI-unsplash_y2T9sHWXc.jpg",
            "tag": "Javascript"
        },
        {
            "url": "https://medium.com/@carnevali.tech/top-10-javascript-methods-every-web-developer-should-master-ffdaceb6abe1",
            "title": "JavaScript Methods Every Web Developer Should Master",
            "desc": "We’re going to highlight the top 10 JavaScript methods that you should be familiar with to excel in web development.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/future-is-orange_5LpdGfeW2.jpg",
            "tag": "Javascript"
        },
        {
            "url": "https://medium.com/@avgengineerx01/attribute-attr-css-function-is-incredible-e091dacdc3f",
            "title": "Why You Should Use Data Attributes In CSS",
            "desc": "Today we are going to learn about the attr() function in CSS.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/5vdek9ihj4bqw8kl5zdh_NjVVvdGBU.webp",
            "tag": "CSS"
        },
        {
            "url": "https://www.smashingmagazine.com/2021/07/hsl-colors-css/",
            "title": "Using HSL Colors In CSS",
            "desc": "Ahmad Shadeed explains what HSL is, how to use it, and shares some of the useful use-cases and examples.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/the-pleasure-of-o4_1__4kZbX7e8x-.jpg",
            "tag": "CSS"
        },
        {
            "url": "https://frontender-ua.medium.com/",
            "title": "Fresh Frontend Links",
            "desc": "Connect with Fresh Frontend Links.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/1_HKKICkj0wCsQyi8z5oYq5g_Xd9Ci93Fc.png",
            "tag": "Misc"
        },
        {
            "url": "https://www.mongodb.com/resources/products/fundamentals/crud",
            "title": "MongoDB CRUD Operations",
            "desc": "CRUD is data-oriented, and it's standardized according to HTTP action verbs.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/1_HKKICkj0wCsQyi8z5oYq5g_Xd9Ci93Fc.png",
            "tag": "Misc"
        },

        {
            "url": "https://medium.com/@sodiq.akanmu001/transform-your-code-with-the-magic-of-this-in-javascript-a9a48bb1bf25",
            "title": "Transform Your Code with the Magic of “this” in JavaScript",
            "desc": "Prepare yourself for an amazing voyage through the interesting realm of “this,” where you’ll uncover the causes of its actions.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_3oW4MqzKSk1SuMcg_ay3F3c-Vq.png",
            "tag": "Javascript"
        },
        {
            "url": "https://blog.devgenius.io/mastering-the-art-of-div-centering-5-proven-techniques-3f0425153c47",
            "title": "Mastering the Art of Div Centering: Proven Techniques",
            "desc": "Centering a div might seem like a small detail in web design, but it’s a crucial one that can make or break the aesthetics of your webpage.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_YmsNE0ZfkcrF6TvE_D9kltAo_e.png",
            "tag": "CSS"
        },
        {
            "url": "https://justmarkup.com/articles/2020-09-22-styling-and-animation-details/",
            "title": "Styling the details element",
            "desc": "In this article you will learn how to style the summary, change the default arrows, and how to animate the opening/closing.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/the-pleasure-of-o4_1__4kZbX7e8x-.jpg",
            "tag": "Misc"
        },
        {
            "url": "https://www.joshwcomeau.com/javascript/the-const-deception/",
            "title": "The “const” Deception",
            "desc": "Exploring the difference between assignment and mutation in JavaScript.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_3oW4MqzKSk1SuMcg_ay3F3c-Vq.png",
            "tag": "Javascript"
        },
        {
            "url": "https://www.joshwcomeau.com/css/height-enigma/",
            "title": "The Height Enigma",
            "desc": "Unraveling the mystery of percentage-based heights in CSS.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_YmsNE0ZfkcrF6TvE_D9kltAo_e.png",
            "tag": "CSS"
        },
        {
            "url": "https://melanie-richards.com/blog/css-grid-sticky/?ref=heydesigner",
            "title": "Sticky CSS Grid Items",
            "desc": "You might have come to the conclusion that position: sticky doesn’t work with CSS Grid.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_YmsNE0ZfkcrF6TvE_D9kltAo_e.png",
            "tag": "CSS"
        },
        {
            "url": "https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585",
            "title": "Horizontal scrolling containers the right way - CSS Grid",
            "desc": "Explore how the flexibility of CSS Grid can help implement a horizontal scrolling component, dealing with some of the pitfalls that comes with it.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_YmsNE0ZfkcrF6TvE_D9kltAo_e.png",
            "tag": "CSS"
        },
        {
            "url": "https://piccalil.li/blog/javascript-what-is-this/",
            "title": "JavaScript, what is this?",
            "desc": "I’m not saying that “determining the object bound to this” makes for the lightest possible reading...",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_3oW4MqzKSk1SuMcg_ay3F3c-Vq.png",
            "tag": "Javascript"
        },
        {
            "url": "https://piccalil.li/blog/javascript-when-is-this/",
            "title": "JavaScript, when is this?",
            "desc": "this is contextual, but that context isn’t meaningful to us developers so much as it’s meaningful to JavaScript.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_3oW4MqzKSk1SuMcg_ay3F3c-Vq.png",
            "tag": "Javascript"
        },
        {
            "url": "https://www.joshwcomeau.com/css/height-enigma/",
            "title": "The Height Enigma",
            "desc": "Unraveling the mystery of percentage-based heights in CSS.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_YmsNE0ZfkcrF6TvE_D9kltAo_e.png",
            "tag": "CSS"
        },
        {
            "url": "https://www.jamesbaum.co.uk/blether/vanilla-js-equivalent-jquery-find-parent-data-remove-class-empty-append/",
            "title": "JS equivalent of common jQuery functions",
            "desc": "Here's the vanilla (plain) Javascript versions of some common jQuery functions.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_3oW4MqzKSk1SuMcg_ay3F3c-Vq.png",
            "tag": "Javascript"
        },
        {
            "url": "https://chenhuijing.com/blog/on-fixed-elements-and-backgrounds/",
            "title": "On fixed elements and backgrounds",
            "desc": "If you have a fixed element on your page, it no longer acts fixed if you apply a CSS filter on its nearest ancestor.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_YmsNE0ZfkcrF6TvE_D9kltAo_e.png",
            "tag": "CSS"
        },
        {
            "url": "https://dev.to/rolandixor/achieving-backdrop-blur-without-backdrop-filter-16ii",
            "title": "Achieving backdrop blur without 'backdrop-filter'",
            "desc": "At the time of writing* it's rather popular to go for a 'glass look' in your designs.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_YmsNE0ZfkcrF6TvE_D9kltAo_e.png",
            "tag": "CSS"
        },
        {
            "url": "https://css-tricks.com/on-fixed-elements-and-backgrounds/",
            "title": "On fixed elements and backgrounds",
            "desc": "Because applying a filter on the fixed element’s immediate parent makes it become the containing block instead of the viewport.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/the-pleasure-of-o4_1__4kZbX7e8x-.jpg",
            "tag": "CSS"
        },
        {
            "url": "https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/",
            "title": "A Complete Guide To Accessible Front-End Components",
            "desc": "In a new short series of posts, we look into reliable accessible components: from tabs and tables to toggles and tooltips.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/the-pleasure-of-o4_1__4kZbX7e8x-.jpg",
            "tag": "CSS"
        },
        {
            "url": "https://blog.hubspot.com/website/horizontal-scrolling",
            "title": "Horizontal Scrolling in Web Design: How to Do It Well",
            "desc": "When you think of “scrolling” on websites and applications, one direction probably comes to mind first: downward.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/Current/glasper-1000x667_m98BNLRUWh.jpg",
            "tag": "CSS"
        },
        {
            "url": "https://www.joshwcomeau.com/animation/keyframe-animations/",
            "title": "An Interactive Guide to Keyframe Animations",
            "desc": "CSS keyframe animations are awesome. They're one of the most powerful, versatile tools in CSS, and we can use them for all sorts of nifty things.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/Current/glasper-1000x667_m98BNLRUWh.jpg",
            "tag": "CSS"
        },
        {
            "url": "https://scottjehl.com/posts/using-responsive-video/",
            "title": "How to Use Responsive HTML Video (...and Audio!)",
            "desc": "In case you haven't already heard, you can use media queries for delivering HTML video again!",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/Current/glasper-1000x667_m98BNLRUWh.jpg",
            "tag": "CSS"
        },
        {
            "url": "https://ryanmulligan.dev/blog/some-things-about-keyframes/",
            "title": "Some Things About Keyframes",
            "desc": "Whether you've barely scratched the surface of keyframe animations in CSS or fancy yourself a seasoned pro, I suggest reading An Interactive Guide to Keyframe Animations.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/Current/glasper-1000x667_m98BNLRUWh.jpg",
            "tag": "CSS"
        },
        {
            "url": "https://jsdev.space/10-css-tips/",
            "title": "CSS Tips You Must Know About",
            "desc": "Staying up to date with the latest trends and best practices is essential. Here are 10 CSS tips you must know about in 2024 to enhance your web development skills and create cutting-edge designs.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/129480830_2870084836553959_2035561098756143742_n_jOWu39x5bn.jpg",
            "tag": "CSS"
        },
        {
            "url": "https://jsdev.space/howto/understand-binding-types/",
            "title": "Understand Binding Types in JavaScript: A Complete Guide",
            "desc": "Understanding how this works in JavaScript is critical to mastering the language. JavaScript provides four primary ways to bind the this keyword within a function.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/jamila-woods-by-bradley-murray-12_Fyyu9YHRD.jpg",
            "tag": "Javascript"
        },
        {
            "url": "https://jsdev.space/howto/invoked-fns-js/",
            "title": "Immediately Invoked Functions and this in JavaScript",
            "desc": "This guide covers the basics of JavaScript's immediately invoked function expressions (IIFE), object handling, memory allocation, and the use of this in object-oriented programming.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/optional-chaining_pi86_Am08nA.jpg",
            "tag": "Javascript"
        },
        {
            "url": "https://jsdev.space/inheritance-js/",
            "title": "Deep Dive into JavaScript Inheritance - 7 Powerful Techniques",
            "desc": "In JavaScript, inheritance is an essential way to reuse code and manage complex object relationships. With its prototype-based model, JavaScript has several inheritance patterns, each offering unique benefits.",
            "imgUrl": "https://jsdev.space/static/3893458614a0389e9f8f2cbec1f90f2c/658d1/inheritance-js.webp",
            "tag": "Javascript"
        },
        {
            "url": "https://jsdev.space/file-blob-js/",
            "title": "Understanding the Difference Between File and Blob Objects",
            "desc": "In JavaScript, both File and Blob objects are used to represent binary data, but they serve different purposes and have some distinct characteristics. Here’s a breakdown of their differences.",
            "imgUrl": "https://jsdev.space/static/c1a94780b66212420ce00fbc4eddd8ea/be304/file-blob-js.webp",
            "tag": "Javascript"
        },
        {
            "url": "https://www.freecodecamp.org/news/guide-to-javascript-promises/",
            "title": "How Promises Work in JavaScript – A Comprehensive Guide",
            "desc": "There are a few asynchronous features in JavaScript, and one of them is Promises.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/1_kCDwU9HP6PHbo_joE0JKHQ_82qCSbjSa.png",
            "tag": "Javascript"
        },
        {
            "url": "https://zellwk.com/blog/callbacks/",
            "title": "Callbacks in JavaScript",
            "desc": "Have you come across the term “callback” but don’t know what it means? Don’t worry, you’re not alone. That’s what today’s article is for! You’ll learn what callbacks are, why they’re important, and how to use them.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/bg_RMdr1Of2k.jpeg",
            "tag": "Javascript"
        },
        {
            "url": "https://ishadeed.com/article/clip-path/",
            "title": "Understanding Clip Path in CSS",
            "desc": "A clear explanation of how `clip-path` works in detail when to use it, and how you can use it today in your web development projects.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/bg_RMdr1Of2k.jpeg",
            "tag": "CSS"
        },  
        {
            "url": "https://css-tricks.com/using-requestanimationframe/",
            "title": "Using requestAnimationFrame",
            "desc": "There used to be just one way to do a timed loop in JavaScript: setInterval(). The goal is sixty “frames” per second to appear smooth.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_ge4CGKfh7VIqIgk7_WpbZXfAGY.png",
            "tag": "Javascript"
        },

        {
            "url": "https://medium.com/@Flowmapp/progressive-disclosure-10-great-examples-to-check-5e54c5e0b5b6",
            "title": "Progressive Disclosure: Great Examples",
            "desc": "When an interface is complex enough for users to understand it right, designers need to look for unique ways to present its functionality.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/The%20Work/c0v-members/alien-passion_d9lUYaQKa_yzSnkGEwki.jpg",
            "tag": "UI/UX"
        },

        {
            "url": "https://elijahmanor.com/blog/format-js-dates-and-times",
            "title": "Natively Format JavaScript Dates and Times",
            "desc": "It's interesting to note that native browser capabilities are pretty capable these days when formatting dates and times, and the browser support is quite impressive too!",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/bg_RMdr1Of2k.jpeg",
            "tag": "Javascript"
        },
        {
            "url": "https://dev.to/remrkabledev/nesting-template-literals-a-recommended-approach",
            "title": "Nesting Template Literals: A Recommended Approach",
            "desc": "Code quality is essential, as it impacts the overall software quality. In consequence, software quality affects the safety, security, and reliability of any codebase.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/r0t-031c9650_oFvUux3-q_zOasSqqqf.jpg",
            "tag": "Javascript"
        },
        {
            "url": "https://wesbos.com/template-strings-html",
            "title": "Creation of HTML with JavaScript’s Template Strings",
            "desc": "Another feature of _template literals_ or template strings is the ability have multi-line strings without any funny business.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/1_fX1vRVMR8F7jiHGzPyRv7Q_lY8mSsVMg.png",
            "tag": "Javascript"
        },
        {
            "url": "https://mastery.games/post/overlapping-grid-items/",
            "title": "Overlapping Grid Items",
            "desc": "Now that CSS Grid has arrived, we're starting to see more and more magazine style layouts on the web. And for good reason.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/cbc029ab57a8495195bf6b4061e2cb2f_Qgk527FNL.jpg",
            "tag": "Grid"
        },
        {
            "url": "https://elijahmanor.com/blog/reducing-filter-and-map-down-to-reduce",
            "title": "Reducing Filter and Map Down to Reduce",
            "desc": "You've probably seen some of the new array methods in ECMAScript 5 (ES5) and you may have even used some of them before.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_YmsNE0ZfkcrF6TvE_D9kltAo_e.png",
            "tag": "Javascript"
        },
        {
            "url": "https://css-tricks.com/the-sass-ampersand/",
            "title": "The Sass Ampersand",
            "desc": "The & is an extremely useful feature in Sass (and Less). It’s used when nesting. It can be a nice time-saver when you know how to use it.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/The%20Work/c0v-members/pexels-freestocksorg-64057_y4EMJcpg0.jpg",
            "tag": "CSS"
        },
        {
            "url": "https://dev.to/babichweb/accordion-tabs-with-pure-css-35ji",
            "title": "Accordion Tabs with pure CSS",
            "desc": "This is yet another “article” about how amazing pure CSS is, and how you can do something cool without a single line of JavaScript. Why do I bother to write it? Because I am still fascinated by how amazing pure CSS is.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/1_fX1vRVMR8F7jiHGzPyRv7Q_lY8mSsVMg.png",
            "tag": "CSS"
        },
        {
            "url": "https://medium.com/mirum-budapest/back-to-the-basics-accordions-5aab4a678b3b",
            "title": "Back to the Basics: Accordions",
            "desc": "Creating accordions from scratch. Accordions can be very helpful when a page has a lot of content. They let the user scan through the headings and effectively open their content without redirecting them to a new page.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/1_fX1vRVMR8F7jiHGzPyRv7Q_lY8mSsVMg.png",
            "tag": "Javascript"
        }
];
