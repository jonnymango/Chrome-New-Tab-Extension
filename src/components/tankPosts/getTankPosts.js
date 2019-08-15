import React, { Component } from 'react';
import './getTankPosts.css'


function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class GetTankposts extends Component {
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
        fetch("https://tank.thinkjam.com/wp-json/wp/v2/posts")
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
        const {error, isLoaded} = this.state;
        const shuffledPosts = shuffleArray(this.state.posts);

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
              <article className="article">


                          <div >
                          <a target="_blank" rel="noopener noreferrer" href={shuffledPosts[0].link}>
                          <div className="postImg" style={{ backgroundImage:  `url(${shuffledPosts[0].featured_image_src})` }}>
                          <h2>Think Tank</h2>
                          </div>

                          {/* <h2>{shuffledPosts[0].title.rendered}</h2>*/}
                           </a>
                           </div>


                  </article>
            );
        }

    }
  }

  export default GetTankposts;
