## Context

This is a micro-interaction form built with GSAP and using a bit of css to make a twist.

## Note

Forms are one of the essential key components on the internet. Despite being an easy topic to get into, it is pretty much hard to get forms right. This experimentaion was a bit of an exploration on how a form can be made exciting.

- We have only a submit button with a textarea but the way it is conveyed in an interactive form.

- Making forms interactive is a bit challenging as you have to keep track of different input elements events.

## Summary

- `event.stopPropagation()` cancels the event from bubbling up, although it did not work for the form element. I thought I would get away without having to add `event.preventDefault()` on the form itself.

- Had to add `onsubmit` handler to trigger `event.preventDefault()` just to stop the default behavior of the form element on successful completion of form submit.
