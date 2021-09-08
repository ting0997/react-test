import React from 'react';

import ipadMini from './ipad-mini.jpg';
import iconFile from './icons-file.svg';
import htmlContent from './content.json';


import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      htmlHeader:'',
      contentTitle:'',
      contentDescription:'',
      contentArray:'',
      nextPageLink:''
    }
  }

  componentDidMount(){
    const initialContentArray=0;
    this.setState({
      htmlHeader:htmlContent.title,
      contentDescription:htmlContent.content[initialContentArray].description,
      contentArray:initialContentArray,
      nextPageLink:htmlContent.content[(initialContentArray+1)].title
    })
  }

 handleClick=()=>{
    const currentContentArray=this.state.contentArray+1;
    const totalContentArray=htmlContent.content.length;
    if(currentContentArray< (totalContentArray-1)){
      this.setState({
          contentDescription:htmlContent.content[currentContentArray].description,
          contentArray:currentContentArray,
          nextPageLink:htmlContent.content[(currentContentArray+1)].title

    })
    }else if (currentContentArray=== (totalContentArray-1)){
      this.setState({
        nextPageLink:'This is the last page.'
      })
    }else{
      return
    }  
  }

  handleClickBack=()=>{
    const currentContentArray=this.state.contentArray-1;
    if(currentContentArray>=0){
      this.setState({
          contentDescription:htmlContent.content[currentContentArray].description,
          contentArray:currentContentArray,
          nextPageLink:htmlContent.content[(currentContentArray+1)].title

    })
    }else{
      return
    } 
  }

 

  render(){
    
    return(
      <div className="App">
          <header className="App-header">
          <div className='App-title'>
            <div className='header-image' style={{backgroundImage:`url(${iconFile})`
            }}
            />

            <div>{this.state.htmlHeader}</div>
          </div>
          
             
            <div className="arrow-up"></div>
          </header>
          <div className='App-main'>
            <div className='App-image' style={{backgroundImage:`url(${ipadMini})`
          }}
          />
            <section className='App-text'>
            <div dangerouslySetInnerHTML={{__html:`${this.state.contentDescription}` }}/>
            </section>
          </div>
          <footer className='App-footer'>
            <div className='back-options' onClick={this.handleClickBack}>
              <div className="arrow-left"></div>
              {this.state.contentArray?
              'Back':
              ''}
            </div>
            <div className='previous-options' onClick={this.handleClick}>
              {this.state.nextPageLink}
              <div className="arrow-right"></div>
            </div>
          </footer>
      
      </div>
    );
  }
}

export default App;
