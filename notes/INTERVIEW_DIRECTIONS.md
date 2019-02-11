# General directions for the interviewer

## Preparation

Review the github history of both the `master` branch and the `convert-to-js-and-ember-classes` branch. Each commit with a 💥 in it represents a breaking change that was done which is intended to challenge the person being interviewed. There are CSS problems, JavaScript logic problems, eventing problems, ember-specific problems, and a small build problem.

Note that more difficult problems are introduced in later commits. So if you want to make the exercise easier for the candidate, you can tell them to check out a specific commit. The closer you get to the HEAD of `master`, (or `convert-to-js-and-ember-classes`), the more difficult the exercise is going to be.

Make sure you understand why each commit breaks the system, how to fix it, and spend a little time thinking of ways to coach the candidate on how to find the bug if they don't immediately figure it out. The goal is not to have the candidate get stuck on one hard problem for a long time; the goal is to get a good assessment of the candidate's skills across a large breadth of the Ember ecosystem.

Also note that this system is using `ember-component-css` which results in styles being in weird places. Make sure you're familiar with this system so you can guide the candidate to the correct locations to make style-changes if need be.

## Administering the test

Show the candidate the `README.md` file and make sure they read through all the instructions and understand them before they start hacking on code.

You're going to want to watch the clock on this thing, because it's highly unlikely that the candidate will get through all the troubleshooting work at the beginning. You should dedicate about half your time to the troubleshooting phase. Make sure the candidate understands that it's perfectly okay that they not get through the entire troubleshooting exercise in one shot, and when the time is up move on to the `Writing new features` section of the test.

The idea with this section of the test is that there is a menu of about five things they could do that are all completely independent of each other. Ask the candidate to choose one and let them run with it. If they run into roadblocks, you could either coach them through it or you could invite them to try a different area of improvement. Again, time is important here. You should spend about 2/3 of your remaining time on this section. Make sure you leave time for testing.

## Rubric for evaluation

- Familiarity with TS and ES6 classes:

  - **Good**: no familiarity with TS/ES6
  - **Great**: able and willing and proficient in the use of TS/ES6 or classic Ember/JS

- CSS:

  - **Good**: Able to get the system to get within 10% (roughly) of the demo
  - **Great**: Able to get the system to look 100% like the demo (including fonts – demo uses "Roboto")
  - **Extra** **credit**: able to clean up the styles and make them more efficient.

- Eventing:

  - Good: Able to explain why `preventDefault()` submits the form and reloads the page without help

- Observability:

  - **Good**: Able to explain why `A` is used in `routes/index.ts` instead of an `Array` object
  - **Great**: Able to figure out on their own that the `Array` object should be replaced with an `A` object

- Pre-wiring contextual components

  - **Good**: Able to discuss the value of contextual components and how and why they are used
  - **Great**: Able to discover the bug that the submit button was not pre-wired with the `onClick` action.

- Basic JavaScript/color theory
  - **Good**: Able to understand how to break a CSS color up into its component parts and parse them into integers
  - **Great**: Able to explain color theory and discuss why some colors are "brighter" than others
