import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    { id: "parent", className: "container" },
    [
        React.createElement(
            "header",
            { className: "header" },
            React.createElement("h1", {}, "This is a heading!")
        ),
        React.createElement(
            "section",
            { className: "content" },
            [
                React.createElement("p", {}, "This is a paragraph in the content section."),
                React.createElement("ul", { className: "list" }, [
                    React.createElement("li", { key: 1 }, "Item 1"),
                    React.createElement("li", { key: 2 }, "Item 2"),
                    React.createElement("li", { key: 3 }, "Item 3"),
                ]),
                React.createElement("div", { className: "sub-section" }, [
                    React.createElement("h2", {}, "Sub-section heading"),
                    React.createElement("p", {}, "This is a paragraph in the sub-section."),
                ]),
            ]
        ),
        React.createElement(
            "footer",
            { className: "footer" },
            React.createElement("p", {}, "This is the footer content.")
        ),
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);