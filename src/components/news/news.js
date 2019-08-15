import React, { Component } from 'react';
import './news.css'
// get posts from online api
// it's return a json file
class GetNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []
        };
        this.handleLink = this.handleLink.bind(this);
    }
    handleLink(value){
        //alert("hi!!")
        var url = "http://news.thinkjam.com/articleview/" + value;
        window.open(url, "_blank");
    }
    componentDidMount(){
        // I will use fake api from jsonplaceholder website
        // this return 100 posts
        fetch("https://tj-news.herokuapp.com/api/articles")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result.reverse()
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

            var newposts = posts.slice(0,5);

            return(
              <article className="newsArticle">
                  

              <ol>
                    {
                        newposts.map(post => (
                            
                            <li key={post._id} align="start" onClick={ () => this.handleLink(post._id)}>
                                <div>
                                    <h2>{post.title}</h2>
                                   <p dangerouslySetInnerHTML={{__html: post.text}}></p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>


                  </article>
            );
        }

    }
  }

  export default GetNews;
