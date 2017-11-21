---
id: 130
title: Megatron Now Fields Requests
date: 2008-01-20T09:03:00+00:00
author: Admin
layout: post
guid: http://kwur.com/?p=130
permalink: /megatron-now-fields-requests/
blogger_blog:
  - blog.kwur.com
blogger_author:
  - ohttp://www.blogger.com/profile/07355004541669862952noreply@blogger.com
blogger_permalink:
  - /2008/01/megatron-now-fields-requests.html
categories:
  - Uncategorized
---
<div class="pf-content">
  <p>
    Hello KWUR, from Hawaii. Thats right, my dark blood still courses through KWUR, and after hearing the robot play one too many buzzkill tracks while sitting in my office in Honolulu, I wrote a request feature. Right now, its only scheduled during safe harbour hours on the weekends (it will still remember your requests, but it will not play them except during these times, this could be easily changed.) Here&#8217;s how it works!
  </p>
  
  <p>
    Windows:<br />1) Start/Run telnet<br />2) Connect to kwurmail.wustl.edu, port 10102
  </p>
  
  <p>
    GNU/Linux and Mac OS X:<br />1) Open Terminal<br />2) type:<br />telnet kwurmail.wustl.edu 10102
  </p>
  
  <p>
    3) Type the following:<br />request<br />something to search by<br />.<br />4) Be sure to press enter after the period. The robot will list all tracks matching your search with numbers in << >>. Find the track you want and remember its number. You will be disconnected from the robot, that is proper behaviour.<br />5) Connect to kwurmail.wustl.edu, port 10102 again<br />6) Type the following:<br />request<br />something to search by<br />that number<br />7) Be sure to type the search stuff exactly the same and press enter after you type in the number
  </p>
  
  <p>
    Example robotic dialogue:<br />[connect]<br />request<br />nwa<br />.<br />LOTS AND LOTS OF TRACKS<br />[disconnect]<br />[connect]<br />request<br />nwa<br />10<br />SUCCESS<br />[disconnect]
  </p>
  
  <p>
    If it works, it will tell you that this track has been queued. Moreso, it will properly display in the Playlist Tracker as a requested track when it plays. Love it!
  </p>
  
  <p>
    pz!<br />-k
  </p>
</div>