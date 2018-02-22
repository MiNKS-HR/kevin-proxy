import React from 'react';
import Photo from './photo.jsx';

export default class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      images: ['https://robohash.org/perferendiscupiditateminima.png?size=300x400&set=set1',
               'https://robohash.org/eosquisquia.bmp?size=300x400&set=set1',
               'https://robohash.org/doloreofficiispraesentium.jpg?size=300x400&set=set1',
               'https://robohash.org/voluptatibusidsaepe.png?size=300x400&set=set1',
               'https://robohash.org/ullamcorruptivoluptatibus.png?size=300x400&set=set1',
               'https://robohash.org/voluptatibusetprovident.jpg?size=300x400&set=set1',
               'https://robohash.org/maioresnatussuscipit.jpg?size=300x400&set=set1'
              ]
    };
  }

  render(){
    return (
      <div>
        <h1>Photo Gallery</h1>
        <p>There are <strong>{this.state.images.length}</strong> photos in this gallery</p>

          <div className="your-class">
            {console.log(this.state.images)}
            {this.state.images.map((image, index) => {
              return <div key={index}><Photo image={image} /></div>
            })
            }
          </div>
      </div>
    )
  }
};

/* 
          {console.log(this.state.images)}
          {this.state.images.map((image, index) => {
            return <Photo image={image} key={index} />
          })
          }
*/