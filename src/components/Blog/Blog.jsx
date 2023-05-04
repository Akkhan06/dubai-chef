import jsPDF from "jspdf";
import React from "react";

const Blog = () => {
  const downloadPdf = () => {
    const doc = new jsPDF("landscape", "px", "a4", "false");
    doc.text("This blog page short summary", 20, 30);

    doc.text(
      "In software development, there are two types of components: uncontrolled and controlled. \n Uncontrolled components rely on the browser or environment, while controlled components \n are managed by the application code.  React PropTypes is a way to \n validate props in components. \n Node.js is a runtime environment for executing JavaScript code outside of a web browser, primarily \n used for building server-side applications. \n Custom hooks are a useful tool in React for reusing logic across components.",
      20,
      50
    );

    doc.save("blog-information.pdf");
  };

  return (
    <div className="mx-auto md:w-[1220px]">
      <button onClick={downloadPdf} className="btn btn-primary text-center flex justify-center mt-10">download pdf</button>

      <div>
        <div className="mt-24 text-start">
          <h1 className="font-bold">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h1>
          <p className="ml-4 font-semibold">
            controlled and uncontrolled components are two different approaches
            to building UI components in software development. Controlled
            components are managed using React's state management tools and
            their values are always up-to-date with the user's input.
            Uncontrolled components, on the other hand, have their values
            managed by the DOM and are typically managed using JavaScript or
            jQuery. Controlled components require event handlers to update their
            values and can sometimes be less performant than uncontrolled
            components. However, controlled components provide more control over
            the data flow, which can be useful in certain cases.
          </p>

          <h1 className="font-bold mt-4">
            2. How to validate React props using PropTypes
          </h1>
          <p className="ml-4 font-semibold">
            React provides a built-in library called PropTypes to validate the
            props passed to a component. To use PropTypes, you first import it
            from the 'prop-types' package and then define the PropTypes for each
            prop of your component. PropTypes allow you to define the data type,
            required status, and default value of a prop. When a prop is passed
            that does not match its defined PropTypes, a warning will be
            displayed in the browser console. This helps to catch errors early
            in the development process and ensures that the component is used
            correctly. Using PropTypes is a simple and effective way to validate
            React props, with minimal extra coding required.
          </p>

          <h1 className="font-bold mt-4">
            3. Tell us the difference between nodejs and express js.
          </h1>
          <p className="ml-4 font-semibold">
            building web applications, including routing, middleware, and
            templating. Express.js is designed to make building web applications
            in Node.js easier and more efficient, providing a set of features
            that allow developers to create robust, scalable, and maintainable
            applications. In summary, Node.js is a runtime environment for
            executing JavaScript code on the server-side, while Express.js is a
            web application framework built on top of Node.js that provides a
            set of tools and utilities for building web applications.
          </p>

          <h1 className="font-bold mt-4">
            4. What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="ml-4 font-semibold">
            A custom hook is a reusable function in React that contains some
            logic and state that can be shared between components. Custom hooks
            allow developers to abstract complex logic into reusable pieces of
            code that can be used across multiple components. Developers create
            custom hooks to avoid code duplication, increase code reuse, and
            improve code organization. Custom hooks can encapsulate logic that
            involves state management, API calls, or other common patterns,
            making it easy to share that logic between components. In summary,
            custom hooks in React provide a way to abstract and reuse logic in
            components. Developers create custom hooks to improve code
            organization, reduce code duplication, and promote code reuse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
