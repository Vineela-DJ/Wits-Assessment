# WitsAssessment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

# User Availability Checker – Angular Assessment

## Overview

This project implements a **User Availability Checker** using Angular (v16+).
The application allows users to type a username and verifies its availability by simulating a backend API call.

The solution demonstrates **reactive programming with RxJS, asynchronous validation, and modern Angular practices such as Standalone Components and Signals**.

---

## Features

* Reactive Form for username input
* Async username uniqueness validation
* Debounced API calls to improve performance
* Simulated backend latency using RxJS
* Real-time UI state feedback:

  * Idle
  * Checking
  * Available
  * Taken
  * Error
* Error handling for simulated backend failures
* Modular and reusable architecture

---

## Architectural Decisions

### 1. Reactive Forms

The implementation uses **Angular Reactive Forms** instead of Template-driven forms because:

* Better scalability
* Easier integration with RxJS streams
* Built-in support for asynchronous validators
* Clear separation between UI and logic

---

### 2. Async Validator for Username Availability

A **custom AsyncValidator** was implemented to check username uniqueness.

This validator:

* Calls a service method that simulates a backend API
* Returns validation errors if the username already exists
* Handles server errors gracefully

Benefits:

* Encapsulates validation logic
* Promotes reusability
* Keeps component logic clean

---

### 3. RxJS for Reactive Programming

RxJS operators are used to implement a reactive workflow.

Key operators used:

* `debounceTime`
  Prevents unnecessary API calls while the user is typing.

* `switchMap`
  Cancels previous requests if a new value is emitted, avoiding race conditions.

* `map`
  Converts backend responses into validation results.

* `catchError`
  Handles simulated network errors gracefully.

---

### 4. Mock Backend Simulation

Since no real backend is provided, a service simulates API calls using RxJS:

* `of()` emits mock responses
* `delay()` simulates network latency
* Random error generation simulates network failures

This helps mimic realistic backend behavior.

---

### 5. State Management Strategy

The UI state is managed using **Angular Signals**.

Signals are used to track the following states:

* `idle`
* `checking`
* `available`
* `taken`
* `error`

Why Signals?

* Lightweight state management
* Reactive UI updates
* Eliminates manual change detection concerns
* Aligns with modern Angular architecture

---

### 6. Separation of Concerns

The application follows a clean modular structure:

```
src/app
 ├── services
 │     user.service.ts
 │
 ├── validators
 │     username.validator.ts
 │
 ├── components
 │     username-checker.component.ts
 │
 └── app.component.ts
```

Responsibilities:

| Layer     | Responsibility                  |
| --------- | ------------------------------- |
| Component | UI rendering and state updates  |
| Validator | Username validation logic       |
| Service   | Simulated backend communication |

This improves **maintainability, reusability, and testability**.

---

## Performance Considerations

To avoid unnecessary API calls, the implementation uses:

* Debouncing (`debounceTime`)
* Request cancellation (`switchMap`)

This ensures the backend is only called when the user pauses typing.

---

## Error Handling

The mock service randomly simulates server failures.

The validator captures these errors and updates the UI state to display a user-friendly message.

---

## How to Run the Project

1. Install dependencies

```
npm install
```

2. Start the development server

```
ng serve
```

3. Open in browser

```
http://localhost:4200
```

---

## Example Test Cases

| Username | Result    |
| -------- | --------- |
| admin    | Taken     |
| john     | Taken     |
| angular  | Taken     |
| newuser  | Available |

Random errors may occur to simulate network failures.

---

## Technologies Used

* Angular 16+
* RxJS
* TypeScript
* Reactive Forms
* Angular Signals

---

## Conclusion

This implementation focuses on **clean architecture, reactive programming, performance optimization, and modern Angular best practices**.

The goal was to create a solution that is **maintainable, scalable, and representative of production-quality code**.

