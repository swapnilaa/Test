//import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
import Dropdownc from './Dropdownc';
import Information from './Information';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

export default class Home extends Component {
    wholeinfo=[
        {   fortName:"Raigadh", 
            info:"Raigad is a hill fort situated in Mahad Raigad district of Maharashtra India. It is one of the strongest.fortresses on the Deccan Plateau. It was previously known as Rajree fort.Many constructions and structures on Raigad were built by Shivaji Maharaj and Chief Engineer was Hirojee IndulkarWhen Shivaji Maharaj made it his capital in 1674 upon being crowned the king of the Maratha kingdom, which later developed into the Maratha Empire eventually covering much of western and central India The fort rises 820 metres (2,700 ft) above base level and 1356 m above sea level in the Sahyadri mountain range. There are approximately 1,737 steps leading to the fort. The Raigad Ropeway an aerial tranway.reaches 400 meters in height and 750 meters in length and allows visitors to reach the fort from the ground in only four minutes."},
        {   fortName:"Lohgadh",
            info:"Lohagad has a long history with several dynasties occupying it at different periods of time: Satavahanas, Chalukyas, Rashtrakutas, Yadavas, Bahamanis, Nizams, Mughals and Marathas. Chatrapati Shivaji Maharaj captured it in 1648 AD, but he was forced to surrender it to the Mughals in 1665 AD by the Treaty of Purandar. Chatrapati Shivaji Maharaj recaptured the fort in 1670 AD and used it for keeping his treasury. This fort was used to keep the winnings from Surat. Later in Peshwa time Nana Phadnavis used this fort for living for some time and built several structures in the fort such as a big tank and a step-well."},
        {   fortName:"Janjira",
            info:"The word Janjira is derivative of word Janjiri which means little chain or porthole in Marathi. Murud was once known in Marathi as Habsan (of Habshi or Abyssinian). The name of the fort is a concatenation of the Konkani and Marathi words, morod and Janjiri. The word morod is peculiar to Konkani and is absent in Marathi.Murud-Janjira Fort is situated on an oval-shaped rock off the Arabian Sea coast near the port city of Murud, 165 km (103 mi) south of Mumbai. Janjira is considered one of the strongest coastal forts in India. The fort is approached by sailboats from Rajapuri jetty The main gate of the fort faces Rajapuri on the shore and can be seen only when one is about 40 feet (12 m) away from it. It has a small postern gate towards the open sea for escape.The fort has 26 artillery towers still intact. There are many cannons of native and European make rusting on the towers. Now in ruins, the fort in its heyday was a full-fledged living fort with all the necessary facilities, e.g.,Barracks, quarters for officers, mosque, two small 60-foot-deep (18 m) fresh water ponds etc. On the outer wall flanking the main gate, there is a sculpture depicting a tiger-like beast clasping elephants in its claws"},
        {   fortName:"Pratapgad",
            info:"Pratapgad is a large, mountain fort located in Satara district, in the Western Indian state of Maharashtra. The fort is situated on a mountain 24 kilometres from the Mahabaleshwar hill station. The fort is now a popular tourist destination.The fort's historical significance is due to the Battle of Pratapgad, which took place here on 10 November 1659, between Shivaji and Bijapur Sultanate general Afzal Khan. Chatrapati Shivaji's killing of Afzal Khan was followed by decisive Maratha victory over the Bijapur army.The Maratha ruler Shivaji assigned Moropant Trimbak Pingle, his prime minister, to undertake the construction of this fort in order to defend the banks of the Nira and the Koyna rivers, and to defend the Par pass. It was completed in 1656.The Battle of Pratapgad between Shivaji and Afzal Khan, a general of Adil Shahi dynasty , was fought below the ramparts of this fort on 10 November 1659. This was the first major test of the fledgling kingdom's army, and set the stage of the establishment of the Maratha empire."}
       ];
    state={
        dropdownlist2:[{itemName:"Raigadh"},{itemName:"Lohgadh"},{itemName:"Janjira"},{itemName:"Pratapgad"}],
        informationArr:[]
    
    };
    handleDisplay=(fort1)=>{
          //  this.state.informationArr=this.wholeinfo;
            const aboutfortinfo=this.wholeinfo.filter((singleFort)=>
            singleFort['fortName']===fort1);
            this.state.informationArr=aboutfortinfo;
            this.setState({informationArr:this.state.informationArr});
            
        console.log("clicked");
        console.log(fort1);
        console.log(this.state.informationArr);
        //console.log(aboutfortinfo);
        
    };
    componentDidMount(){
        //this.wholeinfo=this.state.informationArr;
        //this.setState({informationArr:this.state.informationArr});
        console.log(this.state.informationArr);
        console.log(this.wholeinfo);
    }
    render() {
    return (
      <>
        <Navbar/>
        <Dropdownc  drlist={this.state.dropdownlist2} onDisp={(fort)=>{this.handleDisplay(fort)}}/>
        <Information infor={this.state.informationArr} />
      </>
    )
  }
}
