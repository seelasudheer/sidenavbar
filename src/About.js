import React, { Component } from 'react'

export class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             happy:""
        }
        console.log("hii");
    }
    
    render() {
        return (
            <div>
                About <span>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
            </span>
            </div>
        )
    }
}

export default About
