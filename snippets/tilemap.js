// https://stackoverflow.com/questions/40448487/simple-interactive-react-tile-map

// // Map.js 

// var mapData = [
//     1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1,0,1,1,1,
//     1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1,0,1,1,1,
//     1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0,0,1,1,1,
//     1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,0,1,1,1,
//     1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0,0,1,1,1,
//     1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,0,1,1,1,  
//     ]
    
//     var tileTypes = {
//     0: { name: 'Sea', color: 'lightBlue' },
//     1: { name: 'Land', color: 'wheat' },
//     2: { name: 'Ship', color: 'black' }
//     }
    
//     var temporalTiles=[];
    
    
//     export default class extends React.Component {
    
    
//     constructor(props) {
    
//     super(props)
    
//     this.state = {
//     tile: 0,
//     tiles:[]
//       }
//     }
    
    
//     componentDidMount() {
    
    
//     const numTiles = mapData.length;
    
//     for (let y = 0; y < numTiles; y++) {
//         const tileId = mapData[y]
//         const tileType = tileTypes[tileId]
//         temporalTiles.push(tileType);
//         this.setState({tiles: temporalTiles})
//       }
    
//     }
    
    
    
//     makeBlack() {
//     var idx= this.state.tile;
    
//     console.log(idx);  // tile index 
//     console.log(temporalTiles[idx].color); // current tile color 
    
//     temporalTiles[idx].color = 'black'; // change color
    
//     console.log(temporalTiles[idx].color); // did it work ? yes(!)
    
//     this.setState({tiles: temporalTiles})
    
//     console.log(temporalTiles);
//     }
    
    
//     handleIndexToState(idx) {
    
//     this.setState({tile: idx})
    
//     }
    
//     render () {
    
//     var quickDemo ={
//       display:'block',
//       textAlign:'center'
//     }
    
//     return ( <div>
    
//       {this.state.tile ? (
    
//         <div>          
//           <p style={quickDemo}> Index of clicked cell {this.state.tile}</p>
//           <p style={quickDemo}
//             onClick={this.makeBlack.bind(this)}>
//             Change to black 
//           </p>
//         </div>
//         ) : null
//       }
    
//           {this.state.tiles.map((tile,index) =>(
    
//             <Tile
//               bgcolor={tile.color}
//               key={index}
//               position={index}
//               onClick={this.handleIndexToState.bind(this, index)}
//             />
    
//             ))}
    
//        </div>)
//       }}

//       // ----------- Componente dois:


//        // Tile.js 

//  export default class extends React.Component {

//     render () {
   
//      var bgColor = {
//      backgroundColor: this.props.bgcolor ,
//      width: '83px',
//      height:'83px',
//      border:'1px solid rgba(0,0,0,.1)'
   
//      };
   
//      return (
   
//      <div
//      onClick={this.props.onClick}
//      style={bgColor}>
   
//      {this.props.position}
   
//      </div>
   
   
//        )
//      }
//      }
   