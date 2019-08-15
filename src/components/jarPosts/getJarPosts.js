import React, { Component } from 'react';
import './getJarPosts.css'
// get posts from online api
// it's return a json file
class GetJarPosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []
        };
    }
    componentDidMount(){
        // I will use fake api from jsonplaceholder website
        // this return 100 posts
        fetch("https://media-dev.thinkjam.com/jamjar/wp-json/wp/v2/posts")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },
            // Handle error
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }
    render() {
        const {error, isLoaded, posts} = this.state;
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
              <article className="article noPadRight">


                          <div>
                          <a target="_blank" rel="noopener noreferrer"  href={posts[0].link}>
                          <div className="postImg" style={{ backgroundImage:  `url(${posts[0].featured_image_src})` }}>
                          <h2>Jam Jar</h2>
                          </div>
                          {/*<h2>{posts[0].title.rendered}</h2>*/}
                          </a>
                           </div>


                  </article>
            );
        }

    }
  }

  export default GetJarPosts;
