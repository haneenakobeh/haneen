import React, { useState, useEffect } from 'react';
import './ProfileMenu.css';

import { FcHome } from "react-icons/fc";//for buttons
import { FcBusinessman } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcPlanner } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { IoIosNotifications } from "react-icons/io";
import { FcSettings } from "react-icons/fc";


const ProfileMenu = () => {
  const [followersCount, setFollowersCount] = useState('2.5k');
  const [followingCount, setFollowingCount] = useState('356');
  const [postsCount, setPostsCount] = useState('256');
  const [coverPhoto, setCoverPhoto] = useState('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg');
  const [profilePhoto, setProfilePhoto] = useState('https://i.pinimg.com/564x/48/3f/31/483f31f66af1cdfa36768d5633b2d834.jpg');
  const [bio, setBio] = useState('Id love to change the word,but they wont give me the source code');
  const [username, setUsername] = useState('Sam Lanson');
  const [employmentStatus, setEmploymentStatus] = useState('Web Developer at webestica');

  useEffect(() => { //fetch the number of post,following,followers from the server 
    const fetchData = async () => {
      try {
        
        const followersResponse = await fetch('https://api.github.com/user/followers');//API for followers
        const followersData = await followersResponse.json();//find the followers
        setFollowersCount(followersData.followersCount);//find the count

        const followingResponse = await fetch(' https://api.github.com/user/following');
        const followingData = await followingResponse.json();
        setFollowingCount(followingData.followingCount);

        const postsResponse = await fetch(' https://api.github.com/user/posts');
        const postsData = await postsResponse.json();
        setPostsCount(postsData.postsCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  

  return (
    <div className="container">
    <div class="row g-4">
      <div class="col-lg-3">
      <div className="profile-menu d-block px-2 px-lg-0">
      <div className="cover-photo" style={{ backgroundImage: `url(${coverPhoto})` }}></div>

      <div className="profile-details pt-0">
      <div className="profilePhoto profilePhoto-lg mt-n5 mb-3" style={{ backgroundImage: `url(${profilePhoto})` }}>
        <a href="p"><img className="profile-img border-3" src="" alt=""></img></a>
      </div>
        <div className="user-details">
          <div h3 className="username">{username}</div>
          <div p className="eStatus" >{employmentStatus}</div>
          <div p className="bio"> {bio} </div>
        </div>
        
        <div className="stats">
        
          <div className="stat1"> 
          <div className="count">{postsCount}</div> 
          <p>Posts</p>
          </div>

          <div className="stat2">
          <div className="count">{followingCount}</div> 
          <p> Following</p> 
          </div>

          <div className="stat3"> 
          <div className="count">{followersCount}</div> 
          <p>Followers</p> 
          </div>

        </div>
      </div>

      <div className="buttons">
        
        
        <div button className="button" href=""><FcHome siza='15px' /> Feed</div>
        <div button className="button"><FcBusinessman siza='15px'/> Connections</div>
        <div button className="button"><FcGlobe siza='15px'/> Latest News</div>
        <div button className="button"><FcPlanner siza='15px'/> Events</div>
        <div button className="button"><FcSms siza='15px'/> Groups</div>
        <div button className="button"><IoIosNotifications color ='yellow' border ='black' siza='15px' /> Notifications</div>
        <div button className="button"><FcSettings siza='15px' /> Settings</div>
        
      </div>
      
      <div className="viewProfile">
      <a className="buttonn" href=" ">view profile</a>
      </div>
      </div>
      </div>
    </div>
    <ul className="more">
  <li className ="acssess"><a className="accessButton" href=" ">About</a> </li>
  <li className ="acssess"><a className="accessButton" href=" ">Settings</a></li>
  <li className ="acssess"><a className="accessButton" href=" ">Support</a> </li>
  <li className ="acssess"><a className="accessButton" href=" ">Docs</a> </li>
  <li className ="acssess"><a className="accessButton" href=" ">Help</a> </li>
  <li className ="acssess"><a className="accessButton" href=" ">Privacy & terms</a></li>
  <li className ="acssess"><a className="accessButton" href=" ">©2023 Webestica</a>
</li>
</ul>
      </div>
    
  

  );
};


export default ProfileMenu;
