import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const  News =(props)=> {
   const [articles, setArticles]=useState([]);
    const [loading, setLoading]=useState(true);
   const [page, setPage]=useState(1);
   const [totalResults, setTotalResults]=useState(0);
    //  document.title = `${capitalizeFirstLetter(
    //    props.category
    //  )}-Newsapp`;
   
   const  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

   const  updatenews = async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3422053ace674c5c93101e480a966486&page=${page}&pageSize=${props.pageSize}`;
   
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);

  }

  useEffect(()=>{
    updatenews();
  },[])

  /* componentDidMount=async=>() {
    //console.log("cdm")
    //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3422053ace674c5c93101e480a966486&page=1&pageSize=${props.pageSize}`
    // this.setState({loading: true})

    //   let data=  await fetch(url);
    //   let parsedData=await data.json()
    //    console.log(parsedData);
    //   this.setState({articles:parsedData.articles,
    //                 totalResults:parsedData.totalResults,
    //     loading: false

    //   }) //articels jo ki api me arrays element hai unhe replacen kardo parseddata ke articles se
  }  */

  const  fetchMoreData =  async() => {
    // this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3422053ace674c5c93101e480a966486&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    setLoading(true)

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // setLoading(false);
  };

  
    // console.log("render")
    return (
      <>
        <div className="contianer my-3" style={{ margin: "200px" }}>
          <h2 className="text-center" style={{margin:"35px 0px",marginTop:'90px'}}>
            NewsMonkey- Top Headlines on{" "}
            {capitalizeFirstLetter(props.category)}
          </h2>
          {/* {this.state.loading &&<Spinner/>} */}
          <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    // inverse={true} //
    hasMore={articles.length!==totalResults}
    loader={<Spinner/>}
  >
    <div className="container">

          <div className="row mx-4 d-flex" >
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem  
                    title={element.title /*?element.title.slice(0,45):""*/}
                    description={
                      element.description
                        ? element.description.slice(0, 86)
                        : ""
                    }
                    imageURL={element.urlToImage}
                    newsURL={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source}
                  />
                </div>
              );
            })}
          </div>
    </div>
          </InfiniteScroll>
          {/* <div className="contianer d-flex justify-content-evenly"> */}
            {/* <button type="button" disabled={this.state.page<=1} className="btn btn-light" onClick={this.handlePrevClick}> &larr; Previous</button>
           <button type="button"  disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)}  className="btn btn-dark" onClick={this.handleNextClick}>next &rarr; </button> */}
          {/* </div> */}
        </div>
      </>
    );
  }








News.defaultProps = {
  pageSize: 8,
  country: "us",
  category: "general",
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
