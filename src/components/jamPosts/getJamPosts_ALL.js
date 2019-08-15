import React, { Component } from 'react';
//import './GetOnlinePosts.css'
// get posts from online api
// it's return a json file
class GetJamPosts extends Component {
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
        fetch("https://thinkjam.com/wp-json/wp/v2/posts")
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
              <article>
                    {
                        posts.map(post => (

                          <div>
                            <a target="_blank" href={post.link}>
                           <img src={post.featured_image_src} /></a>
                           <h2>{post.title.rendered}</h2>
                           </div>

                        ))
                    }
                  </article>
            );
        }

    }
  }

  export default GetJamPosts;
