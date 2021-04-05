# General directions for the interviewer

## Preparation

Review the github history of the `main` branch. Examine the "fix" branch commits that each have a 🐛 in it. Each of these commits represents a fix that was done which is intended to show the solution to what has broken this project. There are CSS problems, JavaScript logic problems, eventing problems, react-specific problems.

Note that more difficult problems are introduced in the `advanced-troubleshooting` branch, so if this candidate is interviewing for the senior position, you should use that branch, which has a couple additional breaking changes.

Make sure you understand why each commit fixes the system. Spend a little time thinking of ways to coach the candidate on how to find the bug if they don't immediately figure it out. The goal is not to have the candidate get stuck on one hard problem for a long time; the goal is to get a good assessment of the candidate's skills across a large breadth of the React ecosystem.

## Administering the test

Show the candidate the `README.md` file and make sure they read through all the instructions and understand them before they start hacking on code.

Make sure that the candidate does not look at the git history for this repository, as that will reveal the answers to the challenges. The history is for you and not for the candidate.

You're going to want to watch the clock on this thing, because it's highly unlikely that the candidate will get through all the troubleshooting work at the beginning. You should dedicate about half your time to the troubleshooting phase. Make sure the candidate understands that it's perfectly okay that they not get through the entire troubleshooting exercise in one shot, and when the time is up move on to the `Writing new features` section of the test.

As for the _Writing new features_ part of the test, there is a menu of about four things they could do that are all independent of each other. Ask the candidate to choose one and let them run with it. If they run into roadblocks, you could either coach them through it or you could invite them to try a different area of improvement. Again, time is important here. Make sure the candidate has time to write tests for the feature they're producing.

## Rubric for evaluation

### Basic React/JS/CSS/HTML knowledge

# - CSS:
# 
#   - **Good**: Able to get the system to get within 10% (roughly) of the demo
#   - **Great**: Able to get the system to look 100% like the demo (including fonts – demo uses "Roboto")
#   - **Extra** **credit**: able to clean up the styles and make them more efficient.

- Eventing:
  - **Good**: Able to explain why `preventDefault()` submits the form and reloads the page without help

- Wiring components:
  - **Good**: Able to figure out how to make the delete button work without assistance

- Basic JavaScript
  - **Good**: Able to understand how to do string manipulation to break a CSS hex-code up into its component parts and parse them into integers from hex

- Accessibility
  - **Good**: Buttons should have appropriate labels
  - **Good**: HTML elements that the user is expected to click should be `<button>` objects
