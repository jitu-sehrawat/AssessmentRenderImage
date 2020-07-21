Title – Create a simple adserver

Description – Create a simple adserver and an adscript which can be pasted on HTML
websites to invoke the adserver and render ads

Example ad script –

<div id='some_random_id'>;
  <script type='text/javascript'; src="<your-ad-server>/render/getJS";>
  </script>;
</div>;


When this above HTML tag is pasted on a webpage, it should send a request to your ad
server and fetch a javascript snippet. That javascript snippet should call an API on your ad
server to fetch an image. That image should then be inserted inside the div with id given
above.