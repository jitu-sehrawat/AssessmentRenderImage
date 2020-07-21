module.exports = { fetchJs, fetchImage };

async function fetchJs (req, res) {
  try {
    //
    // We can check the req obj for body or params value that we needs in this route before
    // proceeding down the code
    //
    console.log('LOGING fetchJs');

    res.send(`(function () {
      var request = new XMLHttpRequest()
      request.open('GET', 'http://localhost:3000/render/getImage', true)
      request.onload = function () {
        var data = JSON.parse(this.response)
        if (data) {
          var elem = document.createElement("img");
          elem.src = data.imageURL;
          document.getElementById("some_random_id").appendChild(elem);
        } else {
          console.log('error')
        }
      }
      request.send()
    }())`);
  } catch (error) {
    res.send(`Error from fetchJs`);
  }
}

async function fetchImage (req, res) {
  try {
    //
    // We can check the req obj for body or params value that we needs in this route before
    // proceeding down the code
    //

    console.log('LOGING fetchImage');
    res.json({
      divId: `some_random_id`,
      imageURL: `https://via.placeholder.com/728x90`
    });
  } catch (error) {
    res.send(`Error from fetchJs`);
  }
}
