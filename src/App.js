import React from "react";
import Badge from "react-bootstrap/Badge";
import { marked } from "marked"

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Header (H1)

## Subheader (H2)

[This is a link](https://www.example.com)

Inline code: \`const x = 10;\`

\`\`\`
// Code block
function greet() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote

![Image Alt Text](https://via.placeholder.com/150)

**This is bolded text**`
    }
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }



  render() {
    marked.setOptions({
      breaks: true,
      gfm: true
    });

    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      marginTop: "5px"
    }

    var outputStyle = {
      width: "400px",
      height: "auto",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10px",
      padding: "10px",
    }

    return (
      <div className="row mt-4" >
        <div className="container text-center">
          <h1><Badge bg="dark">Markdown Previewer</Badge></h1>
          <div className="row mt-4">
            <div className="col-md-6">
              <Badge bg="secondary">Markdown Input</Badge>
              <div className="markdown-input">
                <textarea onChange={(e) => this.updateMarkdown(e.target.value)} style={inputStyle} id="editor" value={this.state.markdown} >
                  {console.log(this.state.markdown)}
                </textarea>
              </div>
            </div>
            <div className="col-md-6">
              <Badge bg="secondary">Previewer</Badge>
              <div dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }} style={outputStyle} id="preview"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

