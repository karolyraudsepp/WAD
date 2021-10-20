function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

   $(function() {
     //$.get("https://api.npoint.io/3427eb5cc1f62b180ff2", function(posts) {
      $.get("JSON/posts.json", function(posts) {

        for (post of posts) {

            let div = $('<div class= "name">');
            let title = $('<h1 class= "mdea">').text(post.name);
            let body = $('<p>').text(post.body);

            div.append('<img src="'+post.picture+'" style="width: 100%;" />');
            div.append(title);
            div.append(body);

            let span = $('<span>')
            span.append('<img src="Pictures/dislike.png" alt="Dislike icon" style="width: 10%;" />')
            div.append('<img src="Pictures/like.png" alt="Like icon" style="width: 10%;" />')
            div.append(span)

            let container = $('<div class = "container2">');
            container.append(div);
            
            let profile = $('<div class = "profile">');
            profile.append(container);
            
            $(".for_background").append(profile);
            }
        })
    });