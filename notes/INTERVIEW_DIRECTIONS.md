# General directions for the interviewer

## Preparation

Review the github history of the `master` branch. This branch has a number of problems that are fixed in the `working-system` branch. Examine each commit in the `working-system` branch with a 🐛 in it. Each of these commits represents a fix that was done which is intended to challenge the person being interviewed. There are CSS problems, JavaScript logic problems, eventing problems, ember-specific problems, and a font-loading problem.

Make sure you understand why each bug-fix commit fixes the system. With this information, it's helpful to spend a little time thinking of ways to coach the candidate on how to find the bug if they don't immediately figure it out. The goal is not to have the candidate get stuck on one hard problem for a long time; the goal is to get a good assessment of the candidate's skills across a large breadth of the Ember ecosystem.

Also note that this system is using `ember-component-css` which results in styles being in weird places. Make sure you're familiar with this system so you can guide the candidate to the correct locations to make style-changes if need be.

**NOTE**: If the candidate's knowledge of Ember is extremely limited, try to approach the exercise in terms of asking what they think is wrong, and then asking what kinds of solutions they might employ to fix such a problem; you can coach them on making their changes within Ember/Handlebars at a level which is appropriate with their understanding. This may be much more of a guided question-and-answer experience. Instructions are given below for useful guidance.

## Administering the test

Show the candidate the `README.md` file and make sure they read through all the instructions and understand them before they start hacking on code.

Make sure that the candidate does not look at the git history for this repository, as that will reveal the answers to the challenges. The history is for you and not for the candidate.

You're going to want to watch the clock on this thing, because it's highly unlikely that the candidate will get through all the troubleshooting work at the beginning. You should dedicate about half your time to the troubleshooting phase. Make sure the candidate understands that it's perfectly okay that they not get through the entire troubleshooting exercise in one shot, and when the time is up move on to the `Writing new features` section of the test.

As for the _Writing new features_ part of the test, there is a menu of about four things they could do that are all independent of each other. Ask the candidate to choose one and let them run with it. If they run into roadblocks, you could either coach them through it or you could invite them to try a different area of improvement. Again, time is important here. Make sure the candidate has time to write tests for the feature they're producing.

## Rubric for evaluation

### Design problem

> 👉 **Guidance directions**: This application has a design problem insofar as it assumes that the color names are unique despite the fact that there are no guards against this. **Do not point this flaw out.**

- Senior engineer

  - **Good**: Candidate should notice this logic error, but we will give them permission to ignore it.
  - **Great**: Implement logic to prevent this from happening, either by ensuring that two colors cannot be created with the same name or using indexes for colors rather name name-searching.

- Mid-level engineer

  - **Great**: The candidate notices this is a potential problem and we give them permission to ignore it.

### Wiring components

> 👉 **Guidance directions**: There are several areas where callbacks are not wired up properly. For a mid-level engineer (someone unfamiliar with Ember), you should probably drive on this one and show them how the wiring is done. The most difficult of these is pre-wiring the `{yield}`ed submit button in the `ui-form` component. For the mid-level engineer, you should probably start with this one, then fix the submit button, then see if they can do the delete callback themselves.

- Senior engineer

  - **Good**: Able to discuss the value of contextual components and how and why they are used
  - **Good**: Candidate needs some help in finding all the places where the wiring needs to be done but fixes it themselves.
  - **Great**: Candidate needs no help in wiring all the components together properly.

- Mid-level engineer

  - **Good**: After you've shown a couple of solutions to this, the candidate can do the last one on their own.
  - **Great**: The candidate is able to do more than one of these on their own.

### Lack of `<form>` component in the DOM

> 👉 **Guidance directions**: For mid-level candidate: Show them the DOM and point out that there is a `submit` button without a `<form>` element. Ask the candidate what the submit button will do. Ask the candidate how they can get the `<submit>` button to work, etc.

- Senior engineer

  - **Good**: Candidate finds out on their own that the `<form>` tag is missing. Candidate wraps the template output in a `<form>` manually.
  - **Great**: Candidate knows the `tagName` directive in Ember (or Googles it) and is able to fix it without assistance.

- Mid-level engineer

  - **Good**: Candidate can discuss the reason why the submit button doesn't work and understands that there needs to be a form component.
  - **Great**: The candidate is able to fix the problem on their own.

### Event bubbling

> 👉 **Guidance directions**: Once the form issue is fixed, the page will reload itself whenever the submit button is clicked. The candidate needs to intercept the event and use `event.preventDefault()` to stop the form submit from reloading the page. The mid-level candidate should understand this basic interaction. You should point them to the area of code which takes the event and they should be able to understand that calling `preventDefault` on the event object should stop the page-reload.

- Senior engineer

  - **Good**: Able to explain why `preventDefault()` submits the form and reloads the page without help. Talk intelligently about Ember events and DOM events and why they are different.
  - **Great**: Be able to find the places where `preventDefault()` was missing and put it in without guidance

- Mid-level engineer

  - **Good**: Talk about how DOM events and discuss why we sometimes need to call `preventDefault()` when using a JavaScript framework rather than simple form-based page events.
  - **Great**: Be able to fix the issue when pointed to the right section of code.
  - **Extra credit**: be able to find the right section of code without guidance

### Voting system

> 👉 **Guidance directions**: The voting system is broken and only works to change the value of the first color-card. This is because of a bad setter in the index controller. The senior engineer should be able to track this bug down on their own and fix it on their own. The mid-level engineer should just be shown where the bug is directly (unless they want a chance to try to find it on their own). **NOTE** This is also likely the place where the candidate is likely to notice the "Design problem" mentioned above.

- Senior engineer

  - **Great**: Be able to figure out how to get the voting system to work without assistance, especially state mutation.

- Mid-level engineer

  - **Great**: Be able to fix the state-mutation on their own after being shown where the code is.
  - **Extra credit**: Track down the issue without being shown.

### Basic JavaScript

> 👉 **Guidance directions**: To get the foreground color of the color-card to change from black to white, it's necessary to fix the `brightness` function in the `color-card.js` file. This function documents the necessary work to be done, so it should not be necessary to provide much additional guidance, and the candidate does not need to understand color-theory to fix this bug. For the mid-level candidate, you should simply point them at this function and ask them to fix it.

- Senior engineer

  - **Good**: Able to fix the code on their own
  - **Great**: Find this function on their own and fix it without guidance.

- Mid-level engineer

  - **Good**: Able to fix the code on their own
  - **Great**: Able to find the offending code on their own.

### CSS

> 👉 **Guidance directions**: For the mid-level candidate, you should point out where all the `.scss` files are. The senior engineer should be able to find them on their own. You make sure the candidate has seen the demo movie.

- Senior Engineer

  - **Good**: Able to get the system to get within 10% (roughly) of the demo
  - **Great**: Able to get the system to look 100% like the demo (including fonts – demo uses "Roboto")
  - **Extra** **credit**: able to clean up the styles and make them more efficient.

- Mid-level engineer

  - **Good**: Able to make some effective changes in styling to improve the overall look
  - **Great**: Able to get the system to get within 50% (roughly) of the demo

### Tests

> 👉 **Guidance directions**: Ideally, by the end of the exercise, all tests should be passing. There is likely not enough time for the candidate to do all this in the alloted 45m.

The rubric is the same for senior engineer as mid-level engineer here because you're giving the mid-level engineer much more guidance.

- Mid/Senior engineer
  - **Good**: Half the tests are passing
  - **Great**: 3/4 of the tests are passing
  - **Extra** **credit**: All the tests are passing
  - **Extra** **credit**: Candidate offers ideas for more test coverage / better testing strategy
