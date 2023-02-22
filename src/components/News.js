import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    pageSize: 8,
    country: "us",
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    // console.log("i am const");
    this.state = {
      page: 1,
      articles: [],
      loading: true,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-Newsapp`;
  }

  async updatenews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3422053ace674c5c93101e480a966486&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });


    this.props.setProgress(100);

  }
  async componentDidMount() {
    //console.log("cdm")
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3422053ace674c5c93101e480a966486&page=1&pageSize=${this.props.pageSize}`
    // this.setState({loading: true})

    //   let data=  await fetch(url);
    //   let parsedData=await data.json()
    //    console.log(parsedData);
    //   this.setState({articles:parsedData.articles,
    //                 totalResults:parsedData.totalResults,
    //     loading: false

    //   }) //articels jo ki api me arrays element hai unhe replacen kardo parseddata ke articles se
    this.updatenews();
  }

 /* handlePrevClick = async () => {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3422053ace674c5c93101e480a966486&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    // this.setState({loading: true})
    // let data=  await fetch(url);
    // let parsedData=await data.json()
    //  console.log(parsedData);
    // this.setState(
    //   {  page:this.state.page-1,
    //     articles:parsedData.articles,
    //     loading: false
    //   }
    //   )
    this.setState({ page: this.state.page - 1 });
    this.updatenews();
  };*/

 /* handleNextClick = async () => {
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3422053ace674c5c93101e480a966486&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    //    this.setState({loading:true})
    //   let data=  await fetch(url);
    //   let parsedData=await data.json()

    //  //  console.log(parsedData);
    //   this.setState(
    //     {  page:this.state.page+1,
    //       articles:parsedData.articles,
    //     loading: false}
    //     )
    // }
    this.setState({ page: this.state.page + 1 });
    this.updatenews();
  };*/
   
  fetchMoreData =  async() => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3422053ace674c5c93101e480a966486&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  
    
  };

  render() {
    // console.log("render")
    return (
      <>
        <div className="contianer my-3" style={{ margin: "200px" }}>
          <h2 className="text-center" /*style={{margin:"45px"}}*/>
            NewsMonkey- Top Headlines on{" "}
            {this.capitalizeFirstLetter(this.props.category)}
          </h2>
          {/* {this.state.loading &&<Spinner/>} */}
          <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    // inverse={true} //
    hasMore={this.state.articles.length!==this.state.totalResults}
    loader={<Spinner/>}
  >
    <div className="container">

          <div className="row mx-4 d-flex" >
            {this.state.articles.map((element) => {
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
           <button type="button"  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}  className="btn btn-dark" onClick={this.handleNextClick}>next &rarr; </button> */}
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default News;
