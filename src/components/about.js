import React from 'react'

export default function About(props) {

//   const[mystyle,setmystyle] = useState({
//     color:'black',
//     backgroundColor:'white'
//   });

//   const[btntext,setbtntext] = useState('enable dark mode');

//   let toggle =()=>{
//     if(mystyle.color === 'black'){
//         setmystyle({
//             color:'white',
//             backgroundColor:'black',
//             border:'1px solid white'
//         })
//         setbtntext('enable light mode');
//     }
//     else{
//         setmystyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         setbtntext('enable dark mode');
//     }
//   }

  return (
    <>
      <div className="container bootstrap snippets bootdey my-5" >{/*style={mystyle}*/}
<section id="services" className="current" style={{color: props.pmode==='dark'?'white':'black'}}>
    <div className="services-top">
        <div className="container bootstrap snippets bootdey">
            <div className="row text-center">
                <div className="col-sm-12 col-md-12 col-md-12">
                    <h2>What We Offer</h2>
                    <h2>Our Services</h2>
                    <p>Our <span className="highlight">experienced</span> and <span className="highlight">dedicated</span> staff provide these services with a smile.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-offset-1 col-sm-12 col-md-12 col-md-10">
                    <div className="services-list">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block">
                                    <div className="ico fa fa-magic highlight"></div>
                                    <div className="text-block">
                                        <div className="name">Web Design</div>
                                        <div className="info">Beauty and function</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block">
                                    <div className="ico fa fa-code highlight"></div>
                                    <div className="text-block">
                                        <div className="name">Development/Coding</div>
                                        <div className="info">Quality code that lasts</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block">
                                    <div className="ico fa fa-pencil highlight"></div>
                                    <div className="text-block">
                                        <div className="name">Copy Writing</div>
                                        <div className="info">Words that tell your story</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block">
                                    <div className="ico fa fa-bullhorn highlight"></div>
                                    <div className="text-block">
                                        <div className="name">SEO/PPCM</div>
                                        <div className="info">Converting users to customers</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block">
                                    <div className="ico fa fa-eye highlight"></div>
                                    <div className="text-block">
                                        <div className="name">Branding/Identity</div>
                                        <div className="info">Leave a lasting impression</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block" >
                                    <div className="ico fa fa-umbrella highlight"></div>
                                    <div className="text-block">
                                        <div className="name">Strategy/Planning</div>
                                        <div className="info">Thinking beyond tomorrow</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div>
    {/* <button className='btn btn-primary my-4' onClick={toggle}>{btntext}</button> */}
</div>
</div>

    </>
  )
}
