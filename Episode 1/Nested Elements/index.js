const root = ReactDOM.createRoot(document.querySelector('#root'));

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "I'm h1 tag!"
        )
    )
)

root.render(parent)
