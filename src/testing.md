# An introduction to testing

Big code bases are easily broken, and teams come and go, so large organisations routinely use testing to ensure changes don't break important software.

There are three basic groups/types:

- unit tests: for individual modules/functions
- integration tests: Does the front end connect to the database correctly etc?
- automation tests(also called end-to-end): Often around UI, these are harder to implement and thus more costly.

## What you need

## 1) A library

This is the scaffolding for the functions which will test your code.
Popular examples used with Javascript are: Jasmine, Jest and Mocha.

## 2) An assertion library

Jasmine and Jest come with their own assertion library. Mocha is usally paired with Chai. The assertion library allows you to use easy, defined terms to describe what you're expecting. E.G. "should not contain A".

## 3) A test runner

An additional option here is Karma, which allows you to run the test in your browser. Puppeteer is a headless browser from Google which provides a high-level api. The key here is that we want our tests to run quickly. If testing is painful, developers won't do it.

## 4) Mocks, spies, stubs

_Mocks_ fake functions. Maybe you want to see how your app handles an API call that's really slow to respond.

_Spies_ provide infomation on functions- how many times they were called.

_Stubs_ replace selected functions with a guaranteed output- if you're testing B, which relies on A, you might stick a perfect A output in as a stub. You're controlling variables, so you know the problem is with B.

## 4) Code coverage

This will show what percentage of your code is covered by tests.

## Jest

Jest is a good option as it provides (almost) all of the above. It also comes with create-react-app, so that's nice.
