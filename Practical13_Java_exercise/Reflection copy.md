(a) Documentation

Main Concepts Applied
This project involved creating a custom HTML component using Web Components to design a reusable card structure with slots for header, content, and footer. I used CSS variables for flexible styling and JavaScript fetch API to load a random dog image.
New Skills and Knowledge Acquired
This project helped me understand how to create and manage custom HTML elements with attachShadow for encapsulated styling. I also improved my knowledge of slot elements and using external APIs to fetch and display data, like random dog images.

(b) Reflection

What I Learned
I learned how to define and register a custom element, apply scoped styles, and structure reusable components in HTML. This approach makes the component easy to use in other projects by just adding the <my-card> tag.
Challenges Faced
One challenge I faced was accessing the dog-image element in the light DOM from the JavaScript fetch function, since it was outside the shadow DOM. To fix this, I used document.getElementById for elements outside the shadow boundary.
Screenshot of JavaScript fetch code
How I Overcame the Challenge
By experimenting with shadow DOM limitations, I learned to selectively access elements outside the shadow tree using IDs, allowing smooth interaction between fetch requests and the DOM.

(c) Clarity & Coherence

I structured and commented my code to make clear each function, variable, and style property, making it straightforward and reusable for future projects.

