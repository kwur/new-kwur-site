---
id: 117
title: 'KWUR technology report end of &#8217;07'
date: 2007-12-27T04:31:00+00:00
author: shanks
layout: post
guid: http://kwur.com/?p=117
permalink: /kwur-technology-report-end-of-07/
blogger_blog:
  - blog.kwur.com
blogger_author:
  - shanksnoreply@blogger.com
blogger_permalink:
  - /2007/12/kwur-technology-report-end-of-07.html
categories:
  - 2007 report
  - megatron
  - tech
---
<div class="pf-content">
  <p>
    Happy holidays from the kwur tech and Unicron! Say hello Mr. Robot Man!
  </p>
  
  <p>
    <a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00003-701969.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00003-701950.jpg" alt="" border="0" /></a>
  </p>
  
  <p>
    <a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00002-701887.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00002-701868.jpg" alt="" border="0" /></a><br /><a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00001-735595.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00001-735558.jpg" alt="" border="0" /></a><br /><a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/crash-735495.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/crash-734993.jpg" alt="" border="0" /></a>Yikes! It just vomited crash output on us! What a hueg metal monster to fear indeed!
  </p>
  
  <p>
    We would also like to emphasize Unicron&#8217;s fashionable custom rack mount that look so sexy, thanks to Pat Harkins in the mech shop:
  </p>
  
  <p>
    <a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00006-719057.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00006-719030.jpg" alt="" border="0" /></a><br /><a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00008-719174.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00008-719146.jpg" alt="" border="0" /></a>
  </p>
  
  <p>
    2007 has been a big year for the technology of the station. Since Unicron&#8217;s rise the technology use in KWUR has continued to improve, as long as things weren&#8217;t breaking&#8230;
  </p>
  
  <p>
    <a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00030-757034.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00030-757003.jpg" alt="" border="0" /></a><br />Uhh, where&#8217;s the air studio mainframe? (NOTE: we insist it should be called a &#8220;console,&#8221; but the clowns who make the thing call it a &#8220;mainframe&#8221;)
  </p>
  
  <p>
    Okay, truth time: the air studio CONSOLE is currently with its manufacturer, since a Zylink chip on it fried right before winter break, which made the first six channels on the console *freak* out. We suspect this chip was the reason the console was shocking people &#8211; okay just kidding, but not really ;). However, in spite of this, we quickly hacked together a temporary air studio in the listening room! The procedure got a little silly at points, but here&#8217;s basically what went down:
  </p>
  
  <p>
    We realized we needed to plug in our sound card&#8217;s analog source adapter, since our replacement mixer did not have a digital in/out. However, the mixer can plug into our plethora of analog channels. But before that, we had the wonderful experience of learning that a recessed server chassis can block anything with a width greater than a serial plug from attaching to the PCI card closest to the wall of the box. Thus, we powered down the server, and swapped the monitor and sound cards. Ironically, even the VGA plug was too wide and so we did some hacking (literally) to make the VGA plug fit properly (below). But, even with the &#8220;adjustments&#8221;, the plug still didn&#8217;t fit right, and would disconnect the monitor if not fastened (d&#8217;oh!). However, we found a screw to hold in the VGA plug, but this partial connection makes the monitor produce images that &#8220;&#8230;I can only describe as the most extraordinary display of blue objects.&#8221; Kidding! It works fine ;).
  </p>
  
  <p>
    <a href="http://www.moviequotes.com/fullquote.cgi?qnum=81172" id="gridQuotesList_ctl20_anchQuote"></a><a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00004-702641.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00004-702621.jpg" alt="" border="0" /></a><br />Actual monitor output is really imporant for us to have since we&#8217;re running the 2.6.24rc6 linux kernel and the RAID driver keeps crashing on us (see earlier crash output picture). Normally we wouldn&#8217;t care, but when the server locks up, we have to take those ever important screen shots (in this case, literally!) of the crash output to send to our esteemed Stex driver developer, Mr. Jens. For those of you also having issues with the Stex driver &#8211; if you&#8217;re using a two CPU machine, switching to one CPU may help to alleviate crashes, but since we were just advised to do this the other day, the improvement in stability has yet to be declared.
  </p>
  
  <p>
    However, after rigging the analog out of the robot to a channel in on our temporary mixer and rigging the monitor out on the mixer back to the robot (for archival and web broadcasting), our listening room effectively became an air studio! Here are a couple pictures of <a href="http://newsworthyghost.wordpress.com/">Newsworthy Ghost Island</a> doing what they do best in the hacked air studio:
  </p>
  
  <p>
    <a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00023-799460.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00023-799445.jpg" alt="" border="0" /></a>The whole gang:<br /><a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00019-757126.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00019-757099.jpg" alt="" border="0" /></a><br />And here&#8217;s Alex with a vinyl copy of the Cool Runnings soundtrack, which apparently features Hans Zimmer.
  </p>
  
  <p>
    <a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00027-799589.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00027-799558.jpg" alt="" border="0" /></a><br />We expect to get the air studio &#8220;mainframe&#8221; back at the end of break, and then KWUR will be back at 100% functionality, along with a newly trained Audio Service Director, right Tara?
  </p>
  
  <p>
    ~~~~~~~~~~~~~~~~~~~~~~~~~
  </p>
  
  <p>
    The <a href="http://sourceforge.net/projects/megatrond">megatron project</a> just had its first package release! Since KWUR is all about community, and Carl Sagan emphasizes the global community as ever important to our future, we are developing this project to enable quick radio station assembly as long as you have a computer and an internet connection. As advocates of free speech and global causes, we feel the megatron project assists in giving a voice to those around the world who have little means, but the most to say. So please, download, install and test our software! You may not need all the functionality it offers, but it is essentially a radio station in tarball :). If you&#8217;re planning on building a system from scratch to test, we recommend <a href="http://vectorlinux.com/">Vector Linux</a> as the OS of choice, since it&#8217;s stability and minimalistic nature can&#8217;t be beat!
  </p>
  
  <p>
    One amazing aspect to Megatron is that you can have megatrons connect to each other over the internet to forward a broadcast and increase the scope of a currently running broadcast. Now that&#8217;s free speech! All powered by free software!
  </p>
  
  <p>
    ~~~~~~~~~~~~~~
  </p>
  
  <p>
    Getting things done. Lots of work is going into the megatrond project these days, and we&#8217;re excited to continually improve it. While the latter process mostly invovles code, as you saw earlier in this post, we sometimes have to do some handiwork to get things assembled the way we want. We did some welding tonight, but it was raining and we don&#8217;t have access to mechanical engineering facilities during break. Thus we improvised a little&#8230;
  </p>
  
  <p>
    Here is our intrepid metalsmith, Kevin, who will be missed as he transitions from kicking ass on the internet, to kicking ass in Physics.
  </p>
  
  <p>
    <a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00003-702435.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00003-701967.jpg" alt="" border="0" /></a><br />and here he is welding under a tarp we hung off a fence and a light&#8230;
  </p>
  
  <p>
    <a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00013-702543.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00013-702513.jpg" alt="" border="0" /></a>Be careful! Or someone might call the cops on you!
  </p>
  
  <p>
    <a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00014-740398.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00014-740351.jpg" alt="" border="0" /></a><br /><a onblur="try {parent.deselectBloggerImageGracefully();} catch(e) {}" href="http://www.kwur.com/blog/uploaded_images/00018-742057.jpg"><img style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" src="http://www.kwur.com/blog/uploaded_images/00018-742032.jpg" alt="" border="0" /></a><br />The goals for the upcoming semester are on the <a href="http://sourceforge.net/tracker/?group_id=185860&atid=914968">feature request tracker of the megatrond project</a>, but we will also be organizing a lot of the technology equipment around the station, from the tool cabinet to the schmeg room. We will also be using our mind bullets to fight Murphy&#8217;s law and &#8220;the curse of things breaking when we least want them to.&#8221; This spring, we&#8217;ll be kicking ass and chewing bubble gum, but we&#8217;re all outta gum.
  </p>
  
  <p>
    Well, this concludes the tech report for the end of 2007. See you next year!<br /><span style="font-size:85%;"><tt></tt></span>
  </p>
</div>