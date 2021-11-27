// import React from 'react';
// import Arrow from './arrow';
// import ImageSlide from './imageSlide';

// const Carousel = (props) =>{      

//     const imgUrls = [
//         "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80", 
//         "https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
//         "https://images.unsplash.com/photo-1493307100940-ac5f30709573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80",
//     ];

//     const previousSlide = () =>{
//             const lastIndex = imgUrls.length - 1;
//             const { currentImageIndex } = this.state;
//             const shouldResetIndex = currentImageIndex === 0;
//             const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
        
//             this.setState({
//               currentImageIndex: index
//             });
//           }
        
//     const nextSlide = () => {
//             const lastIndex = imgUrls.length - 1;
//             const { currentImageIndex } = this.state;
//             const shouldResetIndex = currentImageIndex === lastIndex;
//             const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
        
//             this.setState({
//               currentImageIndex: index
//             });
//           }
//           this.nextSlide = this.nextSlide.bind(this);
//           this.previousSlide = this.previousSlide.bind(this);

//       return (
//         <div className="carousel">
//           <Arrow
//             direction="left"
//             clickFunction={ this.previousSlide }
//             glyph="&#9664;" />
  
//             <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
  
//           <Arrow
//             direction="right"
//             clickFunction={ this.nextSlide }
//             glyph="&#9654;" />
//         </div>
//       );
//   }

// export default Carousel