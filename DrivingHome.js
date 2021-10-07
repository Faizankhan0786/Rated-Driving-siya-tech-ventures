import React,{useEffect,useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Header from "./Header"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { getData,ServerURL } from './FetchNodeServices';
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import DrivingInterface  from './DrivingInterface';
import styled from 'styled-components';

import Slider from "react-slick";
import Footer from "./Footer"


const useStyles = makeStyles((theme) => ({
root:{
padding:10,
display:'flex',
flexDirection:'column'
},
paperstyle:{
  justifyContent:"flex-start",
  display:'flex',
  padding:10,
  width:215,
  height:310,
  margin:10,
  borderRadius:10,
  flexDirection:'column'
},
imageview:{
  width:160,
  height:160, 
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  padding:10,
  margin:2,
  cursor:"pointer",

  '&:hover':{
    transform:"scale(1.25)",
    transition:"all 0.5s ease 0s"
  }

},
arrowstyle:{
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
}

}))


export default function Home(props) {
  const classes = useStyles();
const [listA,setListA]=useState([])
const [listB,setListB]=useState([])
const [listC,setListC]=useState([])
const [listD,setListD]=useState([])
var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:2000,
};

var itemsettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:2000,
  arrows:false
};



const fetchAllCategory=async()=>{
var list=await getData('categories/displayall')
setListB(list)
//alert (JSON.stringify(list))
}

const fetchAllSubCategoryOffers=async()=>{
  var list=await getData('subcategories/subcategoryoffers')
  setListC(list)
  //alert (JSON.stringify(list))
  }

  const fetchAllCategorythree=async()=>{
    var list=await getData('')
    setListD(list)
    //alert (JSON.stringify(list))
    }

    const fetchAllCategoryfour=async()=>{
      var list=await getData('')
      setListA(list)
      //alert (JSON.stringify(list))
      }

  const showSlider=()=>{
    return(((item)=>{
     return(
         <div>
          <img src={`${ServerURL}/images/${item.ad}`} width="100%" />
          
         </div>
          
     )
   
    })
    )
   }

   const handleConsoleList=(categoryid)=>{

    props.history.push({'pathname':'/consolelist'},{'categoryid':categoryid})

   }

const showCategories=()=>{
 return(((item)=>{
  return(
      <div style={{border:'1px solid #ecf0f1',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',padding:10,margin:5}} onClick={()=>handleConsoleList(item.categoryid)} >
       <img src={`${ServerURL}/images/${item.icon}`} width="60%" />
       <div style={{fontSize:22,fontWeight:'bold',padding:10}}>{item.categoryname.toUpperCase()}</div>
      </div>
       
  )

 })
 )
}

const showOffers=()=>{
  return(((item)=>{
   return(
       
        <div>
        
       
          <Paper elevation={3} className={classes.paperstyle}>
            <div className={classes.imageview}>
        <img src={`${ServerURL}/images/${item.icon}`} width="150" />
            </div>
       <div style={{fontSize:18,fontWeight:'bold',padding:10}}>
         {item.subcategoryname.length<=20?item.subcategoryname.toUpperCase():item.subcategoryname.toUpperCase().substring(0,18)+"..."}
         </div>
       <div style={{fontSize:16,padding:10}}>

        Day Price:Price<s>&#8377; {item.rentamt}</s> <span><b>	&#8377; {item.offer} </b></span>

       </div>
       <div style={{fontSize:18,padding:10}}>
       <span style={{color:'greenyellow'}}><b>You Save</b></span><b>	&#8377; {item.rentamt-item.offer} </b>
       </div>
       </Paper>
      </div>
       
   )
 
  })
  )
 }

 const showAllCategoryfour=()=>{
  return(((item)=>{
   return(
       <div style={{
        // border:'1px solid #ecf0f1',
         width:250,
         justifyContent:'center',
         alignItems:'center',
         display:'flex',
         flexDirection:'column',
         padding:10,
         margin:5,
         }}
         >
         <Paper elevation={3} className={classes.paperstyle} >
            <div className={classes.imageview}>
        <img src={`${ServerURL}/images/${item.picture}`} width="150" />
            </div>

        <div style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
       <div style={{fontSize:18,fontWeight:'bold',padding:10}}>{item.gamename.toUpperCase()}</div>
       <div style={{fontSize:16,padding:10}}>

        Day Price:Price<s>&#8377; {item.rentamt}</s> <span><b>	&#8377; {item.offer} </b></span>

       </div>
       <div style={{fontSize:18,padding:10}}>
       <span style={{color:'greenyellow'}}><b>You Save</b></span><b>	&#8377; {item.rentamt-item.offer} </b>
       </div>
      </div>
      </Paper>
       </div>
      )
    })
  )
}
 
const showOffersfive=()=>{
  return(((item)=>{
   return(
       <div style={{
        // border:'1px solid #ecf0f1',
         width:250,
         justifyContent:'center',
         alignItems:'center',
         display:'flex',
         flexDirection:'column',
         padding:10,
         margin:5,
         }}
         >
         <Paper elevation={3} className={classes.paperstyle} >
            <div className={classes.imageview}>
        <img src={`${ServerURL}/images/${item.picture}`} width="150" />
            </div>

        <div style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
       <div style={{fontSize:18,fontWeight:'bold',padding:10}}>{item.accessoryname.toUpperCase()}</div>
       <div style={{fontSize:16,padding:10}}>

        Day Price:Price<s>&#8377; {item.rentamt}</s> <span><b>	&#8377; {item.offer} </b></span>

       </div>
       <div style={{fontSize:18,padding:10}}>
       <span style={{color:'greenyellow'}}><b>You Save</b></span><b>	&#8377; {item.rentamt-item.offer} </b>
       </div>
      </div>
      </Paper>
       </div>
     )
   })
  )
 }


useEffect(function(){
fetchAllCategory()
fetchAllSubCategoryOffers()
fetchAllCategorythree()
fetchAllCategoryfour()
},[])

  return(<div>
  <Header history={props.history}/>
  <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

  <div style={{width:"100%"}}>
    <Slider {...settings}>{showSlider()}</Slider>
  </div>
  </div>

  <div>
    <DrivingInterface /> 
  </div>

   <div className={classes.root}>
     <div style={{display:'flex',flexDirection:'column'}}>
     <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
   Become a Rated Driving Partner 
   </div>
   <Divider style={{marginTop:5,marginBottom:5}} />
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
    Join over 250 instructors growing their business with 
   Rated Driving 
    </div>
  

   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
    Why Partner with Rated Driving ? 
    
   </div>
   <Divider style={{marginTop:5,marginBottom:5}} />

   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
       {showCategories()}
       We're not a franchise :
       You run your business you set your prices and there are no joining fees, weekly fees contracts or minimum commitments.
   </div>
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
      More Learners :
      Flexible diaty filling. join a well oiled marketing machine and take on as many
      or as few learner jobs as you like.
   </div>
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
    Start Fast : We aim to match you with an learner within 24 hours and get you on the 
    road within 7 days.
   </div>
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
      Make life easier : Organises learners paying upfront. Learners remain organised and pay upfront
      for their lessons via Rated Driving App.
   </div>
   </div>

   <div style={{display:'flex',flexDirection:'column'}}>
   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",alignItems:'center',padding:10}}>
    Simple, Transparent, Secure 
   </div>

   <Divider style={{marginTop:5,marginBottom:5}} />

   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
   Free for Instructors : Unlike franchise, Rated Driving don't charge a weekly fee and unlike 
   lead providers, you pay nothing for the learner jobs we send you.
   </div>

   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
   Deposits on Enquiry : Any learners we introduce you to will have paid a deposit.
   This means the money is guaranteed and calcellations are rare.
   </div>

   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
   Secure Payment : Unlike franchise, Rated Driving don't charge a weekly fee and unlike 
   lead providers, you pay nothing for the learner jobs we send you.
   </div>

   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
    Payment in Advanced : Thanks to our custom-built app and company policy, learners pays
    for their lessons in advance. This means low cancellations and no problems with money.
   </div>

   <div style={{width:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
   <IconButton className={classes.arrowstyle} style={{background:'#1e6b7b',position:'absolute',zIndex:1,left:5,opacity:0.5}} >
     <ArrowBackIosIcon style={{color:'#FFF',fontSize:'large'}} />
   </IconButton>
   <div style={{width:"98%"}}>
    <Slider {...itemsettings}>{showOffers()}</Slider>
  </div>
  <IconButton className={classes.arrowstyle} style={{background:'#1e6b7b',position:'absolute',zIndex:1,right:5,opacity:0.5}} >
     <ArrowForwardIosIcon style={{color:'#FFF',fontSize:'large'}} />
   </IconButton>
  </div>

   {/* <div  style={{display:'flex',flexDirection:'row', flexWrap:'wrap', alignItems:'center',justifyContent:'center',marginTop:'5'}}>
       {//showOffers()}
  </div>*/}
   </div>
   <Divider style={{marginTop:5,marginBottom:5}} />
   <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{ fontSize:22,fontWeight:700,letterSpacing:2,padding:20 }}>
     Latest Fee Structure 
    </div>
   </Grid>

   <Divider style={{marginTop:5,marginBottom:5}} />
   <Grid item xs={12}>
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
       Transaction Fee   5%
    </div>
     </Grid>
     <Divider style={{marginTop:5,marginBottom:5}} />
     <Grid item xs={12}>
     <div  style={{display:'flex',flexDirection:'column',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
       Payment Processing Fee   2.5%
    </div>
     </Grid>

     <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
     When a driving lesson is purchased by a learner we provide,
     there's a small commission and a standard payment processing fee.
   </div>

     <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button   variant="contained" color="secondary"> Join now </Button>
   </Grid>

   <Divider style={{marginTop:5,marginBottom:5}} />

   <div style={{display:'flex',flexDirection:'column'}}>
   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
    We're not a franchise 
   </div>
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
      set up profile, cover the areas you want to work and 
      receive learners from. Set your own prices and take total 
      control of your business with the aid of our latest technology.
      We are a partner the instructor can count on.
    1.  select the areas you want to get learners from
     2. set your own proces and Offers
     3. A parther You can count on

   </div>
   <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button   variant="contained" color="secondary"> Join now </Button>
   </Grid>


   <Divider style={{marginTop:5,marginBottom:5}} />
   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
    Make life easier
   </div>
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
    Manage your diary on the go with powerful diary management tools.
    Push notifications and reminders for both yo and the learner to ensure 
    minimal cancellations. Take payments from learners anytime with our 
    integrated payment system.
    1. Manage your learners on the go.
    2. Instant message learners
    3.Take payments from learners.

   </div>
   <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button   variant="contained" color="secondary"> Join now </Button>
   </Grid>

   <Divider style={{marginTop:5,marginBottom:5}} />
   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
    More Learners 
   </div>
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5'}}>
   We are always advertising and bringing in new learner jobs.
   If you want them they're available on our job board, if you're fully booked
   then no problem - there's no minimum commitment.
   1. Apply for jobs on our job board for free.
   2. Hourly and intensive learners.
   3. No minimum commitments.
   4. No lead costs.

   </div>
   <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button   variant="contained" color="secondary"> Join now </Button>
   </Grid>

   <Divider style={{marginTop:5,marginBottom:5}} />
   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
    We make running a busy driving school easy. 
   </div>

   <Divider style={{marginTop:5,marginBottom:5}} />
   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:'center',alignItems:'center',padding:10}}>
    How it Works 
   </div>
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>

   1. Set up 
   2. Match.
   3. Paid.
   4. Tech.

   </div>
   <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button   variant="contained" color="secondary"> Join now </Button>
   </Grid>

   <Divider style={{marginTop:5,marginBottom:5}} />
   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
    We get Instructors 
   </div>
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
     But don't take our word for it, see what our customers have to say...
   </div>

   <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
    Excellent **** based on 300+ reviews 
   </div>

   <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button   variant="contained" color="secondary"> Join now </Button>
   </Grid>
   
   <Divider style={{marginTop:5,marginBottom:5}} />
   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
    Grow and support your business  
   </div>
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
     Contact us 
   </div>

   <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
    Partner success tools 
   </div>

   <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
    Reach more learners 
   </div>


   <div style={{width:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
   <IconButton className={classes.arrowstyle} style={{background:'#1e6b7b',position:'absolute',zIndex:1,left:5,opacity:0.5}} >
     <ArrowBackIosIcon style={{color:'#FFF',fontSize:'large'}} />
   </IconButton>

   <div style={{width:"98%"}}>
    <Slider {...itemsettings}>{showOffers()}</Slider>
  </div>

      
       <IconButton className={classes.arrowstyle} style={{background:'#1e6b7b',position:'absolute',zIndex:1,right:5,opacity:0.5}} >
     <ArrowForwardIosIcon style={{color:'#FFF',fontSize:'large'}} />
   </IconButton>
   </div>
  </div>


  </div>
   <Footer />
  </div>)



}