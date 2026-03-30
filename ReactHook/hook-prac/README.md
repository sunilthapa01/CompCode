# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Issue Analysis: Preview Form is Empty

**Problem:** After creating a form, the "Preview Form" page shows nothing.

**Cause:**
In `src/pages/form/CreateForm.jsx`, the code attempts to submit the form data TWICE:

```javascript
// src/pages/form/CreateForm.jsx

const AddDetail = async () => {
  try {
    // 1. First submission (Manual API call)
    const response = await formPost(formData); 
    const savedForm = response;

    // 2. Second submission (Redux Thunk)
    // The thunk calls formPost(savedForm) AGAIN.
    dispatch(postFormThunk(savedForm)); 
    
    // ...
```

1.  **Double Submission:** The first `await formPost(formData)` successfully creates the record on the server (e.g., `db.json`) and returns the created object with an `id`.
2.  **Duplicate ID Error:** You then pass this `savedForm` (which now has an `id`) to `postFormThunk`. The thunk tries to POST this object again. Since it already has an `id` that exists in the database, the server (like `json-server`) likely rejects it with a **500 Internal Server Error** (Duplicate ID).
3.  **State Not Updated:** Because the thunk's API call fails, the `postFormThunk.fulfilled` action is never dispatched.
4.  **Empty Store:** The Redux reducer only updates `state.field` when `fulfilled` happens. Since it fails, `state.field` remains empty.
5.  **Empty Preview:** When you navigate to `/view`, `PreviewForm` reads the empty `state.field` and renders nothing.

**Recommended Fix:**
Remove the manual `formPost` call and rely solely on the Redux thunk to handle the API call and state update.

```javascript
// src/pages/form/CreateForm.jsx

const AddDetail = async () => {
    try {
      // ONLY use dispatch. The thunk will handle the API call.
      const resultAction = await dispatch(postFormThunk(formData));
      
      // Optional: Check if the thunk succeeded before navigating
      if (postFormThunk.fulfilled.match(resultAction)) {
           console.log("Form created successfully");
           navigate("/view");
           
           // Reset form logic...
      } else {
           console.error("Failed to save form");
      }
    } catch (error) {
      console.error("Failed to create form field", error);
    }
  };
```
