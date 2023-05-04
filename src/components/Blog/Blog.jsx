import jsPDF from 'jspdf';
import React from 'react';

const Blog = () => {
    const downloadPdf = () => {

        const doc = new jsPDF("landscape", "px", "a4", "false")
            doc.text("This blog page short summary", 20, 30)


            doc.text("In software development, there are two types of components: uncontrolled and controlled. \n Uncontrolled components rely on the browser or environment, while controlled components \n are managed by the application code.  React PropTypes is a way to \n validate props in components. \n Node.js is a runtime environment for executing JavaScript code outside of a web browser, primarily \n used for building server-side applications. \n Custom hooks are a useful tool in React for reusing logic across components.", 20, 50);
            
            doc.save("blog-information.pdf")
    }

    return (
        <div>
            <button onClick={downloadPdf} className='btn btn-primary'>download pdf</button>
        </div>
    );
};

export default Blog;